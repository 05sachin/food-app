import { menuImg } from "../utils/config";
const MenuCard = ({name,price,imageId,itemAttribute})=>{

    return (
        <div className="menu-card">
            <div className="left-part">
                {itemAttribute.vegClassifier=="VEG" ?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6MHBG1JNOja23gDVZXA_C1jfYSF4bJ6NJgdOYQ2rvuG2AXsvWOGfXZEc_xj8YU2RWjo&usqp=CAU" width={"20px"} height={"20px"}></img>):(<img src="https://i.pinimg.com/474x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg" width={"20px"} height={"20px"}></img>)}
                <h4>{name}</h4>
                <p>{price/100} Rs.</p>
            </div>
            <div className="right-part">
                <button>
                    <img src={menuImg + imageId} width={"118px"} height={"96px"}></img>
                </button>
                <button className="add-btn">ADD</button>
            </div>
        </div>
    )
}
const MenuList = ({title,itemCards})=>{
    if(!title || !itemCards) return <div></div>;
    return (
        <div className="menu-list-wrapper">
            <h3 className="menu-title">{title + '('+ itemCards.length + ')'}</h3>
            <div className="menu-list">
                {itemCards.map((item)=>{
                    return   <MenuCard {...item?.card?.info} key={item?.card?.info?.id} />
                })}
               
            </div>
        </div>
    );
}

export default MenuList;