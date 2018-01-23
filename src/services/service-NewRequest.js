import request from '../utils/request';
import api from '../utils/api';

let moment = require('moment');

export async function rmFile(payload) {
  const id = payload;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('isRecord', 0);
  formData.append('ojbCode', '');
  return request(api + '/systemFileInfoAction/remove', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function loadUserMsg() {
  return request(api + '/systemUserAction/loadCurrentRequester', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postDepartmentName() {
  let formData = new FormData();
  formData.append('enabCode', 1);
  return request(api + '/systemOrgAction/listTree', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postClassification() {
  let formData = new FormData();
  formData.append('flowCode', 'SERVERREQ');
  return request(api + '/assortAction/listTreeNew', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postWorkOrder(payload) {
  const {
    classification,
    departmentName,
    detail,
    email,
    occurrenceTime,
    officePhone,
    otherContact,
    requestName,
    telephone,
    title,
    upload,
    userId,
    username,
    reqDeptCode,
  } = payload;
  let formData = new FormData();
  formData.append('srmTopic', title);
  formData.append('srmContent', detail);
  formData.append('srmOverdueDate',
    (occurrenceTime) ?
      moment(occurrenceTime).format('YYYY-MM-DD HH:mm:ss')
      : '',
  );
  formData.append('flag', 1);
  formData.append('srmClass',
    (Array.isArray(classification) && classification.length > 0) ?
      classification[classification.length - 1]
      : '',
  );
  formData.append('reqAttachments',
    (Array.isArray(upload) && upload.length > 0) ?
      upload.map(x => x.response[0].id).join(',')
      : '',
  );
  formData.append('ciIds', '');
  formData.append('targetInfo', '');
  formData.append('reqEmail', email);
  formData.append('reqId', '');
  formData.append('reqDept', departmentName);
  formData.append('reqDeptCode', reqDeptCode);
  formData.append('reqMobile', telephone);
  formData.append('reqName', requestName);
  formData.append('reqNo', userId);
  formData.append('reqOtherConn', otherContact);
  formData.append('reqPhone', officePhone);
  formData.append('reqUsername', username);
  formData.append('effectDegree', '20');
  return request(api + '/itsmSrmInfoAction/addAndProcess', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
