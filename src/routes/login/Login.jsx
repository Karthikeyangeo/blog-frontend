import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './login.css'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import {API} from '../../globalData'
import axios from 'axios';



export default function Login() {
  const linkStyle = {textDecoration:'none',color:'inherit'};

  const userRef = useRef();
  const passRef = useRef();
  const {dispatch,isFetching} =useContext(Context);

  const handleSubmit =async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post(`${API}/auth/login`,{
        username:userRef.current.value,
        password:passRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  }

  return (
    <div className='login'>
        <span className="loginTitle">LogIn</span>
        <form  className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input 
              className='loginInput' 
              type="text" 
              placeholder='Enter your username' 
              ref={userRef}
            />
            <label >Password</label>
            <input 
              className='loginInput'
              type="password" 
              placeholder='Enter your password'
              autoComplete='on' 
              ref={passRef}
            />
            <button className="loginButton" type='submit' disabled={isFetching}>LogIn</button>
        </form>
        <button className="loginRegisterButton">
          <Link to='/register' style={linkStyle}>
            Register
          </Link>
          </button>
       
    </div>
  )
}


