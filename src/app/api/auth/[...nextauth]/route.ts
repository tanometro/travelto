import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                name: { label: "name", type: "name", placeholder: "name.." },
                email: { label: "email", type: "email", placeholder: "abc123@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                /* const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "aplication/json" },
                    }
                );
                
                const user = await res.json();
                if (user.error) throw user;
                 */
                const user = {
                    name: credentials?.name,
                    email: credentials?.email,
                    password: credentials?.password,
                }

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            return { ...token, ...user }
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
});

export { handler as GET, handler as POST };