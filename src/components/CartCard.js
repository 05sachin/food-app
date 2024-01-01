import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart ,deleteCart} from "../utils/cartSlice";

const CartCard = (RestaurantMenuCard)=>{
    return (item)=>{
        const dispatch = useDispatch();
        const itemCount = useSelector((store)=>store.cart.countMap[item.id]);
        const handleAction = ()=>{
            dispatch(removeToCart(item));
        }
        const deleteHandler= ()=>{
           dispatch(deleteCart(item));
        }
        return (
            <div className="cart-card">
                <Icon className="delete-btn" onClick={deleteHandler} icon="icon-park:delete"  color="#9797fa" width="30"  />
                <Icon className="remove-btn" onClick={handleAction} icon="ep:remove-filled" color="#9797fa"  width="30"/>
                <RestaurantMenuCard {...item} key={item.id}/>
                <span className="itemCount">{itemCount}</span>
            </div>
        )
    }
}

export default CartCard;