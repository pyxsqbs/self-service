'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QueryEventTable = require('./QueryEventTable.css');

var _QueryEventTable2 = _interopRequireDefault(_QueryEventTable);

var _antd = require('antd');

var _router = require('dva/router');

var _DetailsTable = require('./DetailsTable');

var _DetailsTable2 = _interopRequireDefault(_DetailsTable);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _modification = require('../utils/modification');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.QueryEvent.QueryEventTable;

var QueryEventTable = function (_React$Component) {
  _inherits(QueryEventTable, _React$Component);

  function QueryEventTable(props) {
    _classCallCheck(this, QueryEventTable);

    var _this = _possibleConstructorReturn(this, (QueryEventTable.__proto__ || Object.getPrototypeOf(QueryEventTable)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  _createClass(QueryEventTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelQueryEvent/loadUserMessage',
        payload: null
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.userMsg.data.reqId && this.props.count === 0) {
        this.props.dispatch({
          type: 'modelQueryEvent/getQueryEventTableData',
          payload: {
            reqId: prevProps.userMsg.data.reqId,
            pageNumber: this.props.pageNumber,
            luceneKey: this.props.luceneKey
          }
        });
        this.props.changeCount();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(pageNumber) {
      this.props.changeCount();
      this.props.changePageNumber(pageNumber);
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(key) {
      _router.hashHistory.push('/EventDetails/' + key);
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.queryEventData;
      var data = [];
      (0, _modification.pagination)();
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: dataInit[i].id,
          index: (this.props.pageNumber - 1) * 15 + i + 1,
          workOrderNumber: dataInit[i].incNo,
          state: _react2.default.createElement(
            'div',
            {
              style: {
                backgroundColor: dataInit[i].status === '处理中' ? '#69d482' : dataInit[i].status === '新建' ? '#838ce3' : dataInit[i].status === '已分派' ? '#3179b1' : dataInit[i].status === '待分派' ? '#33d4ff' : dataInit[i].status === '已关闭' ? '#9fa0a4' : dataInit[i].status === '已解决' ? '#ffeb3b' : ''
              },
              className: _QueryEventTable2.default.state
            },
            dataInit[i].status
          ),
          creationTime: dataInit[i].incCreateDate,
          caption: dataInit[i].incTopic,
          entry: dataInit[i].entry,
          acceptGroup: dataInit[i].dealGroupName,
          acceptor: dataInit[i].flowUserName,
          priority: _react2.default.createElement(
            'div',
            {
              style: {
                backgroundColor: dataInit[i].incPriLevelName === '1' ? '#ff625c' : dataInit[i].incPriLevelName === '2' ? '#e67505' : dataInit[i].incPriLevelName === '3' ? '#ffd200' : dataInit[i].incPriLevelName === '4' ? '#9fa0a4' : dataInit[i].incPriLevelName === '5' ? '#c0c0c0' : ''
              },
              className: _QueryEventTable2.default.priority
            },
            dataInit[i].incPriLevelName
          ),
          requester: dataInit[i].requesterName,
          creator: dataInit[i].submitName,
          closeCode: dataInit[i].incCloseCode
        };
      }

      var columns = [{
        title: '',
        dataIndex: 'index',
        key: 'index'
      }, {
        title: L.columns_WORK_ORDER_NUMBER,
        dataIndex: 'workOrderNumber',
        key: 'workOrderNumber',
        styles: {
          color: '#0070d2'
        }
      }, {
        title: L.columns_STATE,
        dataIndex: 'state',
        key: 'state',
        styles: {
          color: 'white',
          fontSize: 10
        }
      }, {
        title: L.columns_CREATION_TIME,
        dataIndex: 'creationTime',
        key: 'creationTime'
      }, {
        title: L.columns_CAPTION,
        dataIndex: 'caption',
        key: 'caption'
      }, {
        title: L.columns_ENTRY,
        dataIndex: 'entry',
        key: 'entry'
      }, {
        title: L.columns_ACCEPT_GROUP,
        dataIndex: 'acceptGroup',
        key: 'acceptGroup'
      }, {
        title: L.columns_ACCEPTOR,
        dataIndex: 'acceptor',
        key: 'acceptor'
      }, {
        title: L.columns_PRIORITY,
        dataIndex: 'priority',
        key: 'priority',
        styles: {
          color: 'white',
          fontSize: 10
        }
      }, {
        title: L.columns_REQUESTER,
        dataIndex: 'requester',
        key: 'requester'
      }, {
        title: L.columns_CREATOR,
        dataIndex: 'creator',
        key: 'creator'
      }, {
        title: L.columns_CLOSE_CODE,
        dataIndex: 'closeCode',
        key: 'closeCode'
      }];
      return _react2.default.createElement(
        'div',
        { className: _QueryEventTable2.default.queryEventTableContainer },
        _react2.default.createElement(_DetailsTable2.default, {
          columns: columns,
          data: data,
          tid: 'QueryEventTable',
          limit: '15',
          handleDoubleClick: this.handleDoubleClick
        }),
        _react2.default.createElement(_antd.Pagination, {
          defaultCurrent: 1,
          total: this.props.totalProperty,
          className: _QueryEventTable2.default.pagination,
          showQuickJumper: true,
          onChange: this.onChange,
          showTotal: function showTotal(total, range) {
            return range[0] + '-' + range[1] + ' of ' + total + ' ' + L.showTotal;
          },
          defaultPageSize: 15,
          current: this.props.pageNumber
        })
      );
    }
  }]);

  return QueryEventTable;
}(_react2.default.Component);

exports.default = QueryEventTable;

//# sourceMappingURL=QueryEventTable-compiled.js.map