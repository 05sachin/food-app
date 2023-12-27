import {Component} from "react";
import { Icon } from '@iconify/react';
class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="about">
                
                <div className="about-info">
                    <h2>Sachin Gangwar</h2>
                    <p>I am a Web Developer.</p>
                    <p><b>Location</b> : UP (India)</p>
                    <div className="socialMediaIcon">
                        <a href="mailto:sachingangwar137@gmail.com" ><Icon icon="ic:baseline-email"  width={"40px"} /></a>
                        <a href="https://www.linkedin.com/in/sachin-gangwar/" target="_blank"><Icon icon="icomoon-free:linkedin"  width={"30px"} /></a>
                        <a href="https://github.com/05sachin" target="_blank"><Icon icon="devicon:github"  width={"30px"} /></a>
                        <a href="https://leetcode.com/gangwar108/" target="_blank"><Icon icon="simple-icons:leetcode"  width={"30px"} /></a>
                    </div>
                </div>
                <img className="about-img" src="https://avatars.githubusercontent.com/u/123806676?s=400&u=fffb169d607f512dec7458edc1f180e38357b8c4&v=4"></img>
            </div>
        )
    }
    
}
class About extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div className="about-wrapper">
                <h1>About Me</h1>
                <User/>
            </div>
        )
    }
}

export default About;