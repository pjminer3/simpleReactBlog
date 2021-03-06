import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions/index';


class PostIndex extends Component {
  // componentDidMount is called right after a component is registered on the DOM and before a component is rendered
  componentDidMount() {
    this.props.fetchPosts(); // kicks of data loading process
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
          {/* Calls the method renderPost and we create renderPost above */}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex)
// sets this.props.fetchPosts = fetchPosts
// we can use this syntax instead of mapDispatchToProps 

// export default PostIndex;