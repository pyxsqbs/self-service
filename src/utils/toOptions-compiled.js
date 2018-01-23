"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toOptions = toOptions;
function toOptions(nodeArray) {
  if (Array.isArray(nodeArray) && nodeArray.length > 0) {
    for (var i = 0; i < nodeArray.length; i++) {
      if (nodeArray[i].text) {
        nodeArray[i].value = nodeArray[i].id;
        nodeArray[i].label = nodeArray[i].text;
      }
      delete nodeArray[i].ciNo;
      delete nodeArray[i].ciParentId;
      delete nodeArray[i].iconCls;
      delete nodeArray[i].id;
      delete nodeArray[i].key;
      delete nodeArray[i].leaf;
      delete nodeArray[i].others;
      delete nodeArray[i].root;
      delete nodeArray[i].tempText;
      delete nodeArray[i].treeType;
      delete nodeArray[i].text;
      toOptions(nodeArray[i].children);
    }
  }
}

//# sourceMappingURL=toOptions-compiled.js.map