import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://amhditcz:MeK3G-d-9ziVxnGINWOUwU2OJF7jtGE5@batyr.db.elephantsql.com/amhditcz',
  {
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  }
)

export default sequelize;
