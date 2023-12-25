import React from "react";
import ReactDOM from "react-dom/client"
import Header ,{Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
        <div className="wrapper">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

const createRouterConfig = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu/>,
            },

        ],
        errorElement:<Error/>,
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={createRouterConfig}/>);