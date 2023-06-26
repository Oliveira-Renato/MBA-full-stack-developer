import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

async function connect() {
  const uri = process.env.MONGO_DB
  return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

export { connect }