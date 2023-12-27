import { useState,useEffect } from "react";
import {restaurantMenuUrl } from "../utils/config";


const useRestaurantMenu = (id)=>{
    
    const [restInfo,setRestInfo] = useState(null);
    // fetching data
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        const data =await fetch(restaurantMenuUrl+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json?.data?.cards);
    };

    return restInfo;

}

export default useRestaurantMenu;