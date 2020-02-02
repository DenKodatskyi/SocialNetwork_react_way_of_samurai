import React from 'react';
import st/*st - styles */ from "./FormsControls.module.css"

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={st.formControl + " " + (hasError ? st.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl> 
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl> 
}




