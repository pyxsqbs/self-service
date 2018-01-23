export default {
  "entry": ["babel-polyfill", "src/index.js"],
  "publicPath": "/self-services/dist/",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    }
  },
  "proxy": {
    "/api": {
      // "target": "https://10.0.5.45:8448/itsm/",
      // "target": "http://10.0.5.45/itsm/",
      // "target": "http://123.57.152.127:8082/itsm/",
      "target": "http://10.126.3.87:8081/itsm",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""},
      "secure": false
    }
  }
}
