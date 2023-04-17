const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_user_role', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "主键id"
    },
    user_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "用户id"
    },
    role_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "角色id"
    },
    create_by: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "创建人"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "创建时间"
    },
    update_by: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "更新人"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'sys_user_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
