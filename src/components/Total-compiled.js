'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Total = require('./Total.css');

var _Total2 = _interopRequireDefault(_Total);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.Total;

var Total = function (_React$Component) {
  _inherits(Total, _React$Component);

  function Total(props) {
    _classCallCheck(this, Total);

    var _this = _possibleConstructorReturn(this, (Total.__proto__ || Object.getPrototypeOf(Total)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Total, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var requestHistogramData = nextProps.requestHistogramData.map(function (x) {
        return x.text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条'));
      });
      var eventHistogramData = nextProps.eventHistogramData.map(function (x) {
        return x.text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条'));
      });
      this.setState({
        data: [requestHistogramData[0], requestHistogramData[0] - requestHistogramData[2] ? requestHistogramData[0] - requestHistogramData[2] : '', eventHistogramData[2], eventHistogramData[2] - eventHistogramData[1] ? eventHistogramData[2] - eventHistogramData[1] : '']
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var num = this.state.data;
      var totalDivider = _react2.default.createElement('div', { className: _Total2.default.divider });
      return _react2.default.createElement(
        'div',
        { className: _Total2.default.totalContainer },
        _react2.default.createElement(
          'div',
          { className: _Total2.default.totalItemContainer },
          L.totalItemContainer_MY_REQUESTS,
          _react2.default.createElement(
            'div',
            { className: _Total2.default.totalMaxNum },
            num[0]
          )
        ),
        totalDivider,
        _react2.default.createElement(
          'div',
          { className: _Total2.default.totalItemContainer },
          L.totalItemContainer_MY_UNFINIDHED_REQUESTS,
          _react2.default.createElement(
            'div',
            { className: _Total2.default.totalMinNum },
            num[1]
          )
        ),
        totalDivider,
        _react2.default.createElement(
          'div',
          { className: _Total2.default.totalItemContainer },
          L.totalItemContainer_MY_INCIDENTS,
          _react2.default.createElement(
            'div',
            { className: _Total2.default.totalMaxNum },
            num[2]
          )
        ),
        totalDivider,
        _react2.default.createElement(
          'div',
          { className: _Total2.default.totalItemContainer },
          L.totalItemContainer_MY_UNFINIDHED_INCIDENTS,
          _react2.default.createElement(
            'div',
            { className: _Total2.default.totalMinNum },
            num[3]
          )
        )
      );
    }
  }]);

  return Total;
}(_react2.default.Component);

exports.default = Total;

//# sourceMappingURL=Total-compiled.js.map