import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {  useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
export const Title = ()=>(
    <a href="/">
        <img id="logo" alt="logo" src="https://www.shutterstock.com/shutterstock/photos/1328492696/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328492696.jpg"></img>
    </a>
);
const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    const cartCount = useSelector((store)=>store.cart.count);
    const [toggle ,setToggle] = useState(false);
    const handle = ()=>{
        setToggle(!toggle);
    }
    return (
    <div className="header-wrapper">
        <div className="header">
            <Title/>
            <div className={`nav-item ${!toggle&&'nav-item-close'}`} >
                <ul>
                    <li >Online Status:{ onlineStatus?'✅':'🔴' }</li>
                    <li><Link className="link" to={"/"}>Home</Link></li>
                    <li><Link className="link" to={"/about"}>About</Link></li>
                    <li><Link className="link" to={"/contact"}>Contact</Link></li>
                </ul>
                <Link className=" cartLink" to={"/cart"}><span className="cartBox">{cartCount}</span>Cart</Link>
                <Link to={"/login"} className="login-btn" >Login</Link>
            </div>
            <Link className="cartLink cartLinksm" to={"/cart"}><span className="cartBox">{cartCount}</span>Cart</Link>
            <Icon className="hamIcon" icon={(toggle)?"maki:cross":"icon-park:hamburger-button"} width={"30px"} onClick={handle} />
        </div>
    </div>);
};

export default Header;