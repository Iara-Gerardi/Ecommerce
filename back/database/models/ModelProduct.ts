import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<
    InferAttributes<Product>,
    InferCreationAttributes<Product>
  > {
    declare idProduct: number;
    declare productName: String;
    declare productDescription: String;
    static associate(models: any) {
      Product.belongsToMany(models.Cart, {
        through: "CartProduct",
      });
    }
  }

  Product.init(
    {
      idProduct: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: { type: DataTypes.STRING, allowNull: false },
      productDescription: { type: DataTypes.STRING, allowNull: false },
    },
    { modelName: "Product", sequelize }
  );

  return Product;
};
