let langCookie = getCookie('language');

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length).slice(-7);
  }
  return "";
}

let robot = {
  placeholder: '请输入您的问题...',
  welcome: '您好，请问有什么可以帮助您？',
  kefuWelcome: '您好，请问有什么可以帮您？',
  likePrompt: '您对本次服务是否满意？',
  title: '智能客服',
};

switch (langCookie) {
  case 'chinese':
    document.title = '自助服务台';
    break;
  case 'english':
    document.title = 'HelpDesk';
    robot = {
      placeholder: 'Please enter your question...',
      welcome: 'Hello, may I help you?',
      kefuWelcome: 'Hello, may I help you?',
      likePrompt: 'Are you satisfied with the service?',
      title: 'Intelligent Customer Service',
    };
    break;
  default :
    document.title = '自助服务台';
}

(function (win, options) {
  //远程要加载的css和js文件地址
  let cssUrl = 'https://cloud.smartnlp.cn/cloud/assets/robot/css/robot.css'
    , jsUrl = 'https://cloud.smartnlp.cn/cloud/assets/robot/robot.min.js'
    , doc = win.document;
  //加载外部css样式
  let cssFile = document.createElement("link")
    , head = document.getElementsByTagName("head")[0]
    , isload = false;

  let _loadJS = function (src, success, error) {
    let script = document.createElement("script")
      , head = document.getElementsByTagName("head")[0]
      , isload = false;
    script.type = "text/javascript";
    script.src = src;
    script.onreadystatechange = function () {
      let r = script.readyState;
      if (!isload && (r === 'loaded' || r === 'complete')) {
        isload = true;
        success && success();
        script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
    script.onload = function () {
      if (!isload) {
        isload = true;
        success && success();
        head.removeChild(script);
      }
    };
    if (error) {
      script.onerror = error;
    }
    head.appendChild(script);
  };
  cssFile.type = "text/css";
  cssFile.rel = 'stylesheet';
  cssFile.href = cssUrl;
  let robot;
  let loadback = function () {
    _loadJS(jsUrl, function () {
      let cb = function () {
        let Robot = win['__smartnlpRobot']
          , self = this.callee;
        if (!Robot) {
          setTimeout(cb, 200);
        } else {
          if (!!robot) {
            return false;
          }
          robot = new Robot(options);
          let _con = robot.con
            , _cssfix = robot.cssfix;
          win['_smartnlpRobotShow'] = function (mod) {
            if (_con.mod === 'mini' && mod === 'normal') {
              robot.wrap.find('.' + _cssfix + 'icon-clo').trigger('click');
              return;
            }
            if (_con.mod === 'mini' && mod !== 'normal' && !_con.ismax) {
              robot.wrap.find('.' + _cssfix + 'slide-btn').trigger('click');
            }
          };
          win['_smartnlpRobotHide'] = function () {
            if (_con.mod !== 'mini') {
              robot.wrap.find('.' + _cssfix + 'icon-clo').trigger('click');
            }
            if (!!_con.ismax) {
              robot.wrap.find('.' + _cssfix + 'slide-btn').trigger('click');
            }
          };
        }
      };
      cb();
    }, function () {
      !!win.console && console.log(jsUrl + '未正常加载');
    });
  };
  cssFile.onreadystatechange = function () {
    let r = cssFile.readyState;
    if (!isload && (r === 'loaded' || r === 'complete' || r === 'interactive')) {
      loadback();
    }
  };
  cssFile.onload = function () {
    !isload && loadback();
  };
  setTimeout(function () {
    !isload && loadback();
  }, 1000);
  head.appendChild(cssFile);
})(window, {
  "mod": "mini",
  "apiUrl": "https://api.smartnlp.cn/cloud/robot/",
  "kefuHost": "https://kf.smartnlp.cn/",
  "uploadUrl": "https://res.smartnlp.cn/robot-id/upload",
  "appid": "59796d91100000dc15d2d089",
  "kefuOnly": false,
  "minWidth": 800,
  "colors": {"header": "#00c3ff", "border": "#00c3ff", "button": "#00c3ff"},
  "quicks": [],
  "tools": [],
  "zindex": 60,
  "showLeftPanel": true,
  "showSideBtn": true,
  "showCopyright": true,
  "placeholder": robot.placeholder,
  "callImg": "http://img.alicdn.com/imgextra/i4/TB1tMo3JpXXXXbwXVXXwu0bFXXX.png",
  "codeBigImg": "http://img.alicdn.com/imgextra/i1/TB197MVJpXXXXXuXVXXSutbFXXX.jpg",
  "welcome": robot.welcome,
  "kefuWelcome": robot.kefuWelcome,
  "nick": "",
  "newurl": "https://cloud.chatbot.cn/cloud/robot/webui/59796d91100000dc15d2d089?mobile",
  "logo": "http://localhost:8000/ic_robot.png",
  "headImg": 'http://localhost:8000/ic_robot.png',
  "kfJsUrl": "https://cloud.smartnlp.cn/cloud/assets/robot/ddp-client.js",
  "cloudUrl": "https://cloud.smartnlp.cn",
  "likePrompt": robot.likePrompt,
  "title": robot.title,
  "answerDelayTime": 400
});

