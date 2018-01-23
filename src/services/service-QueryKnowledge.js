import request from '../utils/request';
import queryString from 'querystring';
import api from '../utils/api';

export async function postClassification() {
  let formData = new FormData();
  formData.append('flowCode', 'KNOWLEDGE');
  formData.append('validate', 'false');
  return request(api + '/assortAction/listTree', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postGeogId() {
  return request(api + '/systemUserAction/showModifyInfo', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function queryKnowledgeData(payload) {
  const {geogId, pageNumber, luceneKey, sort} = payload;
  const params = {
    "limit": '15',
    "start": (pageNumber - 1) * 15,
    "luceneKey": luceneKey,
    "type": 'all',
    "geogId": geogId,
    "sort": sort,
  };
  return request(api + '/searchRepositoryAction/searchPages?' + queryString.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
