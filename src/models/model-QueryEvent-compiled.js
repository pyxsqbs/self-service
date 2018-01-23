'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceQueryEvent = require('../services/service-QueryEvent');

exports.default = {
  namespace: 'modelQueryEvent',

  state: {
    userMsg: {
      data: {
        reqId: null
      }
    },
    queryEventData: [],
    totalProperty: 0,
    luceneKey: ''
  },

  reducers: {
    submitTimes: function submitTimes(state, _ref) {
      var payload = _ref.payload,
          changeCount = _ref.changeCount;

      state.luceneKey = payload.luceneKey;
      return Object.assign({}, state);
    },
    initUserMsg: function initUserMsg(state, _ref2) {
      var payload = _ref2.payload;

      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    initQueryEventData: function initQueryEventData(state, _ref3) {
      var payload = _ref3.payload;

      state.queryEventData = payload;
      return Object.assign({}, state);
    },
    initTotal: function initTotal(state, _ref4) {
      var payload = _ref4.payload;

      Object.assign(state, {
        totalProperty: payload
      });
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref5) {
      var payload = _ref5.payload;

      return Object.assign({}, {
        userMsg: {
          data: {
            reqId: null
          }
        },
        queryEventData: [],
        totalProperty: 0,
        luceneKey: ''
      });
    }
  },

  effects: {
    loadUserMessage: regeneratorRuntime.mark(function loadUserMessage(_ref6, _ref7) {
      var payload = _ref6.payload;
      var call = _ref7.call,
          put = _ref7.put,
          select = _ref7.select;
      var result;
      return regeneratorRuntime.wrap(function loadUserMessage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceQueryEvent.loadUserMsg);

            case 2:
              result = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({ type: 'initUserMsg', payload: result.data });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, loadUserMessage, this);
    }),
    getQueryEventTableData: regeneratorRuntime.mark(function getQueryEventTableData(_ref8, _ref9) {
      var payload = _ref8.payload;
      var call = _ref9.call,
          put = _ref9.put,
          select = _ref9.select;
      var result;
      return regeneratorRuntime.wrap(function getQueryEventTableData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceQueryEvent.getQueryEventData, payload);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initQueryEventData', payload: result.data.root });

            case 6:
              _context2.next = 8;
              return put({ type: 'initTotal', payload: result.data.totalProperty });

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, getQueryEventTableData, this);
    })
  },

  subscriptions: {}

};

//# sourceMappingURL=model-QueryEvent-compiled.js.map