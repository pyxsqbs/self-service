import request from '../utils/request';
import api from '../utils/api';

export async function getContentHeaderData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('id', id);
  return request(api + '/incidentManageAction/view', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getSoluteData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('id', id);
  return request(api + '/incidentManageAction/loadSolution', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getAssociatedOrderOptionsData() {
  return request(api + '/systemFunctionInfoAction/getRelationableFlowcodes', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getSolutionAttachmentData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('objId', id);
  formData.append('objType', '20');
  return request(api + '/systemFileInfoAction/list', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function getEventAttachmentData(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('objId', id);
  formData.append('objTypes', '10,20,50,900');
  return request(api + '/systemFileInfoAction/listAttachment', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
