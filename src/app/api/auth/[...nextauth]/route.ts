import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "848132893828-7m4g41vasl36j41suliv7s2vp7hqot52.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ]
});

export { handler as GET, handler as POST };