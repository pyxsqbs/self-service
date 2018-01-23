import {getQueryEventData, loadUserMsg} from '../services/service-QueryEvent';

export default {
  namespace: 'modelQueryEvent',

  state: {
    userMsg: {
      data: {
        reqId: null,
      },
    },
    queryEventData: [],
    totalProperty: 0,
    luceneKey: '',
  },

  reducers: {
    submitTimes(state, {payload, changeCount}) {
      state.luceneKey = payload.luceneKey;
      return Object.assign({}, state);
    },
    initUserMsg(state, {payload}) {
      Object.assign(state.userMsg, payload);
      return Object.assign({}, state);
    },
    initQueryEventData(state, {payload}) {
      state.queryEventData = payload;
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
        queryEventData: [],
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
    * getQueryEventTableData({payload}, {call, put, select}) {
      const result = yield call(getQueryEventData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initQueryEventData', payload: result.data.root});
        yield put({type: 'initTotal', payload: result.data.totalProperty});
      }
    },
  },

  subscriptions: {},

};
