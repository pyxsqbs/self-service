'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EventHistogram = require('./EventHistogram.css');

var _EventHistogram2 = _interopRequireDefault(_EventHistogram);

var _Histogram = require('./Histogram');

var _Histogram2 = _interopRequireDefault(_Histogram);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.EventHistogram;

var EventHistogram = function (_React$Component) {
  _inherits(EventHistogram, _React$Component);

  function EventHistogram(props) {
    _classCallCheck(this, EventHistogram);

    return _possibleConstructorReturn(this, (EventHistogram.__proto__ || Object.getPrototypeOf(EventHistogram)).call(this, props));
  }

  _createClass(EventHistogram, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/') {
        this.props.dispatch({
          type: 'modelIndexPageContent/getEventHistogramData',
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
      mainItems.splice(0, 1);
      mainItems.splice(1, 2);
      mainItems.splice(3, 2);
      var labelItems = [L.labelItems_TO_DISPATCH, L.labelItems_UNSOLVED, L.labelItems_CREATED,
      // L.labelItems_TO_CONFIRM,
      L.labelItems_PROCESSED];
      var mainColors = ['#9aa6b9', '#948aec', '#ffce3d', '#f46165', '#3fb7c2', '#f78e3d'];
      return _react2.default.createElement(
        'div',
        { className: _EventHistogram2.default.eventHistogramContainer },
        _react2.default.createElement(_Histogram2.default, { labelItems: labelItems, mainItems: mainItems, mainColors: mainColors })
      );
    }
  }]);

  return EventHistogram;
}(_react2.default.Component);

exports.default = EventHistogram;

//# sourceMappingURL=EventHistogram-compiled.js.map