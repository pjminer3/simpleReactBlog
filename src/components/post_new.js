import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
        className="form-control" 
        type='text'
          {...field.input}
        />
      </div>
    );
  }
  
  render() {
    return (
      <form>
        <Field
          label="Title of Post"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />

      </form>
    );
  }
}

// The below helps redux communicate directly between the component and the reducer set up in reducers > index.js
export default reduxForm({
  form: 'NewPostForm',
})(NewPost);