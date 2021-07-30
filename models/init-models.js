var DataTypes = require("sequelize").DataTypes;
var _test_list = require("./test_list");
var _test_page = require("./test_page");
var _test_page_text = require("./test_page_text");
var _test_result = require("./test_result");

function initModels(sequelize) {
  var test_list = _test_list(sequelize, DataTypes);
  var test_page = _test_page(sequelize, DataTypes);
  var test_page_text = _test_page_text(sequelize, DataTypes);
  var test_result = _test_result(sequelize, DataTypes);


  return {
    test_list,
    test_page,
    test_page_text,
    test_result,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
