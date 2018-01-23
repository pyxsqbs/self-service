'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginContent = require('./LoginContent.css');

var _LoginContent2 = _interopRequireDefault(_LoginContent);

var _antd = require('antd');

var _router = require('dva/router');

var _LoginModal = require('../components/LoginModal');

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _dva = require('dva');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _cookie = require('../utils/cookie');

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.LoginContent;

var LoginContent = function (_React$Component) {
  _inherits(LoginContent, _React$Component);

  function LoginContent(props) {
    _classCallCheck(this, LoginContent);

    var _this = _possibleConstructorReturn(this, (LoginContent.__proto__ || Object.getPrototypeOf(LoginContent)).call(this, props));

    _this.state = {
      value: '',
      visible: false,
      data: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmitButtonClick = _this.handleSubmitButtonClick.bind(_this);
    _this.handleRetrievalMsgClick = _this.handleRetrievalMsgClick.bind(_this);
    _this.showModal = _this.showModal.bind(_this);
    _this.displayModal = _this.displayModal.bind(_this);
    return _this;
  }

  _createClass(LoginContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/loginContent') {
        this.props.dispatch({
          type: 'modelLoginContent/searchPopular',
          payload: null
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.modelLoginContent.data;
      this.setState({
        data: [].concat(_toConsumableArray(data))
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmitButtonClick',
    value: function handleSubmitButtonClick(e) {
      this.showModal(e);
      this.props.dispatch({
        type: 'modelIndexPage/afterLoginRoute',
        payload: 'QueryKnowledge/' + JSON.stringify({
          value: this.state.value !== '' ? this.state.value : '',
          sort: ''
        })
      });
    }
  }, {
    key: 'handleRetrievalMsgClick',
    value: function handleRetrievalMsgClick(e, x) {
      this.showModal(e);
      this.props.dispatch({
        type: 'modelIndexPage/afterLoginRoute',
        payload: 'KnowledgeDetails/' + x.id
      });
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.state.data.map(function (x) {
        return {
          title: x.solutionTitle,
          id: x.id
        };
      });
      var retrievalMsg = data.slice(0, 6).map(function (x) {
        return _react2.default.createElement(
          'div',
          { key: x.id, className: _LoginContent2.default.retrievalMsg },
          _react2.default.createElement(
            _router.Link,
            { activeStyle: { textDecoration: 'none' },
              onMouseDown: function onMouseDown(e) {
                return _this2.handleRetrievalMsgClick(e, x);
              } },
            x.title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _LoginContent2.default.loginContentContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(_LoginModal2.default, { visible: this.state.visible, dispatch: this.props.dispatch, displayModal: this.displayModal,
          loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _LoginContent2.default.slogenContainer },
          _react2.default.createElement('div', {
            className: _LoginContent2.default.slogenMsg,
            style: {
              backgroundImage: 'url("' + ((0, _cookie.getCookie)('language') !== 'english' ? require('../assets/slogen@2x.png') : require('../assets/slogen-eng @2x.png')) + '")'
            }
          }),
          _react2.default.createElement(
            'div',
            { className: _LoginContent2.default.slogenContent },
            _react2.default.createElement(
              'div',
              { className: _LoginContent2.default.inputContainer },
              _react2.default.createElement(_antd.Input, { id: 'myInput', placeholder: L.input,
                className: _LoginContent2.default.input, onChange: this.handleChange }),
              _react2.default.createElement(
                _router.Link,
                { activeStyle: { textDecoration: 'none' }, onMouseDown: this.handleSubmitButtonClick,
                  className: _LoginContent2.default.submitButton },
                L.submitButton
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _LoginContent2.default.popularRetrieval },
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.retrievalLabel },
                L.retrievalLabel
              ),
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.retrievalMsgContainer },
                retrievalMsg
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _LoginContent2.default.footerContainer },
          _react2.default.createElement(
            'div',
            { className: _LoginContent2.default.footerContent },
            _react2.default.createElement(
              'div',
              { className: _LoginContent2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_hotline40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgLabel },
                  L.itemMsgLabel_IT_SERVICE_HOTLINE
                ),
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgMain },
                  '400-872-8999'
                )
              )
            ),
            _react2.default.createElement('div', { className: _LoginContent2.default.divider }),
            _react2.default.createElement(
              'div',
              { className: _LoginContent2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_email40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgLabel },
                  L.itemMsgLabel_EMAIL_ADDRESS
                ),
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgMain },
                  'support@help.dcits.com'
                )
              )
            ),
            _react2.default.createElement('div', { className: _LoginContent2.default.divider }),
            _react2.default.createElement(
              'div',
              { className: _LoginContent2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_complaint40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _LoginContent2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgLabel },
                  L.itemMsgLabel_COMPLAINT_HOTLINE
                ),
                _react2.default.createElement(
                  'div',
                  { className: _LoginContent2.default.itemMsgMain },
                  '010-82707724'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _LoginContent2.default.footerEnd },
            '© 2017 Copyright by DCITS All rights reserved'
          )
        )
      );
    }
  }]);

  return LoginContent;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelLoginContent = _ref.modelLoginContent,
      loading = _ref.loading;
  return { modelLoginContent: modelLoginContent, loading: loading };
})(LoginContent);

//# sourceMappingURL=LoginContent-compiled.js.map