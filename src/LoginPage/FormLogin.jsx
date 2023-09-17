import React from 'react'
import './FormLogin.css'
export default function FormLogin(props) {
    const{ lable ,onChange ,errormassage, id ,...inputProps}=props;
  return (
    <div className='formlogin'>
        <input {...inputProps} onChange={onChange}/>
        <span>{errormassage}</span>
    </div>
  )
}
