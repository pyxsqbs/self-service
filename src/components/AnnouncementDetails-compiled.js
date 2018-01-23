'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AnnouncementDetails = require('./AnnouncementDetails.css');

var _AnnouncementDetails2 = _interopRequireDefault(_AnnouncementDetails);

var _antd = require('antd');

var _router = require('dva/router');

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

var _DomainPort = require('../utils/DomainPort');

var _DomainPort2 = _interopRequireDefault(_DomainPort);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.Announcement.AnnouncementDetails;

var AnnouncementDetails = function (_React$Component) {
  _inherits(AnnouncementDetails, _React$Component);

  function AnnouncementDetails(props) {
    _classCallCheck(this, AnnouncementDetails);

    var _this = _possibleConstructorReturn(this, (AnnouncementDetails.__proto__ || Object.getPrototypeOf(AnnouncementDetails)).call(this, props));

    _this.state = {
      visible: false
    };
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(AnnouncementDetails, [{
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
    key: 'render',
    value: function render() {
      var _props$announcementDe = this.props.announcementDetailsData,
          file = _props$announcementDe.file,
          noticeContent = _props$announcementDe.noticeContent,
          noticeTitle = _props$announcementDe.noticeTitle,
          publishTime = _props$announcementDe.publishTime,
          viewTimes = _props$announcementDe.viewTimes;

      return _react2.default.createElement(
        'div',
        null,
        !this.state.visible || _react2.default.createElement(
          'div',
          {
            className: _AnnouncementDetails2.default.announcementDetailsModalContainer,
            style: { backgroundColor: this.state.visible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)' }
          },
          _react2.default.createElement(
            'div',
            { className: _AnnouncementDetails2.default.announcementFormContainer },
            _react2.default.createElement(
              'div',
              { className: _AnnouncementDetails2.default.iconContainer },
              _react2.default.createElement(
                'div',
                { className: _AnnouncementDetails2.default.title },
                L.title,
                '\u2014\u2014',
                noticeTitle
              ),
              _react2.default.createElement(
                _router.Link,
                { activeStyle: { textDecoration: 'none' },
                  onClick: this.handleCancel },
                _react2.default.createElement(_antd.Icon, { type: 'close', className: _AnnouncementDetails2.default.closeIcon })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _AnnouncementDetails2.default.announcementFormContent },
              _react2.default.createElement(
                'div',
                { className: _AnnouncementDetails2.default.announcementDetailsContent },
                _react2.default.createElement(
                  'div',
                  { className: _AnnouncementDetails2.default.value },
                  noticeContent
                ),
                _react2.default.createElement(
                  'div',
                  { className: _AnnouncementDetails2.default.files },
                  file.length !== 0 ? L.files + '\uFF1A' : '',
                  file ? file.map(function (x) {
                    return _react2.default.createElement(
                      _router.Link,
                      {
                        key: x.id,
                        name: 'value',
                        className: _AnnouncementDetails2.default.tabItemContentItemValue,
                        href: _DomainPort2.default + _api2.default + "/systemFileInfoAction/download?id=" + x.id,
                        download: x.originalName
                      },
                      x.originalName
                    );
                  }) : ''
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _AnnouncementDetails2.default.announcementDetailsFooter },
                _react2.default.createElement(
                  'div',
                  { className: _AnnouncementDetails2.default.label },
                  L.label_VIEW_TIMES,
                  '\uFF1A',
                  _react2.default.createElement(
                    'span',
                    { className: _AnnouncementDetails2.default.value },
                    viewTimes
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _AnnouncementDetails2.default.label },
                  L.label_PUBLISH_TIME,
                  '\uFF1A',
                  _react2.default.createElement(
                    'span',
                    { className: _AnnouncementDetails2.default.value },
                    publishTime
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AnnouncementDetails;
}(_react2.default.Component);

exports.default = AnnouncementDetails;

//# sourceMappingURL=AnnouncementDetails-compiled.js.map