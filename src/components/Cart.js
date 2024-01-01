import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import CartCard from "./CartCard";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice";
const Cart = ()=>{
    const cart = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    const CartCardCom = CartCard(RestaurantMenuCard);
    const totalAmount = ()=>{
        return Object.keys(cart.itemsMap).reduce((acc,id)=> {
            return acc + ((cart.itemsMap[id].price)?cart.itemsMap[id].price:cart.itemsMap[id].defaultPrice)*cart.countMap[id];
        },0)
    }

    const handleAction = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="cartWrapper">
            <h3>Cart</h3>
            {cart.count==0 ? (<div><span>Cart is empty.</span> <Link to={"/"}>Add items</Link> <span>to the cart!</span></div>):
            <div className="cart">
               <div className="cartBtns">
                    <button className="cartBtn" onClick={handleAction}>Clear Cart</button>
                    <button className="cartBtn">{totalAmount()/100} ₹ Pay</button>
               </div>
               <div className="menu-list">
                {Object.values(cart.itemsMap).map((item,i)=>{
                    return   <CartCardCom {...item} key={item.id+'@'+i} />
                })}
                </div>
            </div>
            }

        </div>
    );
}
export default Cart;