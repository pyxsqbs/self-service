import request from '../utils/request';
import api from '../utils/api';

export async function getEventRecordData() {
  let formData = new FormData();
  formData.append('id', 0);
  formData.append('flowCodes', 'INCIDENT');
  formData.append('limit', '5');
  formData.append('start', '0');
  return request(api + '/filterconditionAction/incidentFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getRequestRecordData() {
  let formData = new FormData();
  formData.append('id', 0);
  formData.append('flowCodes', 'SERVERREQ');
  formData.append('limit', '5');
  formData.append('start', '0');
  // formData.append('luceneKey', luceneKey);
  return request(api + '/filterconditionAction/srmFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getReqHistogramData() {
  let formData = new FormData();
  formData.append('flowcode', 'SERVERREQ');
  return request(api + '/consoleAction/getListTblItsmFilterConfigByFlowcode', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getEvtHistogramData() {
  let formData = new FormData();
  formData.append('flowcode', 'INCIDENT');
  return request(api + '/consoleAction/getListTblItsmFilterConfigByFlowcode', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getAnnounceData() {
  return request(api + '/systemItNoticeAction/myNoticeList', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postAnnounceDetailsData(payload) {
  let formData = new FormData();
  formData.append('id', payload);
  return request(api + '/systemItNoticeAction/newsView', {
    method: 'POST',
    credentials: 'include',
    body: formData,
    headers: {
      channel: 'm',
    }
  });
}

export async function getSysInformsData() {
  // return request(api+'/systemItNoticeAction/myNoticeList', {
  //   method: 'POST',
  //   credentials: 'include',
  // });
//  todo:系统通知接口还没有做
}
