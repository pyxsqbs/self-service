'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Histogram = require('./Histogram.css');

var _Histogram2 = _interopRequireDefault(_Histogram);

var _core = require('echarts-for-react/lib/core');

var _core2 = _interopRequireDefault(_core);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/lib/chart/bar');

require('echarts/lib/component/tooltip');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Histogram = function (_React$Component) {
  _inherits(Histogram, _React$Component);

  function Histogram(props) {
    _classCallCheck(this, Histogram);

    var _this = _possibleConstructorReturn(this, (Histogram.__proto__ || Object.getPrototypeOf(Histogram)).call(this, props));

    _this.state = {
      labelItems: [],
      mainItems: [],
      mainColors: []
    };
    return _this;
  }

  _createClass(Histogram, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        labelItems: [].concat(_toConsumableArray(nextProps.labelItems)),
        mainItems: [].concat(_toConsumableArray(nextProps.mainItems)),
        mainColors: [].concat(_toConsumableArray(nextProps.mainColors))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var labelItems = this.state.labelItems;
      var labelData = [];
      for (var i = 0; i < labelItems.length; i++) {
        labelData.push({
          value: labelItems[i],
          textStyle: {
            color: '#939cae',
            fontFamily: 'Microsoft YaHei'
          }
        });
      }

      var mainItems = this.state.mainItems;
      var mainColors = this.state.mainColors;
      var mainData = [];
      for (var _i = 0; _i < mainItems.length; _i++) {
        mainData.push({
          name: labelItems[_i],
          value: mainItems[_i],
          itemStyle: {
            normal: {
              color: mainColors[_i]
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              offset: [0, -1],
              textStyle: {
                color: '#939cae',
                fontFamily: 'Microsoft YaHei',
                fontSize: 11
              }
            }
          }
        });
      }

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '1%',
          top: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: ['#eeeeee'],
              width: 1,
              type: 'solid'
            }
          },
          splitNumber: 9
        },
        yAxis: {
          type: 'category',
          data: labelData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'number',
          type: 'bar',
          data: mainData,
          barWidth: '16px',
          barMinHeight: 1
        }]
      };

      return _react2.default.createElement(
        'div',
        { className: _Histogram2.default.histogramContainer },
        _react2.default.createElement(_core2.default, { echarts: _echarts2.default, option: option, style: { height: '100%' } })
      );
    }
  }]);

  return Histogram;
}(_react2.default.Component);

exports.default = Histogram;

//# sourceMappingURL=Histogram-compiled.js.map