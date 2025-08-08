import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
} 

interface MongooseCache {
    connection: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: MongooseCache;
}

let cached = global.mongoose as MongooseCache;

// without caching, each invocation could create a new database connection
// leading to resource exhaustion
if (!cached) {
    cached = global.mongoose = { connection: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'stack-overflow',
        }).then((result) => {
            console.log('MongoDB connected:', result.connection.host);
            return result;
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
            throw error;
        });
    }

    cached.connection = await cached.promise;
    return cached.connection;
};

export default dbConnect;