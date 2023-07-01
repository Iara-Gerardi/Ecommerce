import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
  > {
    declare idUser: number;
    declare username: string;
    declare password: string;
    declare profilePicture: string;
  }

  User.init(
    {
      idUser: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      profilePicture: { type: DataTypes.STRING, allowNull: false },
    },
    { modelName: "User", sequelize }
  );

  return User;
};
