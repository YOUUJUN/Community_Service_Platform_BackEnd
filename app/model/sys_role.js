const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_role', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "主键id"
    },
    platform_type: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1",
      comment: "角色所属：1-监管 2-评估"
    },
    role_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      comment: "角色名称"
    },
    role_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "角色编码",
      unique: "uniq_role_code"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
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
    },
    del_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "状态[0-启用,1-禁用]"
    }
  }, {
    sequelize,
    tableName: 'sys_role',
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
      {
        name: "uniq_role_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_code" },
        ]
      },
    ]
  });
};
