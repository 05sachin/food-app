import { useState } from "react";
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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