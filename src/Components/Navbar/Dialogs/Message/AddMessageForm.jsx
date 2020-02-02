import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from './../../../assets/FormsControls/FormsControls';
import { required, maxLengthCreator } from './../../../../utils/validators/validators';

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field component={Textarea} name="newMessageBody" placeholder="Your message..." validate={[required, maxLength100]} />
      </div>
      <div><button>Send</button></div>

    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux;
