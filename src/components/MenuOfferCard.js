const MenuOfferCard = ({header,offerTag,couponCode,description})=>{
    return (
        <button className="offer-container">
            <p className="offer-tag">{offerTag || "DEFAULT"}</p>
            <div className="offerInfo-wrapper">
                <div className="offerHeader-wrapper">
                    <img width={"20px"} height={"20px"} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"  alt=""/>
                    <p>{header}</p>
                </div>
                <div className="offerCode-wrapper">
                    <span>{couponCode} | </span>
                    <span> {description}</span>
                </div>
            </div>
        </button>
    )
}

export default MenuOfferCard;