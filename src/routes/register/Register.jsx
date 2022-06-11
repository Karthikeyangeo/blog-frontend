import { Link } from 'react-router-dom';
import './register.css'


export default function Register() {
  const linkStyle = {textDecoration:'none',color:'inherit'};
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form  className="registerForm">
            <label >Username</label>
            <input className='registerInput' type="email" placeholder='Enter your username' />
            <label >Email</label>
            <input className='registerInput' type="email" placeholder='Enter your email' />
            <label >Password</label>
            <input className='registerInput'type="password" placeholder='Enter your password' />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link to='/login' style={linkStyle}>
            Login
          </Link>
        </button>
       
    </div>
  )
}


