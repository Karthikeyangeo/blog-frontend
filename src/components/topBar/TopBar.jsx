import { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css"
import { Context } from "../../context/Context";


export default function TopBar() {
    const {user,dispatch}= useContext(Context) ;
    // const PF = 'http://localhost:5000/images/';
    const PF = `https://mkk-blog.herokuapp.com/images/`;
    const linkStyle = {textDecoration:'none',color:'inherit'};
    const handleLogout =()=>{
        dispatch({type:'LOGOUT'})
    }
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to='/' style={linkStyle}>HOME</Link>
                </li>
                {/* <li className="topListItem">
                    <Link to='/about' style={linkStyle}> ABOUT </Link>
                </li>
                <li className="topListItem">
                    <Link to='/contact' style={linkStyle}> CONTACT </Link>
                </li> */}
                <li className="topListItem">
                    <Link to='/write' style={linkStyle}> WRITE </Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT" }
                </li>
                
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <Link to='/settings'>
                        <img 
                            className="topImage"
                            src={PF+user.profilePic}
                            alt="Profile Pic" 
                        />
                    </Link>
                    
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to='/login' style={linkStyle}> LOGIN </Link>
                        </li>

                        <li className="topListItem">
                            <Link to='/register' style={linkStyle}> REGISTER </Link>
                        </li>
                    </ul>
                )}
                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
 
        </div>
    </div>
  )
}
