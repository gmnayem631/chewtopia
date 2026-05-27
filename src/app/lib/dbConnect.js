import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.URI;

if (!uri) {
  throw new Error('Missing environment variable: "URI"');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const clientPromise = client.connect();

export const connect = async (collection) => {
  const connectedClient = await clientPromise;
  // const database = process.env.DB_NAME;
  // return client.db(database).collection(collection);
  return connectedClient.db(process.env.DB_NAME).collection(collection);
};
