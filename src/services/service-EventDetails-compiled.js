'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContentHeaderData = getContentHeaderData;
exports.getSoluteData = getSoluteData;
exports.getAssociatedOrderOptionsData = getAssociatedOrderOptionsData;
exports.getSolutionAttachmentData = getSolutionAttachmentData;
exports.getEventAttachmentData = getEventAttachmentData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getContentHeaderData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('id', id);
  return (0, _request2.default)(_api2.default + '/incidentManageAction/view', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getSoluteData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('id', id);
  return (0, _request2.default)(_api2.default + '/incidentManageAction/loadSolution', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getAssociatedOrderOptionsData() {
  return (0, _request2.default)(_api2.default + '/systemFunctionInfoAction/getRelationableFlowcodes', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getSolutionAttachmentData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('objId', id);
  formData.append('objType', '20');
  return (0, _request2.default)(_api2.default + '/systemFileInfoAction/list', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getEventAttachmentData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('objId', id);
  formData.append('objTypes', '10,20,50,900');
  return (0, _request2.default)(_api2.default + '/systemFileInfoAction/listAttachment', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-EventDetails-compiled.js.map