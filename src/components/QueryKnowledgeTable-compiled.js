'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QueryKnowledgeTable = require('./QueryKnowledgeTable.css');

var _QueryKnowledgeTable2 = _interopRequireDefault(_QueryKnowledgeTable);

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

var L = _index2.default.QueryKnowledge.QueryKnowledgeTable;

var QueryKnowledgeTable = function (_React$Component) {
  _inherits(QueryKnowledgeTable, _React$Component);

  function QueryKnowledgeTable(props) {
    _classCallCheck(this, QueryKnowledgeTable);

    var _this = _possibleConstructorReturn(this, (QueryKnowledgeTable.__proto__ || Object.getPrototypeOf(QueryKnowledgeTable)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  _createClass(QueryKnowledgeTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelQueryKnowledge/loadGeogId',
        payload: null
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.geogId !== '' && this.props.count === 0) {
        this.props.dispatch({
          type: 'modelQueryKnowledge/getQueryKnowledgeTableData',
          payload: {
            geogId: prevProps.geogId,
            pageNumber: this.props.pageNumber,
            luceneKey: JSON.stringify(this.props.params).indexOf('"data":') > -1 ? JSON.parse(this.props.params.data).value : '',
            sort: JSON.stringify(this.props.params).indexOf('"data":') > -1 ? JSON.parse(this.props.params.data).sort : ''
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
      _router.hashHistory.push('/KnowledgeDetails/' + key);
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.queryKnowledgeTableData;
      var data = [];
      (0, _modification.pagination)();
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: dataInit[i].id,
          index: (this.props.pageNumber - 1) * 15 + i + 1,
          knowledgeProperty: dataInit[i].solutionTypeName,
          knowledgeCaption: dataInit[i].solutionTitle,
          browseThrough: dataInit[i].browseCount,
          cite: dataInit[i].citeCount,
          author: dataInit[i].creator,
          lastUpdate: dataInit[i].createDate
        };
      }

      var columns = [{
        title: '',
        dataIndex: 'index',
        key: 'index'
      }, {
        title: L.columns_KNOWLEDGE_PROPERTY,
        dataIndex: 'knowledgeProperty',
        key: 'knowledgeProperty'
      }, {
        title: L.columns_KNOWLEDGE_CAPTION,
        dataIndex: 'knowledgeCaption',
        key: 'knowledgeCaption'
      }, {
        title: L.columns_BROWSE_THROUGH,
        dataIndex: 'browseThrough',
        key: 'browseThrough'
      }, {
        title: L.columns_CITE,
        dataIndex: 'cite',
        key: 'cite'
      }, {
        title: L.columns_AUTHOR,
        dataIndex: 'author',
        key: 'author'
      }, {
        title: L.columns_LAST_UPDATE,
        dataIndex: 'lastUpdate',
        key: 'lastUpdate'
      }];
      return _react2.default.createElement(
        'div',
        {
          className: _QueryKnowledgeTable2.default.queryKnowledgeTableContainer,
          style: {
            marginTop: document.body.clientWidth <= 768 ? 0 : ''
          }
        },
        _react2.default.createElement(_DetailsTable2.default, {
          columns: columns,
          data: data,
          tid: 'QueryKnowledgeTable',
          limit: '15',
          handleDoubleClick: this.handleDoubleClick
        }),
        _react2.default.createElement(_antd.Pagination, {
          defaultCurrent: 1,
          total: this.props.totalProperty,
          className: _QueryKnowledgeTable2.default.pagination,
          showQuickJumper: true,
          onChange: this.onChange,
          showTotal: function showTotal(total, range) {
            return range[0] + '-' + range[1] + ' of ' + total + ' ' + L.showTotal;
          },
          defaultPageSize: 15
        })
      );
    }
  }]);

  return QueryKnowledgeTable;
}(_react2.default.Component);

exports.default = QueryKnowledgeTable;

//# sourceMappingURL=QueryKnowledgeTable-compiled.js.map