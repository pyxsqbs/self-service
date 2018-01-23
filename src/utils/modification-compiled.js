'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = pagination;

var _index = require('./Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var L = _index2.default.QueryEvent.QueryEventTable;

function pagination() {
  var pagination = document.getElementsByClassName('ant-pagination-options-quick-jumper')[0];
  if (pagination) {
    pagination = pagination.innerHTML;
    pagination = pagination.replace('跳至', L.pagination_goTo);
    pagination = pagination.replace('页', L.pagination_page);
    document.getElementsByClassName('ant-pagination-options-quick-jumper')[0].innerHTML = pagination;
  }
}

//# sourceMappingURL=modification-compiled.js.map