const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_dict', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      comment: "主键"
    },
    dict_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "字典名称"
    },
    dict_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "字典编码",
      unique: "uniq_dict_code"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
    },
    del_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "删除状态(0-显示 1-删除)"
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
    tableName: 'sys_dict',
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
        name: "uniq_dict_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dict_code" },
        ]
      },
    ]
  });
};
