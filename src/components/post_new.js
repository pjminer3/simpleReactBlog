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
          label="Categories"
          name="categories"
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

// called whenver a form is submitted
function validate() {
  // always create errors
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.categories) {
    errors.categories = "Please enter some categories"
  }
  if (!values.title) {
    errors.content = "Please enter some blog content"
  }
  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux form assums form is invalid
  return error;

}

// The below helps redux communicate directly between the component and the reducer set up in reducers > index.js
export default reduxForm({
  validate,
  form: 'NewPostForm',
})(NewPost);