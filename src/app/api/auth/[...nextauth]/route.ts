import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/src/requests/postLoginUser";
import createUser from "@/src/requests/postUser";
import { NextResponse } from "next/server";
import { json } from "node:stream/consumers";

const handler = NextAuth({

    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code",
                    //paso parametros
                    custom_param1: "value1",
                },
            }
        }),
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "abc123@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = await userLogin(credentials);

                if (user.error) {
                    throw new Error(user.error)
                };
                return user;

            },

        }),

    ],
    callbacks: {
        async signIn({ user, account }) {
            //inicio de secion
            const { id, name, image, email } = user;

            //verifico los datos devueltos por google
            if (!user.name || !user.email) {
                return false;
            }
            if (account?.type === "oauth") {

                const res = await userLogin({ email, googlePass: id });
                if (res.error) return false;
                return true;
            }
            return true;
        },

        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            console.log("aqui esta session");
            //console.log(token);
            console.log(user);


            //aca agrego datos
            if (token.email && token.sub) {
                try {
                    const newUser = await userLogin({ email: token.email, googlePass: token.id });
                    session.user = { ...token, roleID: newUser.roleID, token: newUser.token };
                    console.log(session.user);
                    return session;
                } catch (error) {
                    throw new Error("no autorizado")
                }
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
});

export { handler as GET, handler as POST };