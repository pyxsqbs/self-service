'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AnnouncementModal = require('./AnnouncementModal.css');

var _AnnouncementModal2 = _interopRequireDefault(_AnnouncementModal);

var _antd = require('antd');

var _router = require('dva/router');

var _AnnouncementTable = require('./AnnouncementTable');

var _AnnouncementTable2 = _interopRequireDefault(_AnnouncementTable);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.Announcement.AnnouncementModal;

var AnnouncementModal = function (_React$Component) {
  _inherits(AnnouncementModal, _React$Component);

  function AnnouncementModal(props) {
    _classCallCheck(this, AnnouncementModal);

    var _this = _possibleConstructorReturn(this, (AnnouncementModal.__proto__ || Object.getPrototypeOf(AnnouncementModal)).call(this, props));

    _this.state = {
      visible: false
    };
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.changeCount = _this.changeCount.bind(_this);
    return _this;
  }

  _createClass(AnnouncementModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({
        visible: false
      });
      this.props.displayModal();
    }
  }, {
    key: 'changeCount',
    value: function changeCount() {
      if (this.state.count === 0) {
        this.setState({
          count: 1
        });
      } else {
        this.setState({
          count: 0
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.state.visible || _react2.default.createElement(
          'div',
          {
            className: _AnnouncementModal2.default.announcementModalContainer,
            style: { backgroundColor: this.state.visible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)' }
          },
          _react2.default.createElement(
            'div',
            { className: _AnnouncementModal2.default.announcementFormContainer },
            _react2.default.createElement(
              'div',
              { className: _AnnouncementModal2.default.iconContainer },
              _react2.default.createElement(
                'div',
                { className: _AnnouncementModal2.default.title },
                L.title
              ),
              _react2.default.createElement(
                _router.Link,
                { activeStyle: { textDecoration: 'none' },
                  onClick: this.handleCancel },
                _react2.default.createElement(_antd.Icon, { type: 'close', className: _AnnouncementModal2.default.closeIcon })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _AnnouncementModal2.default.announcementFormContent },
              _react2.default.createElement(_AnnouncementTable2.default, {
                dispatch: this.props.dispatch,
                handleCancel: this.handleCancel,
                loading: this.props.loading,
                totalProperty: this.props.totalProperty,
                data: this.props.data,
                displayModal: this.props.displayModal,
                changeCount: this.changeCount,
                handleDoubleClick: this.props.handleDoubleClick
              })
            )
          )
        )
      );
    }
  }]);

  return AnnouncementModal;
}(_react2.default.Component);

exports.default = AnnouncementModal;

//# sourceMappingURL=AnnouncementModal-compiled.js.map