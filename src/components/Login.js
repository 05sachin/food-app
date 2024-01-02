import { useState } from "react";

const Login = ()=>{
    const [toggle,setToggle] = useState(true);
    
    return (toggle)?<div className="loginWrapper">
                <h2>Login</h2>
                <p>or <a onClick={()=>{
                    setToggle(!toggle);
                }}> create an account</a></p>
                <div></div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width={"110px"} height={"100px"}></img>
                <form>
                    <div className="inputWrapper">
                        <input type="tel" name="mobile" maxLength={"10"} tabIndex={"1"} autoComplete="off" required placeholder="Phone number"></input>
                    </div>
                    <button>LOGIN</button>
                </form>
                <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        :<div className="loginWrapper">
            <h2>SignUp</h2>
            <p>or <a onClick={()=>{
                setToggle(!toggle);
            }}> login to your account</a></p>
            <div className="line"></div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width={"110px"} height={"100px"}></img>
            <form>
                <div className="inputWrapper">
                    <input type="tel" name="mobile" maxLength={"10"} tabIndex={"1"} autoComplete="off" required placeholder="Phone number"></input>
                    <input type="text" name="name" required placeholder="Name"></input>
                    <input type="email" name="email"  required placeholder="Email"></input>
                </div>
                <button>CONTINUE</button>
            </form>
            <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </div>
}

export default Login;