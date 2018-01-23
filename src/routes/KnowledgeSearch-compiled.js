'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _KnowledgeSearch = require('./KnowledgeSearch.css');

var _KnowledgeSearch2 = _interopRequireDefault(_KnowledgeSearch);

var _antd = require('antd');

var _router = require('dva/router');

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

var KnowledgeSearch = function (_React$Component) {
  _inherits(KnowledgeSearch, _React$Component);

  function KnowledgeSearch(props) {
    _classCallCheck(this, KnowledgeSearch);

    var _this = _possibleConstructorReturn(this, (KnowledgeSearch.__proto__ || Object.getPrototypeOf(KnowledgeSearch)).call(this, props));

    _this.state = {
      value: '',
      data: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(KnowledgeSearch, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      _router.hashHistory.push('/QueryKnowledge/' + JSON.stringify({
        value: this.state.value !== '' ? this.state.value : '',
        sort: ''
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/knowledgeSearch') {
        this.props.dispatch({
          type: 'modelKnowledgeSearch/searchPopular',
          payload: null
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.modelKnowledgeSearch.data;
      this.setState({
        data: [].concat(_toConsumableArray(data))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data.map(function (x) {
        return {
          title: x.solutionTitle,
          id: x.id
        };
      });
      var retrievalMsg = data.slice(0, 6).map(function (x) {
        return _react2.default.createElement(
          'div',
          { key: x.id, className: _KnowledgeSearch2.default.retrievalMsg },
          _react2.default.createElement(
            _router.Link,
            { to: "/KnowledgeDetails/" + x.id, activeStyle: { textDecoration: 'none' } },
            x.title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _KnowledgeSearch2.default.loginContentContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _KnowledgeSearch2.default.slogenContainer },
          _react2.default.createElement('div', {
            className: _KnowledgeSearch2.default.slogenMsg,
            style: {
              backgroundImage: 'url("' + ((0, _cookie.getCookie)('language') !== 'english' ? require('../assets/slogen@2x.png') : require('../assets/slogen-eng @2x.png')) + '")'
            }
          }),
          _react2.default.createElement(
            'div',
            { className: _KnowledgeSearch2.default.slogenContent },
            _react2.default.createElement(
              'div',
              { className: _KnowledgeSearch2.default.inputContainer },
              _react2.default.createElement(_antd.Input, { id: 'myInput', placeholder: L.input,
                className: _KnowledgeSearch2.default.input, onChange: this.handleChange, defaultValue: '' }),
              _react2.default.createElement(
                _router.Link,
                { activeStyle: { textDecoration: 'none' }, onClick: this.handleClick,
                  className: _KnowledgeSearch2.default.submitButton },
                L.submitButton
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _KnowledgeSearch2.default.popularRetrieval },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.retrievalLabel },
                L.retrievalLabel
              ),
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.retrievalMsgContainer },
                retrievalMsg
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _KnowledgeSearch2.default.footerContainer },
          _react2.default.createElement(
            'div',
            { className: _KnowledgeSearch2.default.footerContent },
            _react2.default.createElement(
              'div',
              { className: _KnowledgeSearch2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_hotline40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgLabel },
                  L.itemMsgLabel_IT_SERVICE_HOTLINE
                ),
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgMain },
                  '400-872-8999'
                )
              )
            ),
            _react2.default.createElement('div', { className: _KnowledgeSearch2.default.divider }),
            _react2.default.createElement(
              'div',
              { className: _KnowledgeSearch2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_email40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgLabel },
                  L.itemMsgLabel_EMAIL_ADDRESS
                ),
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgMain },
                  'support@help.dcits.com'
                )
              )
            ),
            _react2.default.createElement('div', { className: _KnowledgeSearch2.default.divider }),
            _react2.default.createElement(
              'div',
              { className: _KnowledgeSearch2.default.footerContentItem },
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemLogo },
                _react2.default.createElement('img', { src: require('../assets/ic_complaint40.png') })
              ),
              _react2.default.createElement(
                'div',
                { className: _KnowledgeSearch2.default.itemMsg },
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgLabel },
                  L.itemMsgLabel_COMPLAINT_HOTLINE
                ),
                _react2.default.createElement(
                  'div',
                  { className: _KnowledgeSearch2.default.itemMsgMain },
                  '010-82707724'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _KnowledgeSearch2.default.footerEnd },
            '© 2017 Copyright by DCITS All rights reserved'
          )
        )
      );
    }
  }]);

  return KnowledgeSearch;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelKnowledgeSearch = _ref.modelKnowledgeSearch,
      loading = _ref.loading;
  return { modelKnowledgeSearch: modelKnowledgeSearch, loading: loading };
})(KnowledgeSearch);

//# sourceMappingURL=KnowledgeSearch-compiled.js.map