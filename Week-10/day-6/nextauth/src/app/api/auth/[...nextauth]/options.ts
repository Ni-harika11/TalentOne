import { NextAuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/models/User";


export const authOptions:NextAuthOptions={
    providers:[
        CredentialProvider(
            {
                id: "credentials",
                name: "Credentials",
                credentials: {
                    username: { label: "Email", type: "text", placeholder: "jsmith" },
                    password: { label: "Password", type: "password" }
                  },
                  async authorize(credentials:any):Promise<any>{
                    await dbConnect()
                    try{
                        const user=await UserModel.findOne({
                            $or:[
                                {email:credentials.identifier},
                                {username:credentials.identifier}
                            ]
                        })
                        if(!user){
                            throw new Error("Nouser found with this email")
                        }
                        if(!user.isVerified){
                            throw new Error("please verify your account before login")
                        }
                        const isPasswordCorrect=await bcrypt.compare(credentials.password,user.password)
                        if(isPasswordCorrect){
                            return user
                        }else{
                            throw new Error('Incrrect passowrd')
                        }
                    }catch(err:any){
                        throw new Error(err)
                    }
                  }
            }
        )
    ],
    callbacks:{
        async   session({session,user,token}:any) {
           
            return session
          
        },
        async jwt({token,user}) {
            if(user){
                token._id=user._id?.toString()
                token.isVerified=user.isVerified;
                token.isAcceptingMessages:user.isAccept
            }
            return token
            
        },
    },
    pages:{
        signIn:'/sign-in'
    },
    session:{
        strategy:'jwt'
    },
    secret:'process.env.NEXTAUTH_SECRET',


}