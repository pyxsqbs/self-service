'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceRequestDetails = require('../services/service-RequestDetails');

exports.default = {
  namespace: 'modelRequestDetails',
  state: {
    contentHeaderData: {},
    requestAttachmentData: []
  },
  reducers: {
    initContentHeaderData: function initContentHeaderData(state, _ref) {
      var payload = _ref.payload;

      Object.assign(state.contentHeaderData, payload);
      return Object.assign({}, state);
    },
    initRequestAttachmentTableData: function initRequestAttachmentTableData(state, _ref2) {
      var payload = _ref2.payload;

      state.requestAttachmentData = payload;
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref3) {
      var payload = _ref3.payload;

      return Object.assign({}, {
        contentHeaderData: {},
        requestAttachmentData: []
      });
    }
  },
  effects: {
    getContentHeaderMsgData: regeneratorRuntime.mark(function getContentHeaderMsgData(_ref4, _ref5) {
      var payload = _ref4.payload;
      var call = _ref5.call,
          put = _ref5.put,
          select = _ref5.select;
      var result;
      return regeneratorRuntime.wrap(function getContentHeaderMsgData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceRequestDetails.getContentHeaderData, payload);

            case 2:
              result = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({ type: 'initContentHeaderData', payload: result.data });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, getContentHeaderMsgData, this);
    }),
    getRequestAttachmentTableData: regeneratorRuntime.mark(function getRequestAttachmentTableData(_ref6, _ref7) {
      var payload = _ref6.payload;
      var call = _ref7.call,
          put = _ref7.put,
          select = _ref7.select;
      var result;
      return regeneratorRuntime.wrap(function getRequestAttachmentTableData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceRequestDetails.getRequestAttachmentData, payload);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initRequestAttachmentTableData', payload: result.data.root });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, getRequestAttachmentTableData, this);
    })
  },
  subscriptions: {}
};

//# sourceMappingURL=model-RequestDetails-compiled.js.map