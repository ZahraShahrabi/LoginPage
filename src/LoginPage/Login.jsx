import {useState} from 'react'
import './FormLogin'
import './Login.css'
import FormLogin from './FormLogin'

export default function Login() {
    const [Values,setValues]=useState({
        username:"",
        password:"",
        confirmPassword:""
    })
    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"username",
            errormassage:'user name should be 3-16 characters ',
            label:"username",
            pattern:'[A-Za-z0-9]{3,16}$',
            
        },
        {
            id:2,
            name:"password",
            type:"text",
            placeholder:"password",
            errormassage:'password should be 8-20 characters ',
            label:"password",
            pattern:'[A-Za-z0-9]{8,16}$',
           
        },
    ]
    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    
    const onChange=(e)=>{
        setValues({...Values,[e.target.name] : e.target.value});
    };
    console.log(Values);
  return (
    <div className="form">
       
           <form onSubmit={handleSubmit}>
            <h1>Member  Login</h1>
            {inputs.map((input)=>(
                <FormLogin key={input.id}{...input} value={Values[input.name]} onChange={onChange}/>
            ))}
            <button>Login</button>
        </form>

    </div>
  )
}
