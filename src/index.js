import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  onError(e, dispatch) {
    // notification.open({
    //   message: `${e.response.status} ${e.response.statusText}`,
    //   description: `${e} (服务器内部错误)`,
    // });
    // console.log(e.message);
  },
});
// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require("./models/model-IndexPage"));
app.model(require("./models/model-KnowledgeDetails"));
app.model(require("./models/model-QueryKnowledge"));
app.model(require("./models/model-RequestDetails"));
app.model(require("./models/model-EventDetails"));
app.model(require("./models/model-QueryRequest"));
app.model(require("./models/model-QueryEvent"));
app.model(require("./models/model-NewRequest"));
app.model(require("./models/model-NewEvent"));
app.model(require("./models/model-KnowledgeSearch"));
app.model(require("./models/model-IndexPageContent"));
app.model(require("./models/model-LoginContent"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
