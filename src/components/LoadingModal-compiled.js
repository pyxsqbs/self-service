'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingModal = require('./LoadingModal.css');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadingModal(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _LoadingModal2.default.LoadingModalContainer,
      style: { right: props.loading ? '' : '-150px' }
    },
    _react2.default.createElement(_antd.Spin, { size: 'large', delay: 500 })
  );
}

exports.default = LoadingModal;

//# sourceMappingURL=LoadingModal-compiled.js.map