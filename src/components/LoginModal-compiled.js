'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginModal = require('./LoginModal.css');

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _router = require('dva/router');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginModal = function (_React$Component) {
  _inherits(LoginModal, _React$Component);

  function LoginModal(props) {
    _classCallCheck(this, LoginModal);

    var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));

    _this.state = {
      visible: false,
      changeBackground: 'rgba(0,0,0,0)',
      fields: {
        username: {
          value: ''
        }
      }
    };
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.changeBackgroundColor = _this.changeBackgroundColor.bind(_this);
    return _this;
  }

  _createClass(LoginModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible
      });
      if (document.body.clientWidth <= 768) {
        this.changeBackgroundColor();
      }
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({
        visible: false,
        changeBackground: 'rgba(0,0,0,0)'
      });
      this.props.displayModal();
    }
  }, {
    key: 'changeBackgroundColor',
    value: function changeBackgroundColor() {
      this.setState({
        changeBackground: 'rgba(0,0,0,0.7)'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.state.visible || _react2.default.createElement(
          'div',
          {
            className: _LoginModal2.default.modalContainer,
            style: { backgroundColor: this.state.changeBackground },
            onMouseOver: this.changeBackgroundColor },
          _react2.default.createElement(
            'div',
            { className: _LoginModal2.default.loginFormContainer },
            _react2.default.createElement(
              'div',
              { className: _LoginModal2.default.iconContainer },
              _react2.default.createElement(
                _router.Link,
                { activeStyle: { textDecoration: 'none' },
                  onClick: this.handleCancel },
                _react2.default.createElement(_antd.Icon, { type: 'close', className: _LoginModal2.default.closeIcon })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _LoginModal2.default.loginFormContent },
              _react2.default.createElement(_LoginForm2.default, { dispatch: this.props.dispatch, handleCancel: this.handleCancel, loading: this.props.loading })
            )
          )
        )
      );
    }
  }]);

  return LoginModal;
}(_react2.default.Component);

exports.default = LoginModal;

//# sourceMappingURL=LoginModal-compiled.js.map