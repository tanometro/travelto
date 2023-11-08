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
        async signIn({ user, account, profile, credentials }) {
            //inicio de secion
            const { id, name, image, email } = user;
            console.log("sigin");
            console.log(user);


            //verifico los datos devueltos por google
            if (!user.name || !user.email) {
                return false;
            }
            if (account?.type === "oauth") {
                const newUser = await userLogin({ email, password: id });
                if (newUser.error) {
                    //mando al registro
                    return false;
                }
                if (newUser.rol) {
                    return true;
                }

            }


            /* const fullName = user.name?.split('', 2);
            const firstName = fullName[0];
            const lastName = fullName[1];

            console.log("user");

            console.log(user);


            if (newUser.error) {
                try {
                    let newUser = await createUser({
                        name: firstName,
                        lastName: lastName,
                        dni: "39062218",
                        image: "https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg",
                        email: "rblazquez111@gmail.com",
                        password: id,
                        
                    })
                    console.log(newUser);

                } catch (error) {

                }
            }
 */
            return true;

        },
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            return { ...token, ...user }
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            console.log("aqui esta session");
            console.log(token);

            if (token.email) {
                session.user = token;
                return session;
            }
            throw new Error("no autorizado")


        }
    },
    pages: {
        signIn: "/login",
    }
});

export { handler as GET, handler as POST };