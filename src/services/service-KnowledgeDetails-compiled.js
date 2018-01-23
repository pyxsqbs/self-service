'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKnowDetailsData = getKnowDetailsData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getKnowDetailsData(payload) {
  var id = payload;
  var formData = new FormData();
  formData.append('id', id);
  formData.append('d', 'true');
  return (0, _request2.default)(_api2.default + '/repositoryInfoAction/showRepositoryInfo', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-KnowledgeDetails-compiled.js.map