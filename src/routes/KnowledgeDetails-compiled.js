'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _KnowledgeDetails = require('./KnowledgeDetails.css');

var _KnowledgeDetails2 = _interopRequireDefault(_KnowledgeDetails);

var _antd = require('antd');

var _router = require('dva/router');

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

var _DomainPort = require('../utils/DomainPort');

var _DomainPort2 = _interopRequireDefault(_DomainPort);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.KnowledgeDetails;
var TabPane = _antd.Tabs.TabPane;
var RadioGroup = _antd.Radio.Group;

var KnowledgeDetails = function (_React$Component) {
  _inherits(KnowledgeDetails, _React$Component);

  function KnowledgeDetails(props) {
    _classCallCheck(this, KnowledgeDetails);

    var _this = _possibleConstructorReturn(this, (KnowledgeDetails.__proto__ || Object.getPrototypeOf(KnowledgeDetails)).call(this, props));

    _this.handleMenuClick = _this.handleMenuClick.bind(_this);
    _this.handleTabsChange = _this.handleTabsChange.bind(_this);
    _this.handleAssociatedOrderChange = _this.handleAssociatedOrderChange.bind(_this);
    _this.state = {
      value: 1
    };
    return _this;
  }

  // onChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  _createClass(KnowledgeDetails, [{
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
        type: 'modelKnowledgeDetails/getKnowledgeDetailsData',
        payload: this.props.params.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var modelState = this.props.modelKnowledgeDetails;
      var buttonStyle = {
        margin: '3px'
      };
      var data = modelState.knowledgeDetailsData;
      var contentHeaderMsg = [{
        label: L.contentHeaderMsg_SUBMIT_TIME,
        value: data ? data.createDate : ''
      }, {
        label: L.contentHeaderMsg_SUBMITTER,
        value: data ? data.authorRealName : ''
      }, {
        label: L.contentHeaderMsg_BROWSE_THROUGH,
        value: data.TblItsmRepositoryInfo ? data.TblItsmRepositoryInfo.browseCount : ''
      }, {
        label: L.contentHeaderMsg_CITE,
        value: data.TblItsmRepositoryInfo ? data.TblItsmRepositoryInfo.citeCount : ''
      }];

      var titleChildren = [{
        label: L.titleChildren_KNOWLEDGE_PROPERTY,
        value: data ? data.typeName : '',
        width: '50%'
      }, {
        label: L.titleChildren_KNOWLEDGE_CLASSIFICATION,
        value: data ? data.sort : '',
        width: '50%'
      }, {
        label: L.titleChildren_RELATED_ENVIRONMENT,
        value: data ? data.osTypeName : '',
        width: '50%'
      }, {
        label: L.titleChildren_KEY_WORDS,
        value: data.TblItsmRepositoryInfo ? data.TblItsmRepositoryInfo.keyWord : '',
        width: '50%'
      }];

      return _react2.default.createElement(
        'div',
        { className: _KnowledgeDetails2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _KnowledgeDetails2.default.knowledgeDetailsContainer },
          _react2.default.createElement(
            'div',
            { className: _KnowledgeDetails2.default.knowledgeDetailsHeader },
            _react2.default.createElement(
              'div',
              { className: _KnowledgeDetails2.default.headerOptionsContainer },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeDetails2.default.title },
                data.TblItsmRepositoryInfo ? data.TblItsmRepositoryInfo.solutionTitle : '',
                _react2.default.createElement(
                  _router.Link,
                  { onClick: function onClick() {
                      return history.back();
                    }, activeStyle: { textDecoration: 'none' },
                    className: _KnowledgeDetails2.default.titleGoBack },
                  _react2.default.createElement(_antd.Icon, { type: 'arrow-left', style: { fontSize: 22 } }),
                  L.titleGoBack
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _KnowledgeDetails2.default.knowledgeDetailsContentContainer,
              style: {
                width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
              }
            },
            _react2.default.createElement(
              'div',
              { className: _KnowledgeDetails2.default.knowledgeDetailsContent },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeDetails2.default.contentHeaderMsg },
                contentHeaderMsg.map(function (x) {
                  return _react2.default.createElement(
                    'div',
                    { className: _KnowledgeDetails2.default.contentHeaderMsgItem, key: x.label },
                    _react2.default.createElement(
                      'span',
                      null,
                      x.label,
                      '\uFF1A',
                      _react2.default.createElement(
                        'span',
                        { className: _KnowledgeDetails2.default.contentHeaderMsgItemValue },
                        x.value
                      )
                    )
                  );
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _KnowledgeDetails2.default.contentTabs },
                _react2.default.createElement(
                  _antd.Tabs,
                  { defaultActiveKey: L.tabPane,
                    onChange: this.handleTabsChange,
                    tabPosition: document.body.clientWidth <= 768 ? "top" : "left",
                    style: { height: "auto", width: '100%', minHeight: 480 },
                    tabBarStyle: { padding: '25px 0' }
                  },
                  _react2.default.createElement(
                    TabPane,
                    { tab: L.tabPane, key: L.tabPane,
                      style: {
                        height: document.body.clientWidth <= 768 ? "auto" : 480,
                        fontSize: 12,
                        fontWeight: 'bold'
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: _KnowledgeDetails2.default.tabItemTitle },
                      L.tabItemTitle,
                      data.TblItsmRepositoryInfo ? data.TblItsmRepositoryInfo.solutionTitle : ''
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _KnowledgeDetails2.default.tabItemContent },
                      titleChildren.map(function (xs) {
                        return _react2.default.createElement(
                          'div',
                          {
                            className: _KnowledgeDetails2.default.tabItemContentItem,
                            style: { width: xs.width },
                            key: xs.label
                          },
                          _react2.default.createElement(
                            'label',
                            { htmlFor: 'value', className: _KnowledgeDetails2.default.tabItemContentItemLabel },
                            xs.label,
                            '\uFF1A '
                          ),
                          _react2.default.createElement(
                            'span',
                            { name: 'value', className: _KnowledgeDetails2.default.tabItemContentItemValue },
                            xs.value
                          )
                        );
                      }),
                      _react2.default.createElement('div', { className: _KnowledgeDetails2.default.divider }),
                      _react2.default.createElement(
                        'div',
                        { className: _KnowledgeDetails2.default.tabItemContentItem, style: { width: '100%' } },
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'value',
                            className: _KnowledgeDetails2.default.tabItemContentItemLabel },
                          L.tabItemContentItemLabel_SOLUTIONS
                        ),
                        _react2.default.createElement(
                          'span',
                          { name: 'value', className: _KnowledgeDetails2.default.tabItemContentItemValue },
                          data ? data.solution : ''
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _KnowledgeDetails2.default.tabItemContentItem, style: { width: '100%' } },
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'value',
                            className: _KnowledgeDetails2.default.tabItemContentItemLabel },
                          L.tabItemContentItemLabel_ATTACHMENT
                        ),
                        data.file ? data.file.map(function (x) {
                          return _react2.default.createElement(
                            _router.Link,
                            {
                              name: 'value',
                              className: _KnowledgeDetails2.default.tabItemContentItemValue,
                              href: _DomainPort2.default + _api2.default + "/systemFileInfoAction/download?id=" + x.id,
                              download: x.originalName,
                              key: x.id
                            },
                            x.originalName
                          );
                        }) : ''
                      ),
                      _react2.default.createElement('div', { className: _KnowledgeDetails2.default.divider }),
                      _react2.default.createElement(
                        'div',
                        { className: _KnowledgeDetails2.default.tabItemContentItem, style: { width: '100%' } },
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'value',
                            className: _KnowledgeDetails2.default.tabItemContentItemLabel },
                          L.tabItemContentItemLabel_KNOWLEDGE_EVALUATION
                        ),
                        _react2.default.createElement(
                          'span',
                          { name: 'value', className: _KnowledgeDetails2.default.tabItemContentItemValue },
                          data.rlist ? data.rlist.map(function (x, index) {
                            return _react2.default.createElement(
                              'div',
                              { className: _KnowledgeDetails2.default.knowledgeEvaluate, key: index },
                              index + 1 + '\u3001\n                             ' + L.knowledgeEvaluate_USER + '\uFF1A' + x.appraisalUser + '\uFF0C\n                             ' + L.knowledgeEvaluate_TIME + '\uFF1A' + x.appraisaldate + '\uFF0C\n                             ' + L.knowledgeEvaluate_SCORE + '\uFF1A' + x.appraisalrate + '\uFF0C\n                             ' + L.knowledgeEvaluate_CONTENT + '\uFF1A' + (x.appraisalinfo ? x.appraisalinfo : '')
                            );
                          }) : ''
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return KnowledgeDetails;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelKnowledgeDetails = _ref.modelKnowledgeDetails,
      loading = _ref.loading;
  return { modelKnowledgeDetails: modelKnowledgeDetails, loading: loading };
})(KnowledgeDetails);

//# sourceMappingURL=KnowledgeDetails-compiled.js.map