import {getContentHeaderData,getRequestAttachmentData} from '../services/service-RequestDetails'

export default {
  namespace: 'modelRequestDetails',
  state: {
    contentHeaderData: {},
    requestAttachmentData:[],
  },
  reducers: {
    initContentHeaderData(state, {payload}) {
      Object.assign(state.contentHeaderData, payload);
      return Object.assign({}, state);
    },
    initRequestAttachmentTableData(state, {payload}) {
      state.requestAttachmentData = payload;
      return Object.assign({}, state);
    },
    INIT(state, {payload}) {
      return Object.assign({}, {
        contentHeaderData: {},
        requestAttachmentData:[],
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
    * getRequestAttachmentTableData({payload}, {call, put, select}) {
      const result = yield call(getRequestAttachmentData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initRequestAttachmentTableData', payload: result.data.root});
      }
    },
  },
  subscriptions: {},
};

