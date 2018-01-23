'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UpdateUserMsgForm = require('./UpdateUserMsgForm.css');

var _UpdateUserMsgForm2 = _interopRequireDefault(_UpdateUserMsgForm);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var UpdateUserMsgForm = function (_React$Component) {
  _inherits(UpdateUserMsgForm, _React$Component);

  function UpdateUserMsgForm(props) {
    _classCallCheck(this, UpdateUserMsgForm);

    var _this = _possibleConstructorReturn(this, (UpdateUserMsgForm.__proto__ || Object.getPrototypeOf(UpdateUserMsgForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.initRequest = _this.initRequest.bind(_this);
    return _this;
  }

  _createClass(UpdateUserMsgForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelIndexPage/loadUserMessage',
        payload: null
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this2.initRequest(values);
        }
      });
    }
  }, {
    key: 'initRequest',
    value: function initRequest(values) {
      this.props.dispatch({
        type: 'modelIndexPage/submitUpdateUserMsgData',
        payload: values
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.userMsg.data;
      console.log(data);
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 20,
            offset: 2
          },
          sm: {
            span: 20,
            offset: 2
          }
        }
      };
      return _react2.default.createElement(
        _antd.Form,
        { onSubmit: this.handleSubmit, style: { width: '100%', height: '100%' } },
        _react2.default.createElement(
          FormItem,
          _extends({
            label: '真实姓名',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入真实姓名,不能为空', whitespace: true }],
            initialValue: data.realName
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({
            label: '性别',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('sex', {
            rules: [{ whitespace: true }],
            initialValue: data.sex === 0 ? '男' : data.sex === 1 ? '女' : ''
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({
            label: '办公电话',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('officePhone', {
            rules: [{ whitespace: true }],
            initialValue: ''
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({
            label: '移动电话',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('telephone', {
            rules: [{ required: true, message: '请输入移动电话,不能为空', whitespace: true }],
            initialValue: data.mobilePhone
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({
            label: 'email',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入email,不能为空', whitespace: true }],
            initialValue: data.email
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({
            label: '部门名称',
            hasFeedback: true
          }, formItemLayout, {
            className: _UpdateUserMsgForm2.default.formItem
          }),
          getFieldDecorator('departmentName', {
            rules: [{ whitespace: true }],
            initialValue: data.orgName
          })(_react2.default.createElement(_antd.Input, null))
        ),
        _react2.default.createElement(
          'div',
          { className: _UpdateUserMsgForm2.default.buttonContainer },
          _react2.default.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, {
              className: _UpdateUserMsgForm2.default.formItemTwo
            }),
            _react2.default.createElement(
              _antd.Button,
              { type: 'primary', htmlType: 'submit', className: _UpdateUserMsgForm2.default.button },
              '\u786E\u5B9A'
            )
          ),
          _react2.default.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, {
              className: _UpdateUserMsgForm2.default.formItemTwo
            }),
            _react2.default.createElement(
              _antd.Button,
              { type: 'default', className: _UpdateUserMsgForm2.default.button },
              '\u4FEE\u6539\u5BC6\u7801'
            )
          )
        )
      );
    }
  }]);

  return UpdateUserMsgForm;
}(_react2.default.Component);

var WrappedUpdateUserMsgForm = _antd.Form.create()(UpdateUserMsgForm);

exports.default = WrappedUpdateUserMsgForm;

//# sourceMappingURL=UpdateUserMsgForm-compiled.js.map