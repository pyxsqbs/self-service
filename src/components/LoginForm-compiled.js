'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginForm = require('./LoginForm.css');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _antd = require('antd');

var _router = require('dva/router');

var _cookie = require('../utils/cookie');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageHeader.LoginForm;
var FormItem = _antd.Form.Item;

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.initRequest = _this.initRequest.bind(_this);
    _this.rememberPwd = _this.rememberPwd.bind(_this);
    _this.getPwdRem = _this.getPwdRem.bind(_this);
    _this.initPwdRem = _this.initPwdRem.bind(_this);
    _this.state = {
      currentUser: (0, _cookie.getCookie)('currentUser') ? (0, _cookie.getCookie)('currentUser') : ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this2.initRequest(values);
          _this2.rememberPwd(values);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((0, _cookie.getCookie)('success')) {
        this.props.handleCancel();
      }
      if (nextProps.username !== this.props.username) {
        var value = nextProps.username.value;
        this.getPwdRem(value);
      }
    }
  }, {
    key: 'getPwdRem',
    value: function getPwdRem(value) {
      if ((0, _cookie.getCookie)('remember') !== '') {
        var rememberObj = JSON.parse((0, _cookie.getCookie)('remember'));
        var rememberVal = value ? rememberObj[value] ? rememberObj[value] : '' : '';
        if (rememberVal) {
          var password = rememberVal;
          this.props.form.setFieldsValue({
            password: password ? password : '',
            remember: rememberVal !== ''
          });
        }
      }
    }
  }, {
    key: 'initPwdRem',
    value: function initPwdRem(value) {
      if ((0, _cookie.getCookie)('remember') !== '') {
        var rememberObj = JSON.parse((0, _cookie.getCookie)('remember'));
        var rememberVal = value ? rememberObj[value] ? rememberObj[value] : '' : '';
        if (rememberVal) {
          var password = rememberVal;
          return {
            password: password ? password : '',
            remember: rememberVal !== ''
          };
        } else {
          return {
            password: '',
            remember: false
          };
        }
      }
      return {
        password: '',
        remember: false
      };
    }
  }, {
    key: 'rememberPwd',
    value: function rememberPwd(values) {
      var username = values.username,
          password = values.password,
          remember = values.remember;

      var rememberVal = (0, _cookie.getCookie)('remember') ? JSON.parse((0, _cookie.getCookie)('remember')) : {};
      var rememberObj = {};
      rememberObj[username] = password;
      if (remember) {
        Object.assign(rememberVal, rememberObj);
        (0, _cookie.setCookie)('remember', JSON.stringify(rememberVal), 7);
      } else {
        delete rememberVal[username];
        (0, _cookie.setCookie)('remember', JSON.stringify(rememberVal), 7);
      }
    }
  }, {
    key: 'initRequest',
    value: function initRequest(values) {
      this.props.dispatch({
        type: 'modelIndexPage/submitLoginData',
        payload: values
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement(
        _antd.Form,
        { onSubmit: this.handleSubmit, className: 'login-form', style: { width: '100%', height: '100%' } },
        _react2.default.createElement(
          FormItem,
          null,
          _react2.default.createElement(
            'div',
            { className: _LoginForm2.default.formHeader },
            L.formHeader
          ),
          _react2.default.createElement('div', { className: _LoginForm2.default.formDivider })
        ),
        _react2.default.createElement(
          FormItem,
          null,
          getFieldDecorator('username', {
            rules: [{ required: true, message: L.username_message }],
            initialValue: this.state.currentUser
          })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user', style: { fontSize: 13 } }), placeholder: L.username_placeholder }))
        ),
        _react2.default.createElement(
          FormItem,
          null,
          getFieldDecorator('password', {
            rules: [{ required: true, message: L.password_message }],
            initialValue: this.initPwdRem(this.state.currentUser).password
          })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { fontSize: 13 } }), type: 'password',
            placeholder: L.password_placeholder }))
        ),
        _react2.default.createElement(
          FormItem,
          null,
          getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: this.initPwdRem(this.state.currentUser).remember
          })(_react2.default.createElement(
            _antd.Checkbox,
            null,
            L.remember
          )),
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary',
              htmlType: 'submit',
              className: 'login-form-button',
              style: { width: '100%', marginTop: '10px' },
              loading: this.props.loading
            },
            L.login_form_button
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

var WrappedLoginForm = _antd.Form.create({
  onFieldsChange: function onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(LoginForm);

exports.default = WrappedLoginForm;

//# sourceMappingURL=LoginForm-compiled.js.map