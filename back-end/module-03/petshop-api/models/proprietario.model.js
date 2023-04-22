import Sequelize, { INTEGER } from 'sequelize';
import db from '../database/db.js';

const Proprietario = db.difine('proprietarios', {
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