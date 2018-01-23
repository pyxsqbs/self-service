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

export async function getQueryEventData(payload) {
  const {reqId, pageNumber, luceneKey} = payload;
  let formData = new FormData();
  formData.append('flowCodes', 'INCIDENT');
  formData.append('start', (pageNumber - 1) * 15);
  formData.append('limit', 15);
  formData.append('id', '100056');
  formData.append('luceneKey', luceneKey);
  return request(api + '/filterconditionAction/incidentFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
