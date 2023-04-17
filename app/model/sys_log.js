const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_log', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    log_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "日志类型(1:登录 2:操作 3:登出)"
    },
    log_content: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "日志内容"
    },
    operate_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "操作类型(0:其他 1:查询 2:添加; 3:更新 4:删除; 5:导入 6:导出)"
    },
    user_account: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "操作用户账号"
    },
    user_real_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作用户名称"
    },
    ip: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "IP"
    },
    method: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "请求java方法"
    },
    request_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "请求路径"
    },
    request_param: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "请求参数"
    },
    request_type: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "请求类型"
    },
    cost_time: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "耗时"
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
    tableName: 'sys_log',
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
