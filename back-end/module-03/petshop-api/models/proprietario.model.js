import db from '../database/db.js';
import Sequelize from 'sequelize';

const Proprietario = db.define('proprietarios', {
  proprietarioId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { underscored: true })

export default Proprietario;