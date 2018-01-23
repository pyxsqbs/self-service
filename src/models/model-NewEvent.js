import {
  rmFile,
  loadUserMsg,
  postDepartmentName,
  postBelongProject,
  postEventProperty,
  postClassification,
  postEnterprise,
  postWorkOrder,
} from '../services/service-NewEvent'
import {hashHistory} from 'dva/router';
import {notification} from 'antd';

export default {

  namespace: 'modelNewEvent',

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
    belongProject: [],
    eventProperty: [],
    classification: [],
    enterprise: [],
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
    initBelongProject(state, {payload}) {
      Object.assign(state.belongProject, payload);
      return Object.assign({}, state);
    },
    initEventProperty(state, {payload}) {
      Object.assign(state.eventProperty, payload);
      return Object.assign({}, state);
    },
    initClassification(state, {payload}) {
      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    initEnterprise(state, {payload}) {
      Object.assign(state.enterprise, payload);
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
        belongProject: [],
        eventProperty: [],
        classification: [],
        enterprise: [],
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
    * loadBelongProject({payload}, {call, put, select}) {
      const result = yield call(postBelongProject);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initBelongProject', payload: result.data});
      }
    },
    * loadEventProperty({payload}, {call, put, select}) {
      const result = yield call(postEventProperty);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initEventProperty', payload: result.data});
      }
    },
    * loadClassification({payload}, {call, put, select}) {
      const result = yield call(postClassification);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initClassification', payload: result.data});
      }
    },
    * loadEnterprise({payload}, {call, put, select}) {
      const result = yield call(postEnterprise);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initEnterprise', payload: result.data});
      }
    },

    * submitWorkOrder({payload}, {call, put, select}) {
      const result = yield call(postWorkOrder, payload);
      const notificationConfig = function (msg, type) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
        });
      };
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        notificationConfig('提交成功', 'success');
        hashHistory.push('/EventDetails/' + result.data.data.id);
      } else {
        notificationConfig('提交失败', 'error');
        hashHistory.push('/NewEvent');
      }
    }
  },

  subscriptions: {},
};
