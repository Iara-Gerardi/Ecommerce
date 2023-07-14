import {
  Model,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<
    InferAttributes<Cart>,
    InferCreationAttributes<Cart>
  > {
    declare id: number;
    declare orderDate: Date;
    declare totalPrice: Number;
    declare idOrder: ForeignKey<number>;
    declare idCustomer: ForeignKey<number>;
    static associate(models: any) {
      Cart.belongsTo(models.User, { foreignKey: "userId" });
      Cart.belongsToMany(models.Product, { through: models.CartProduct });
    }
  }

  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderDate: { type: DataTypes.DATE, allowNull: false },
      totalPrice: { type: DataTypes.INTEGER, allowNull: false },
    },
    { modelName: "Cart", sequelize }
  );

  return Cart;
};
