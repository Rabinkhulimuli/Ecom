import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
declare module "next-auth" {
    interface JWT {
      id: string;
    }
    interface Session {
        user: {
          id: string; // Add `id` here
          name?: string | null;
          email?: string | null;
          image?: string | null;
        };
      }
  }
const handler = NextAuth({
    providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT!,
        clientSecret:process.env.GOOGLE_SECRET!
    })
],
pages:{
    signIn:"/login"
},
secret:process.env.NEXTAUTH_SECRET,
session:{
    strategy:"jwt"
},
callbacks:{
    async jwt({account,token,user}){
        if(account){
            token.id=user.id as string
        }
        
        return token
    },
    async session({session,token}){
        if(session?.user){
            session.user.id=token.id as string
        }
        return session
    }
}
})

export { handler as GET, handler as POST }