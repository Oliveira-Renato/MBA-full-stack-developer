import { connect } from './db.js';

async function getAnimais(proprietario_id) {
  const conn = await connect();
  try {
    if (proprietario_id) {
      const AnimaisByPropRes = await conn.query('SELECT * FROM animais WHERE proprietario_id=($1)', [proprietario_id]);
      return AnimaisByPropRes.rows;
    }
    const res = await conn.query('SELECT * FROM animais');
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimal(animalID) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM proprietarios WHERE proprietario_id=($1)', [animalID]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function createAnimal(animal) {
  const conn = await connect();
  try {
    const sql = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1,$2,$3) RETURNING *';
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();
  try {
    const sql = 'UPDATE animais SET nome=($2),tipo=($3),proprietario_id=($4) WHERE animal_id=($1) RETURNING *';
    const values = [animal.animal_id, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];

  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(animalID) {
  const conn = await connect();
  try {
    const deleteRes = await conn.query('"DELETE FROM  proprietarios WHERE proprietario_id = ($1) RETURNING *"', [animalID]);
    return deleteRes.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal
}