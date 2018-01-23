'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _RequestDetails = require('./RequestDetails.css');

var _RequestDetails2 = _interopRequireDefault(_RequestDetails);

var _antd = require('antd');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

var _router = require('dva/router');

var _RequestAttachmentTable = require('../components/RequestAttachmentTable');

var _RequestAttachmentTable2 = _interopRequireDefault(_RequestAttachmentTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.RequestDetails;
var TabPane = _antd.Tabs.TabPane;
var Option = _antd.Select.Option;

var RequestDetails = function (_React$Component) {
  _inherits(RequestDetails, _React$Component);

  function RequestDetails(props) {
    _classCallCheck(this, RequestDetails);

    var _this = _possibleConstructorReturn(this, (RequestDetails.__proto__ || Object.getPrototypeOf(RequestDetails)).call(this, props));

    _this.handleMenuClick = _this.handleMenuClick.bind(_this);
    _this.handleTabsChange = _this.handleTabsChange.bind(_this);
    _this.handleAssociatedOrderChange = _this.handleAssociatedOrderChange.bind(_this);
    return _this;
  }

  _createClass(RequestDetails, [{
    key: 'handleMenuClick',
    value: function handleMenuClick(e) {
      // message.info('Click on menu item.');
      // console.log('click', e);
    }
  }, {
    key: 'handleTabsChange',
    value: function handleTabsChange(key) {
      // console.log(key);
    }
  }, {
    key: 'handleAssociatedOrderChange',
    value: function handleAssociatedOrderChange(value) {
      // console.log(`selected ${value}`)
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelRequestDetails/getContentHeaderMsgData',
        payload: this.props.params.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var modelState = this.props.modelRequestDetails;
      var buttonStyle = {
        margin: '3px'
      };
      var menu = _react2.default.createElement(
        _antd.Menu,
        { onClick: this.handleMenuClick },
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '1' },
          '\u6D41\u7A0B\u4FE1\u606F'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '2' },
          '\u5904\u7406\u65E5\u5FD7'
        )
      );
      var data = modelState.contentHeaderData.data;
      var data5 = modelState.requestAttachmentData;
      var titleButtonStyle = {
        padding: '0 7px',
        margin: '4px 7px',
        marginRight: 0
      };
      var contentHeaderMsg = [{
        label: L.contentHeaderMsg_WORK_ORDER_NUMBER,
        value: data ? data.srmNo : ''
      }, {
        label: L.contentHeaderMsg_REQUESTER,
        value: data ? data.reqName : ''
      }, {
        label: L.contentHeaderMsg_CREATE_TIME,
        value: data ? data.date : ''
      }, {
        label: L.contentHeaderMsg_CURRENT_PROCESSOR,
        value: data ? data.flowMangerUserrealname : ''
      }, {
        label: L.contentHeaderMsg_STATE,
        value: data ? data.status : ''
      }];

      var tabPane = [{
        title: L.tabPane_title_DETAILED_INFORMATION,
        content: [{
          label: L.tabPane_content_CAPTION,
          value: data ? data.srmTopic : '',
          width: '100%'
        }, {
          label: L.tabPane_content_DETAILS,
          value: data ? data.srmContent : '',
          width: '100%'
        }, {
          label: L.tabPane_content_CLASSIFICATION,
          value: data ? data.srmClassName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_PRIORITY_LEVEL,
          value: '',
          width: '50%'
        }, {
          label: L.tabPane_content_EMERGENCY_DEGREE,
          value: data ? data.effectDegreeName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_INFLUENCE_DEGREE,
          value: '',
          width: '50%'
        }, {
          label: L.tabPane_content_EXPECTED_COMPLETION_TIME,
          value: data ? data.srmOverdueDate : '',
          width: '50%'
        }, {
          label: L.tabPane_content_CLOSE_TIME,
          value: '',
          width: '50%'
        }, {
          label: L.tabPane_content_CLOSE_CODE,
          value: '',
          width: '50%'
        }, {
          label: L.tabPane_content_SATISFACTION_DEGREE,
          value: L.tabPane_content_NO_EVALUATION,
          width: '50%'
        }]
      }, {
        title: L.tabPane_title_ATTACHMENT,
        table: [_react2.default.createElement(_RequestAttachmentTable2.default, {
          key: '1',
          id: this.props.params.id,
          dispatch: this.props.dispatch,
          data: data5
        })]
      }];
      // }, {
      //   title: '请求人信息',
      //   disabled: true,
      //   content: [{
      //     label: '用户名',
      //     value: (data) ? data.reqUsername : '',
      //     width: '50%',
      //   }, {
      //     label: '用户编号',
      //     value: (data) ? data.reqNo : '',
      //     width: '50%',
      //   }, {
      //     label: '姓名（中）',
      //     value: (data) ? data.req_Username : '',
      //     width: '50%',
      //   }, {
      //     label: '性别',
      //     value: (data) ? data.reqSex : '',
      //     width: '50%',
      //   }, {
      //     label: '移动电话',
      //     value: (data) ? data.reqMobile : '',
      //     width: '50%',
      //   }, {
      //     label: '办公电话',
      //     value: (data) ? data.reqPhone : '',
      //     width: '50%',
      //   }, {
      //     label: '邮件',
      //     value: (data) ? data.reqEmail : '',
      //     width: '50%',
      //   }, {
      //     label: '部门名称',
      //     value: (data) ? data.reqDeptName : '',
      //     width: '50%',
      //   }, {
      //     label: '其他联系方式',
      //     value: (data) ? data.reqOtherConn : '',
      //     width: '50%',
      //   },],
      // }, {
      //   title: '关联CI',
      //   disabled: true,
      //   titleButton: [
      //     <Button type="default" style={titleButtonStyle} key="1">
      //       <Icon type="search" style={{fontSize: 18}}/>
      //     </Button>,
      //     <Button type="default" style={titleButtonStyle} key="2">
      //       <Icon type="reload" style={{fontSize: 18}}/>
      //     </Button>,
      //   ],
      //   table: [],
      // }, {
      //   title: '关联工单',
      //   disabled: true,
      //   content: [],
      // }, {
      //   title: '关联任务',
      //   disabled: true,
      //   titleButton: [
      //     <Button type="default" style={titleButtonStyle} key="1">
      //       <Icon type="plus" style={{fontSize: 18}}/>
      //     </Button>,
      //     <Button type="default" style={titleButtonStyle} key="2">
      //       <Icon type="reload" style={{fontSize: 18}}/>
      //     </Button>,
      //   ],
      //   content: [],
      // }, {
      //   title: '附件',
      //   disabled: true,
      //   titleButton: [
      //     <Button type="default" style={titleButtonStyle} key="1">
      //       <Icon type="download" style={{fontSize: 18}}/>
      //     </Button>,
      //   ],
      //   content: [],
      // },];
      return _react2.default.createElement(
        'div',
        { className: _RequestDetails2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _RequestDetails2.default.requestDetailsContainer },
          _react2.default.createElement(
            'div',
            { className: _RequestDetails2.default.requestDetailsHeader },
            _react2.default.createElement(
              'div',
              { className: _RequestDetails2.default.headerOptionsContainer },
              _react2.default.createElement(
                'div',
                { className: _RequestDetails2.default.title },
                modelState.contentHeaderData.data ? modelState.contentHeaderData.data.srmTopic : '',
                _react2.default.createElement(
                  _router.Link,
                  { onClick: function onClick() {
                      return history.back();
                    }, activeStyle: { textDecoration: 'none' }, className: _RequestDetails2.default.titleGoBack },
                  _react2.default.createElement(_antd.Icon, { type: 'arrow-left', style: { fontSize: 22 } }),
                  L.titleGoBack
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _RequestDetails2.default.requestDetailsContentContainer,
              style: {
                width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
              }
            },
            _react2.default.createElement(
              'div',
              { className: _RequestDetails2.default.requestDetailsContent },
              _react2.default.createElement(
                'div',
                { className: _RequestDetails2.default.contentHeaderMsg },
                contentHeaderMsg.map(function (x) {
                  return _react2.default.createElement(
                    'div',
                    { className: _RequestDetails2.default.contentHeaderMsgItem, key: x.label },
                    _react2.default.createElement(
                      'span',
                      null,
                      x.label,
                      '\uFF1A',
                      _react2.default.createElement(
                        'span',
                        { className: _RequestDetails2.default.contentHeaderMsgItemValue },
                        x.value
                      )
                    )
                  );
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _RequestDetails2.default.contentTabs },
                _react2.default.createElement(
                  _antd.Tabs,
                  { defaultActiveKey: tabPane[0].title,
                    onChange: this.handleTabsChange,
                    tabPosition: document.body.clientWidth <= 768 ? "top" : "left",
                    style: { height: document.body.clientWidth <= 768 ? "auto" : 480, width: '100%' },
                    tabBarStyle: { padding: '25px 0' }
                  },
                  tabPane.map(function (x) {
                    return _react2.default.createElement(
                      TabPane,
                      { tab: x.title, key: x.title,
                        style: { height: document.body.clientWidth <= 768 ? "auto" : 480 },
                        disabled: x.disabled ? x.disabled : false
                      },
                      _react2.default.createElement(
                        'div',
                        { className: _RequestDetails2.default.tabItemTitle },
                        x.title,
                        x.titleButton ? x.titleButton.map(function (xs) {
                          return xs;
                        }) : ''
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _RequestDetails2.default.tabItemContent },
                        x.content && Array.isArray(x.content) ? x.content.map(function (xs) {
                          return _react2.default.createElement(
                            'div',
                            {
                              className: _RequestDetails2.default.tabItemContentItem,
                              style: { width: xs.width },
                              key: xs.label
                            },
                            _react2.default.createElement(
                              'label',
                              { htmlFor: 'value', className: _RequestDetails2.default.tabItemContentItemLabel },
                              xs.label,
                              '\uFF1A '
                            ),
                            _react2.default.createElement(
                              'span',
                              { name: 'value', className: _RequestDetails2.default.tabItemContentItemValue },
                              xs.value
                            )
                          );
                        }) : '',
                        x.table && Array.isArray(x.table) ? x.table.map(function (xs) {
                          return xs;
                        }) : ''
                      )
                    );
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return RequestDetails;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelRequestDetails = _ref.modelRequestDetails,
      loading = _ref.loading;
  return { modelRequestDetails: modelRequestDetails, loading: loading };
})(RequestDetails);

//# sourceMappingURL=RequestDetails-compiled.js.map