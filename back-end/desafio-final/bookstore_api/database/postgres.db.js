import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
  `${a}`,
  {
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  }
)

export { sequelize }