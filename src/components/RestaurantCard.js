import { IMG_CDN_URL } from "../utils/config";
export const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating})=>{
    return(
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(" , ")}</h4>
            <h3>{avgRating}</h3>
            
        </div>
    );
};