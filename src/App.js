import React from "react";
import ReactDOM from "react-dom/client"
import Header ,{Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// default import
// import Header from "./components/Header";
// import Header from "./components/Header.js"; also write

// Named import
// import { Title } from "./components/Header";
/*
Header
    -logo
    -Nav Items
    -Cart
Body
    -Search Bar
    -RestaurantList
       -RestaurantCard(many cards)
           -Image
           -Name
           -Rating
           -Cusines
Footer
    -Links
    -copyright
*/

const AppLayout = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);