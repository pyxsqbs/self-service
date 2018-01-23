import request from '../utils/request';
import queryString from 'querystring';
import api from '../utils/api';

export async function getPopularData() {
  const params = {
    "limit": 10000,
    "start": 0,
    "luceneKey": '',
    "type": 'all',
    "sort": '',
    "sortType": 0,
    "sortCode": 'browseCount',
  };
  return request(api + '/searchRepositoryAction/searchPages?' + queryString.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
