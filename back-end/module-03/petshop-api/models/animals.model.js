import Sequelize, { INTEGER } from 'sequelize';
import db from '../database/db.js';
import Proprietario from './proprietario.model.js';

const Animal = db.difine('animais', {
  animalId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { underscored: true })

Animal.belongsTo(Proprietario, { foreignKey: 'proprietarioId' });

export default Animal;
