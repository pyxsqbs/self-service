'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUserMsg = loadUserMsg;
exports.getQueryEventData = getQueryEventData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loadUserMsg() {
  return (0, _request2.default)(_api2.default + '/systemUserAction/loadCurrentRequester', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function getQueryEventData(payload) {
  var reqId = payload.reqId,
      pageNumber = payload.pageNumber,
      luceneKey = payload.luceneKey;

  var formData = new FormData();
  formData.append('flowCodes', 'INCIDENT');
  formData.append('start', (pageNumber - 1) * 15);
  formData.append('limit', 15);
  formData.append('id', '100056');
  formData.append('luceneKey', luceneKey);
  return (0, _request2.default)(_api2.default + '/filterconditionAction/incidentFiltercondition', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-QueryEvent-compiled.js.map