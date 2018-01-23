'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceNewRequest = require('../services/service-NewRequest');

var _router = require('dva/router');

var _antd = require('antd');

exports.default = {

  namespace: 'modelNewRequest',

  state: {
    userMsg: {
      data: {
        reqDeptName: null,
        reqEmail: null,
        reqMobile: null,
        reqName: null,
        reqNo: null,
        reqUsername: null
      }
    },
    departmentName: [],
    classification: []
  },

  reducers: {
    initUserMsg: function initUserMsg(state, _ref) {
      var payload = _ref.payload;

      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    initDepartmentName: function initDepartmentName(state, _ref2) {
      var payload = _ref2.payload;

      Object.assign(state.departmentName, payload);
      return Object.assign({}, state);
    },
    initClassification: function initClassification(state, _ref3) {
      var payload = _ref3.payload;

      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref4) {
      var payload = _ref4.payload;

      return Object.assign({}, {
        userMsg: {
          data: {
            reqDeptName: null,
            reqEmail: null,
            reqMobile: null,
            reqName: null,
            reqNo: null,
            reqUsername: null
          }
        },
        departmentName: [],
        classification: []
      });
    }
  },

  effects: {
    removeFile: regeneratorRuntime.mark(function removeFile(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var result;
      return regeneratorRuntime.wrap(function removeFile$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceNewRequest.rmFile, payload);

            case 2:
              result = _context.sent;

              if (!result.data.success) {
                alert('删除上传文件错误');
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, removeFile, this);
    }),
    loadUserMessage: regeneratorRuntime.mark(function loadUserMessage(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var result;
      return regeneratorRuntime.wrap(function loadUserMessage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceNewRequest.loadUserMsg);

            case 2:
              result = _context2.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return put({ type: 'initUserMsg', payload: result.data });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, loadUserMessage, this);
    }),
    loadDepartmentName: regeneratorRuntime.mark(function loadDepartmentName(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var result;
      return regeneratorRuntime.wrap(function loadDepartmentName$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceNewRequest.postDepartmentName);

            case 2:
              result = _context3.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context3.next = 6;
                break;
              }

              _context3.next = 6;
              return put({ type: 'initDepartmentName', payload: result.data });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, loadDepartmentName, this);
    }),
    loadClassification: regeneratorRuntime.mark(function loadClassification(_ref11, _ref12) {
      var payload = _ref11.payload;
      var call = _ref12.call,
          put = _ref12.put,
          select = _ref12.select;
      var result;
      return regeneratorRuntime.wrap(function loadClassification$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(_serviceNewRequest.postClassification);

            case 2:
              result = _context4.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return put({ type: 'initClassification', payload: result.data });

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, loadClassification, this);
    }),
    submitWorkOrder: regeneratorRuntime.mark(function submitWorkOrder(_ref13, _ref14) {
      var payload = _ref13.payload;
      var call = _ref14.call,
          put = _ref14.put,
          select = _ref14.select;
      var result, notificationConfig;
      return regeneratorRuntime.wrap(function submitWorkOrder$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(_serviceNewRequest.postWorkOrder, payload);

            case 2:
              result = _context5.sent;

              notificationConfig = function notificationConfig(msg, type, des) {
                _antd.notification[type]({
                  message: msg,
                  placement: 'topLeft',
                  description: des ? des : ''
                });
              };

              if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
                notificationConfig('提交成功', 'success');
                _router.hashHistory.push('/RequestDetails/' + result.data.data.id);
              } else {
                notificationConfig('提交失败', 'error', result.data.message);
                _router.hashHistory.push('/NewRequest');
              }

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, submitWorkOrder, this);
    })
  },

  subscriptions: {}
};

//# sourceMappingURL=model-NewRequest-compiled.js.map