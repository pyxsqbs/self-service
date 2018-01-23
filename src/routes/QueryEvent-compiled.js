'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _QueryEvent = require('./QueryEvent.css');

var _QueryEvent2 = _interopRequireDefault(_QueryEvent);

var _QueryEventForm = require('../components/QueryEventForm');

var _QueryEventForm2 = _interopRequireDefault(_QueryEventForm);

var _QueryEventTable = require('../components/QueryEventTable');

var _QueryEventTable2 = _interopRequireDefault(_QueryEventTable);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.QueryEvent;

var QueryEvent = function (_React$Component) {
  _inherits(QueryEvent, _React$Component);

  function QueryEvent(props) {
    _classCallCheck(this, QueryEvent);

    var _this = _possibleConstructorReturn(this, (QueryEvent.__proto__ || Object.getPrototypeOf(QueryEvent)).call(this, props));

    _this.state = {
      count: 0,
      pageNumber: 1
    };
    _this.changeCount = _this.changeCount.bind(_this);
    _this.changePageNumber = _this.changePageNumber.bind(_this);
    return _this;
  }

  _createClass(QueryEvent, [{
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
    key: 'render',
    value: function render() {
      var modelState = this.props.modelQueryEvent;
      return _react2.default.createElement(
        'div',
        { className: _QueryEvent2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _QueryEvent2.default.queryEventContainer },
          _react2.default.createElement(
            'div',
            { className: _QueryEvent2.default.headerQueryContainer },
            _react2.default.createElement(
              'div',
              { className: _QueryEvent2.default.title },
              L.title
            ),
            _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
            _react2.default.createElement(_QueryEventForm2.default, {
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
              _react2.default.createElement(_QueryEventTable2.default, {
                dispatch: this.props.dispatch,
                userMsg: modelState.userMsg,
                queryEventData: modelState.queryEventData,
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

  return QueryEvent;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelQueryEvent = _ref.modelQueryEvent,
      loading = _ref.loading;
  return { modelQueryEvent: modelQueryEvent, loading: loading };
})(QueryEvent);

//# sourceMappingURL=QueryEvent-compiled.js.map