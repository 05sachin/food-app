import { Icon } from '@iconify/react';
const RestaurantMenuOfferCard = ({header,offerTag,couponCode,description})=>{
    return (
        <button className="offer-container">
            <p className="offer-tag">{offerTag || "DEFAULT"}</p>
            <div className="offerInfo-wrapper">
                <div className="offerHeader-wrapper">
                    <Icon icon="bxs:offer" width="28" />
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

export default RestaurantMenuOfferCard;