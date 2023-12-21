import { useEffect, useState } from "react";
import { restaurantsList } from "../utils/config";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./shimmer";
// state
// rect hooks
// usecase
function filterData(restaurants,searchText){
    return restaurants.filter((restaurant)=>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
}
const RestaurantList = ({restaurants})=>{
    
    return (
        <div className="restaurant-List">
            {restaurants.map((restaurant) => { 
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            })}
        </div>
    );
};
const Body = ()=>{
    const [searchText ,setSearchText] = useState("");
    const [restaurants,setRestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // optional chaining
        // console.log(json)
        // console.log(json?.data?.cards);
        const info = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(info) setRestaurants(info);
    }
    console.log(restaurants.length);
    return (restaurants.length===0)?<Shimmer/>:(
    <div className="body">
        <div className="search_container">
            <input className="search-input" type="text" placeholder="Search" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}>
            </input>
           
            <button className="search-btn"
            onClick={()=>{
                if(searchText && searchText.trim().length!=0){
                    // need to filter data
                    const data = filterData(restaurants,searchText);
                    // update the state - restaurants
                    setRestaurants(data);
                }
            }}>Search</button>
        </div>
        <RestaurantList restaurants={restaurants} />
    </div>);
};

export default Body;