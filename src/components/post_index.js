import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchPosts} from '../actions/index';


class PostIndex extends Component {
  fetchPosts();
  
  render() {
    return (
      <div>I've made a post index</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PostIndex)

// export default PostIndex;