'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _NewEvent = require('./NewEvent.css');

var _NewEvent2 = _interopRequireDefault(_NewEvent);

var _NewEventForm = require('../components/NewEventForm');

var _NewEventForm2 = _interopRequireDefault(_NewEventForm);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.NewEvent;

var NewEvent = function (_React$Component) {
  _inherits(NewEvent, _React$Component);

  function NewEvent(props) {
    _classCallCheck(this, NewEvent);

    return _possibleConstructorReturn(this, (NewEvent.__proto__ || Object.getPrototypeOf(NewEvent)).call(this, props));
  }

  _createClass(NewEvent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(preProps) {
      // console.log(preProps.loading,this.props.loading)
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _NewEvent2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _NewEvent2.default.newEventContainer },
          _react2.default.createElement(
            'div',
            { className: _NewEvent2.default.newEventContent },
            _react2.default.createElement(
              'div',
              { className: _NewEvent2.default.title },
              L.title
            ),
            _react2.default.createElement(_NewEventForm2.default, {
              dispatch: this.props.dispatch,
              userMsg: this.props.modelNewEvent.userMsg,
              departmentName: this.props.modelNewEvent.departmentName,
              belongProject: this.props.modelNewEvent.belongProject,
              eventProperty: this.props.modelNewEvent.eventProperty,
              classification: this.props.modelNewEvent.classification,
              enterprise: this.props.modelNewEvent.enterprise,
              loading: this.props.loading.global
            })
          )
        )
      );
    }
  }]);

  return NewEvent;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelNewEvent = _ref.modelNewEvent,
      loading = _ref.loading;
  return { modelNewEvent: modelNewEvent, loading: loading };
})(NewEvent);

//# sourceMappingURL=NewEvent-compiled.js.map