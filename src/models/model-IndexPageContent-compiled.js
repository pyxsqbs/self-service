'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceIndexPageContent = require('../services/service-IndexPageContent');

exports.default = {

  namespace: 'modelIndexPageContent',

  state: {
    eventRecordData: [],
    requestRecordData: [],
    requestHistogramData: [],
    eventHistogramData: [],
    announcementData: [],
    totalProperty: 0,
    announcementDetailsData: {
      file: [],
      noticeContent: '',
      noticeTitle: '',
      publishTime: '',
      viewTimes: ''
    }
  },

  subscriptions: {},

  effects: {
    getEventRecordTableData: regeneratorRuntime.mark(function getEventRecordTableData(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var result;
      return regeneratorRuntime.wrap(function getEventRecordTableData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceIndexPageContent.getEventRecordData);

            case 2:
              result = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({ type: 'initEventRecordData', payload: result.data.root });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, getEventRecordTableData, this);
    }),
    getRequestRecordTableData: regeneratorRuntime.mark(function getRequestRecordTableData(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var result;
      return regeneratorRuntime.wrap(function getRequestRecordTableData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceIndexPageContent.getRequestRecordData);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initRequestRecordData', payload: result.data.root });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, getRequestRecordTableData, this);
    }),
    getRequestHistogramData: regeneratorRuntime.mark(function getRequestHistogramData(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var result;
      return regeneratorRuntime.wrap(function getRequestHistogramData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceIndexPageContent.getReqHistogramData);

            case 2:
              result = _context3.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context3.next = 6;
                break;
              }

              _context3.next = 6;
              return put({ type: 'initRequestHistogramData', payload: result.data[1].children });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, getRequestHistogramData, this);
    }),
    getEventHistogramData: regeneratorRuntime.mark(function getEventHistogramData(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var result;
      return regeneratorRuntime.wrap(function getEventHistogramData$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(_serviceIndexPageContent.getEvtHistogramData);

            case 2:
              result = _context4.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return put({ type: 'initEventHistogramData', payload: result.data[0].children });

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, getEventHistogramData, this);
    }),
    getAnnouncementData: regeneratorRuntime.mark(function getAnnouncementData(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var result;
      return regeneratorRuntime.wrap(function getAnnouncementData$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(_serviceIndexPageContent.getAnnounceData);

            case 2:
              result = _context5.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context5.next = 8;
                break;
              }

              _context5.next = 6;
              return put({ type: 'initAnnouncementData', payload: result.data.root });

            case 6:
              _context5.next = 8;
              return put({ type: 'initTotal', payload: result.data.totalProperty });

            case 8:
            case 'end':
              return _context5.stop();
          }
        }
      }, getAnnouncementData, this);
    }),
    getAnnouncementDetailsData: regeneratorRuntime.mark(function getAnnouncementDetailsData(_ref11, _ref12) {
      var payload = _ref11.payload;
      var call = _ref12.call,
          put = _ref12.put,
          select = _ref12.select;
      var result;
      return regeneratorRuntime.wrap(function getAnnouncementDetailsData$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return call(_serviceIndexPageContent.postAnnounceDetailsData, payload);

            case 2:
              result = _context6.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context6.next = 6;
                break;
              }

              _context6.next = 6;
              return put({ type: 'initAnnouncementDetailsData', payload: result.data.data });

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, getAnnouncementDetailsData, this);
    }),
    getSystemInformsData: regeneratorRuntime.mark(function getSystemInformsData(_ref13, _ref14) {
      var payload = _ref13.payload;
      var call = _ref14.call,
          put = _ref14.put,
          select = _ref14.select;
      var result;
      return regeneratorRuntime.wrap(function getSystemInformsData$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return call(_serviceIndexPageContent.getSysInformsData);

            case 2:
              result = _context7.sent;

            case 3:
            case 'end':
              return _context7.stop();
          }
        }
      }, getSystemInformsData, this);
    })
  },

  reducers: {
    initEventRecordData: function initEventRecordData(state, _ref15) {
      var payload = _ref15.payload;

      Object.assign(state.eventRecordData, payload);
      return Object.assign({}, state);
    },
    initRequestRecordData: function initRequestRecordData(state, _ref16) {
      var payload = _ref16.payload;

      Object.assign(state.requestRecordData, payload);
      return Object.assign({}, state);
    },
    initRequestHistogramData: function initRequestHistogramData(state, _ref17) {
      var payload = _ref17.payload;

      Object.assign(state.requestHistogramData, payload);
      return Object.assign({}, state);
    },
    initEventHistogramData: function initEventHistogramData(state, _ref18) {
      var payload = _ref18.payload;

      Object.assign(state.eventHistogramData, payload);
      return Object.assign({}, state);
    },
    initAnnouncementData: function initAnnouncementData(state, _ref19) {
      var payload = _ref19.payload;

      Object.assign(state.announcementData, payload);
      return Object.assign({}, state);
    },
    initAnnouncementDetailsData: function initAnnouncementDetailsData(state, _ref20) {
      var payload = _ref20.payload;

      Object.assign(state.announcementDetailsData, payload);
      return Object.assign({}, state);
    },
    initTotal: function initTotal(state, _ref21) {
      var payload = _ref21.payload;

      Object.assign(state, {
        totalProperty: payload
      });
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref22) {
      var payload = _ref22.payload;

      return Object.assign({}, {
        eventRecordData: [],
        requestRecordData: [],
        requestHistogramData: [],
        eventHistogramData: [],
        announcementData: [],
        totalProperty: 0,
        announcementDetailsData: {
          file: [],
          noticeContent: '',
          noticeTitle: '',
          publishTime: '',
          viewTimes: ''
        }
      });
    }
  }

};

//# sourceMappingURL=model-IndexPageContent-compiled.js.map