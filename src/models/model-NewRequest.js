import {
  rmFile,
  loadUserMsg,
  postDepartmentName,
  postClassification,
  postWorkOrder,
} from '../services/service-NewRequest'
import {hashHistory} from 'dva/router';
import {notification} from 'antd';

export default {

  namespace: 'modelNewRequest',

  state: {
    userMsg: {
      data: {
        reqDeptName: null,
        reqEmail: null,
        reqMobile: null,
        reqName: null,
        reqNo: null,
        reqUsername: null,
      },
    },
    departmentName: [],
    classification: [],
  },

  reducers: {
    initUserMsg(state, {payload}) {
      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    initDepartmentName(state, {payload}) {
      Object.assign(state.departmentName, payload);
      return Object.assign({}, state);
    },
    initClassification(state, {payload}) {
      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        userMsg: {
          data: {
            reqDeptName: null,
            reqEmail: null,
            reqMobile: null,
            reqName: null,
            reqNo: null,
            reqUsername: null,
          },
        },
        departmentName: [],
        classification: [],
      });
    },
  },

  effects: {
    * removeFile({payload}, {call, put, select}) {
      const result = yield call(rmFile, payload);
      if (!result.data.success) {
        alert('删除上传文件错误');
      }
    },
    * loadUserMessage({payload}, {call, put, select}) {
      const result = yield call(loadUserMsg);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initUserMsg', payload: result.data});
      }
    },
    * loadDepartmentName({payload}, {call, put, select}) {
      const result = yield call(postDepartmentName);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initDepartmentName', payload: result.data});
      }
    },
    * loadClassification({payload}, {call, put, select}) {
      const result = yield call(postClassification);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initClassification', payload: result.data});
      }
    },
    * submitWorkOrder({payload}, {call, put, select}) {
      const result = yield call(postWorkOrder, payload);
      const notificationConfig = function (msg, type, des) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
          description: (des) ? des : '',
        });
      };
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        notificationConfig('提交成功', 'success');
        hashHistory.push('/RequestDetails/' + result.data.data.id);
      } else {
        notificationConfig('提交失败', 'error', result.data.message);
        hashHistory.push('/NewRequest');
      }
    }
  },

  subscriptions: {},
};
