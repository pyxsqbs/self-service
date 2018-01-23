'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLoginData = postLoginData;
exports.getPhotoId = getPhotoId;
exports.loadUserMsg = loadUserMsg;
exports.postUpdateUserMsg = postUpdateUserMsg;
exports.checkUser = checkUser;
exports.postUpdateUserPwd = postUpdateUserPwd;
exports.logout = logout;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function postLoginData(payload) {
  var username = payload.username,
      password = payload.password;

  var formData = new FormData();
  formData.append('j_username', username);
  formData.append('j_password', password);
  return (0, _request2.default)(_api2.default + '/j_spring_security_check', {
    method: 'POST',
    body: formData,
    headers: {
      channel: 'm'
    }
  });
}

async function getPhotoId(payload) {
  var params = {
    "userName": payload
  };
  return (0, _request2.default)(_api2.default + '/userController/getUserInfo?' + _querystring2.default.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function loadUserMsg() {
  return (0, _request2.default)(_api2.default + '/systemUserAction/showModifyInfo', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postUpdateUserMsg(payload) {
  var username = payload.username,
      id = payload.id,
      sex = payload.sex,
      officePhone = payload.officePhone,
      telephone = payload.telephone,
      email = payload.email;

  var formData = new FormData();
  formData.append('id', id);
  formData.append('realName', username);
  formData.append('officePhone', officePhone);
  formData.append('mobilePhone', telephone);
  formData.append('email', email);
  formData.append('sex', sex === '男' || sex === 'Male' ? 0 : sex === '女' || sex === 'Female' ? 1 : '');

  return (0, _request2.default)(_api2.default + '/systemUserAction/updateUserInfo', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function checkUser(payload) {
  var username = payload.username,
      originPwd = payload.originPwd;

  var formData = new FormData();
  formData.append('userName', username);
  formData.append('password', originPwd);
  return (0, _request2.default)(_api2.default + '/systemUserAction/checkUser', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postUpdateUserPwd(payload) {
  var username = payload.username,
      originPwd = payload.originPwd,
      newPwd = payload.newPwd,
      confirmPwd = payload.confirmPwd;

  var formData = new FormData();
  formData.append('userName', username);
  formData.append('password', originPwd);
  formData.append('newPassword', newPwd);
  formData.append('confirmPassword', confirmPwd);

  return (0, _request2.default)(_api2.default + '/systemUserAction/modifyPassword', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function logout() {
  return (0, _request2.default)(_api2.default + '/j_spring_security_logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-IndexPage-compiled.js.map