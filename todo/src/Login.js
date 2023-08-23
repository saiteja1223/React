import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
    const [upname,setupname]=useState('');
    const [uppassword,setuppassword]=useState('');
    const [errors,setErrors]=useState({
      upname:"",
       uppassword:""
    });
  
    const Validity=()=>{
      
        if(upname==="sai"&&uppassword==="12345")
        return false;
        return true;
      
    }
    function check1(){
      if(upname.trim()===""){
        setErrors({...errors,upname:"enter the user name"})
      }
      else {
        setErrors({...errors,upname:""})
      }
      // if(uppassword.trim()===""){
      //   setErrors({...errors,uppassword:"enter the password"})
      // }
      // else{
      //   setErrors({...errors,uppassword:""})
      // }

    }
  return (

    <div className='con'>
        <h2>Login Hear</h2>
        <h4>User Name</h4>
        <input type='text' onChange={(e)=>{
            setupname(e.target.value)}}/>
            {errors.upname&&<span className='text-danger'>{errors.upname}</span>}
       
        <h4>Password</h4>
        <input type='password' onChange={(e)=>{
             setuppassword(e.target.value);
        }} /><hr></hr>
          {errors.uppassword&&<span className='text-danger'>{errors.uppassword}</span>}<br/>
        <Link to='/home'>
        <button type="submit" disabled={Validity()} onClick={()=>Validity()}>Submit</button>
        </Link>
        <Link to='/call'>
        <button type='button'>Calculator </button>
        </Link>
        <button onClick={()=>check1()}>check</button>
    </div>
  )
}
