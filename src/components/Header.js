import { useState } from "react";
import { Link } from "react-router-dom";
export const Title = ()=>(
    <a href="/">
        <img id="logo" alt="logo" src="https://www.shutterstock.com/shutterstock/photos/1328492696/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328492696.jpg"></img>
    </a>
);
const Header = ()=>{
    const [loginBtn,setLoginBtn] = useState("LogIn");
    return (
    <div className="header">
        <Title/>
        <div className="nav-item">
            <ul>
                <li><Link className="link" to={"/"}>Home</Link></li>
                <li><Link className="link" to={"/about"}>About</Link></li>
                <li><Link className="link" to={"/contact"}>Contact</Link></li>
                <li><Link className="link" to={"/cart"}>Cart</Link></li>
            </ul>
            <button className="login-btn"
            onClick={()=>{
                if(loginBtn==="LogIn"){
                    setLoginBtn("LogOut");
                }else{
                    setLoginBtn("LogIn");
                }
            }}>{loginBtn}</button>
        </div>
        
    </div>);
};

export default Header;