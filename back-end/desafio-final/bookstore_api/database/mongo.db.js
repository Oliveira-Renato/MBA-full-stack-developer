import mongodb from 'mongodb'
import dotenv from 'dotenv';
dotenv.config();

function getClient() {
  const uri = dbkey
  return new mongodb.MongoClient(uri)
}

export { getClient }