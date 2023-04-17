const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_user', {
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
      comment: "用户所属：1-监管 2-评估"
    },
    tenant_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "运营商id"
    },
    is_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1是管理员2普通用户"
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "登录账号",
      unique: "usernameunique"
    },
    real_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "真实姓名"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "密码"
    },
    salt: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: "md5密码盐"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "头像"
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "生日"
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "性别(1-男,2-女)"
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "电子邮件"
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "电话"
    },
    telephone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "座机号"
    },
    del_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "状态(0-正常,1-已删除,2-冻结)"
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
    tableName: 'sys_user',
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
        name: "usernameunique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
