import { connect } from './db.js';

async function getProprietarios() {
  const conn = await connect();
  const sql = 'SELECT * FROM proprietarios';
  const res = await conn.query(sql);
  return res.rows;
}

async function getProprietario(proprietarioID) {
  const conn = await connect();
  const sql = 'SELECT * FROM proprietarios WHERE proprietario_id=($1)';
  const values = [proprietarioID];
  const res = await conn.query(sql, values);
  return res.rows[0];
}

async function createProprietario(proprietario) {
  const conn = await connect();
  const sql = 'INSERT INTO proprietarios (nome, telefone ) VALUES ($1,$2) RETURNING *';
  const values = [proprietario.nome, proprietario.telefone];
  const res = await conn.query(sql, values);
  return res.rows[0];
}

async function updateProprietario(proprietario) {
  const conn = await connect();
  const sql = 'UPDATE proprietarios SET nome=($2),telefone=($3) WHERE proprietario_id=($1) RETURNING *';
  const values = [proprietario.proprietario_id, proprietario.nome, proprietario.telefone];
  const res = await conn.query(sql, values);
  return res.rows[0];
}

async function deleteProprietario(proprietarioID) {
  const conn = await connect();
  /*Verificando se o proprietário possui algum animal antes de deletar*/
  const sql = `
    SELECT prop.proprietario_id as id, 
          prop.nome as name 
    FROM proprietarios as prop
    INNER JOIN animais as ani on ani.proprietario_id = ($1)
    GROUP BY prop.proprietario_id ORDER BY id
  `;
  const values = [proprietarioID];
  const res = await conn.query(sql, values);

  if (res.rows.length > 0) {
    throw new Error('Existe um ou mais animais registrado nesse proprietário. Processo de exclusão abortado.')
  }

  const deleteSQL = "DELETE FROM  proprietarios WHERE proprietario_id = ($1) RETURNING *"
  const deleteRes = await conn.query(deleteSQL, values);
  return deleteRes.rows[0];
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario
}