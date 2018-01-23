import {getKnowDetailsData} from '../services/service-KnowledgeDetails'

export default {
  namespace: 'modelKnowledgeDetails',

  state: {
    knowledgeDetailsData: {},
  },

  reducers: {
    initKnowledgeDetailsData(state, {payload}) {
      Object.assign(state.knowledgeDetailsData, payload);
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        knowledgeDetailsData: {},
      });
    },
  },

  effects: {
    * getKnowledgeDetailsData({payload}, {call, put, select}) {
      const result = yield call(getKnowDetailsData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initKnowledgeDetailsData', payload: result.data});
      }
    },
  },

  subscriptions: {},
};
