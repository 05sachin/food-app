
import RestaurantMenuCard from "./RestaurantMenuCard";
import { Icon } from '@iconify/react';

const RestaurantCategory = ({title,itemCards,toggle,onShow})=>{
    return (
        <div className="menu-list-wrapper" >
            <button className="menuTitle-wrapper"
            onClick={()=>{
                onShow(toggle);
            }}>
                <h3 className="menu-title">{title + '('+ itemCards.length + ')'}</h3>
                <Icon  icon={`simple-line-icons:arrow-${toggle ? 'up' : 'down'}`} />
            </button>
            <div className="menu-list" style={{display:((!toggle)?"none":"flex")}} >
                {itemCards.map((item)=>{
                    return   <RestaurantMenuCard {...item?.card?.info} key={item?.card?.info?.id} />
                })}
               
            </div>
        </div>
    );
}

export default RestaurantCategory;