const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_dict_item', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    dict_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "字典id"
    },
    item_text: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "字典项文本"
    },
    item_value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "字典项值"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    },
    del_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "删除状态(0-显示 1-删除)"
    },
    create_by: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_by: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'sys_dict_item',
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
