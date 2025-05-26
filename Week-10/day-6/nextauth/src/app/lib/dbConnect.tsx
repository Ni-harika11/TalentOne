import mongoose from "mongoose"
type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject={}

async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Alredy connected to databases")
        return
    }
    try{
        const db=await mongoose.connect(process.env.MONGODB_URL ||'', {})
        connection.isConnected=db.connections[0]
        .readyState
         // readyState:
        // 0 = disconnected
        // 1 = connected
        // 2 = connecting
        // 3 = disconnecting
        console.log("db connected succesfully")
    }catch(error){
        console.log("db connections failed")
        process.exit(1)
    }
}
export default dbConnect;