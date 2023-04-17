const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_permission', {
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
      comment: "菜单所属：1-监管 2-评估"
    },
    parent_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "父id"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "菜单标题"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "路径"
    },
    component: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "组件"
    },
    component_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "组件名字"
    },
    redirect: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "一级菜单跳转地址"
    },
    menu_type: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0",
      comment: "菜单类型(0:一级菜单; 1:子菜单:2:按钮权限)"
    },
    perms: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "菜单权限编码"
    },
    perms_type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "1",
      comment: "权限策略1显示2禁用"
    },
    sort_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "菜单排序"
    },
    always_show: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "聚合子路由: 1是0否"
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "菜单图标"
    },
    is_route: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
      comment: "是否路由菜单: 0:不是  1:是（默认值1）"
    },
    is_leaf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "是否叶子节点:    1:是   0:不是"
    },
    keep_alive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "是否缓存该页面:    1:是   0:不是"
    },
    hidden: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "是否隐藏路由: 0否,1是"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
    },
    internal_or_external: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "外链菜单打开方式 0\/内部打开 1\/外部打开"
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "1",
      comment: "按钮权限状态(0无效1有效)"
    },
    rule_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "是否添加数据权限1是0否"
    },
    del_flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "删除状态 0正常 1已删除"
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
    tableName: 'sys_permission',
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
