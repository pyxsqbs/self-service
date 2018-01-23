'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QueryRequestTable = require('./QueryRequestTable.css');

var _QueryRequestTable2 = _interopRequireDefault(_QueryRequestTable);

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

var L = _index2.default.QueryRequest.QueryEventTable;

var QueryRequestTable = function (_React$Component) {
  _inherits(QueryRequestTable, _React$Component);

  function QueryRequestTable(props) {
    _classCallCheck(this, QueryRequestTable);

    var _this = _possibleConstructorReturn(this, (QueryRequestTable.__proto__ || Object.getPrototypeOf(QueryRequestTable)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  _createClass(QueryRequestTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelQueryRequest/loadUserMessage',
        payload: null
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.userMsg.data.reqId && this.props.count === 0) {
        this.props.dispatch({
          type: 'modelQueryRequest/getQueryRequestTableData',
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
      _router.hashHistory.push('/RequestDetails/' + key);
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.queryRequestData;
      var data = [];
      (0, _modification.pagination)();
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: dataInit[i].id,
          index: (this.props.pageNumber - 1) * 15 + i + 1,
          workOrderNumber: dataInit[i].srmNo,
          caption: dataInit[i].srmTopic,
          classification: dataInit[i].entry,
          state: _react2.default.createElement(
            'div',
            {
              style: {
                backgroundColor: dataInit[i].srmStatusName === '审批中' ? '#325fbb' : dataInit[i].srmStatusName === '已关闭' ? '#8f9498' : dataInit[i].srmStatusName === '本团队审批中' ? '#418bf7' : dataInit[i].srmStatusName === '新建' ? '#838ce3' : dataInit[i].srmStatusName === '待受理' ? '#ffeb3b' : dataInit[i].srmStatusName === '处理中' ? '#69d482' : dataInit[i].srmStatusName === '等待中' ? '#2faee0' : dataInit[i].srmStatusName === '已完成' ? '#9f2fe0' : ''
              },
              className: _QueryRequestTable2.default.state
            },
            dataInit[i].srmStatusName
          ),
          requester: dataInit[i].reqName,
          creationTime: dataInit[i].srmCreateDate,
          ExpCompTime: dataInit[i].srmOverdueDate,
          currentProcessor: dataInit[i].flowMangerUserrealname
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
        title: L.columns_CAPTION,
        dataIndex: 'caption',
        key: 'caption'
      }, {
        title: L.columns_CLASSIFICATION,
        dataIndex: 'classification',
        key: 'classification'
      }, {
        title: L.columns_STATE,
        dataIndex: 'state',
        key: 'state',
        styles: {
          color: 'white',
          fontSize: 10
        }
      }, {
        title: L.columns_REQUESTER,
        dataIndex: 'requester',
        key: 'requester'
      }, {
        title: L.columns_CREATION_TIME,
        dataIndex: 'creationTime',
        key: 'creationTime'
      }, {
        title: L.columns_EXCEPTED_COMPLETION_TIME,
        dataIndex: 'ExpCompTime',
        key: 'ExpCompTime'
      }, {
        title: L.columns_CURRENT_PROCESSOR,
        dataIndex: 'currentProcessor',
        key: 'currentProcessor'
      }];
      return _react2.default.createElement(
        'div',
        { className: _QueryRequestTable2.default.queryRequestTableContainer },
        _react2.default.createElement(_DetailsTable2.default, {
          columns: columns,
          data: data,
          tid: 'QueryRequestTable',
          limit: '15',
          handleDoubleClick: this.handleDoubleClick
        }),
        _react2.default.createElement(_antd.Pagination, {
          defaultCurrent: 1,
          total: this.props.totalProperty,
          className: _QueryRequestTable2.default.pagination,
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

  return QueryRequestTable;
}(_react2.default.Component);

exports.default = QueryRequestTable;

//# sourceMappingURL=QueryRequestTable-compiled.js.map