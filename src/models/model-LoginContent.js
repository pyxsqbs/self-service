import {getPopularData} from '../services/service-KnowledgeSearch'


export default {
  namespace: 'modelLoginContent',

  state: {
    data: [],
  },

  reducers: {
    initPopularData(state, {payload}) {
      Object.assign(state.data, payload);
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        data: [],
      });
    },
  },

  effects: {
    * searchPopular({payload}, {call, put, select}) {
      const result = yield call(getPopularData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initPopularData', payload: result.data.root});
      }
    }

  },

  subscriptions: {},
};
