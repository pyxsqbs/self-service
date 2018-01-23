import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexPageContent from "./routes/IndexPageContent";
import LoginContent from './routes/LoginContent';
import KnowledgeSearch from "./routes/KnowledgeSearch.js";
import NewEvent from "./routes/NewEvent.js";
import NewRequest from "./routes/NewRequest.js";
import QueryEvent from "./routes/QueryEvent.js";
import QueryRequest from "./routes/QueryRequest.js";
import EventDetails from "./routes/EventDetails.js";
import RequestDetails from "./routes/RequestDetails.js";
import QueryKnowledge from "./routes/QueryKnowledge.js";
import KnowledgeDetails from "./routes/KnowledgeDetails.js";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={IndexPageContent}/>
        <Route path="/loginContent" component={LoginContent}/>
        <Route path="/knowledgeSearch" component={KnowledgeSearch}/>
        <Route path="/NewEvent" component={NewEvent}/>
        <Route path="/NewRequest" component={NewRequest}/>
        <Route path="/QueryEvent" component={QueryEvent}/>
        <Route path="/QueryRequest" component={QueryRequest}/>
        <Route path="/EventDetails/:id" component={EventDetails}/>
        <Route path="/RequestDetails/:id" component={RequestDetails}/>
        <Route path="/QueryKnowledge(/:data)" component={QueryKnowledge}/>
        <Route path="/KnowledgeDetails/:id" component={KnowledgeDetails}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
