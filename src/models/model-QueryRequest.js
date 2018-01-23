import {getQueryRequestData, loadUserMsg} from '../services/service-QueryRequest';

export default {
  namespace: 'modelQueryRequest',

  state: {
    userMsg: {
      data: {
        reqId: null,
      },
    },
    queryRequestData: [],
    totalProperty: 0,
    luceneKey: '',
  },

  reducers: {
    submitTimes(state, {payload}) {
      state.luceneKey = payload.luceneKey;
      return Object.assign({}, state);
    },
    initUserMsg(state, {payload}) {
      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    initQueryRequestData(state, {payload}) {
      state.queryRequestData = payload;
      return Object.assign({}, state);
    },
    initTotal(state, {payload}) {
      Object.assign(state, {
        totalProperty: payload,
      });
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        userMsg: {
          data: {
            reqId: null,
          },
        },
        queryRequestData: [],
        totalProperty: 0,
        luceneKey: '',
      });
    },
  },

  effects: {
    * loadUserMessage({payload}, {call, put, select}) {
      const result = yield call(loadUserMsg);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initUserMsg', payload: result.data});
      }
    },
    * getQueryRequestTableData({payload}, {call, put, select}) {
      const result = yield call(getQueryRequestData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initQueryRequestData', payload: result.data.root});
        yield put({type: 'initTotal', payload: result.data.totalProperty});
      }
    },
  },

  subscriptions: {},

};
