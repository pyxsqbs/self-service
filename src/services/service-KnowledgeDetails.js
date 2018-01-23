import request from '../utils/request';
import api from '../utils/api';

export async function getKnowDetailsData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('d', 'true');
  return request(api + '/repositoryInfoAction/showRepositoryInfo', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
