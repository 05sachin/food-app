import { useState } from "react";
import { menuImg } from "../utils/config";
import { Icon } from '@iconify/react';
const MenuCard = ({name,price,imageId,isVeg})=>{
    
    return (
        <div className="menu-card">
            <div className="left-part">
                { isVeg ?(<Icon icon="mdi:lacto-vegetarian" />):(<img src="https://i.pinimg.com/474x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg" width={"20px"} height={"20px"}></img>)}
                <h4>{name}</h4>
                <p > <Icon icon="mdi:rupee" /> <span>{price/100}</span></p>
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
const MenuList = ({title,itemCards})=>{
    if(!title || !itemCards) return <div></div>;

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
            <div className="menu-list" style={{display: toggle ? 'block' : 'none' }} >
                {itemCards.map((item)=>{
                    return   <MenuCard {...item?.card?.info} key={item?.card?.info?.id} />
                })}
               
            </div>
        </div>
    );
}

export default MenuList;