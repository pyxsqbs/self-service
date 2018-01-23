'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QueryRequestForm = require('./QueryRequestForm.css');

var _QueryRequestForm2 = _interopRequireDefault(_QueryRequestForm);

var _antd = require('antd');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _cookie = require('../utils/cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.QueryRequest.QueryRequestForm;
var FormItem = _antd.Form.Item;

var QueryRequestForm = function (_React$Component) {
  _inherits(QueryRequestForm, _React$Component);

  function QueryRequestForm(props) {
    _classCallCheck(this, QueryRequestForm);

    var _this = _possibleConstructorReturn(this, (QueryRequestForm.__proto__ || Object.getPrototypeOf(QueryRequestForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(QueryRequestForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this2.props.dispatch({
            type: 'modelQueryRequest/submitTimes',
            payload: values
          });
          _this2.props.changeCount();
          (0, _cookie.setCookie)('QRFKey', values.luceneKey);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 11 }
        },
        colon: false,
        style: {
          marginBottom: 10
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 24,
            offset: 0
          }
        }
      };

      return _react2.default.createElement(
        _antd.Form,
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          {
            className: _QueryRequestForm2.default.queryRequestFormContainer,
            style: {
              width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%',
              marginLeft: document.body.clientWidth <= 768 ? -20 : 0,
              padding: document.body.clientWidth <= 768 ? '10px 20px' : '0'
            }
          },
          _react2.default.createElement(
            FormItem,
            _extends({
              hasFeedback: true
            }, formItemLayout, {
              label: _react2.default.createElement(
                'span',
                { className: _QueryRequestForm2.default.label },
                L.luceneKey_label
              ),
              className: _QueryRequestForm2.default.formItems
            }),
            getFieldDecorator('luceneKey', {
              initialValue: (0, _cookie.getCookie)('QRFKey') ? (0, _cookie.getCookie)('QRFKey') : ''
            })(_react2.default.createElement(_antd.Input, { placeholder: L.luceneKey_placeholder }))
          ),
          _react2.default.createElement(
            'div',
            {
              className: _QueryRequestForm2.default.buttonContainer
            },
            _react2.default.createElement(
              FormItem,
              _extends({}, tailFormItemLayout, { className: _QueryRequestForm2.default.formItemButton, style: { marginRight: 10 } }),
              _react2.default.createElement(
                _antd.Button,
                {
                  type: 'primary',
                  htmlType: 'submit',
                  className: _QueryRequestForm2.default.button,
                  onClick: function onClick() {
                    return _this3.props.changePageNumber(1);
                  }
                },
                L.button,
                _react2.default.createElement(_antd.Icon, { type: 'search', style: { fontSize: 13, marginRight: -5 } })
              )
            )
          )
        )
      );
    }
  }]);

  return QueryRequestForm;
}(_react2.default.Component);

var WrappedNewEventForm = _antd.Form.create()(QueryRequestForm);

exports.default = WrappedNewEventForm;

//# sourceMappingURL=QueryRequestForm-compiled.js.map