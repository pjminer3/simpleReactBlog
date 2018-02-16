import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input 
          {...field.input}
        />
      </div>
    );
  }
  
  render() {
    return (
      <form>
        <Field 
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

// The below helps redux communicate directly between the component and the reducer set up in reducers > index.js
export default reduxForm({
  form: 'NewPostForm',
})(NewPost);