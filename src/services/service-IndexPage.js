import request from '../utils/request';
import queryString from 'querystring';
import api from '../utils/api';

export async function postLoginData(payload) {
  const {username, password} = payload;
  let formData = new FormData();
  formData.append('j_username', username);
  formData.append('j_password', password);
  return request(api + '/j_spring_security_check', {
    method: 'POST',
    body: formData,
    headers: {
      channel: 'm',
    }
  });
}

export async function getPhotoId(payload) {
  const params = {
    "userName": payload,
  };
  return request(api + '/userController/getUserInfo?' + queryString.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function loadUserMsg() {
  return request(api + '/systemUserAction/showModifyInfo', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postUpdateUserMsg(payload) {
  const {
    username,
    id,
    sex,
    officePhone,
    telephone,
    email,
  } = payload;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('realName', username);
  formData.append('officePhone', officePhone);
  formData.append('mobilePhone', telephone);
  formData.append('email', email);
  formData.append('sex', (sex === '男' || sex === 'Male') ? 0 : (sex === '女' || sex === 'Female') ? 1 : '');

  return request(api + '/systemUserAction/updateUserInfo', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function checkUser(payload) {
  const {
    username,
    originPwd,
  } = payload;
  let formData = new FormData();
  formData.append('userName', username);
  formData.append('password', originPwd);
  return request(api + '/systemUserAction/checkUser', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function postUpdateUserPwd(payload) {
  const {
    username,
    originPwd,
    newPwd,
    confirmPwd,
  } = payload;
  let formData = new FormData();
  formData.append('userName', username);
  formData.append('password', originPwd);
  formData.append('newPassword', newPwd);
  formData.append('confirmPassword', confirmPwd);

  return request(api + '/systemUserAction/modifyPassword', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}

export async function logout() {
  return request(api + '/j_spring_security_logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
