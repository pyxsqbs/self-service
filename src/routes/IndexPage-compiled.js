'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _IndexPage = require('./IndexPage.css');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _IndexPageHeader = require('../components/IndexPageHeader');

var _IndexPageHeader2 = _interopRequireDefault(_IndexPageHeader);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

var _router = require('dva/router');

var _cookie = require('../utils/cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage(props) {
    _classCallCheck(this, IndexPage);

    var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

    _this.changeLanguage = _this.changeLanguage.bind(_this);
    return _this;
  }

  _createClass(IndexPage, [{
    key: 'changeLanguage',
    value: function changeLanguage() {
      (0, _cookie.setCookie)('language', (0, _cookie.getCookie)('language') === 'chinese' ? 'english' : 'chinese', 1);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if ((0, _cookie.getCookie)('language') === '') {
        (0, _cookie.setCookie)('language', 'chinese', 1);
      }

      if (this.props.modelIndexPage.success) {
        (0, _cookie.setCookie)('success', this.props.modelIndexPage.success, 1);
      }

      if ((0, _cookie.getCookie)('success') === '') {
        _router.hashHistory.replace('/loginContent');
      }

      window.addEventListener('hashchange', function () {
        var route = window.location.hash.substr(1);
        var index = route.indexOf('?');
        route = route.substr(0, index);
        var cookieJson = (0, _cookie.parseCookieToJson)(document.cookie);
        if ((0, _cookie.getCookie)('success') !== '' && JSON.parse(cookieJson).success) {
          if (route === '/loginContent') {
            _router.hashHistory.replace('/');
          }
        } else {
          if (route !== '/loginContent' && !_this2.props.modelIndexPage.success) {
            _router.hashHistory.replace('/loginContent');
          }
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('hashchange');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _IndexPage2.default.bodyBack },
        _react2.default.createElement(_IndexPageHeader2.default, {
          dispatch: this.props.dispatch,
          loading: this.props.loading.global,
          userMsg: this.props.modelIndexPage.userMsg,
          changeLanguage: this.changeLanguage
        }),
        this.props.children,
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global })
      );
    }
  }]);

  return IndexPage;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelIndexPage = _ref.modelIndexPage,
      loading = _ref.loading;
  return { modelIndexPage: modelIndexPage, loading: loading };
})(IndexPage);

//# sourceMappingURL=IndexPage-compiled.js.map