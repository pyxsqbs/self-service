'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RequestAttachmentTable = require('./RequestAttachmentTable.css');

var _RequestAttachmentTable2 = _interopRequireDefault(_RequestAttachmentTable);

var _RecordTable = require('./RecordTable');

var _RecordTable2 = _interopRequireDefault(_RecordTable);

var _antd = require('antd');

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

var _router = require('dva/router');

var _DomainPort = require('../utils/DomainPort');

var _DomainPort2 = _interopRequireDefault(_DomainPort);

var _index = require('../utils/Languages/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L = _index2.default.RequestDetails.RequestAttachmentTable;

var RequestAttachmentTable = function (_React$Component) {
  _inherits(RequestAttachmentTable, _React$Component);

  function RequestAttachmentTable(props) {
    _classCallCheck(this, RequestAttachmentTable);

    return _possibleConstructorReturn(this, (RequestAttachmentTable.__proto__ || Object.getPrototypeOf(RequestAttachmentTable)).call(this, props));
  }

  _createClass(RequestAttachmentTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'modelRequestDetails/getRequestAttachmentTableData',
        payload: this.props.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var dataInit = this.props.data;
      var data = [];
      for (var i = 0; i < dataInit.length; i++) {
        data[i] = {
          key: dataInit[i].id,
          fileName: dataInit[i].originalName,
          size: (dataInit[i].fileSize / 1024 / 1024).toFixed(2) + ' MB',
          uploadMan: dataInit[i].createUserName,
          uploadTime: dataInit[i].createdate,
          attachmentType: dataInit[i].objType,
          operation: _react2.default.createElement(
            _router.Link,
            {
              href: _DomainPort2.default + _api2.default + "/systemFileInfoAction/download?id=" + dataInit[i].id,
              download: dataInit[i].originalName
            },
            _react2.default.createElement(_antd.Icon, { type: 'download' })
          )
        };
      }
      var columns = [{
        title: L.columns_FILENAME,
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: L.columns_SIZE,
        dataIndex: 'size',
        key: 'size'
      }, {
        title: L.columns_UPLOADER,
        dataIndex: 'uploadMan',
        key: 'uploadMan'
      }, {
        title: L.columns_UPLOADTIME,
        dataIndex: 'uploadTime',
        key: 'uploadTime'
      },
      //   {
      //   title: L.columns_ATTACHMENTTYPE,
      //   dataIndex: 'attachmentType',
      //   key: 'attachmentType',
      // },
      {
        title: L.columns_OPERATION,
        dataIndex: 'operation',
        key: 'operation'
      }];
      return _react2.default.createElement(
        'div',
        {
          className: _RequestAttachmentTable2.default.requestAttachmentContainer,
          style: {
            width: document.body.clientWidth <= 768 ? document.body.clientWidth : '100%'
          }
        },
        _react2.default.createElement(
          'div',
          { className: _RequestAttachmentTable2.default.title },
          L.title
        ),
        _react2.default.createElement(_RecordTable2.default, {
          columns: columns,
          data: data,
          tid: 'RequestAttachmentTable',
          paddingTop: document.body.clientWidth <= 768 ? '37.3%' : '8.6%'
        })
      );
    }
  }]);

  return RequestAttachmentTable;
}(_react2.default.Component);

exports.default = RequestAttachmentTable;

//# sourceMappingURL=RequestAttachmentTable-compiled.js.map