'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginStart = require('./LoginStart.css');

var _LoginStart2 = _interopRequireDefault(_LoginStart);

var _router = require('dva/router');

var _LoginModal = require('./LoginModal');

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageHeader;

var LoginStart = function (_React$Component) {
  _inherits(LoginStart, _React$Component);

  function LoginStart(props) {
    _classCallCheck(this, LoginStart);

    var _this = _possibleConstructorReturn(this, (LoginStart.__proto__ || Object.getPrototypeOf(LoginStart)).call(this, props));

    _this.state = {
      visible: false
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.displayModal = _this.displayModal.bind(_this);
    return _this;
  }

  _createClass(LoginStart, [{
    key: 'showModal',
    value: function showModal(e) {
      if (e.button === 0) {
        this.setState({
          visible: true
        });
      }
      this.props.dispatch({
        type: 'modelIndexPage/afterLoginRoute',
        payload: ''
      });
    }
  }, {
    key: 'displayModal',
    value: function displayModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _LoginStart2.default.loginStartContainer },
        _react2.default.createElement(
          _router.Link,
          { activeStyle: { textDecoration: 'none' }, className: _LoginStart2.default.login,
            onMouseDown: this.showModal },
          L.LOGIN
        ),
        ';',
        _react2.default.createElement(_LoginModal2.default, { visible: this.state.visible, dispatch: this.props.dispatch, loading: this.props.loading,
          displayModal: this.displayModal })
      );
    }
  }]);

  return LoginStart;
}(_react2.default.Component);

exports.default = LoginStart;

//# sourceMappingURL=LoginStart-compiled.js.map