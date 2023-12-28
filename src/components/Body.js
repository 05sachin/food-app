import { useEffect, useState } from "react";
import { restaurantsList } from "../utils/config";
import  RestaurantCard  from "./RestaurantCard";
import { restaurantCardListUrl } from "../utils/config";
import Shimmer from "./shimmer";
import NoInternet from "./NoInternet";
import useOnlineStatus from "../utils/useOnlineStatus";
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


const Body = ()=>{
    const [searchText ,setSearchText] = useState("");
    const [restaurants,setRestaurants] = useState([]);
    const [filterRestaurants,setFilterRestaurants] = useState([]);
    const onlineStatus = useOnlineStatus();
    useEffect(()=>{
        fetchData();
    },[]);
    // {console.log("hello")}
    const fetchData = async ()=>{
        try{
            const data = await fetch(restaurantCardListUrl);
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
        catch(e){
            return (<h1>Something went wrong!!</h1>)
        }
    }

    if(!onlineStatus)  return <NoInternet/>;
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
        
        <div className="restaurant-List">
            {filterRestaurants.map((restaurant) => { 
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            })}
        </div>
    </div>);
};

export default Body;