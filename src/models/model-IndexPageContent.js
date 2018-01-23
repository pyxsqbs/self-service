import {
  getEventRecordData,
  getRequestRecordData,
  getReqHistogramData,
  getEvtHistogramData,
  getAnnounceData,
  getSysInformsData,
  postAnnounceDetailsData,
} from '../services/service-IndexPageContent';

export default {

  namespace: 'modelIndexPageContent',

  state: {
    eventRecordData: [],
    requestRecordData: [],
    requestHistogramData: [],
    eventHistogramData: [],
    announcementData: [],
    totalProperty: 0,
    announcementDetailsData: {
      file: [],
      noticeContent: '',
      noticeTitle: '',
      publishTime: '',
      viewTimes: '',
    },
  },

  subscriptions: {},

  effects: {
    * getEventRecordTableData({payload}, {call, put, select}) {
      const result = yield call(getEventRecordData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initEventRecordData', payload: result.data.root});
      }
    },

    * getRequestRecordTableData({payload}, {call, put, select}) {
      const result = yield call(getRequestRecordData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initRequestRecordData', payload: result.data.root});
      }
    },

    * getRequestHistogramData({payload}, {call, put, select}) {
      const result = yield call(getReqHistogramData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initRequestHistogramData', payload: result.data[1].children});
      }
    },

    * getEventHistogramData({payload}, {call, put, select}) {
      const result = yield call(getEvtHistogramData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initEventHistogramData', payload: result.data[0].children});
      }
    },

    * getAnnouncementData({payload}, {call, put, select}) {
      const result = yield call(getAnnounceData);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initAnnouncementData', payload: result.data.root});
        yield put({type: 'initTotal', payload: result.data.totalProperty});

      }
    },

    * getAnnouncementDetailsData({payload}, {call, put, select}) {
      const result = yield call(postAnnounceDetailsData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1 && JSON.stringify(result).indexOf('"error":') === -1) {
        yield put({type: 'initAnnouncementDetailsData', payload: result.data.data});
      }
    },

    * getSystemInformsData({payload}, {call, put, select}) {
      const result = yield call(getSysInformsData);
      // if (JSON.stringify(result).indexOf('"err":') === -1) {}
      // yield put({type: 'initAnnouncementData', payload: result.data.root});
      //  fixme:还没有这个接口
    },

  },

  reducers: {
    initEventRecordData(state, {payload}) {
      Object.assign(state.eventRecordData, payload);
      return Object.assign({}, state);
    },

    initRequestRecordData(state, {payload}) {
      Object.assign(state.requestRecordData, payload);
      return Object.assign({}, state);
    },

    initRequestHistogramData(state, {payload}) {
      Object.assign(state.requestHistogramData, payload);
      return Object.assign({}, state);
    },

    initEventHistogramData(state, {payload}) {
      Object.assign(state.eventHistogramData, payload);
      return Object.assign({}, state);
    },

    initAnnouncementData(state, {payload}) {
      Object.assign(state.announcementData, payload);
      return Object.assign({}, state);
    },

    initAnnouncementDetailsData(state, {payload}) {
      Object.assign(state.announcementDetailsData, payload);
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
        eventRecordData: [],
        requestRecordData: [],
        requestHistogramData: [],
        eventHistogramData: [],
        announcementData: [],
        totalProperty: 0,
        announcementDetailsData: {
          file: [],
          noticeContent: '',
          noticeTitle: '',
          publishTime: '',
          viewTimes: '',
        },
      });
    },
  },

};
