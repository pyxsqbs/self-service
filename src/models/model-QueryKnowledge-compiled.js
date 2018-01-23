'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceQueryKnowledge = require('../services/service-QueryKnowledge');

exports.default = {
  namespace: 'modelQueryKnowledge',
  state: {
    classification: [],
    geogId: '',
    queryKnowledgeTableData: [],
    totalProperty: 0
  },
  reducers: {
    initClassification: function initClassification(state, _ref) {
      var payload = _ref.payload;

      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    initGeogId: function initGeogId(state, _ref2) {
      var payload = _ref2.payload;

      state.geogId = payload;
      return Object.assign({}, state);
    },
    initQueryKnowledgeData: function initQueryKnowledgeData(state, _ref3) {
      var payload = _ref3.payload;

      state.queryKnowledgeTableData = payload;
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
        classification: [],
        geogId: '',
        queryKnowledgeTableData: [],
        totalProperty: 0
      });
    }
  },
  effects: {
    loadClassification: regeneratorRuntime.mark(function loadClassification(_ref6, _ref7) {
      var payload = _ref6.payload;
      var call = _ref7.call,
          put = _ref7.put,
          select = _ref7.select;
      var result;
      return regeneratorRuntime.wrap(function loadClassification$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceQueryKnowledge.postClassification);

            case 2:
              result = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({ type: 'initClassification', payload: result.data });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, loadClassification, this);
    }),
    loadGeogId: regeneratorRuntime.mark(function loadGeogId(_ref8, _ref9) {
      var payload = _ref8.payload;
      var call = _ref9.call,
          put = _ref9.put,
          select = _ref9.select;
      var result;
      return regeneratorRuntime.wrap(function loadGeogId$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceQueryKnowledge.postGeogId);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initGeogId', payload: result.data.data.geogid });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, loadGeogId, this);
    }),
    getQueryKnowledgeTableData: regeneratorRuntime.mark(function getQueryKnowledgeTableData(_ref10, _ref11) {
      var payload = _ref10.payload;
      var call = _ref11.call,
          put = _ref11.put,
          select = _ref11.select;
      var result;
      return regeneratorRuntime.wrap(function getQueryKnowledgeTableData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceQueryKnowledge.queryKnowledgeData, payload);

            case 2:
              result = _context3.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 6;
              return put({ type: 'initQueryKnowledgeData', payload: result.data.root });

            case 6:
              _context3.next = 8;
              return put({ type: 'initTotal', payload: result.data.totalProperty });

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, getQueryKnowledgeTableData, this);
    })
  },
  subscriptions: {}
};

//# sourceMappingURL=model-QueryKnowledge-compiled.js.map