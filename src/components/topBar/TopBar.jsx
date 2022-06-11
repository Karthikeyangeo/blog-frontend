import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    const linkStyle = {textDecoration:'none',color:'inherit'};
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
                <li className="topListItem">
                    <Link to='/about' style={linkStyle}> ABOUT </Link>
                </li>
                <li className="topListItem">
                    <Link to='/contact' style={linkStyle}> CONTACT </Link>
                </li>
                <li className="topListItem">
                    <Link to='/write' style={linkStyle}> WRITE </Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT" }
                </li>
                
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
                        className="topImage"
                        src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" 
                        alt="Profile Pic" 
                    />
                    
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
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
 
        </div>
    </div>
  )
}
