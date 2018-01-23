'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RecordTable = require('./RecordTable.css');

var _RecordTable2 = _interopRequireDefault(_RecordTable);

var _antd = require('antd');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.common.RecordTable;

var RecordTable = function (_React$Component) {
  _inherits(RecordTable, _React$Component);

  function RecordTable(props) {
    _classCallCheck(this, RecordTable);

    var _this = _possibleConstructorReturn(this, (RecordTable.__proto__ || Object.getPrototypeOf(RecordTable)).call(this, props));

    _this.state = {
      columns: [],
      data: [],
      columnsWidth: [],
      display: 'none',
      borderBottom: 'white 1px solid',
      paddingBottom: '4px'
    };
    _this.todoAlignment = _this.todoAlignment.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(RecordTable, [{
    key: 'handleDoubleClick',
    value: function handleDoubleClick(key) {
      if (this.props.handleDoubleClick) {
        this.props.handleDoubleClick(key);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(key) {
      if (this.props.handleDoubleClick && document.body.clientWidth <= 768) {
        this.props.handleDoubleClick(key);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        columns: [].concat(_toConsumableArray(this.props.columns)),
        data: [].concat(_toConsumableArray(this.props.data.slice(0, this.props.limit ? this.props.limit : 5)))
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.data.length === 0) {
        this.setState({
          display: 'flex',
          borderBottom: '#eeeeee 1px solid',
          paddingBottom: '10px'
        });
      } else {
        this.setState({
          display: 'none',
          borderBottom: 'white 1px solid',
          paddingBottom: '4px'
        });
      }
      if (document.getElementById(this.props.tid + 'thead').firstChild && document.getElementById(this.props.tid + 'tbody').firstChild) {
        this.todoAlignment();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        columns: [].concat(_toConsumableArray(nextProps.columns)),
        data: [].concat(_toConsumableArray(nextProps.data.slice(0, this.props.limit ? this.props.limit : 5)))
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.state.data || prevProps !== this.props) {
        if (this.state.data.length === 0) {
          this.setState({
            display: 'flex',
            borderBottom: '#eeeeee 1px solid',
            paddingBottom: '10px'
          });
        } else {
          this.setState({
            display: 'none',
            borderBottom: 'white 1px solid',
            paddingBottom: '4px'
          });
        }
        if (document.getElementById(this.props.tid + 'thead').firstChild && document.getElementById(this.props.tid + 'tbody').firstChild) {
          this.todoAlignment();
        }
      }
    }
  }, {
    key: 'todoAlignment',
    value: function todoAlignment() {
      var columnsLength = this.state.columns.length;
      var dataLength = this.state.data.length;
      var maxItemLength = [];
      var tran = void 0;

      for (var i = 0; i < columnsLength; i++) {
        maxItemLength[i] = document.getElementById(this.props.tid + 'thead').firstChild.childNodes[i].clientWidth;
      }

      for (var _i = 0; _i < dataLength; _i++) {
        for (var j = 0; j < columnsLength; j++) {
          tran = Math.min(200, document.getElementById(this.props.tid + 'tbody').childNodes[_i].firstChild.childNodes[j].clientWidth);
          tran = Math.max(tran, maxItemLength[j]);
          maxItemLength[j] = tran;
        }
      }

      this.setState({
        columnsWidth: [].concat(maxItemLength)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var theadItems = this.state.columns.map(function (x, index) {
        return _react2.default.createElement(
          'div',
          { className: _RecordTable2.default.theadTh, key: x.key,
            style: { width: _this2.state.columnsWidth[index] } },
          x.title
        );
      });

      var tbodyItems = this.state.data.map(function (x) {
        return _react2.default.createElement(
          'div',
          { className: _RecordTable2.default.tbodyTrContainer, key: x.key },
          _react2.default.createElement(
            'div',
            {
              className: _RecordTable2.default.tbodyTr,
              onDoubleClick: function onDoubleClick() {
                return _this2.handleDoubleClick(x.key);
              },
              onClick: function onClick() {
                return _this2.handleClick(x.key);
              }
            },
            _this2.state.columns.map(function (y, index) {
              return _react2.default.createElement(
                _antd.Tooltip,
                { title: x[y.dataIndex], key: x.key + '-' + y.dataIndex },
                _react2.default.createElement(
                  'div',
                  { className: _RecordTable2.default.tbodyTh,
                    style: { width: _this2.state.columnsWidth[index] ? _this2.state.columnsWidth[index] + 1 : undefined } },
                  x[y.dataIndex]
                )
              );
            })
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _RecordTable2.default.recordTableContainer },
        _react2.default.createElement(
          'div',
          { className: _RecordTable2.default.tableCanvas },
          _react2.default.createElement(
            'div',
            { className: _RecordTable2.default.theadStyle, style: { borderBottom: this.state.borderBottom },
              id: this.props.tid + 'thead' },
            _react2.default.createElement(
              'div',
              { className: _RecordTable2.default.theadTr, style: { paddingBottom: this.state.paddingBottom } },
              theadItems
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _RecordTable2.default.tbodyStyle, id: this.props.tid + 'tbody' },
            tbodyItems
          ),
          _react2.default.createElement(
            'div',
            {
              style: {
                display: this.state.display,
                paddingTop: this.props.paddingTop ? this.props.paddingTop : '15.5%'
              },
              className: _RecordTable2.default.tableNodata
            },
            _react2.default.createElement('div', { className: _RecordTable2.default.icInfo }),
            L.icInfo
          )
        )
      );
    }
  }]);

  return RecordTable;
}(_react2.default.Component);

exports.default = RecordTable;

//# sourceMappingURL=RecordTable-compiled.js.map