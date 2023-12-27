import { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { Icon } from '@iconify/react';

const RestaurantMenuList = ({title,itemCards})=>{
    
    if(!title || !itemCards) {
        console.log("hello");
        return <span></span>;
    }
    
    const [toggle,setToggle] = useState(true);
    return (
        <div className="menu-list-wrapper"  >
            <button className="menuTitle-wrapper"
            onClick={()=>{
                setToggle(!toggle);
            }}>
                <h3 className="menu-title">{title + '('+ itemCards.length + ')'}</h3>
                <Icon  icon={`simple-line-icons:arrow-${toggle ? 'up' : 'down'}`} />
            </button>
            <div className="menu-list" style={{display: toggle ? 'flex' : 'none' }} >
                {itemCards.map((item)=>{
                    return   <RestaurantMenuCard {...item?.card?.info} key={item?.card?.info?.id} />
                })}
               
            </div>
        </div>
    );
}

export default RestaurantMenuList;