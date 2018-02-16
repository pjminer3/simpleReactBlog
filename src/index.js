import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise'

import reducers from './reducers';
import PostIndex from './components/post_index';
import NewPost from './components/post_new';
// import NotFound from './components/not_found';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/" component={PostIndex} />
          {/* <Route path="/posts/:id" component={PostDetail} />  */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>

  , document.querySelector('.container'));
