import request from '../utils/request';
import api from '../utils/api';

export async function loadUserMsg() {
  return request(api + '/systemUserAction/loadCurrentRequester', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getQueryRequestData(payload) {
  const {reqId, pageNumber, luceneKey} = payload;
  let formData = new FormData();
  formData.append('start', (pageNumber - 1) * 15);
  formData.append('limit', 15);
  formData.append('srmTopic', luceneKey);
  // return request(api + '/filterconditionAction/srmFiltercondition', {
  return request(api + '/itsmSrmInfoAction/list', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
