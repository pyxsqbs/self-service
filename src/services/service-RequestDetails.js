import request from '../utils/request';
import api from '../utils/api';

export async function getContentHeaderData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('id', id);
  return request(api + '/itsmSrmInfoAction/view', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getRequestAttachmentData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('objId', id);
  formData.append('objTypes', '220,230');
  return request(api + '/systemFileInfoAction/listAttachment', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
