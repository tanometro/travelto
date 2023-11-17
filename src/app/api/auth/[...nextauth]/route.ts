import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/src/requests/postLoginUser";
import { error } from "console";
import { Session } from "inspector";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code"
                }
            }
        }),
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "abc123@example.com" },
                password: { label: "Password", type: "password" }
            },
            //authorize(credentials, req) {
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                try {
                    const user = await userLogin(credentials);
                    return user;

                } catch (error) {
                    throw new Error("Error en la solicitud de autenticación")
                }

            },
        }),

    ],
    callbacks: {
        async signIn({ user, account }) {
            //inicio
            const { id, email } = user;

            //verifico los datos devueltos por google
            if (!user.name || !user.email) {
                return false;
            }
            if (account?.type === "oauth") {
                try {
                    await userLogin({ email, googlePass: id });
                    return true;

                } catch (error) {
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            return { ...token, ...user }
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            //aca agrego datos
            if (token.email && token.sub) {
                try {
                    const newUser = await userLogin({ email: token.email, googlePass: token.id });
                    token.picture = newUser.picture;
                    session.user = { ...token, name: newUser.name, email: newUser.email, picture: newUser.picture, role: newUser.roleID, token: newUser.token };

                    return session;
                } catch (error) {
                    throw new Error("Usuario no autorizado");
                }
            }
            session.user = <{ name: string; email: string; picture: string; token: string; role: number; }>token;

            return session;
        },

    },
    pages: {
        signIn: "/login",
        error: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",

    }
});

export { handler as GET, handler as POST };