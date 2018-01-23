'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceEventDetails = require('../services/service-EventDetails');

exports.default = {
  namespace: 'modelEventDetails',
  state: {
    contentHeaderData: {},
    solutionData: {},
    associatedOrderData: [],
    solutionAttachmentData: [],
    eventAttachmentData: []
  },
  reducers: {
    initContentHeaderData: function initContentHeaderData(state, _ref) {
      var payload = _ref.payload;

      Object.assign(state.contentHeaderData, payload);
      return Object.assign({}, state);
    },
    initSolutionData: function initSolutionData(state, _ref2) {
      var payload = _ref2.payload;

      Object.assign(state.solutionData, payload);
      return Object.assign({}, state);
    },
    initAssociatedOrderData: function initAssociatedOrderData(state, _ref3) {
      var payload = _ref3.payload;

      Object.assign(state.associatedOrderData, payload);
      return Object.assign({}, state);
    },
    initSolutionAttachmentTableData: function initSolutionAttachmentTableData(state, _ref4) {
      var payload = _ref4.payload;

      state.solutionAttachmentData = payload;
      return Object.assign({}, state);
    },
    initEventAttachmentTableData: function initEventAttachmentTableData(state, _ref5) {
      var payload = _ref5.payload;

      state.eventAttachmentData = payload;
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref6) {
      var payload = _ref6.payload;

      return Object.assign({}, {
        contentHeaderData: {},
        solutionData: {},
        associatedOrderData: [],
        solutionAttachmentData: [],
        eventAttachmentData: []
      });
    }
  },
  effects: {
    getContentHeaderMsgData: regeneratorRuntime.mark(function getContentHeaderMsgData(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var result;
      return regeneratorRuntime.wrap(function getContentHeaderMsgData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceEventDetails.getContentHeaderData, payload);

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
    getSolutionData: regeneratorRuntime.mark(function getSolutionData(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var result;
      return regeneratorRuntime.wrap(function getSolutionData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceEventDetails.getSoluteData, payload);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initSolutionData', payload: result.data });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, getSolutionData, this);
    }),
    getAssociatedOrderData: regeneratorRuntime.mark(function getAssociatedOrderData(_ref11, _ref12) {
      var payload = _ref11.payload;
      var call = _ref12.call,
          put = _ref12.put,
          select = _ref12.select;
      var result;
      return regeneratorRuntime.wrap(function getAssociatedOrderData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceEventDetails.getAssociatedOrderOptionsData);

            case 2:
              result = _context3.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context3.next = 6;
                break;
              }

              _context3.next = 6;
              return put({ type: 'initAssociatedOrderData', payload: result.data });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, getAssociatedOrderData, this);
    }),
    getSolutionAttachmentTableData: regeneratorRuntime.mark(function getSolutionAttachmentTableData(_ref13, _ref14) {
      var payload = _ref13.payload;
      var call = _ref14.call,
          put = _ref14.put,
          select = _ref14.select;
      var result;
      return regeneratorRuntime.wrap(function getSolutionAttachmentTableData$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(_serviceEventDetails.getSolutionAttachmentData, payload);

            case 2:
              result = _context4.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return put({ type: 'initSolutionAttachmentTableData', payload: result.data.root });

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, getSolutionAttachmentTableData, this);
    }),
    getEventAttachmentTableData: regeneratorRuntime.mark(function getEventAttachmentTableData(_ref15, _ref16) {
      var payload = _ref15.payload;
      var call = _ref16.call,
          put = _ref16.put,
          select = _ref16.select;
      var result;
      return regeneratorRuntime.wrap(function getEventAttachmentTableData$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(_serviceEventDetails.getEventAttachmentData, payload);

            case 2:
              result = _context5.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context5.next = 6;
                break;
              }

              _context5.next = 6;
              return put({ type: 'initEventAttachmentTableData', payload: result.data.root });

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, getEventAttachmentTableData, this);
    })
  },
  subscriptions: {}
};

//# sourceMappingURL=model-EventDetails-compiled.js.map