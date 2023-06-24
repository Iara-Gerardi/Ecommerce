import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare idProduct: number;
  declare productName: String;
  declare productDescription: String;
}

Product.init(
  {
    idProduct: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: { type: new DataTypes.STRING(128), allowNull: false },
    productDescription: { type: new DataTypes.STRING(128), allowNull: false },
  },
  { tableName: "product", sequelize }
);

module.exports = Product;
