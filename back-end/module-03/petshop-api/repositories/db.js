import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'stringDB',
  {
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  }
)

export default sequelize;
