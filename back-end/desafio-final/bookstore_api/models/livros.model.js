import { Sequelize } from 'sequelize'
import { sequelize } from '../database/postgres.db.js'
import Autor from './autores.model.js';

const Livro = sequelize.define('livros', {
  livroId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, { underscored: true })

Livro.belongsTo(Autor, { foreignKey: 'autorId' });

export default Livro