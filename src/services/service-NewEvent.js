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

export async function postBelongProject() {
  return request(api + '/itsmProjectInfoAction/listTree', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postEventProperty() {
  let formData = new FormData();
  formData.append('dictType', 'ITSM_INC_TYPE');
  return request(api + '/systemDictAction/dictListForValueType', {
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
  formData.append('flowCode', 'INCIDENT');
  return request(api + '/assortAction/listTreeNew', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postEnterprise() {
  let formData = new FormData();
  formData.append('flowCode', 'INCIDENT');
  return request(api + '/itsmGeogAction/listTree', {
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
    // belongProject,todo:所属项目接口失败
    classification,
    departmentName,
    detail,
    email,
    eventProperty,
    occurrenceTime,
    officePhone,
    otherContact,
    priorityLevel,
    requestName,
    telephone,
    title,
    upload,
    userId,
    username,
    enterprise,
  } = payload;
  let formData = new FormData();
  formData.append('incTopic', title);
  formData.append('incContent', detail);
  formData.append('incType', (eventProperty) ? eventProperty : '');
  formData.append('incHappenDate',
    (occurrenceTime) ?
      moment(occurrenceTime).format('YYYY-MM-DD HH:mm:ss')
      : '',
  );
  formData.append('flag', 1);
  formData.append('flowCode', 'INCIDENT');
  formData.append('geogid', enterprise);
  formData.append('incClass',
    (Array.isArray(classification) && classification.length > 0) ?
      classification[classification.length - 1]
      : '',
  );
  formData.append('incPriLevel', priorityLevel);
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
  formData.append('reqMobile', telephone);
  formData.append('reqName', requestName);
  formData.append('reqNo', userId);
  formData.append('reqOtherConn', otherContact);
  formData.append('reqPhone', officePhone);
  formData.append('reqUsername', username);
  formData.append('effectDegree', '20');
  formData.append('effectRange', '20');
  formData.append('incOrigin', '90');
  return request(api + '/incidentManageAction/addAndProcess', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

