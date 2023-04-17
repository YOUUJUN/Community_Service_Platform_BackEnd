const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_role_permission', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    role_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "角色id"
    },
    permission_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "权限id"
    },
    data_rule_ids: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "数据权限ids"
    },
    operate_ip: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "操作ip"
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
    tableName: 'sys_role_permission',
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
