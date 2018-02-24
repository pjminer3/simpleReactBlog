import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost } from '../actions/';

class NewPost extends Component {
  renderField(field) {
    const { meta: { touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
        className="form-control" 
        type='text'
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button 
        type="submit"
        className="btn btn-primary"
        >Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// called whenver a form is submitted
function validate(values) {
  // always create errors
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.categories) {
    errors.categories = "Please enter some categories"
  }
  if (!values.content) {
    errors.content = "Please enter some blog content"
  }
  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux form assums form is invalid
  return errors;

}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { createPost }, dispatch);
// }

// The below helps redux communicate directly between the component and the reducer set up in reducers > index.js
export default reduxForm({
  validate,
  form: 'NewPostForm',
})(
  connect(null, { createPost })(NewPost)
);