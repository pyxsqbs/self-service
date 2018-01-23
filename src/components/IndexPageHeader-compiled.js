'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IndexPageHeader = require('./IndexPageHeader.css');

var _IndexPageHeader2 = _interopRequireDefault(_IndexPageHeader);

var _antd = require('antd');

var _router = require('dva/router');

var _MsgItem = require('./MsgItem');

var _MsgItem2 = _interopRequireDefault(_MsgItem);

var _LoginStart = require('./LoginStart');

var _LoginStart2 = _interopRequireDefault(_LoginStart);

var _cookie = require('../utils/cookie');

var _LoginModal = require('./LoginModal');

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _UpdateUserMsgModal = require('./UpdateUserMsgModal');

var _UpdateUserMsgModal2 = _interopRequireDefault(_UpdateUserMsgModal);

var _UpdateUserPwdModal = require('./UpdateUserPwdModal');

var _UpdateUserPwdModal2 = _interopRequireDefault(_UpdateUserPwdModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPageHeader = function (_React$Component) {
  _inherits(IndexPageHeader, _React$Component);

  function IndexPageHeader(props) {
    _classCallCheck(this, IndexPageHeader);

    var _this = _possibleConstructorReturn(this, (IndexPageHeader.__proto__ || Object.getPrototypeOf(IndexPageHeader)).call(this, props));

    var route = window.location.hash.substr(1);
    var index = route.indexOf('?');
    route = route.substr(0, index);
    _this.state = {
      route: route,
      changeBackground: '#2d3134',
      scrollY: window.scrollY,
      visible: false,
      updateUserMsgVisible: false,
      updateUserPwdVisible: false
    };

    _this.handleAvatarClick = _this.handleAvatarClick.bind(_this);
    _this.handleAvatarMenuClick = _this.handleAvatarMenuClick.bind(_this);
    _this.handleHomeClick = _this.handleHomeClick.bind(_this);
    _this.handleRegistrationClick = _this.handleRegistrationClick.bind(_this);
    _this.handleMenuItemMouseDown = _this.handleMenuItemMouseDown.bind(_this);
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_this);
    _this.showModal = _this.showModal.bind(_this);
    _this.displayModal = _this.displayModal.bind(_this);
    _this.updateUserMsgDisplayModal = _this.updateUserMsgDisplayModal.bind(_this);
    _this.updateUserPwdDisplayModal = _this.updateUserPwdDisplayModal.bind(_this);
    _this.handleUpdateUserPwd = _this.handleUpdateUserPwd.bind(_this);
    return _this;
  }

  _createClass(IndexPageHeader, [{
    key: 'handleAvatarClick',
    value: function handleAvatarClick() {
      (0, _cookie.delAllCookie)();
      _router.hashHistory.push('/loginContent');
    }
  }, {
    key: 'handleAvatarMenuClick',
    value: function handleAvatarMenuClick(_ref) {
      var key = _ref.key;

      switch (key) {
        case 'updateUserMsg':
          if (!this.state.updateUserMsgVisible) {
            this.setState({
              updateUserMsgVisible: true
            });
          }
          break;
        case 'updateUserPwd':
          if (!this.state.updateUserPwdVisible) {
            this.setState({
              updateUserPwdVisible: true
            });
          }
          break;
        default:
      }
    }
  }, {
    key: 'handleUpdateUserPwd',
    value: function handleUpdateUserPwd() {
      this.setState({
        updateUserPwdVisible: true
      });
    }
  }, {
    key: 'handleHomeClick',
    value: function handleHomeClick() {
      if ((0, _cookie.getCookie)('success') !== '') {
        _router.hashHistory.push('/');
      }
    }
  }, {
    key: 'handleRegistrationClick',
    value: function handleRegistrationClick() {
      this.props.changeLanguage();
    }
  }, {
    key: 'showModal',
    value: function showModal(e) {
      if (e.button === 0) {
        this.setState({
          visible: true
        });
      }
    }
  }, {
    key: 'displayModal',
    value: function displayModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: 'updateUserMsgDisplayModal',
    value: function updateUserMsgDisplayModal() {
      this.setState({
        updateUserMsgVisible: false
      });
    }
  }, {
    key: 'updateUserPwdDisplayModal',
    value: function updateUserPwdDisplayModal() {
      this.setState({
        updateUserPwdVisible: false
      });
    }
  }, {
    key: 'handleMenuItemMouseDown',
    value: function handleMenuItemMouseDown(e) {
      if ((0, _cookie.getCookie)('success') === '') {
        this.showModal(e);
      }
    }
  }, {
    key: 'handleMenuItemClick',
    value: function handleMenuItemClick(xs) {
      if ((0, _cookie.getCookie)('success') !== '') {
        _router.hashHistory.push('/' + xs.route);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.state.route.substr(1) === 'loginContent' || this.state.route.substr(1) === 'knowledgeSearch') {
        this.setState({
          changeBackground: 'rgba(0,0,0,0)'
        });
      } else {
        this.setState({
          changeBackground: '#2d3134'
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(preState) {
      var _this2 = this;

      window.addEventListener('hashchange', function () {
        var route = window.location.hash.substr(1);
        var index = route.indexOf('?');
        route = route.substr(0, index);
        if (preState !== _this2.state) {
          _this2.setState({
            route: route
          });
          if (_this2.state.route.substr(1) === 'loginContent' || _this2.state.route.substr(1) === 'knowledgeSearch') {
            _this2.setState({
              changeBackground: 'rgba(0,0,0,0)'
            });
          } else {
            _this2.setState({
              changeBackground: '#2d3134'
            });
          }
        }
      });

      //手机端导航栏滚动变色
      window.onscroll = function () {
        if ((_this2.state.route.substr(1) === 'loginContent' || _this2.state.route.substr(1) === 'knowledgeSearch') && document.body.clientWidth <= 768) {
          _this2.setState({
            scrollY: window.scrollY
          });
          if (_this2.state.scrollY > 60) {
            _this2.setState({
              changeBackground: 'rgba(0,0,0,0.7)'
            });
          } else {
            _this2.setState({
              changeBackground: 'rgba(0,0,0,0)'
            });
          }
        }
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('hashchange');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var msg = [{
        title: '新建事件',
        route: 'NewEvent'
      }, {
        title: '新建请求',
        route: 'NewRequest'
      }, {
        title: '查询事件',
        route: 'QueryEvent'
      }, {
        title: '查询请求',
        route: 'QueryRequest'
      }];

      var msgItem = msg.map(function (x) {
        return _react2.default.createElement(_MsgItem2.default, { msg: x.title, key: x.title, dispatch: _this3.props.dispatch,
          route: x.route, loading: _this3.props.loading });
      });

      var msgMenuItem = msg.map(function (xs) {
        return _react2.default.createElement(
          _antd.Menu.Item,
          { className: _IndexPageHeader2.default.menuItem, key: xs.title },
          _react2.default.createElement(
            'div',
            { onMouseDown: _this3.handleMenuItemMouseDown, onClick: function onClick() {
                return _this3.handleMenuItemClick(xs);
              },
              className: _IndexPageHeader2.default.menuItemMsgContainer },
            xs.title
          )
        );
      });

      var msgMenu = _react2.default.createElement(
        _antd.Menu,
        { style: { borderRadius: 5 } },
        msgMenuItem
      );

      var userImg = require('../assets/ic_admin.png');

      if ((0, _cookie.getCookie)('photoId')) {
        userImg = '/api/systemFileInfoAction/view?id=' + (0, _cookie.getCookie)('photoId');
      }

      var search = _react2.default.createElement(
        _antd.Tooltip,
        { title: '\u68C0\u7D22\u77E5\u8BC6', placement: 'bottom' },
        _react2.default.createElement(_router.Link, { className: _IndexPageHeader2.default.searchImg,
          onClick: function onClick() {
            return _this3.state.route !== '/knowledgeSearch' ? _router.hashHistory.push('/knowledgeSearch') : '';
          } })
      );

      var avatarMenu = _react2.default.createElement(
        _antd.Menu,
        { onClick: this.handleAvatarMenuClick },
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: 'logout' },
          _react2.default.createElement(
            _antd.Popconfirm,
            { title: '\u786E\u8BA4\u9000\u51FA\u767B\u5F55?',
              onConfirm: this.handleAvatarClick,
              okText: '\u9000\u51FA',
              cancelText: '\u53D6\u6D88',
              placement: 'leftTop'
            },
            _react2.default.createElement(
              'span',
              { style: { width: '100%', height: '100%' } },
              '\u9000\u51FA\u767B\u5F55'
            )
          )
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: 'updateUserMsg' },
          _react2.default.createElement(
            'span',
            null,
            '\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F'
          )
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: 'updateUserPwd' },
          _react2.default.createElement(
            'span',
            null,
            '\u4FEE\u6539\u5BC6\u7801'
          )
        )
      );

      var avatar = _react2.default.createElement(
        _antd.Dropdown,
        { overlay: avatarMenu },
        _react2.default.createElement(_antd.Avatar, { size: 'large', src: userImg, className: _IndexPageHeader2.default.avatarStyle
        })
      );

      var none = this.state.route.substr(1) === 'loginContent';

      var registration = _react2.default.createElement(
        _router.Link,
        { onClick: this.handleRegistrationClick, activeStyle: { textDecoration: 'none' },
          className: _IndexPageHeader2.default.registration },
        document.body.clientWidth <= 768 || '立即',
        '注册'
      );

      var login = _react2.default.createElement(_LoginStart2.default, { dispatch: this.props.dispatch, loading: this.props.loading });

      return _react2.default.createElement(
        'div',
        {
          className: _IndexPageHeader2.default.header,
          style: {
            backgroundColor: this.state.changeBackground,
            transition: document.body.clientWidth <= 768 && (this.state.route.substr(1) === 'loginContent' || this.state.route.substr(1) === 'knowledgeSearch') ? 'background-color .3s ease' : '',
            WebkitTransition: document.body.clientWidth <= 768 && (this.state.route.substr(1) === 'loginContent' || this.state.route.substr(1) === 'knowledgeSearch') ? 'background-color .3s ease' : '' /*Safari*/
          }
        },
        _react2.default.createElement(
          'div',
          { className: _IndexPageHeader2.default.userContainer },
          none || avatar,
          !none || login
        ),
        _react2.default.createElement(
          'div',
          { className: _IndexPageHeader2.default.logoContainer },
          _react2.default.createElement(_router.Link, { className: _IndexPageHeader2.default.logoImg, onClick: this.handleHomeClick })
        ),
        _react2.default.createElement(
          'ul',
          { className: _IndexPageHeader2.default.msgContainer },
          msgItem
        ),
        _react2.default.createElement(
          'div',
          { className: _IndexPageHeader2.default.utilContainer },
          none || search,
          none || avatar,
          !none || registration,
          !none || login
        ),
        _react2.default.createElement(_UpdateUserMsgModal2.default, {
          dispatch: this.props.dispatch,
          loading: this.props.loading,
          updateUserMsgVisible: this.state.updateUserMsgVisible,
          displayModal: this.updateUserMsgDisplayModal,
          userMsg: this.props.userMsg,
          handleUpdateUserPwd: this.handleUpdateUserPwd
        }),
        _react2.default.createElement(_UpdateUserPwdModal2.default, {
          dispatch: this.props.dispatch,
          loading: this.props.loading,
          updateUserPwdVisible: this.state.updateUserPwdVisible,
          displayModal: this.updateUserPwdDisplayModal,
          userMsg: this.props.userMsg
        }),
        _react2.default.createElement(
          'div',
          { className: _IndexPageHeader2.default.dropMenuContainer },
          none || search,
          !none || registration,
          _react2.default.createElement(
            _antd.Dropdown,
            { overlay: msgMenu, trigger: ['click'] },
            _react2.default.createElement(
              'a',
              { className: 'ant-dropdown-link', href: '#',
                style: {
                  height: 100 + '%',
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 5px',
                  textDecoration: 'none'
                } },
              _react2.default.createElement(_antd.Icon, { type: 'menu-fold', style: { fontSize: 22 + 'px', color: 'white' } })
            )
          ),
          _react2.default.createElement(_LoginModal2.default, { visible: this.state.visible, dispatch: this.props.dispatch, displayModal: this.displayModal,
            loading: this.props.loading })
        )
      );
    }
  }]);

  return IndexPageHeader;
}(_react2.default.Component);

exports.default = IndexPageHeader;

//# sourceMappingURL=IndexPageHeader-compiled.js.map