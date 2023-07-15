// src/utils/gridfsStorage.ts

import { GridFSBucket, MongoClient, ObjectId } from "mongodb";
import { Readable } from 'stream';
import { configDotenv } from 'dotenv';

configDotenv();
const connectionURL = process.env.MONGO_URL || 'default-mongo-url';
const dbName = process.env.DB_NAME;

let gridFSBucket: GridFSBucket;

(async () => {
  const client = new MongoClient(connectionURL);
  
  await client.connect();
  const db = client.db(dbName);
  gridFSBucket = new GridFSBucket(db);
})();

export const uploadFile = async (fileStream: Readable, filename: string): Promise<ObjectId> => {
  return new Promise((resolve, reject) => {
    const uploadStream = gridFSBucket.openUploadStream(filename);
    fileStream.pipe(uploadStream)
      .on('error', (error: any) => reject(error))
      .on('finish', () => resolve(uploadStream.id));
  });
};

export const getFileStream = (fileId: ObjectId): Readable => {
  const downloadStream = gridFSBucket.openDownloadStream(fileId);
  return downloadStream;
};
