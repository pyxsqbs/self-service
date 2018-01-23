'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QuizRobot = require('./QuizRobot.css');

var _QuizRobot2 = _interopRequireDefault(_QuizRobot);

var _router = require('dva/router');

var _cookie = require('../utils/cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizRobot = function (_React$Component) {
  _inherits(QuizRobot, _React$Component);

  function QuizRobot(props) {
    _classCallCheck(this, QuizRobot);

    var _this = _possibleConstructorReturn(this, (QuizRobot.__proto__ || Object.getPrototypeOf(QuizRobot)).call(this, props));

    var route = window.location.hash.substr(1);
    var index = route.indexOf('?');
    route = route.substr(0, index);
    _this.state = {
      route: route,
      changeTop: '68%'
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(QuizRobot, [{
    key: 'handleClick',
    value: function handleClick() {
      if ((0, _cookie.getCookie)('success') !== '') {
        _router.hashHistory.push('/');
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.state.route.substr(1) === 'loginContent' || this.state.route.substr(1) === 'knowledgeSearch') {
        this.setState({
          changeTop: '58%'
        });
      } else {
        this.setState({
          changeTop: '68%'
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
              changeTop: '58%'
            });
          } else {
            _this2.setState({
              changeTop: '68%'
            });
          }
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('hashchange');
    }
  }, {
    key: 'render',
    value: function render() {
      var changeTop = this.state.changeTop;

      return _react2.default.createElement(
        _router.Link,
        { onClick: this.handleClick, activeStyle: { textDecoration: 'none' } },
        _react2.default.createElement('div', { className: _QuizRobot2.default.quizRobotContainer, style: { top: changeTop } })
      );
    }
  }]);

  return QuizRobot;
}(_react2.default.Component);

exports.default = QuizRobot;

//# sourceMappingURL=QuizRobot-compiled.js.map