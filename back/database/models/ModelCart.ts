import {
  Model,
  DataTypes,
  Sequelize,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const Product = require("./CartProduct");
const User = require("./ModelUser");

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
  declare idCart: number;
  declare orderDate: Date;
  declare totalPrice: Number;
  declare idOrder: ForeignKey<number>;
  declare idCustomer: ForeignKey<number>;
}

Cart.init(
  {
    idCart: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    orderDate: { type: DataTypes.DATE, allowNull: false },
    totalPrice: { type: DataTypes.NUMBER, allowNull: false },
  },
  { tableName: "cart", sequelize }
);

Cart.belongsTo(User, {
  targetKey: "idUser",
});
//
Cart.hasMany(Product, { sourceKey: "idProduct" });

module.exports = Cart;
