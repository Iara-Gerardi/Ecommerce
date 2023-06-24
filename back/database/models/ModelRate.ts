import {
  Model,
  DataTypes,
  Sequelize,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const User = require("./ModelUser");
const Product = require("./ModelProduct");

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class Rate extends Model<InferAttributes<Rate>, InferCreationAttributes<Rate>> {
  declare idOrder: number;
  declare rate: Number;
  declare comment: String;
  declare idUser: ForeignKey<number>;
  declare idProduct: ForeignKey<number>;
}

Rate.init(
  {
    idOrder: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    rate: { type: DataTypes.NUMBER, allowNull: false },
    comment: { type: DataTypes.STRING(128), allowNull: false },
  },
  { tableName: "rate", sequelize }
);

Rate.belongsTo(User, {
  targetKey: "artistID",
});
//
Rate.hasOne(Product, { sourceKey: "idProduct" });
//source key is the primary key of the model that belongs to rate

module.exports = Rate;
