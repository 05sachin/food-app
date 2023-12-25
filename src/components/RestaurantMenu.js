import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurantMenuUrl } from "../utils/config";
import Shimmer from "./shimmer";
import MenuOfferCard from "./MenuOfferCard";
import MenuList from "./MenuList";
const RestaurantMenu = ()=>{
    const [restaurant,setRestaurant] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        const data =await fetch(restaurantMenuUrl+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data?.cards);
        // console.log(json?.data);
    };
    
    if(restaurant==null) return <Shimmer/>;
    const introInfo = restaurant[0]?.card?.card?.info;
    const offerArr = restaurant[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const menuArr = restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(introInfo);
    // console.log(offerArr);
    // console.log(menuArr);

    return (
        <div className="restaurant-menu">
            <p className="path-part">Home /  {introInfo.city } / {introInfo.name}</p>
            <div className="restaurant-intro">
                <div className="left-part">
                    <h2>{introInfo.name}</h2>
                    <div>
                        <p>{introInfo.cuisines.join(",")}</p>
                        <p>{introInfo.locality +", "+ introInfo.areaName + ", "+ introInfo.sla.lastMileTravelString}</p>
                    </div>
                    <div className="bike-icon-container">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" aria-hidden="true"/>
                        <p>{introInfo.feeDetails.message}</p>
                    </div>
                </div>
                <button className="right-part">
                    <div className="rating-box">
                        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHSoNjKyXnrQfQ_gEb1UWfwC1fyZcOZF7ufS5oIuF6vqN7oxI5TNjygoxZGKPj0REFHs&usqp=CAU" width={"20px"}></img></span>
                        <span>{introInfo.avgRatingString}</span>
                    </div>
                    <div className="line"></div>
                    <div>{introInfo.totalRatingsString}</div>
                </button>
                
            </div>
            {/* time cost wrapper */}
            <hr></hr>
            <div className="timeCost-wrapper">
                <div className="timeIcon">
                    <svg  width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
                    <p>{introInfo.sla.slaString}</p>
                </div>
                <div className="costIcon">
                    <svg  width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
                    <p>{introInfo.costForTwoMessage}</p>
                </div>
            </div>
            {/* offers list */}
            <div className="offer-list">
                {offerArr.map((offer)=>{
                    return <MenuOfferCard {...offer.info} key={offer.info.offerIds} />
                })}
            </div>
            <hr></hr>
            {/* menu section */}
            <div className="menu-lists">
                {menuArr.map((menu,i)=>{
                    return <MenuList {...menu.card.card} key={i}/>
                })}
            </div>

        </div>
    )
}

export default RestaurantMenu;