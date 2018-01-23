'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Announcement = require('./Announcement.css');

var _Announcement2 = _interopRequireDefault(_Announcement);

var _router = require('dva/router');

var _AnnouncementModal = require('./AnnouncementModal');

var _AnnouncementModal2 = _interopRequireDefault(_AnnouncementModal);

var _AnnouncementDetails = require('./AnnouncementDetails');

var _AnnouncementDetails2 = _interopRequireDefault(_AnnouncementDetails);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent.Announcement;
// const data = [
//   '自助服务台20170731更新公告',
//   '8月2日-8月5日网络变更通告',
//   '8月7日邮箱域名新增入口IP通知',
//   '8月2日SLB、云数据库服务升级通知',
//   '8月2日-8月5日网络变更通告',
//   '8月7日邮箱域名新增入口IP通知',
//   '8月2日SLB、云数据库服务升级通知',
// ];

var Announcement = function (_React$Component) {
  _inherits(Announcement, _React$Component);

  function Announcement(props) {
    _classCallCheck(this, Announcement);

    var _this = _possibleConstructorReturn(this, (Announcement.__proto__ || Object.getPrototypeOf(Announcement)).call(this, props));

    _this.state = {
      data: [],
      display: 'none',
      moreDisplay: 'flex',
      visible: false,
      detailsVisible: false,
      keyValue: {}
    };
    _this.displayModal = _this.displayModal.bind(_this);
    _this.displayDetailsModal = _this.displayDetailsModal.bind(_this);
    _this.handleMoreClick = _this.handleMoreClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    _this.handleDoubleClick2 = _this.handleDoubleClick2.bind(_this);
    return _this;
  }

  _createClass(Announcement, [{
    key: 'displayModal',
    value: function displayModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: 'displayDetailsModal',
    value: function displayDetailsModal() {
      this.setState({
        detailsVisible: false
      });
    }
  }, {
    key: 'handleMoreClick',
    value: function handleMoreClick() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(key) {
      this.setState({
        detailsVisible: true
      });
      this.setState({
        keyValue: JSON.parse(key)
      });
    }
  }, {
    key: 'handleDoubleClick2',
    value: function handleDoubleClick2(key) {
      this.setState({
        detailsVisible: true
      });
      this.setState({
        keyValue: key
      });
      this.props.dispatch({
        type: 'modelIndexPageContent/getAnnouncementDetailsData',
        payload: key.id
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        data: this.props.data
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var route = window.location.hash.substr(1);
      var index = route.indexOf('?');
      route = route.substr(0, index);
      if (route === '/') {
        this.props.dispatch({
          type: 'modelIndexPageContent/getAnnouncementData',
          payload: null
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.state.data || prevProps !== this.props) {
        if (this.state.data.length === 0) {
          this.setState({
            display: 'flex',
            moreDisplay: 'none'
          });
        } else {
          this.setState({
            display: 'none',
            moreDisplay: 'flex'
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var contentItems = this.state.data.map(function (x, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: _Announcement2.default.contentItem, onClick: function onClick() {
              return _this2.handleDoubleClick2(x);
            } },
          x.noticeTitle
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _Announcement2.default.announcementContainer },
        _react2.default.createElement(_AnnouncementModal2.default, {
          dispatch: this.props.dispatch,
          loading: this.props.loading,
          totalProperty: this.props.totalProperty,
          visible: this.state.visible,
          displayModal: this.displayModal,
          data: this.state.data,
          handleDoubleClick: this.handleDoubleClick
        }),
        _react2.default.createElement(_AnnouncementDetails2.default, {
          dispatch: this.props.dispatch,
          loading: this.props.loading,
          announcementDetailsData: this.props.announcementDetailsData,
          visible: this.state.detailsVisible,
          displayModal: this.displayDetailsModal,
          data: this.state.data,
          keyValue: this.state.keyValue
        }),
        _react2.default.createElement(
          'div',
          { className: _Announcement2.default.announcementHeader },
          L.announcementHeader,
          _react2.default.createElement(
            _router.Link,
            { onClick: this.handleMoreClick, activeStyle: { textDecoration: 'none' } },
            _react2.default.createElement(
              'div',
              { className: _Announcement2.default.more, style: { display: this.state.moreDisplay } },
              L.more
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Announcement2.default.announcementContent },
          contentItems,
          _react2.default.createElement(
            'div',
            { className: _Announcement2.default.announcementNoData, style: { display: this.state.display } },
            _react2.default.createElement(
              'div',
              { className: _Announcement2.default.announcementNoDataMsg },
              L.announcementNoDataMsg
            ),
            _react2.default.createElement(
              'div',
              { className: _Announcement2.default.showMoreContainer },
              _react2.default.createElement(
                'div',
                { className: _Announcement2.default.showMoreContainerTwo },
                _react2.default.createElement(
                  _router.Link,
                  { onClick: this.handleMoreClick, activeStyle: { textDecoration: 'none' } },
                  _react2.default.createElement(
                    'div',
                    { className: _Announcement2.default.showMore },
                    L.showMore
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Announcement;
}(_react2.default.Component);

exports.default = Announcement;

//# sourceMappingURL=Announcement-compiled.js.map