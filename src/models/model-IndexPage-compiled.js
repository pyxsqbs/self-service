'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceIndexPage = require('../services/service-IndexPage');

var _router = require('dva/router');

var _cookie = require('../utils/cookie');

var _antd = require('antd');

exports.default = {

  namespace: 'modelIndexPage',

  state: {
    success: false,
    data: null,
    userMsg: {
      data: {}
    },
    route: ''
  },

  subscriptions: {},

  effects: {
    submitLoginData: regeneratorRuntime.mark(function submitLoginData(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;

      var result, initSuccess, success, data, status, notificationConfig, route, _result;

      return regeneratorRuntime.wrap(function submitLoginData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_serviceIndexPage.postLoginData, payload);

            case 2:
              result = _context.sent;
              _context.next = 5;
              return select(function (state) {
                return state.modelIndexPage.success;
              });

            case 5:
              initSuccess = _context.sent;

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1 && initSuccess !== result.data.success)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({ type: 'loginSuccess', payload: result.data });

            case 9:
              _context.next = 11;
              return select(function (state) {
                return state.modelIndexPage.success;
              });

            case 11:
              success = _context.sent;
              _context.next = 14;
              return select(function (state) {
                return state.modelIndexPage.data;
              });

            case 14:
              data = _context.sent;

              if (success) {
                _context.next = 37;
                break;
              }

              status = void 0;

              if (!(JSON.stringify(result).indexOf('"err":') > -1 || JSON.stringify(result).indexOf('"error":') > -1)) {
                _context.next = 33;
                break;
              }

              status = result.err.response.status;

              if (!status) {
                _context.next = 31;
                break;
              }

              notificationConfig = function notificationConfig(msg) {
                _antd.notification['error']({
                  message: result.err.response.status + ' ' + result.err.response.statusText,
                  description: result.err + ' (' + msg + ')',
                  placement: 'topLeft'
                });
              };

              _context.t0 = status;
              _context.next = _context.t0 === 404 ? 24 : _context.t0 === 504 ? 26 : _context.t0 === 500 ? 28 : 30;
              break;

            case 24:
              notificationConfig('找不到服务器');
              return _context.abrupt('break', 31);

            case 26:
              notificationConfig('网络超时');
              return _context.abrupt('break', 31);

            case 28:
              notificationConfig('服务器内部错误');
              return _context.abrupt('break', 31);

            case 30:
              notificationConfig('未知错误');

            case 31:
              _context.next = 35;
              break;

            case 33:
              _antd.notification.open({
                message: '用户名或密码错误',
                description: 'ERROR Incorrect username or password',
                placement: 'topLeft'
              });
              _router.hashHistory.replace('/loginContent');

            case 35:
              _context.next = 48;
              break;

            case 37:
              (0, _cookie.setCookie)('success', success);
              document.cookie = "JSESSIONID=" + data.jsessionid + "; path=/";
              _context.next = 41;
              return select(function (state) {
                return state.modelIndexPage.route;
              });

            case 41:
              route = _context.sent;

              _router.hashHistory.push('/' + route);
              _context.next = 45;
              return call(_serviceIndexPage.getPhotoId, data.userName);

            case 45:
              _result = _context.sent;

              (0, _cookie.setCookie)('currentUser', data.userName);
              (0, _cookie.setCookie)('photoId', _result.data.root[0].photo);

            case 48:
            case 'end':
              return _context.stop();
          }
        }
      }, submitLoginData, this);
    }),
    loadUserMessage: regeneratorRuntime.mark(function loadUserMessage(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var result;
      return regeneratorRuntime.wrap(function loadUserMessage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_serviceIndexPage.loadUserMsg);

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
    postLogout: regeneratorRuntime.mark(function postLogout(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var result, notificationConfig;
      return regeneratorRuntime.wrap(function postLogout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_serviceIndexPage.logout);

            case 2:
              result = _context3.sent;

              notificationConfig = function notificationConfig(msg, type) {
                _antd.notification[type]({
                  message: msg,
                  placement: 'topLeft'
                });
              };

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1)) {
                _context3.next = 34;
                break;
              }

              _context3.next = 7;
              return put({ type: 'INIT' });

            case 7:
              _context3.next = 9;
              return put({ type: 'modelKnowledgeDetails/INIT' });

            case 9:
              _context3.next = 11;
              return put({ type: 'modelQueryKnowledge/INIT' });

            case 11:
              _context3.next = 13;
              return put({ type: 'modelRequestDetails/INIT' });

            case 13:
              _context3.next = 15;
              return put({ type: 'modelEventDetails/INIT' });

            case 15:
              _context3.next = 17;
              return put({ type: 'modelQueryRequest/INIT' });

            case 17:
              _context3.next = 19;
              return put({ type: 'modelQueryEvent/INIT' });

            case 19:
              _context3.next = 21;
              return put({ type: 'modelNewRequest/INIT' });

            case 21:
              _context3.next = 23;
              return put({ type: 'modelNewEvent/INIT' });

            case 23:
              _context3.next = 25;
              return put({ type: 'modelKnowledgeSearch/INIT' });

            case 25:
              _context3.next = 27;
              return put({ type: 'modelIndexPageContent/INIT' });

            case 27:
              _context3.next = 29;
              return put({ type: 'modelLoginContent/INIT' });

            case 29:
              notificationConfig('退出成功', 'success');
              (0, _cookie.delAllCookie)();
              _router.hashHistory.push('/loginContent');
              _context3.next = 35;
              break;

            case 34:
              notificationConfig('退出失败', 'error');

            case 35:
            case 'end':
              return _context3.stop();
          }
        }
      }, postLogout, this);
    }),
    submitUpdateUserMsgData: regeneratorRuntime.mark(function submitUpdateUserMsgData(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var result, notificationConfig;
      return regeneratorRuntime.wrap(function submitUpdateUserMsgData$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(_serviceIndexPage.postUpdateUserMsg, payload);

            case 2:
              result = _context4.sent;

              notificationConfig = function notificationConfig(msg, type) {
                _antd.notification[type]({
                  message: msg,
                  placement: 'topLeft'
                });
              };

              if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
                notificationConfig('提交成功', 'success');
              } else {
                notificationConfig('提交失败', 'error');
              }

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, submitUpdateUserMsgData, this);
    }),
    submitUpdateUserPwdData: regeneratorRuntime.mark(function submitUpdateUserPwdData(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var result, notificationConfig, result2;
      return regeneratorRuntime.wrap(function submitUpdateUserPwdData$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(_serviceIndexPage.checkUser, payload);

            case 2:
              result = _context5.sent;

              notificationConfig = function notificationConfig(msg, type) {
                _antd.notification[type]({
                  message: msg,
                  placement: 'topLeft'
                });
              };

              if (!(JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1 && result.data.success)) {
                _context5.next = 11;
                break;
              }

              _context5.next = 7;
              return call(_serviceIndexPage.postUpdateUserPwd, payload);

            case 7:
              result2 = _context5.sent;

              if (JSON.stringify(result2).indexOf('"err":') === -1 && result2.data.success) {
                notificationConfig('提交成功', 'success');
              } else {
                notificationConfig('提交失败，两次密码输入不一致', 'error');
              }
              _context5.next = 12;
              break;

            case 11:
              notificationConfig('提交失败,用户名或密码错误', 'error');

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, submitUpdateUserPwdData, this);
    })
  },

  reducers: {
    loginSuccess: function loginSuccess(state, _ref11) {
      var payload = _ref11.payload;

      return Object.assign({}, state, payload);
    },
    initUserMsg: function initUserMsg(state, _ref12) {
      var payload = _ref12.payload;

      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    afterLoginRoute: function afterLoginRoute(state, _ref13) {
      var payload = _ref13.payload;

      state.route = payload;
      return Object.assign({}, state);
    },
    INIT: function INIT(state, _ref14) {
      var payload = _ref14.payload;

      return Object.assign({}, {
        success: false,
        data: null,
        userMsg: {
          data: {}
        },
        route: ''
      });
    }
  }
};

//# sourceMappingURL=model-IndexPage-compiled.js.map