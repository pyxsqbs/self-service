'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EventRecordTable = require('./EventRecordTable.css');

var _EventRecordTable2 = _interopRequireDefault(_EventRecordTable);

var _RecordTable = require('./RecordTable');

var _RecordTable2 = _interopRequireDefault(_RecordTable);

var _router = require('dva/router');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.EventRecordTable;

var EventRecordTable = function (_React$Component) {
  _inherits(EventRecordTable, _React$Component);

  function EventRecordTable(props) {
    _classCallCheck(this, EventRecordTable);

    var _this = _possibleConstructorReturn(this, (EventRecordTable.__proto__ || Object.getPrototypeOf(EventRecordTable)).call(this, props));

    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  _createClass(EventRecordTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/') {
        this.props.dispatch({
          type: 'modelIndexPageContent/getEventRecordTableData',
          payload: null
        });
      }
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(key) {
      _router.hashHistory.push('/EventDetails/' + key);
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.eventRecordData;
      var data = [];
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: dataInit[i].id,
          workOrderNumber: dataInit[i].incNo,
          caption: dataInit[i].incTopic,
          entry: dataInit[i].incOriginName,
          state: dataInit[i].incStatusName,
          currentProcessor: dataInit[i].submitName
        };
      }
      var columns = [{
        title: L.columns_WORK_ORDER_NUMBER,
        dataIndex: 'workOrderNumber',
        key: 'workOrderNumber'
      }, {
        title: L.columns_CAPTION,
        dataIndex: 'caption',
        key: 'caption'
      }, {
        title: L.columns_ENTRY,
        dataIndex: 'entry',
        key: 'entry'
      }, {
        title: L.columns_STATE,
        dataIndex: 'state',
        key: 'state'
      }, {
        title: L.columns_CURRENT_PROCESSOR,
        dataIndex: 'currentProcessor',
        key: 'currentProcessor'
      }];
      return _react2.default.createElement(
        'div',
        { className: _EventRecordTable2.default.eventRecordTableContainer },
        _react2.default.createElement(_RecordTable2.default, {
          columns: columns,
          data: data,
          tid: 'EventRecordTable',
          handleDoubleClick: this.handleDoubleClick
        })
      );
    }
  }]);

  return EventRecordTable;
}(_react2.default.Component);

exports.default = EventRecordTable;

//# sourceMappingURL=EventRecordTable-compiled.js.map