import {
  postLoginData,
  getPhotoId,
  loadUserMsg,
  postUpdateUserMsg,
  postUpdateUserPwd,
  checkUser,
  logout,
} from '../services/service-IndexPage';
import {hashHistory} from 'dva/router';
import {delAllCookie, setCookie} from '../utils/cookie';
import {notification} from 'antd';

export default {

  namespace: 'modelIndexPage',

  state: {
    success: false,
    data: null,
    userMsg: {
      data: {},
    },
    route: '',
  },

  subscriptions: {},

  effects: {
    * submitLoginData({payload}, {call, put, select}) {
      const result = yield call(postLoginData, payload);
      const initSuccess = yield select(state => state.modelIndexPage.success);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1 && initSuccess !== result.data.success) {
        yield put({type: 'loginSuccess', payload: result.data});
      }
      const success = yield select(state => state.modelIndexPage.success);
      const data = yield select(state => state.modelIndexPage.data);
      if (!success) {
        let status;
        if (JSON.stringify(result).indexOf('"err":') > -1 || JSON.stringify(result).indexOf('"error":') > -1) {
          status = result.err.response.status;
          if (status) {
            const notificationConfig = function (msg) {
              notification['error']({
                message: `${result.err.response.status} ${result.err.response.statusText}`,
                description: `${result.err} (${msg})`,
                placement: 'topLeft',
              });
            };
            switch (status) {
              case 404:
                notificationConfig('找不到服务器');
                break;
              case 504:
                notificationConfig('网络超时');
                break;
              case 500:
                notificationConfig('服务器内部错误');
                break;
              default:
                notificationConfig('未知错误');
            }
          }
        } else {
          notification.open({
            message: '用户名或密码错误',
            description: 'ERROR Incorrect username or password',
            placement: 'topLeft',
          });
          hashHistory.replace('/loginContent');
        }
      } else {
        setCookie('success', success);
        document.cookie = "JSESSIONID=" + data.jsessionid + "; path=/";
        const route = yield select(state => state.modelIndexPage.route);
        hashHistory.push('/' + route);
        const result = yield call(getPhotoId, data.userName);
        setCookie('currentUser', data.userName);
        setCookie('photoId', result.data.root[0].photo);
      }
    },
    * loadUserMessage({payload}, {call, put, select}) {
      const result = yield call(loadUserMsg);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initUserMsg', payload: result.data});
      }
    },
    * postLogout({payload}, {call, put, select}) {
      const result = yield call(logout);
      const notificationConfig = function (msg, type) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
        });
      };
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'INIT'});
        yield put({type: 'modelKnowledgeDetails/INIT'});
        yield put({type: 'modelQueryKnowledge/INIT'});
        yield put({type: 'modelRequestDetails/INIT'});
        yield put({type: 'modelEventDetails/INIT'});
        yield put({type: 'modelQueryRequest/INIT'});
        yield put({type: 'modelQueryEvent/INIT'});
        yield put({type: 'modelNewRequest/INIT'});
        yield put({type: 'modelNewEvent/INIT'});
        yield put({type: 'modelKnowledgeSearch/INIT'});
        yield put({type: 'modelIndexPageContent/INIT'});
        yield put({type: 'modelLoginContent/INIT'});
        notificationConfig('退出成功', 'success');
        delAllCookie();
        hashHistory.push('/loginContent');
      } else {
        notificationConfig('退出失败', 'error');
      }
    },
    * submitUpdateUserMsgData({payload}, {call, put, select}) {
      const result = yield call(postUpdateUserMsg, payload);
      const notificationConfig = function (msg, type) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
        });
      };
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        notificationConfig('提交成功', 'success');
      } else {
        notificationConfig('提交失败', 'error');
      }
    },
    * submitUpdateUserPwdData({payload}, {call, put, select}) {
      const result = yield call(checkUser, payload);
      const notificationConfig = function (msg, type) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
        });
      };

      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1 && result.data.success) {
        const result2 = yield call(postUpdateUserPwd, payload);
        if (JSON.stringify(result2).indexOf('"err":') === -1 && result2.data.success) {
          notificationConfig('提交成功', 'success');
        } else {
          notificationConfig('提交失败，两次密码输入不一致', 'error');
        }
      } else {
        notificationConfig('提交失败,用户名或密码错误', 'error');
      }
    }
  },

  reducers: {
    loginSuccess(state, {payload}) {
      return Object.assign({}, state, payload);
    },
    initUserMsg(state, {payload}) {
      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    afterLoginRoute(state, {payload}) {
      state.route = payload;
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        success: false,
        data: null,
        userMsg: {
          data: {},
        },
        route: '',
      });
    },
  },
};
