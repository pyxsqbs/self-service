'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventRecordData = getEventRecordData;
exports.getRequestRecordData = getRequestRecordData;
exports.getReqHistogramData = getReqHistogramData;
exports.getEvtHistogramData = getEvtHistogramData;
exports.getAnnounceData = getAnnounceData;
exports.postAnnounceDetailsData = postAnnounceDetailsData;
exports.getSysInformsData = getSysInformsData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getEventRecordData() {
  var formData = new FormData();
  formData.append('id', 0);
  formData.append('flowCodes', 'INCIDENT');
  formData.append('limit', '5');
  formData.append('start', '0');
  return (0, _request2.default)(_api2.default + '/filterconditionAction/incidentFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getRequestRecordData() {
  var formData = new FormData();
  formData.append('id', 0);
  formData.append('flowCodes', 'SERVERREQ');
  formData.append('limit', '5');
  formData.append('start', '0');
  // formData.append('luceneKey', luceneKey);
  return (0, _request2.default)(_api2.default + '/filterconditionAction/srmFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getReqHistogramData() {
  var formData = new FormData();
  formData.append('flowcode', 'SERVERREQ');
  return (0, _request2.default)(_api2.default + '/consoleAction/getListTblItsmFilterConfigByFlowcode', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getEvtHistogramData() {
  var formData = new FormData();
  formData.append('flowcode', 'INCIDENT');
  return (0, _request2.default)(_api2.default + '/consoleAction/getListTblItsmFilterConfigByFlowcode', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getAnnounceData() {
  return (0, _request2.default)(_api2.default + '/systemItNoticeAction/myNoticeList', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postAnnounceDetailsData(payload) {
  var formData = new FormData();
  formData.append('id', payload);
  return (0, _request2.default)(_api2.default + '/systemItNoticeAction/newsView', {
    method: 'POST',
    credentials: 'include',
    body: formData,
    headers: {
      channel: 'm'
    }
  });
}

async function getSysInformsData() {
  // return request(api+'/systemItNoticeAction/myNoticeList', {
  //   method: 'POST',
  //   credentials: 'include',
  // });
  //  todo:系统通知接口还没有做
}

//# sourceMappingURL=service-IndexPageContent-compiled.js.map