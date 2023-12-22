export const Title = ()=>(
    <a href="/">
        <img id="logo" alt="logo" src="https://www.shutterstock.com/shutterstock/photos/1328492696/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328492696.jpg"></img>
    </a>
);
const Header = ()=>(
    <div className="header">
        <Title/>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        <button className="login-btn">LogIn</button>
    </div>
);

export default Header;