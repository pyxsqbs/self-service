'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceNewEvent = require('../services/service-NewEvent');

var _router = require('dva/router');

var _antd = require('antd');

exports.default = {

  namespace: 'modelNewEvent',

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
    belongProject: [],
    eventProperty: [],
    classification: [],
    enterprise: []
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
    initBelongProject: function initBelongProject(state, _ref3) {
      var payload = _ref3.payload;

      Object.assign(state.belongProject, payload);
      return Object.assign({}, state);
    },
    initEventProperty: function initEventProperty(state, _ref4) {
      var payload = _ref4.payload;

      Object.assign(state.eventProperty, payload);
      return Object.assign({}, state);
    },
    initClassification: function initClassification(state, _ref5) {
      var payload = _ref5.payload;

      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    initEnterprise: function initEnterprise(state, _ref6) {
      var payload = _ref6.payload;

      Object.assign(state.enterprise, payload);
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref7) {
      var payload = _ref7.payload;

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
        belongProject: [],
        eventProperty: [],
        classification: [],
        enterprise: []
      });
    }
  },

  effects: {
    removeFile: regeneratorRuntime.mark(function removeFile(_ref8, _ref9) {
      var payload = _ref8.payload;
      var call = _ref9.call,
          put = _ref9.put,
          select = _ref9.select;
      var result;
      return regeneratorRuntime.wrap(function removeFile$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceNewEvent.rmFile, payload);

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
    loadUserMessage: regeneratorRuntime.mark(function loadUserMessage(_ref10, _ref11) {
      var payload = _ref10.payload;
      var call = _ref11.call,
          put = _ref11.put,
          select = _ref11.select;
      var result;
      return regeneratorRuntime.wrap(function loadUserMessage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceNewEvent.loadUserMsg);

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
    loadDepartmentName: regeneratorRuntime.mark(function loadDepartmentName(_ref12, _ref13) {
      var payload = _ref12.payload;
      var call = _ref13.call,
          put = _ref13.put,
          select = _ref13.select;
      var result;
      return regeneratorRuntime.wrap(function loadDepartmentName$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceNewEvent.postDepartmentName);

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
    loadBelongProject: regeneratorRuntime.mark(function loadBelongProject(_ref14, _ref15) {
      var payload = _ref14.payload;
      var call = _ref15.call,
          put = _ref15.put,
          select = _ref15.select;
      var result;
      return regeneratorRuntime.wrap(function loadBelongProject$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(_serviceNewEvent.postBelongProject);

            case 2:
              result = _context4.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return put({ type: 'initBelongProject', payload: result.data });

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, loadBelongProject, this);
    }),
    loadEventProperty: regeneratorRuntime.mark(function loadEventProperty(_ref16, _ref17) {
      var payload = _ref16.payload;
      var call = _ref17.call,
          put = _ref17.put,
          select = _ref17.select;
      var result;
      return regeneratorRuntime.wrap(function loadEventProperty$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(_serviceNewEvent.postEventProperty);

            case 2:
              result = _context5.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context5.next = 6;
                break;
              }

              _context5.next = 6;
              return put({ type: 'initEventProperty', payload: result.data });

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, loadEventProperty, this);
    }),
    loadClassification: regeneratorRuntime.mark(function loadClassification(_ref18, _ref19) {
      var payload = _ref18.payload;
      var call = _ref19.call,
          put = _ref19.put,
          select = _ref19.select;
      var result;
      return regeneratorRuntime.wrap(function loadClassification$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return call(_serviceNewEvent.postClassification);

            case 2:
              result = _context6.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context6.next = 6;
                break;
              }

              _context6.next = 6;
              return put({ type: 'initClassification', payload: result.data });

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, loadClassification, this);
    }),
    loadEnterprise: regeneratorRuntime.mark(function loadEnterprise(_ref20, _ref21) {
      var payload = _ref20.payload;
      var call = _ref21.call,
          put = _ref21.put,
          select = _ref21.select;
      var result;
      return regeneratorRuntime.wrap(function loadEnterprise$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return call(_serviceNewEvent.postEnterprise);

            case 2:
              result = _context7.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context7.next = 6;
                break;
              }

              _context7.next = 6;
              return put({ type: 'initEnterprise', payload: result.data });

            case 6:
            case 'end':
              return _context7.stop();
          }
        }
      }, loadEnterprise, this);
    }),
    submitWorkOrder: regeneratorRuntime.mark(function submitWorkOrder(_ref22, _ref23) {
      var payload = _ref22.payload;
      var call = _ref23.call,
          put = _ref23.put,
          select = _ref23.select;
      var result, notificationConfig;
      return regeneratorRuntime.wrap(function submitWorkOrder$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return call(_serviceNewEvent.postWorkOrder, payload);

            case 2:
              result = _context8.sent;

              notificationConfig = function notificationConfig(msg, type) {
                _antd.notification[type]({
                  message: msg,
                  placement: 'topLeft'
                });
              };

              if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
                notificationConfig('提交成功', 'success');
                _router.hashHistory.push('/EventDetails/' + result.data.data.id);
              } else {
                notificationConfig('提交失败', 'error');
                _router.hashHistory.push('/NewEvent');
              }

            case 5:
            case 'end':
              return _context8.stop();
          }
        }
      }, submitWorkOrder, this);
    })
  },

  subscriptions: {}
};

//# sourceMappingURL=model-NewEvent-compiled.js.map