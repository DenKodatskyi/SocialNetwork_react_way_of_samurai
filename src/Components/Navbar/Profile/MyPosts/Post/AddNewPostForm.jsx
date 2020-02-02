import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../../../utils/validators/validators';
import { Textarea } from './../../../../assets/FormsControls/FormsControls';

let maxLength40 = maxLengthCreator(40);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field component={Textarea} name="newPostText" placeholder={"Your post..."} validate={[required, maxLength40]} />
      </div>
      <div><button>Add post</button></div>

    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default AddNewPostFormRedux;

