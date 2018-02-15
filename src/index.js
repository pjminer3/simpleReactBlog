import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import PostIndex from './components/post_index'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
        {/* <Route path="/posts/:id" component={PostDetail} /> 
        <Route path="/posts/new" component={PostNew} /> */}
      </div>
    </BrowserRouter>
  </Provider>

  , document.querySelector('.container'));
