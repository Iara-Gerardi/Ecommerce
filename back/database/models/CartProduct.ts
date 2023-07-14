import {
  Model,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

// const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");
module.exports = (sequelize: any, DataTypes: any) => {
  class CartProduct extends Model<
    InferAttributes<CartProduct>,
    InferCreationAttributes<CartProduct>
  > {
    declare id: number;
    declare unitPrice: Number;
    declare quantity: Number;
    declare idCart: ForeignKey<number>;
    declare idProduct: ForeignKey<number>;
  }

  CartProduct.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      unitPrice: { type: DataTypes.INTEGER, allowNull: false },
    },
    { modelName: "CartProduct", sequelize }
  );

  return CartProduct;
};
