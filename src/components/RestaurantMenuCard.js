import { menuImg } from "../utils/config";
import { Icon } from '@iconify/react';
const RestaurantMenuCard = ({name,price,imageId,isVeg,defaultPrice,description})=>{
    
    return (
        <div className="menu-card">
            <div className="left-part">
                { isVeg ?(<Icon icon="mdi:lacto-vegetarian" color="green" />):(<Icon icon="mdi:lacto-vegetarian" color="red" />)}
                <h4>{name}</h4>
                <p > <Icon icon="mdi:rupee" /> <span>{(price)?price/100:defaultPrice/100}</span></p>
                <p className="description">{description}</p>
            </div>
            <div className="right-part">
               {!imageId?(<img className="no-img"></img>):(
                    <button>
                    <img src={menuImg + imageId} width={"118px"} height={"96px"}></img>
                    </button>)
                }
                <button className="add-btn">ADD</button>
            </div>
        </div>
    )
}

export default RestaurantMenuCard;