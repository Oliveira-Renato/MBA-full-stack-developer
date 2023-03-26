import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();
const { readFile, writeFile } = fs;

async function getOrders() {
  const orders = await readFile(global.fileName);
  return JSON.parse(orders);
}

router.get('/', async (req, res) => {
  res.send(await getOrders());
})


export default router;