'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContentHeaderData = getContentHeaderData;
exports.getRequestAttachmentData = getRequestAttachmentData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getContentHeaderData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('id', id);
  return (0, _request2.default)(_api2.default + '/itsmSrmInfoAction/view', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getRequestAttachmentData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('objId', id);
  formData.append('objTypes', '220,230');
  return (0, _request2.default)(_api2.default + '/systemFileInfoAction/listAttachment', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-RequestDetails-compiled.js.map