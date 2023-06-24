import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare idUser: number;
  declare username: string;
  declare password: string;
  declare profilePicture: string;
}

User.init(
  {
    idUser: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING(128), allowNull: false },
    password: { type: DataTypes.STRING(128), allowNull: false },
    profilePicture: { type: DataTypes.STRING(128), allowNull: false },
  },
  { tableName: "user", sequelize }
);

module.exports = User;
