'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopularData = getPopularData;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getPopularData() {
  var params = {
    "limit": 10000,
    "start": 0,
    "luceneKey": '',
    "type": 'all',
    "sort": '',
    "sortType": 0,
    "sortCode": 'browseCount'
  };
  return (0, _request2.default)(_api2.default + '/searchRepositoryAction/searchPages?' + _querystring2.default.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm'
    }
  });
}

//# sourceMappingURL=service-KnowledgeSearch-compiled.js.map