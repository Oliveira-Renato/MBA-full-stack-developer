import { connect } from './db.js';

async function createProprietario(proprietario) {
  const conn = await connect();
  const sql = 'INSERT INTO proprietarios (nome, telefone ) VALUES ($1,$2) RETURNING *';
  const values = [proprietario.nome, proprietario.telefone];
  const res = await conn.query(sql, values);
  return res.rows[0];
}

export default {
  createProprietario
}