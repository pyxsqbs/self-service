'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RequestHistogram = require('./RequestHistogram.css');

var _RequestHistogram2 = _interopRequireDefault(_RequestHistogram);

var _Histogram = require('./Histogram');

var _Histogram2 = _interopRequireDefault(_Histogram);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.RequestHistogram;

var RequestHistogram = function (_React$Component) {
  _inherits(RequestHistogram, _React$Component);

  function RequestHistogram(props) {
    _classCallCheck(this, RequestHistogram);

    return _possibleConstructorReturn(this, (RequestHistogram.__proto__ || Object.getPrototypeOf(RequestHistogram)).call(this, props));
  }

  _createClass(RequestHistogram, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/') {
        this.props.dispatch({
          type: 'modelIndexPageContent/getRequestHistogramData',
          payload: null
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var mainItems = data.map(function (x) {
        return x.text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条'));
      }).reverse();
      mainItems.splice(4, 1);
      var labelItems = [L.labelItems_PROCESSED, L.labelItems_UNFINISHED, L.labelItems_TO_ACCEPT, L.labelItems_TO_APPROVE,
      // L.labelItems_TO_CONFIRM,
      L.labelItems_CREATED, L.labelItems_REQUESTED];
      var mainColors = ['#9aa6b9', '#948aec', '#ffce3d', '#3dbd7d', '#49a9ee', '#f46165', '#f78e3d'];
      return _react2.default.createElement(
        'div',
        { className: _RequestHistogram2.default.requestHistogramContainer },
        _react2.default.createElement(_Histogram2.default, { labelItems: labelItems, mainItems: mainItems, mainColors: mainColors })
      );
    }
  }]);

  return RequestHistogram;
}(_react2.default.Component);

exports.default = RequestHistogram;

//# sourceMappingURL=RequestHistogram-compiled.js.map