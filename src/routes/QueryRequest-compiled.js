'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _QueryRequest = require('./QueryRequest.css');

var _QueryRequest2 = _interopRequireDefault(_QueryRequest);

var _QueryRequestForm = require('../components/QueryRequestForm');

var _QueryRequestForm2 = _interopRequireDefault(_QueryRequestForm);

var _QueryRequestTable = require('../components/QueryRequestTable');

var _QueryRequestTable2 = _interopRequireDefault(_QueryRequestTable);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.QueryRequest;

var QueryRequest = function (_React$Component) {
  _inherits(QueryRequest, _React$Component);

  function QueryRequest(props) {
    _classCallCheck(this, QueryRequest);

    var _this = _possibleConstructorReturn(this, (QueryRequest.__proto__ || Object.getPrototypeOf(QueryRequest)).call(this, props));

    _this.state = {
      count: 0,
      pageNumber: 1
    };
    _this.changeCount = _this.changeCount.bind(_this);
    _this.changePageNumber = _this.changePageNumber.bind(_this);
    return _this;
  }

  _createClass(QueryRequest, [{
    key: 'changeCount',
    value: function changeCount() {
      if (this.state.count === 0) {
        this.setState({
          count: 1
        });
      } else {
        this.setState({
          count: 0
        });
      }
    }
  }, {
    key: 'changePageNumber',
    value: function changePageNumber(pageNumber) {
      this.setState({
        pageNumber: pageNumber
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(preProps) {
      // console.log(preProps.loading,this.props.loading)
    }
  }, {
    key: 'render',
    value: function render() {
      var modelState = this.props.modelQueryRequest;
      return _react2.default.createElement(
        'div',
        { className: _QueryRequest2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _QueryRequest2.default.queryRequestContainer },
          _react2.default.createElement(
            'div',
            { className: _QueryRequest2.default.headerQueryContainer },
            _react2.default.createElement(
              'div',
              { className: _QueryRequest2.default.title },
              L.title
            ),
            _react2.default.createElement(_QueryRequestForm2.default, {
              dispatch: this.props.dispatch,
              changeCount: this.changeCount,
              changePageNumber: this.changePageNumber
            }),
            _react2.default.createElement(
              'div',
              { style: {
                  overflow: document.body.clientWidth <= 768 ? 'scroll' : '',
                  width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%',
                  marginLeft: document.body.clientWidth <= 768 ? -20 : 0
                } },
              _react2.default.createElement(_QueryRequestTable2.default, {
                dispatch: this.props.dispatch,
                userMsg: modelState.userMsg,
                queryRequestData: modelState.queryRequestData,
                totalProperty: modelState.totalProperty,
                luceneKey: modelState.luceneKey,
                count: this.state.count,
                changeCount: this.changeCount,
                pageNumber: this.state.pageNumber,
                changePageNumber: this.changePageNumber
              })
            )
          )
        )
      );
    }
  }]);

  return QueryRequest;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelQueryRequest = _ref.modelQueryRequest,
      loading = _ref.loading;
  return { modelQueryRequest: modelQueryRequest, loading: loading };
})(QueryRequest);

//# sourceMappingURL=QueryRequest-compiled.js.map