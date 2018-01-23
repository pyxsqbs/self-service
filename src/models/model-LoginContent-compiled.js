'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceKnowledgeSearch = require('../services/service-KnowledgeSearch');

exports.default = {
  namespace: 'modelLoginContent',

  state: {
    data: []
  },

  reducers: {
    initPopularData: function initPopularData(state, _ref) {
      var payload = _ref.payload;

      Object.assign(state.data, payload);
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref2) {
      var payload = _ref2.payload;

      return Object.assign({}, {
        data: []
      });
    }
  },

  effects: {
    searchPopular: regeneratorRuntime.mark(function searchPopular(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var result;
      return regeneratorRuntime.wrap(function searchPopular$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceKnowledgeSearch.getPopularData);

            case 2:
              result = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({ type: 'initPopularData', payload: result.data.root });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, searchPopular, this);
    })
  },

  subscriptions: {}
};

//# sourceMappingURL=model-LoginContent-compiled.js.map