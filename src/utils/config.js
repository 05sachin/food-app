import mockData from "./mock"
export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";
export const restaurantCardListUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const menuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const restaurantMenuUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=";
export const restaurantsList = mockData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;