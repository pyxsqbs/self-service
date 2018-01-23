'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContactUs = require('./ContactUs.css');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _router = require('dva/router');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var L = _index2.default.LoginContent;
function ContactUs() {
  return _react2.default.createElement(
    'div',
    { className: _ContactUs2.default.contactUsContainer },
    _react2.default.createElement(
      'div',
      { className: _ContactUs2.default.contactUsItem },
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.logoContainer },
        _react2.default.createElement('img', { src: require('../assets/ic_hotline24.png') })
      ),
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.msgContainer },
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgWords },
          L.itemMsgLabel_IT_SERVICE_HOTLINE
        ),
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgDetails },
          '400-872-8999'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _ContactUs2.default.contactUsItem },
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.logoContainer },
        _react2.default.createElement('img', { src: require('../assets/ic_email24.png') })
      ),
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.msgContainer },
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgWords },
          L.itemMsgLabel_EMAIL_ADDRESS
        ),
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgDetails, style: { fontSize: 16 } },
          'support@help.dcits.com'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _ContactUs2.default.contactUsItem },
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.logoContainer },
        _react2.default.createElement('img', { src: require('../assets/ic_complaint24.png') })
      ),
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.msgContainer },
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgWords },
          L.itemMsgLabel_COMPLAINT_HOTLINE
        ),
        _react2.default.createElement(
          'div',
          { className: _ContactUs2.default.msgDetails },
          '010-82707724'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _ContactUs2.default.contactUsFooter },
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.logoContainer },
        _react2.default.createElement('img', { src: require('../assets/ic_suggestion24.png') })
      ),
      _react2.default.createElement(
        'div',
        { className: _ContactUs2.default.submitContainer },
        _react2.default.createElement(
          _router.Link,
          { to: '/', activeStyle: { textDecoration: 'none' } },
          _react2.default.createElement(
            'div',
            { className: _ContactUs2.default.submitFeedback },
            L.submitFeedback
          )
        )
      )
    )
  );
}

exports.default = ContactUs;

//# sourceMappingURL=ContactUs-compiled.js.map