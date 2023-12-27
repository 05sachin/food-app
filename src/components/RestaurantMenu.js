import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuOfferCard from "./RestaurantMenuOfferCard";
import RestaurantMenuList from "./RestaurantMenuList";


const RestaurantMenu = ()=>{
    const {id} = useParams();

    const restInfo = useRestaurantMenu(id);
    
    if(restInfo==null) return <Shimmer/>;

    let introInfo = restInfo[0]?.card?.card?.info;
    let offerArr = restInfo[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    let menuArr = restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // for(let i=0;i<restInfo.length;i++){
    //     if(!introInfo){
    //         introInfo = restaurant[i]?.card?.card?.info;
    //     }else if(!offerArr) offerArr = restaurant[i]?.card?.card?.gridElements?.infoWithStyle?.offers;
    //     else if(!menuArr){
    //         menuArr = restaurant[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //     }
    // }
    const licenseInfo = menuArr[menuArr.length-2]?.card?.card;
    const addressInfo = menuArr[menuArr.length-1]?.card?.card;

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
                {menuArr.map((menu,i)=>{
                    if(!(menu?.card?.card?.categories)) return <RestaurantMenuList {...menu.card.card} key={i}/>;
                    else if(menu?.card?.card?.categories) return menu?.card?.card?.categories.map((info ,j)=>{
                        return <RestaurantMenuList {...info} key={i+","+j}/>
                    });
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