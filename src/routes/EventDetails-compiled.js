'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _router = require('dva/router');

var _EventDetails = require('./EventDetails.css');

var _EventDetails2 = _interopRequireDefault(_EventDetails);

var _antd = require('antd');

var _SolutionAttachmentTable = require('../components/SolutionAttachmentTable');

var _SolutionAttachmentTable2 = _interopRequireDefault(_SolutionAttachmentTable);

var _EventAttachmentTable = require('../components/EventAttachmentTable');

var _EventAttachmentTable2 = _interopRequireDefault(_EventAttachmentTable);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.EventDetails;
var TabPane = _antd.Tabs.TabPane;
var Option = _antd.Select.Option;

var EventDetails = function (_React$Component) {
  _inherits(EventDetails, _React$Component);

  function EventDetails(props) {
    _classCallCheck(this, EventDetails);

    var _this = _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props));

    _this.handleMenuClick = _this.handleMenuClick.bind(_this);
    _this.handleTabsChange = _this.handleTabsChange.bind(_this);
    _this.handleAssociatedOrderChange = _this.handleAssociatedOrderChange.bind(_this);
    return _this;
  }

  _createClass(EventDetails, [{
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
        type: 'modelEventDetails/getContentHeaderMsgData',
        payload: this.props.params.id
      });
      this.props.dispatch({
        type: 'modelEventDetails/getSolutionData',
        payload: this.props.params.id
      });
      // this.props.dispatch({
      //   type: 'modelEventDetails/getAssociatedOrderData',
      //   payload: null,
      // })
    }
  }, {
    key: 'render',
    value: function render() {
      var modelState = this.props.modelEventDetails;
      // console.log(modelState);
      var buttonStyle = {
        margin: '3px'
      };
      var menu = _react2.default.createElement(
        _antd.Menu,
        { onClick: this.handleMenuClick },
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '1' },
          '\u6253\u5370\u9884\u89C8'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '2' },
          '\u5BFC\u51FA\u5904\u7406\u8FC7\u7A0B'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '3' },
          '\u6D41\u7A0B\u4FE1\u606F'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '4' },
          '\u5904\u7406\u65E5\u5FD7'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '5' },
          '\u5B58\u4E3A\u6A21\u677F'
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '6' },
          '\u751F\u6210\u77E5\u8BC6'
        )
      );
      var data = modelState.contentHeaderData.data;
      var data2 = modelState.solutionData.data;
      var data3 = modelState.associatedOrderData;
      var data4 = modelState.solutionAttachmentData;
      var data5 = modelState.eventAttachmentData;
      var titleButtonStyle = {
        padding: '0 7px',
        margin: '4px 7px',
        marginRight: 0
      };
      var contentHeaderMsg = [{
        label: L.contentHeaderMsg_WORK_ORDER_NUMBER,
        value: data ? data.incNo : ''
      }, {
        label: L.contentHeaderMsg_REQUESTER,
        value: data ? data.requesterName : ''
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
          value: data ? data.incTopic : '',
          width: '100%'
        }, {
          label: L.tabPane_content_DETAILS,
          value: data ? data.incContent : '',
          width: '100%'
        }, {
          label: L.tabPane_content_ENTERPRISE_NAME,
          value: data ? data.geogName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_WAIT_CODE,
          value: data ? data.pendingCode : '',
          width: '50%'
        }, {
          label: L.tabPane_content_CLASSIFICATION,
          value: data ? data.suentry : '',
          width: '50%'
        }, {
          label: L.tabPane_content_EVENT_SOURCE,
          value: data ? data.incOriginName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_EVENT_PROPERTY,
          value: data ? data.incTypeName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_PRIORITY_LEVEL,
          value: data ? data.incPriLevelName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_EMERGENCY_DEGREE,
          value: data ? data.effectDegreeName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_INFLUENCE_DEGREE,
          value: data ? data.effectRangeName : '',
          width: '50%'
        }, {
          label: L.tabPane_content_WHETHER_TO_VIOLATE_THE_SLA,
          value: data ? data.incIsbreaksla : '',
          width: '50%'
        }, {
          label: L.tabPane_content_ACCEPT_GROUP,
          value: data ? data.dealGroupName_details : '',
          width: '50%'
        }, {
          label: L.tabPane_content_TARGET_TIME,
          value: data ? data.targetsolvetime : '',
          width: '50%'
        }, {
          label: L.tabPane_content_CLOSE_CODE,
          value: data ? data.incCloseCode : '',
          width: '50%'
        }, {
          label: L.tabPane_content_SATISFACTION_DEGREE,
          value: data ? data.incSatisfaction === '' ? L.tabPane_content_NO_EVALUATION : data.incSatisfaction : '',
          width: '50%'
        }, {
          label: L.tabPane_content_PROJECT,
          value: data ? data.projectName ? data.projectName : '' : '',
          width: '50%'
        }]
      }, {
        title: L.tabPane_title_SOLUTIONS,
        titleButton: [
          // <Button type="default" style={titleButtonStyle} key="1" disabled>
          //  <Icon type="edit" style={{fontSize: 18}}/>
          //</Button>,
        ],
        content: [{
          label: L.tabPane_content_CAPTION,
          value: data2 ? data2.solutiontitle : '',
          width: '100%'
        }, {
          label: L.tabPane_content_DESCRIPTION,
          value: data2 ? data2.solution : '',
          width: '100%'
        }, {
          label: L.tabPane_content_CAUSE_CODE,
          value: data2 ? data2.incCauseName : '',
          width: '100%'
        }],
        table: [_react2.default.createElement(_SolutionAttachmentTable2.default, {
          key: '1',
          id: this.props.params.id,
          dispatch: this.props.dispatch,
          data: data4
        })]
      }, {
        title: L.tabPane_title_ATTACHMENT,
        table: [_react2.default.createElement(_EventAttachmentTable2.default, {
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
      //   title: '重复事件',
      //   disabled: true,
      //   titleButton: [
      //     <Button type="default" style={titleButtonStyle} key="1">
      //       <Icon type="link" style={{fontSize: 18}}/>
      //     </Button>,
      //     <Button type="default" style={titleButtonStyle} key="2">
      //       <Icon type="reload" style={{fontSize: 18}}/>
      //     </Button>,
      //   ],
      //   content: [],
      // }, {
      //   title: '关联工单',
      //   disabled: true,
      //   titleButton: [
      //     <Select placeholder="请选择" style={{...titleButtonStyle, width: 120}} key="1"
      //             onChange={this.handleAssociatedOrderChange}>
      //       {(data3.length === 0) ? null : data3.map(x =>
      //         <Option key={x.value} value={x.value.toString()}>{x.text}</Option>
      //       )}
      //     </Select>,
      //     <Button type="default" style={titleButtonStyle} key="2">
      //       <Icon type="search" style={{fontSize: 18}}/>
      //     </Button>,
      //     <Button type="default" style={titleButtonStyle} key="3">
      //       <Icon type="plus" style={{fontSize: 18}}/>
      //     </Button>,
      //     <Button type="default" style={titleButtonStyle} key="4">
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
        { className: _EventDetails2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _EventDetails2.default.eventDetailsContainer },
          _react2.default.createElement(
            'div',
            { className: _EventDetails2.default.eventDetailsHeader },
            _react2.default.createElement(
              'div',
              { className: _EventDetails2.default.headerOptionsContainer },
              _react2.default.createElement(
                'div',
                { className: _EventDetails2.default.title },
                modelState.contentHeaderData.data ? modelState.contentHeaderData.data.incTopic : '',
                _react2.default.createElement(
                  _router.Link,
                  { onClick: function onClick() {
                      return history.back();
                    }, activeStyle: { textDecoration: 'none' }, className: _EventDetails2.default.titleGoBack },
                  _react2.default.createElement(_antd.Icon, { type: 'arrow-left', style: { fontSize: 22 } }),
                  L.titleGoBack
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _EventDetails2.default.eventDetailsContentContainer,
              style: {
                width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
              }
            },
            _react2.default.createElement(
              'div',
              { className: _EventDetails2.default.eventDetailsContent },
              _react2.default.createElement(
                'div',
                { className: _EventDetails2.default.contentHeaderMsg },
                contentHeaderMsg.map(function (x) {
                  return _react2.default.createElement(
                    'div',
                    { className: _EventDetails2.default.contentHeaderMsgItem, key: x.label },
                    _react2.default.createElement(
                      'span',
                      null,
                      x.label,
                      '\uFF1A',
                      _react2.default.createElement(
                        'span',
                        { className: _EventDetails2.default.contentHeaderMsgItemValue },
                        x.value
                      )
                    )
                  );
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _EventDetails2.default.contentTabs },
                _react2.default.createElement(
                  _antd.Tabs,
                  { defaultActiveKey: tabPane[0].title,
                    onChange: this.handleTabsChange,
                    tabPosition: document.body.clientWidth <= 768 ? "top" : "left",
                    style: { height: document.body.clientWidth <= 768 ? "auto" : 480, width: '100%' },
                    tabBarStyle: { padding: '25px 0', fontWeight: 'bold' }
                  },
                  tabPane.map(function (x) {
                    return _react2.default.createElement(
                      TabPane,
                      { tab: x.title, key: x.title,
                        style: {
                          height: document.body.clientWidth <= 768 ? "auto" : 480,
                          fontSize: 12,
                          fontWeight: 'bold'
                        },
                        disabled: x.disabled ? x.disabled : false
                      },
                      _react2.default.createElement(
                        'div',
                        { className: _EventDetails2.default.tabItemTitle },
                        x.title,
                        x.titleButton ? x.titleButton.map(function (xs) {
                          return xs;
                        }) : ''
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _EventDetails2.default.tabItemContent },
                        x.content && Array.isArray(x.content) ? x.content.map(function (xs) {
                          return _react2.default.createElement(
                            'div',
                            {
                              className: _EventDetails2.default.tabItemContentItem,
                              style: { width: xs.width },
                              key: xs.label
                            },
                            _react2.default.createElement(
                              'label',
                              { htmlFor: 'value', className: _EventDetails2.default.tabItemContentItemLabel },
                              xs.label,
                              '\uFF1A '
                            ),
                            _react2.default.createElement(
                              'span',
                              { name: 'value', className: _EventDetails2.default.tabItemContentItemValue },
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

  return EventDetails;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelEventDetails = _ref.modelEventDetails,
      loading = _ref.loading;
  return { modelEventDetails: modelEventDetails, loading: loading };
})(EventDetails);

//# sourceMappingURL=EventDetails-compiled.js.map