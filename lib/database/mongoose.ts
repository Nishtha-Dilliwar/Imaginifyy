import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn : Mongoose | null ;
    promise : Promise<Mongoose> | null;
}

declare global {
    var mongoose: MongooseConnection | undefined;
  }

let cached: MongooseConnection = globalThis.mongoose || { conn: null, promise: null };
globalThis.mongoose = cached;

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Misiing MONGODB_URL');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {dbName:'Imaginify', bufferCommands:false})

    cached.conn = await cached.promise;

    return cached.conn;
}
