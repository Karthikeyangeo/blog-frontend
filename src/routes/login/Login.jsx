import { Link } from 'react-router-dom'
import './login.css'


export default function Register() {
  const linkStyle = {textDecoration:'none',color:'inherit'};
  return (
    <div className='login'>
        <span className="loginTitle">LogIn</span>
        <form  className="loginForm">
            <label >Username</label>
            <input className='loginInput' type="text" placeholder='Enter your username' />
            <label >Password</label>
            <input className='loginInput'type="password" placeholder='Enter your password'autoComplete='on' />
            <button className="loginButton">LogIn</button>
        </form>
        <button className="loginRegisterButton">
          <Link to='/register' style={linkStyle}>
            Register
          </Link>
          </button>
       
    </div>
  )
}


