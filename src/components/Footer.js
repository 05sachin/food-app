import { Title } from "./Header";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = ()=>(
    <div className="footerWrapper">
        <div className="footer">
            <div className="left">
                <Title></Title>
                <ul>
                    <li><Link className="link" to={"/"}>Home</Link></li>
                    <li><Link className="link" to={"/about"}>About</Link></li>
                    <li><Link className="link" to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <div className="right">
                <p>© 2023 FOOD APP™. All Rights Reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;