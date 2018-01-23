'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AnnouncementTable = require('./AnnouncementTable.css');

var _AnnouncementTable2 = _interopRequireDefault(_AnnouncementTable);

var _DetailsTable = require('./DetailsTable');

var _DetailsTable2 = _interopRequireDefault(_DetailsTable);

var _antd = require('antd');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _zh_TW = require('antd/lib/locale-provider/zh_TW');

var _zh_TW2 = _interopRequireDefault(_zh_TW);

var _cookie = require('../utils/cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.Announcement.AnnouncementModal.AnnouncementTable;

var AnnouncementTable = function (_React$Component) {
  _inherits(AnnouncementTable, _React$Component);

  function AnnouncementTable(props) {
    _classCallCheck(this, AnnouncementTable);

    var _this = _possibleConstructorReturn(this, (AnnouncementTable.__proto__ || Object.getPrototypeOf(AnnouncementTable)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    _this.state = {
      pageNumber: 1
    };
    return _this;
  }

  _createClass(AnnouncementTable, [{
    key: 'onChange',
    value: function onChange(pageNumber) {
      this.props.changeCount();
      this.setState({
        pageNumber: pageNumber
      });
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(key) {
      // this.props.displayModal();
      this.props.dispatch({
        type: 'modelIndexPageContent/getAnnouncementDetailsData',
        payload: JSON.parse(key).id
      });
      this.props.handleDoubleClick(key);
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.data;
      var data = [];
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: JSON.stringify(dataInit[i]),
          index: i + 1,
          id: dataInit[i].id,
          state: dataInit[i].status,
          caption: dataInit[i].noticeTitle
        };
      }

      var columns = [{
        title: '',
        dataIndex: 'index',
        key: 'index'
      }, {
        title: L.columns_ID,
        dataIndex: 'id',
        key: 'id',
        styles: {
          color: '#0070d2'
        }
      }, {
        title: L.columns_STATE,
        dataIndex: 'state',
        key: 'state'
      }, {
        title: L.columns_CAPTION,
        dataIndex: 'caption',
        key: 'caption'
      }];
      return _react2.default.createElement(
        'div',
        { className: _AnnouncementTable2.default.announcementContainer },
        _react2.default.createElement(_DetailsTable2.default, {
          columns: columns,
          data: data,
          tid: 'QueryEventTable',
          limit: '15',
          handleDoubleClick: this.handleDoubleClick
        }),
        _react2.default.createElement(
          _antd.LocaleProvider,
          { locale: (0, _cookie.getCookie)('language') !== 'english' ? {} : _en_US2.default },
          _react2.default.createElement(_antd.Pagination, {
            defaultCurrent: 1,
            total: this.props.totalProperty,
            className: _AnnouncementTable2.default.pagination,
            showQuickJumper: true,
            onChange: this.onChange,
            showTotal: function showTotal(total, range) {
              return range[0] + '-' + range[1] + ' of ' + total + ' ' + L.showTotal;
            },
            defaultPageSize: 15
          })
        )
      );
    }
  }]);

  return AnnouncementTable;
}(_react2.default.Component);

exports.default = AnnouncementTable;

//# sourceMappingURL=AnnouncementTable-compiled.js.map