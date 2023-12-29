import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuOfferCard from "./RestaurantMenuOfferCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from 'react';


const RestaurantMenu = ()=>{
    const {id} = useParams();
    const [showIndex,setShowIndex] = useState(null);

    const restInfo = useRestaurantMenu(id);
    
    if(restInfo==null) return <Shimmer/>;

    const introInfo = restInfo[0]?.card?.card?.info;
    const offerArr = restInfo[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const menuArr = restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = [];
    const license = [];
    const address = [];

    menuArr.map((cat)=>{
        const card = cat?.card?.card;
        if(card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
            categories.push(...card?.categories);
        }else if(card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
            categories.push(card);
        }else if(card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"){
            license.push(cat?.card?.card);
        }else if(card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"){
            address.push(cat?.card?.card);
        }
    });
    
    const licenseInfo = license[0];
    const addressInfo = address[0];
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
                    <Icon icon="lets-icons:time-atack-fill" hFlip={true} vFlip={true} width={"28px"} />
                    <p>{introInfo.sla.slaString}</p>
                </div>
                <div className="costIcon">
                    <Icon icon="mingcute:currency-rupee-line" width={"20px"} />
                    <p>{introInfo.costForTwoMessage}</p>
                </div>
            </div>
            {/* offers list */}
            <div className="offer-list">
                {offerArr.map((offer)=>{
                    return <RestaurantMenuOfferCard {...offer.info} key={offer.info.offerIds} />
                })}
            </div>
            <hr></hr>
            {/* menu section */}
            <div className="menu-lists">
                {categories.map((category,i)=>{
                    return <RestaurantCategory {...category} toggle={showIndex===i} onShow = {(toggle)=>{
                        if(toggle) setShowIndex(null);
                        else setShowIndex(i);
                    }} key={i}/>;
                })}
                
            </div>
            {/*Restaurant footer section */}

            <div className="restaurantMenuFooter">
                <div className="restaurantLicence-wrapper">
                    <img src={IMG_CDN_URL+licenseInfo.imageId} width={"60px"} height={"30px"}></img>
                    <p>{licenseInfo.text}</p>
                </div>
                <div className="restaurantAddress-wrapper">
                    <h4>{addressInfo.name}</h4>
                    <p>(Outlet:{addressInfo.area})</p>
                    <div className="mapPin-icon">
                        <Icon icon="feather:map-pin" />
                        <p>{addressInfo.completeAddress}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;