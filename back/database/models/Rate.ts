import {
  Model,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Rate extends Model<
    InferAttributes<Rate>,
    InferCreationAttributes<Rate>
  > {
    declare id: number;
    declare rate: Number;
    declare comment: String;
    declare idUser: ForeignKey<number>;
    declare idProduct: ForeignKey<number>;
    static associate(models: any) {
      Rate.belongsTo(models.User, { foreignKey: "userId" });
      Rate.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }

  Rate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rate: { type: DataTypes.INTEGER, allowNull: false },
      comment: { type: DataTypes.STRING, allowNull: false },
    },
    { modelName: "Rate", sequelize }
  );

  return Rate;
};
