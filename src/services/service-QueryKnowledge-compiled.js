'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postClassification = postClassification;
exports.postGeogId = postGeogId;
exports.queryKnowledgeData = queryKnowledgeData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function postClassification() {
  var formData = new FormData();
  formData.append('flowCode', 'KNOWLEDGE');
  formData.append('validate', 'false');
  return (0, _request2.default)(_api2.default + '/assortAction/listTree', {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function postGeogId() {
  return (0, _request2.default)(_api2.default + '/systemUserAction/showModifyInfo', {
    method: 'POST',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

async function queryKnowledgeData(payload) {
  var geogId = payload.geogId,
      pageNumber = payload.pageNumber,
      luceneKey = payload.luceneKey,
      sort = payload.sort;

  var params = {
    "limit": '15',
    "start": (pageNumber - 1) * 15,
    "luceneKey": luceneKey,
    "type": 'all',
    "geogId": geogId,
    "sort": sort
  };
  return (0, _request2.default)(_api2.default + '/searchRepositoryAction/searchPages?' + _querystring2.default.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-QueryKnowledge-compiled.js.map