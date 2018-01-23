'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SystemInforms = require('./SystemInforms.css');

var _SystemInforms2 = _interopRequireDefault(_SystemInforms);

var _router = require('dva/router');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.SystemInforms;
var data = [
  // '自助服务台20170731更新公告',
  // '8月2日-8月5日网络变更通告',
  // '8月7日邮箱域名新增入口IP通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日-8月5日网络变更通告',
  // '8月7日邮箱域名新增入口IP通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
];

var SystemInforms = function (_React$Component) {
  _inherits(SystemInforms, _React$Component);

  function SystemInforms(props) {
    _classCallCheck(this, SystemInforms);

    var _this = _possibleConstructorReturn(this, (SystemInforms.__proto__ || Object.getPrototypeOf(SystemInforms)).call(this, props));

    _this.state = {
      data: [],
      display: 'none',
      moreDisplay: 'flex'
    };
    return _this;
  }

  _createClass(SystemInforms, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/') {
        this.props.dispatch({
          type: 'modelIndexPageContent/getSystemInformsData',
          payload: null
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // const data = nextProps.data.slice(0, 8).map(x => x);
      this.setState({
        data: [].concat(data)
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.state.data || prevProps !== this.props) {
        if (this.state.data.length === 0) {
          this.setState({
            display: 'flex',
            moreDisplay: 'none'
          });
        } else {
          this.setState({
            display: 'none',
            moreDisplay: 'flex'
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var contentItems = this.state.data.map(function (x, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: _SystemInforms2.default.contentItem },
          x
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _SystemInforms2.default.systemInformsContainer },
        _react2.default.createElement(
          'div',
          { className: _SystemInforms2.default.systemInformsHeader },
          L.systemInformsHeader,
          _react2.default.createElement(
            _router.Link,
            { to: '/', activeStyle: { textDecoration: 'none' } },
            _react2.default.createElement(
              'div',
              { className: _SystemInforms2.default.more, style: { display: this.state.moreDisplay } },
              L.more
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _SystemInforms2.default.systemInformsContent },
          contentItems,
          _react2.default.createElement(
            'div',
            { className: _SystemInforms2.default.systemInformsNoData, style: { display: this.state.display } },
            _react2.default.createElement(
              'div',
              { className: _SystemInforms2.default.systemInformsNoDataMsg },
              L.systemInformsNoDataMsg
            ),
            _react2.default.createElement(
              'div',
              { className: _SystemInforms2.default.showMoreContainer },
              _react2.default.createElement(
                'div',
                { className: _SystemInforms2.default.showMoreContainerTwo },
                _react2.default.createElement(
                  _router.Link,
                  { to: '/', activeStyle: { textDecoration: 'none' } },
                  _react2.default.createElement(
                    'div',
                    { className: _SystemInforms2.default.showMore },
                    L.showMore
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SystemInforms;
}(_react2.default.Component);

exports.default = SystemInforms;

//# sourceMappingURL=SystemInforms-compiled.js.map