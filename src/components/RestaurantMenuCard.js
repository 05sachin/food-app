import { menuImg } from "../utils/config";
import { Icon } from '@iconify/react';
const RestaurantMenuCard = ({name,price,imageId,isVeg,defaultPrice,description})=>{
    
    return (
        <div className="menu-card">
            <div className="left-part">
                { isVeg ?(<Icon icon="mdi:lacto-vegetarian" />):(<img src="https://i.pinimg.com/474x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg" width={"20px"} height={"20px"}></img>)}
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