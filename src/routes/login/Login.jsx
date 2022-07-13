import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import './login.css'
import { useContext,useState } from 'react';
import { Context } from '../../context/Context';
import {API} from '../../globalData'
import axios from 'axios';
import { useEffect } from 'react';



export default function Login() {
  const linkStyle = {textDecoration:'none',color:'inherit'};

  // const userRef = useRef();
  // const passRef = useRef();
  const {dispatch,isFetching} =useContext(Context);
  const [submit,setSubmit] = useState(false);
  const [username,setUsername]=useState('');
  const[pwd,setPwd]=useState('')

  const handleUsername =(e)=>{
    setUsername(e.target.value)
  }
  const handlePwd =(e)=>{
    setPwd(e.target.value)
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    setSubmit(true);
    
  }
  useEffect(()=>{
    if(submit){
    dispatch({type:"LOGIN_START"});
    try {
      var data = JSON.stringify({
        "username": "mk",
        "password": "Pass@1"
      });
      console.log(data)
      var config = {
        method: 'post',
        url: `${API}/auth/login`,
        headers: { 
          // 'Content-Type': 'application/json'
        },
        data :{
          username:username,
          password:pwd
        }
      };
      
      axios(config)
      .then(function (response) {
        dispatch({type:"LOGIN_SUCCESS",payload:response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
      
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"})
    }}
  },[submit])

  return (
    <div className='login'>
        <span className="loginTitle">LogIn</span>
        <form  className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input 
              className='loginInput' 
              type="text" 
              placeholder='Enter your username' 
              onChange={handleUsername}
              // ref={userRef}
            />
            <label >Password</label>
            <input 
              className='loginInput'
              type="password" 
              placeholder='Enter your password'
              autoComplete='on' 
              onChange={handlePwd}
              // ref={passRef}
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


