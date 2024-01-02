import { useState } from "react";

const Contact = ()=>{
    const [toggle,setToggle] = useState(false);
    const handle = ()=>{
        setToggle(true);
    }
    return toggle?(<div className="contact">
        <p>Thanks for your valuable feedback!</p>
    </div>):
    (
        <div className="contact">
            <h2>Contact Us</h2>
            <form className="form" onSubmit={handle}>
                <label htmlFor="fname">First Name:</label>
                <input type="text" placeholder="Enter First Name" required></input><br/>

                <label htmlFor="lname">Last Name:</label>
                <input type="text" placeholder="Enter Last Name" required></input><br/>

                <label htmlFor="email" >Your Email:</label>
                <input type="email" placeholder="Enter Email" required></input><br/>

                <label htmlFor="message">Message:</label>
                <textarea  required></textarea><br/>
                
                <button className="submitBtn" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;