'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewRequestForm = require('./NewRequestForm.css');

var _NewRequestForm2 = _interopRequireDefault(_NewRequestForm);

var _antd = require('antd');

var _RecordTable = require('./RecordTable');

var _RecordTable2 = _interopRequireDefault(_RecordTable);

var _toOptions = require('../utils/toOptions');

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

var _DomainPort = require('../utils/DomainPort');

var _DomainPort2 = _interopRequireDefault(_DomainPort);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _zh_TW = require('antd/lib/locale-provider/zh_TW');

var _zh_TW2 = _interopRequireDefault(_zh_TW);

var _cookie = require('../utils/cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.NewRequest.NewRequestForm;
var FormItem = _antd.Form.Item;
var TextArea = _antd.Input.TextArea;

var Option = _antd.Select.Option;

var NewRequestForm = function (_React$Component) {
  _inherits(NewRequestForm, _React$Component);

  function NewRequestForm(props) {
    _classCallCheck(this, NewRequestForm);

    var _this = _possibleConstructorReturn(this, (NewRequestForm.__proto__ || Object.getPrototypeOf(NewRequestForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.normFile = _this.normFile.bind(_this);
    _this.uploadData = _this.uploadData.bind(_this);
    _this.removeFile = _this.removeFile.bind(_this);
    _this.handleChangeUpload = _this.handleChangeUpload.bind(_this);
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(NewRequestForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelNewRequest/loadUserMessage',
        payload: null
      });
      this.props.dispatch({
        type: 'modelNewRequest/loadDepartmentName',
        payload: null
      });
      this.props.dispatch({
        type: 'modelNewRequest/loadClassification',
        payload: null
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      for (var i = 0; i < this.state.data.length; i++) {
        // this.removeFile(this.state.data[i])
      }
      this.setState({
        data: []
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          // console.log('Received values of form: ', values);
          values.reqDeptCode = _this2.props.userMsg.data.reqDeptCode;
          if (values.departmentName === _this2.props.departmentName[0].text) {
            values.departmentName = _this2.props.departmentName[0].id;
          }
          _this2.props.dispatch({
            type: 'modelNewRequest/submitWorkOrder',
            payload: values
          });
        }
      });
    }
  }, {
    key: 'handleChangeUpload',
    value: function handleChangeUpload(info) {
      if (info.fileList) {
        var isArray = true;
        for (var i = 0; i < info.fileList.length; i++) {
          if (!Array.isArray(info.fileList[i].response)) {
            isArray = false;
            break;
          }
        }
        if (isArray) {
          this.setState({
            data: info.fileList
          });
        }
      }

      if (info.file.status === 'done') {
        _antd.message.success(info.file.name + ' ' + L.done);
      } else if (info.file.status === 'error') {
        var notificationConfig = function notificationConfig(msg, type, des) {
          _antd.notification[type]({
            message: msg,
            placement: 'topLeft',
            description: des
          });
        };
        var msg = info.file.response.message;
        if (msg.indexOf('size of') !== -1 && msg.indexOf('bytes') !== -1) {
          var numberString = msg.slice(msg.indexOf('size of') + 8, msg.indexOf('bytes') - 1);
          var number = parseFloat(numberString) / 1024 / 1024;
          msg = info.file.name + ' ' + L.msg + '!';
          notificationConfig(msg, 'error', L.msg_error + ' ' + number.toFixed(2) + ' MB');
        } else {
          notificationConfig(info.file.name + ' ' + L.msg + '!', 'error', msg);
        }
      }
    }
  }, {
    key: 'removeFile',
    value: function removeFile(file) {
      if (Array.isArray(file.response)) {
        this.props.dispatch({
          type: 'modelNewRequest/removeFile',
          payload: file.response[0].id
        });
      }
    }
  }, {
    key: 'uploadData',
    value: function uploadData(file) {
      return {
        size: file.size,
        lastModifiedDate: file.lastModifiedDate,
        type: file.type,
        name: file.name,
        id: file.uid
        // objType: 20,
      };
    }
  }, {
    key: 'normFile',
    value: function normFile(e) {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: (0, _cookie.getCookie)('language') !== 'english' ? 2 : 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: (0, _cookie.getCookie)('language') !== 'english' ? 20 : 16 }
        },
        colon: false,
        style: {
          marginBottom: 10
        }
      };
      var formItemLayoutChildren = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: (0, _cookie.getCookie)('language') !== 'english' ? 5 : 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: (0, _cookie.getCookie)('language') !== 'english' ? 19 : 16 }
        },
        colon: false,
        style: {
          marginBottom: 10
        }
      };
      var formItemLayoutChildrenTwo = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 10 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 }
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
            span: 14,
            offset: 6
          }
        }
      };

      var columns = [{
        title: L.columns_FILRNAME,
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: L.columns_SIZE,
        dataIndex: 'size',
        key: 'size'
      }, {
        title: L.columns_UPLOADMAN,
        dataIndex: 'uploadMan',
        key: 'uploadMan'
      }, {
        title: L.columns_UPLOADTIME,
        dataIndex: 'uploadTime',
        key: 'uploadTime'
      }, {
        title: L.columns_ATTACHMENTTYPE,
        dataIndex: 'attachmentType',
        key: 'attachmentType'
      }];

      var data = this.state.data.map(function (x) {
        return {
          key: x.response[0].id,
          fileName: x.name,
          size: (x.size / 1024 / 1024).toFixed(2) + ' MB',
          uploadMan: x.response[0].createUserName,
          uploadTime: x.response[0].createdate,
          attachmentType: x.type
        };
      });

      var departmentNameOptions = this.props.departmentName.length === 0 ? null : this.props.departmentName.map(function (x) {
        return _react2.default.createElement(
          Option,
          { key: x.id, value: x.id.toString() },
          x.text
        );
      });

      var viewJson = function viewJson(array) {
        if (!array) {
          return;
        }
        var arrayN = [];
        for (var i = 0; i < array.length; i++) {
          if (!array[i].pid) {
            arrayN.push({
              value: array[i].value,
              label: array[i].label,
              children: []
            });
          }
        }
        for (var _i = 0; _i < arrayN.length; _i++) {
          for (var j = 0; j < array.length; j++) {
            if (arrayN[_i].value === array[j].pid) {
              arrayN[_i].children.push({
                value: array[j].value,
                label: array[j].label,
                children: []
              });
            }
          }
        }
        for (var _i2 = 0; _i2 < arrayN.length; _i2++) {
          for (var _j = 0; _j < arrayN[_i2].children.length; _j++) {
            for (var m = 0; m < array.length; m++) {
              if (array[m].pid === arrayN[_i2].children[_j].value) {
                arrayN[_i2].children[_j].children.push({
                  value: array[m].value,
                  label: array[m].label,
                  children: []
                });
              }
            }
          }
        }
        return arrayN;
      };
      // console.log(this.props.classification);
      var classificationOptions = viewJson(this.props.classification);
      (0, _toOptions.toOptions)(this.props.classification);

      return _react2.default.createElement(
        'div',
        { className: _NewRequestForm2.default.newRequestFormContainer },
        _react2.default.createElement(
          _antd.Form,
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            FormItem,
            _extends({
              label: _react2.default.createElement(
                'span',
                { className: _NewRequestForm2.default.label },
                L.title_label
              ),
              hasFeedback: true
            }, formItemLayout),
            getFieldDecorator('title', {
              rules: [{ required: true, message: L.title_message, whitespace: true }],
              initialValue: L.title_initialValue1 + (this.props.userMsg.data.reqName ? this.props.userMsg.data.reqName : '') + L.title_initialValue2
            })(_react2.default.createElement(_antd.Input, null))
          ),
          _react2.default.createElement(
            FormItem,
            _extends({
              label: _react2.default.createElement(
                'span',
                { className: _NewRequestForm2.default.label },
                L.detail_label
              ),
              hasFeedback: true
            }, formItemLayout),
            getFieldDecorator('detail', {
              rules: [{ required: true, message: L.detail_message }]
            })(_react2.default.createElement(TextArea, { autosize: { minRows: 2, maxRows: 6 } }))
          ),
          _react2.default.createElement(
            'div',
            { className: _NewRequestForm2.default.formItemLayoutChildContainer },
            _react2.default.createElement(
              'div',
              {
                className: _NewRequestForm2.default.formItemLayoutChildren,
                style: {
                  width: document.body.clientWidth <= 768 ? '' : (0, _cookie.getCookie)('language') !== 'english' ? '54.8%' : '58.8%'
                }
              },
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u7D27\u6025\u5EA6'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildren, {
                  style: { display: 'none' }
                }),
                getFieldDecorator('emergencyDegree', {
                  rules: [{ required: true, message: '请输入紧急度,不能为空' }],
                  initialValue: '中'
                })(_react2.default.createElement(_antd.Input, { disabled: true }))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    L.classification_label
                  ),
                  hasFeedback: true
                }, formItemLayoutChildren),
                getFieldDecorator('classification', {
                  rules: [{ type: 'array', required: true, message: L.classification_message }]
                })(_react2.default.createElement(_antd.Cascader, { options: classificationOptions,
                  expandTrigger: 'hover',
                  changeOnSelect: true,
                  showSearch: true,
                  placeholder: L.classification_placeholder,
                  notFoundContent: L.classification_notFoundContent
                }))
              ),
              _react2.default.createElement(
                _antd.LocaleProvider,
                { locale: (0, _cookie.getCookie)('language') !== 'english' ? {} : _en_US2.default },
                _react2.default.createElement(
                  FormItem,
                  _extends({
                    hasFeedback: true
                  }, formItemLayoutChildren, {
                    label: _react2.default.createElement(
                      'span',
                      { className: _NewRequestForm2.default.label },
                      L.occurrenceTime_label
                    )
                  }),
                  getFieldDecorator('occurrenceTime', {
                    rules: [{ type: 'object', required: true, message: L.occurrenceTime_message }]
                  })(_react2.default.createElement(_antd.DatePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss', style: { width: '100%' },
                    placeholder: L.occurrenceTime_placeholder }))
                )
              )
            ),
            _react2.default.createElement(
              'div',
              {
                className: _NewRequestForm2.default.newRequestTableContainer,
                style: {
                  marginLeft: document.body.clientWidth <= 768 ? '' : (0, _cookie.getCookie)('language') !== 'english' ? 0 : 81
                }
              },
              _react2.default.createElement(
                FormItem,
                {
                  style: { marginLeft: document.body.clientWidth <= 768 ? 0 : 73.6, marginBottom: 0, marginTop: -1 } },
                getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile
                })(_react2.default.createElement(
                  _antd.Upload,
                  { action: _DomainPort2.default + _api2.default + "/systemFileInfoAction/upload",
                    listType: 'text',
                    multiple: true,
                    data: this.uploadData,
                    onRemove: this.removeFile,
                    onChange: this.handleChangeUpload
                  },
                  _react2.default.createElement(
                    _antd.Button,
                    { style: { width: '100%', height: 32 } },
                    _react2.default.createElement(_antd.Icon, { type: 'upload' }),
                    '\xA0\xA0',
                    L.upload
                  )
                ))
              ),
              _react2.default.createElement(
                'div',
                { style: {
                    overflow: document.body.clientWidth <= 768 ? 'scroll' : '',
                    width: document.body.clientWidth <= 768 ? document.body.clientWidth - 20 : '100%'
                  } },
                _react2.default.createElement(
                  'div',
                  { className: _NewRequestForm2.default.newRequestTable,
                    style: {
                      width: document.body.clientWidth <= 768 ? 480 : '100%',
                      marginLeft: document.body.clientWidth <= 768 ? -20 : 20,
                      paddingLeft: document.body.clientWidth <= 768 ? 0 : 40
                    } },
                  _react2.default.createElement(_RecordTable2.default, { columns: columns, data: data, tid: 'newRequestTable' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _NewRequestForm2.default.requestInformation, style: { display: 'none' } },
            '\u8BF7\u6C42\u4EBA\u4FE1\u606F'
          ),
          _react2.default.createElement(
            'div',
            { className: _NewRequestForm2.default.formItemLayoutChildContainerTwo, style: { display: 'none' } },
            _react2.default.createElement(
              'div',
              { className: _NewRequestForm2.default.formItemLayoutChildrenTwo },
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u7528\u6237\u7F16\u53F7'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('userId', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqNo
                })(_react2.default.createElement(_antd.Input, { disabled: true }))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u7528\u6237\u540D'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('username', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqUsername
                })(_react2.default.createElement(_antd.Input, { disabled: true }))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u8BF7\u6C42\u4EBA\u59D3\u540D'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('requestName', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqName
                })(_react2.default.createElement(_antd.Input, { disabled: true }))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u79FB\u52A8\u7535\u8BDD'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('telephone', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqMobile
                })(_react2.default.createElement(_antd.Input, null))
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _NewRequestForm2.default.formItemLayoutChildrenTwo },
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u90E8\u95E8\u540D\u79F0'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('departmentName', {
                  rules: [{}],
                  initialValue: this.props.departmentName.length === 0 ? null : this.props.departmentName[0].text
                })(_react2.default.createElement(
                  _antd.Select,
                  null,
                  departmentNameOptions
                ))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u529E\u516C\u7535\u8BDD'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('officePhone', {
                  rules: [{}]
                })(_react2.default.createElement(_antd.Input, null))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u90AE\u4EF6'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('email', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqEmail
                })(_react2.default.createElement(_antd.Input, null))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({
                  label: _react2.default.createElement(
                    'span',
                    { className: _NewRequestForm2.default.label },
                    '\u5176\u4ED6\u8054\u7CFB\u65B9\u5F0F'
                  ),
                  hasFeedback: true
                }, formItemLayoutChildrenTwo),
                getFieldDecorator('otherContact', {
                  rules: [{}]
                })(_react2.default.createElement(_antd.Input, null))
              )
            )
          ),
          _react2.default.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, { style: { marginBottom: document.body.clientWidth <= 768 ? 24 : 50 } }),
            _react2.default.createElement(
              _antd.Button,
              { type: 'primary', htmlType: 'submit', className: _NewRequestForm2.default.button,
                loading: this.props.loading },
              L.button,
              ' '
            )
          )
        )
      );
    }
  }]);

  return NewRequestForm;
}(_react2.default.Component);

var WrappedNewRequestForm = _antd.Form.create()(NewRequestForm);

exports.default = WrappedNewRequestForm;

//# sourceMappingURL=NewRequestForm-compiled.js.map