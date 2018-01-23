'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rmFile = rmFile;
exports.loadUserMsg = loadUserMsg;
exports.postDepartmentName = postDepartmentName;
exports.postClassification = postClassification;
exports.postWorkOrder = postWorkOrder;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = require('moment');

async function rmFile(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('id', id);
  formData.append('isRecord', 0);
  formData.append('ojbCode', '');
  return (0, _request2.default)(_api2.default + '/systemFileInfoAction/remove', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function loadUserMsg() {
  return (0, _request2.default)(_api2.default + '/systemUserAction/loadCurrentRequester', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postDepartmentName() {
  var formData = new FormData();
  formData.append('enabCode', 1);
  return (0, _request2.default)(_api2.default + '/systemOrgAction/listTree', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postClassification() {
  var formData = new FormData();
  formData.append('flowCode', 'SERVERREQ');
  return (0, _request2.default)(_api2.default + '/assortAction/listTreeNew', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postWorkOrder(payload) {
  var classification = payload.classification,
      departmentName = payload.departmentName,
      detail = payload.detail,
      email = payload.email,
      occurrenceTime = payload.occurrenceTime,
      officePhone = payload.officePhone,
      otherContact = payload.otherContact,
      requestName = payload.requestName,
      telephone = payload.telephone,
      title = payload.title,
      upload = payload.upload,
      userId = payload.userId,
      username = payload.username,
      reqDeptCode = payload.reqDeptCode;

  var formData = new FormData();
  formData.append('srmTopic', title);
  formData.append('srmContent', detail);
  formData.append('srmOverdueDate', occurrenceTime ? moment(occurrenceTime).format('YYYY-MM-DD HH:mm:ss') : '');
  formData.append('flag', 1);
  formData.append('srmClass', Array.isArray(classification) && classification.length > 0 ? classification[classification.length - 1] : '');
  formData.append('reqAttachments', Array.isArray(upload) && upload.length > 0 ? upload.map(function (x) {
    return x.response[0].id;
  }).join(',') : '');
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
  return (0, _request2.default)(_api2.default + '/itsmSrmInfoAction/addAndProcess', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-NewRequest-compiled.js.map