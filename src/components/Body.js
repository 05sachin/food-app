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

function topRatedRestaurants(restaurants){
    return restaurants.filter((restaurant)=>{
        if(restaurant.info.avgRating>=4.5) return true;
        return false;
    });
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
    const [filterRestaurants,setFilterRestaurants] = useState([]);
   
    useEffect(()=>{
        fetchData();
    },[]);
    {console.log("hello")}
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // optional chaining
        // console.log(json)
        // console.log(json?.data?.cards);
        
        for(let ele of json?.data?.cards){
            const info = ele?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if(info){
                setRestaurants(info);
                setFilterRestaurants(info);
                break;
            } 
        }

    }
    // console.log(restaurants.length);
    return (filterRestaurants.length===0)?<Shimmer/>:(
        
    <div className="body">
        
        <div className="filter"> 
            <button className="top-rated-btn" onClick={()=>{
                    const data = topRatedRestaurants(restaurants);
                    setFilterRestaurants(data);
                }   
            }> Top Rated Restaurants
            </button>
            <div className="search_container">
                <input className="search-input" type="text" placeholder="Search" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}>
                </input>
            
                <button className="search-btn"
                onClick={()=>{
                
                    // need to filter data
                    const data = filterData(restaurants,searchText.trim());
                    // update the state - restaurants
                    setFilterRestaurants(data);
                   
                }}>Search</button>
            </div>
        </div>
        
        <RestaurantList restaurants={filterRestaurants} />
    </div>);
};

export default Body;