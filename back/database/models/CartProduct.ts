import {
  Model,
  DataTypes,
  Sequelize,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const Cart = require("./ModelCart");
const Product = require("./ModelProduct");

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class CartProduct extends Model<
  InferAttributes<CartProduct>,
  InferCreationAttributes<CartProduct>
> {
  declare idOrder: number;
  declare unitPrice: Number;
  declare quantity: Number;
  declare idCart: ForeignKey<number>;
  declare idProduct: ForeignKey<number>;
}

CartProduct.init(
  {
    idOrder: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    quantity: { type: DataTypes.NUMBER, allowNull: false },
    unitPrice: { type: DataTypes.NUMBER, allowNull: false },
  },
  { tableName: "CartProduct", sequelize }
);

CartProduct.hasMany(Product, {
  sourceKey: "idProduct",
});
CartProduct.belongsToMany(Cart, { through: "idCart" });

module.exports = CartProduct;
