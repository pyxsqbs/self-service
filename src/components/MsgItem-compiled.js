'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MsgItem = require('./MsgItem.css');

var _MsgItem2 = _interopRequireDefault(_MsgItem);

var _router = require('dva/router');

var _cookie = require('../utils/cookie');

var _LoginModal = require('./LoginModal');

var _LoginModal2 = _interopRequireDefault(_LoginModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MsgItem = function (_React$Component) {
  _inherits(MsgItem, _React$Component);

  function MsgItem(props) {
    _classCallCheck(this, MsgItem);

    var _this = _possibleConstructorReturn(this, (MsgItem.__proto__ || Object.getPrototypeOf(MsgItem)).call(this, props));

    _this.state = {
      hoverColor: 'white',
      hoverBkgColor: 'inherit',
      visible: false
    };
    _this.changeHoverColor = _this.changeHoverColor.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.showModal = _this.showModal.bind(_this);
    _this.displayModal = _this.displayModal.bind(_this);
    return _this;
  }

  _createClass(MsgItem, [{
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
    key: 'handleClick',
    value: function handleClick(e) {
      if ((0, _cookie.getCookie)('success') !== '') {
        _router.hashHistory.push('/' + this.props.route);
      } else {
        this.showModal(e);
        this.changeHoverColor();
        this.props.dispatch({
          type: 'modelIndexPage/afterLoginRoute',
          payload: this.props.route
        });
      }
    }
  }, {
    key: 'changeHoverColor',
    value: function changeHoverColor() {
      if (this.state.hoverColor === '#41b5ef') {
        this.setState({
          hoverColor: 'white',
          hoverBkgColor: 'inherit'
        });
      } else {
        this.setState({
          hoverColor: '#41b5ef',
          hoverBkgColor: '#41b5ef'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _MsgItem2.default.msgItem, onMouseOver: this.changeHoverColor, onMouseOut: this.changeHoverColor },
        _react2.default.createElement(
          _router.Link,
          { activeStyle: { textDecoration: 'none' }, onMouseDown: this.handleClick },
          _react2.default.createElement(
            'div',
            { className: _MsgItem2.default.msgItemContent, style: { color: this.state.hoverColor } },
            this.props.msg
          ),
          _react2.default.createElement('div', { className: _MsgItem2.default.msgItemFooter, style: {
              backgroundColor: this.state.hoverBkgColor,
              width: (0, _cookie.getCookie)('language') === 'chinese' ? 78 : 100
            } })
        ),
        _react2.default.createElement(_LoginModal2.default, { visible: this.state.visible, dispatch: this.props.dispatch, displayModal: this.displayModal,
          loading: this.props.loading })
      );
    }
  }]);

  return MsgItem;
}(_react2.default.Component);

exports.default = MsgItem;

//# sourceMappingURL=MsgItem-compiled.js.map