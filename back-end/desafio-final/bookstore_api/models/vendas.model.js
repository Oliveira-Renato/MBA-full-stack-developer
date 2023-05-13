import { Sequelize } from 'sequelize'
import sequelize from '../database/postgres.db.js'
import Cliente from './clientes.model.js';
import Livro from './livros.model.js';

const Venda = sequelize.define('vendas', {
  vendaId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  valor: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, { underscored: true })

Venda.belongsTo(Cliente, { foreignKey: 'clienteId' });
Venda.belongsTo(Livro, { foreignKey: 'livroId' });

export default Venda