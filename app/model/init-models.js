var DataTypes = require("sequelize").DataTypes;
var _sys_dict = require("./sys_dict");
var _sys_dict_item = require("./sys_dict_item");
var _sys_log = require("./sys_log");
var _sys_permission = require("./sys_permission");
var _sys_role = require("./sys_role");
var _sys_role_permission = require("./sys_role_permission");
var _sys_user = require("./sys_user");
var _sys_user_role = require("./sys_user_role");

function initModels(sequelize) {
  var sys_dict = _sys_dict(sequelize, DataTypes);
  var sys_dict_item = _sys_dict_item(sequelize, DataTypes);
  var sys_log = _sys_log(sequelize, DataTypes);
  var sys_permission = _sys_permission(sequelize, DataTypes);
  var sys_role = _sys_role(sequelize, DataTypes);
  var sys_role_permission = _sys_role_permission(sequelize, DataTypes);
  var sys_user = _sys_user(sequelize, DataTypes);
  var sys_user_role = _sys_user_role(sequelize, DataTypes);


  return {
    sys_dict,
    sys_dict_item,
    sys_log,
    sys_permission,
    sys_role,
    sys_role_permission,
    sys_user,
    sys_user_role,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
