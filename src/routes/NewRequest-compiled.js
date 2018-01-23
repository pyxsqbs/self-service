'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _NewRequest = require('./NewRequest.css');

var _NewRequest2 = _interopRequireDefault(_NewRequest);

var _NewRequestForm = require('../components/NewRequestForm');

var _NewRequestForm2 = _interopRequireDefault(_NewRequestForm);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.NewRequest;

var NewRequest = function (_React$Component) {
  _inherits(NewRequest, _React$Component);

  function NewRequest(props) {
    _classCallCheck(this, NewRequest);

    return _possibleConstructorReturn(this, (NewRequest.__proto__ || Object.getPrototypeOf(NewRequest)).call(this, props));
  }

  _createClass(NewRequest, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _NewRequest2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _NewRequest2.default.newRequestContainer },
          _react2.default.createElement(
            'div',
            { className: _NewRequest2.default.newRequestContent },
            _react2.default.createElement(
              'div',
              { className: _NewRequest2.default.title },
              L.title
            ),
            _react2.default.createElement(_NewRequestForm2.default, {
              dispatch: this.props.dispatch,
              userMsg: this.props.modelNewRequest.userMsg,
              departmentName: this.props.modelNewRequest.departmentName,
              classification: this.props.modelNewRequest.classification,
              loading: this.props.loading.global
            })
          )
        )
      );
    }
  }]);

  return NewRequest;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelNewRequest = _ref.modelNewRequest,
      loading = _ref.loading;
  return { modelNewRequest: modelNewRequest, loading: loading };
})(NewRequest);

//# sourceMappingURL=NewRequest-compiled.js.map