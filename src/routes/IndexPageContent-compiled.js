'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IndexPageContent = require('./IndexPageContent.css');

var _IndexPageContent2 = _interopRequireDefault(_IndexPageContent);

var _Total = require('../components/Total');

var _Total2 = _interopRequireDefault(_Total);

var _RequestHistogram = require('../components/RequestHistogram');

var _RequestHistogram2 = _interopRequireDefault(_RequestHistogram);

var _EventHistogram = require('../components/EventHistogram');

var _EventHistogram2 = _interopRequireDefault(_EventHistogram);

var _router = require('dva/router');

var _RequestRecordTable = require('../components/RequestRecordTable');

var _RequestRecordTable2 = _interopRequireDefault(_RequestRecordTable);

var _EventRecordTable = require('../components/EventRecordTable');

var _EventRecordTable2 = _interopRequireDefault(_EventRecordTable);

var _Announcement = require('../components/Announcement');

var _Announcement2 = _interopRequireDefault(_Announcement);

var _ContactUs = require('../components/ContactUs');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _SystemInforms = require('../components/SystemInforms');

var _SystemInforms2 = _interopRequireDefault(_SystemInforms);

var _dva = require('dva');

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

var _LoadingModal = require('../components/LoadingModal');

var _LoadingModal2 = _interopRequireDefault(_LoadingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.IndexPageContent;

var IndexPageContent = function (_React$Component) {
  _inherits(IndexPageContent, _React$Component);

  function IndexPageContent(props) {
    _classCallCheck(this, IndexPageContent);

    return _possibleConstructorReturn(this, (IndexPageContent.__proto__ || Object.getPrototypeOf(IndexPageContent)).call(this, props));
  }

  _createClass(IndexPageContent, [{
    key: 'render',
    value: function render() {
      var modelState = this.props.modelIndexPageContent;
      return _react2.default.createElement(
        'div',
        { className: _IndexPageContent2.default.bodyContainer },
        _react2.default.createElement(_LoadingModal2.default, { loading: this.props.loading.global }),
        _react2.default.createElement(
          'div',
          { className: _IndexPageContent2.default.contentContainer },
          _react2.default.createElement(
            'div',
            { className: _IndexPageContent2.default.mainContainer },
            _react2.default.createElement(
              'div',
              { className: _IndexPageContent2.default.indexMsg },
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.borderContainer },
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.headerWords },
                  L.headerWords_OVERVIEW
                ),
                _react2.default.createElement(_Total2.default, { requestHistogramData: modelState.requestHistogramData,
                  eventHistogramData: modelState.eventHistogramData })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _IndexPageContent2.default.noIndexMsg },
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.firstContainer },
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.secondContainer },
                  _react2.default.createElement(
                    'div',
                    { className: _IndexPageContent2.default.borderContainer },
                    _react2.default.createElement(
                      'div',
                      { className: _IndexPageContent2.default.headerWords },
                      L.headerWords_MY_REQUEST
                    ),
                    _react2.default.createElement(_RequestHistogram2.default, {
                      dispatch: this.props.dispatch,
                      data: modelState.requestHistogramData
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.secondContainerTwo },
                  _react2.default.createElement(
                    'div',
                    { className: _IndexPageContent2.default.borderContainer },
                    _react2.default.createElement(
                      'div',
                      { className: _IndexPageContent2.default.headerWords },
                      L.headerWords_REQUEST_RECORDS,
                      _react2.default.createElement(
                        _router.Link,
                        { to: '/QueryRequest', activeStyle: { textDecoration: 'none' } },
                        _react2.default.createElement(
                          'div',
                          { className: _IndexPageContent2.default.showAll },
                          L.showAll
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: {
                          overflow: document.body.clientWidth <= 768 ? 'scroll' : '',
                          width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
                        } },
                      _react2.default.createElement(_RequestRecordTable2.default, { dispatch: this.props.dispatch,
                        requestRecordData: modelState.requestRecordData })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.firstContainer },
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.secondContainer },
                  _react2.default.createElement(
                    'div',
                    { className: _IndexPageContent2.default.borderContainer },
                    _react2.default.createElement(
                      'div',
                      { className: _IndexPageContent2.default.headerWords },
                      L.headerWords_MY_INCIDENT
                    ),
                    _react2.default.createElement(_EventHistogram2.default, { dispatch: this.props.dispatch,
                      data: modelState.eventHistogramData })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.secondContainerTwo },
                  _react2.default.createElement(
                    'div',
                    { className: _IndexPageContent2.default.borderContainer },
                    _react2.default.createElement(
                      'div',
                      { className: _IndexPageContent2.default.headerWords },
                      L.headerWords_INCIDENT_RECORDS,
                      _react2.default.createElement(
                        _router.Link,
                        { to: '/QueryEvent', activeStyle: { textDecoration: 'none' } },
                        _react2.default.createElement(
                          'div',
                          { className: _IndexPageContent2.default.showAll },
                          L.showAll
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: {
                          overflow: document.body.clientWidth <= 768 ? 'scroll' : '',
                          width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
                        } },
                      _react2.default.createElement(_EventRecordTable2.default, { dispatch: this.props.dispatch,
                        eventRecordData: modelState.eventRecordData })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _IndexPageContent2.default.footerContainer },
            _react2.default.createElement(
              'div',
              { className: _IndexPageContent2.default.inIndexMsg },
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.borderContainer },
                _react2.default.createElement(_Announcement2.default, {
                  dispatch: this.props.dispatch,
                  data: modelState.announcementData,
                  totalProperty: modelState.totalProperty,
                  loading: this.props.loading,
                  announcementDetailsData: modelState.announcementDetailsData
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _IndexPageContent2.default.enIndexMsg },
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.borderContainer },
                _react2.default.createElement(_SystemInforms2.default, { dispatch: this.props.dispatch,
                  data: modelState.systemInformsData })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _IndexPageContent2.default.enIndexMsgTwo },
              _react2.default.createElement(
                'div',
                { className: _IndexPageContent2.default.borderContainer },
                _react2.default.createElement(
                  'div',
                  { className: _IndexPageContent2.default.headerWords },
                  L.headerWords_CONTACT_US
                ),
                _react2.default.createElement(_ContactUs2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return IndexPageContent;
}(_react2.default.Component);

exports.default = (0, _dva.connect)(function (_ref) {
  var modelIndexPageContent = _ref.modelIndexPageContent,
      loading = _ref.loading;
  return { modelIndexPageContent: modelIndexPageContent, loading: loading };
})(IndexPageContent);

//# sourceMappingURL=IndexPageContent-compiled.js.map