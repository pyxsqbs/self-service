import {
  getContentHeaderData,
  getSoluteData,
  getAssociatedOrderOptionsData,
  getSolutionAttachmentData,
  getEventAttachmentData,
} from '../services/service-EventDetails'

export default {
  namespace: 'modelEventDetails',
  state: {
    contentHeaderData: {},
    solutionData: {},
    associatedOrderData: [],
    solutionAttachmentData: [],
    eventAttachmentData: [],
  },
  reducers: {
    initContentHeaderData(state, {payload}) {
      Object.assign(state.contentHeaderData, payload);
      return Object.assign({}, state);
    },
    initSolutionData(state, {payload}) {
      Object.assign(state.solutionData, payload);
      return Object.assign({}, state);
    },
    initAssociatedOrderData(state, {payload}) {
      Object.assign(state.associatedOrderData, payload);
      return Object.assign({}, state);
    },
    initSolutionAttachmentTableData(state, {payload}) {
      state.solutionAttachmentData = payload;
      return Object.assign({}, state);
    },
    initEventAttachmentTableData(state, {payload}) {
      state.eventAttachmentData = payload;
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        contentHeaderData: {},
        solutionData: {},
        associatedOrderData: [],
        solutionAttachmentData: [],
        eventAttachmentData: [],
      });
    },
  },
  effects: {
    * getContentHeaderMsgData({payload}, {call, put, select}) {
      const result = yield call(getContentHeaderData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initContentHeaderData', payload: result.data});
      }
    },
    * getSolutionData({payload}, {call, put, select}) {
      const result = yield call(getSoluteData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initSolutionData', payload: result.data});
      }
    },
    * getAssociatedOrderData({payload}, {call, put, select}) {
      const result = yield call(getAssociatedOrderOptionsData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initAssociatedOrderData', payload: result.data});
      }
    },
    * getSolutionAttachmentTableData({payload}, {call, put, select}) {
      const result = yield call(getSolutionAttachmentData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initSolutionAttachmentTableData', payload: result.data.root});
      }
    },
    * getEventAttachmentTableData({payload}, {call, put, select}) {
      const result = yield call(getEventAttachmentData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initEventAttachmentTableData', payload: result.data.root});
      }
    },
  },
  subscriptions: {},
};
