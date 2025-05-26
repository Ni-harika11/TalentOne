import 'next-auth'

declare module 'next-auth'{
    interface user{
        _id?:string,
        isVerified:boolean,
        isAcceptingMessages?:boolean;
        username?:string
    }
}