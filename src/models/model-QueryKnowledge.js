import {postClassification, postGeogId, queryKnowledgeData} from '../services/service-QueryKnowledge'

export default {
  namespace: 'modelQueryKnowledge',
  state: {
    classification: [],
    geogId: '',
    queryKnowledgeTableData: [],
    totalProperty: 0,
  },
  reducers: {
    initClassification(state, {payload}) {
      Object.assign(state.classification, payload);
      return Object.assign({}, state);
    },
    initGeogId(state, {payload}) {
      state.geogId = payload;
      return Object.assign({}, state);
    },
    initQueryKnowledgeData(state, {payload}) {
      state.queryKnowledgeTableData = payload;
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
        classification: [],
        geogId: '',
        queryKnowledgeTableData: [],
        totalProperty: 0,
      });
    },
  },
  effects: {
    * loadClassification({payload}, {call, put, select}) {
      const result = yield call(postClassification);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initClassification', payload: result.data});
      }
    },
    * loadGeogId({payload}, {call, put, select}) {
      const result = yield call(postGeogId);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initGeogId', payload: result.data.data.geogid});
      }
    },
    * getQueryKnowledgeTableData({payload}, {call, put, select}) {
      const result = yield call(queryKnowledgeData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initQueryKnowledgeData', payload: result.data.root});
        yield put({type: 'initTotal', payload: result.data.totalProperty});
      }
    },
  },
  subscriptions: {},
};
