import React from 'react';
import ReactDOM from 'react-dom/client';

/*
Header
  - Logo
  - Nav Items
Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Image
      - Name of res, Star Rating, Cuisine, Delivery Time
Footer
  - Copyright
  - Link
  - Address
  - Contact Info
*/

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        resName,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className='restaurant-card' style={{ backgroundColor: '#f0f0f0' }}>
            <img className='res-logo' src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
                + cloudinaryImageId
            } alt='res-logo' />
            <h3>{resName}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
    {
        "info": {
            "id": "60313",
            "name": "Bikanervala",
            "cloudinaryImageId": "wheuu0w4kqpfaixh3u2r",
            "locality": "Dabur Mohan Nagar",
            "areaName": "Sahibabad",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Snacks",
                "Chaat",
                "Sweets"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "45936",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 21:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bikanervala-dabur-mohan-nagar-sahibabad-noida-1-60313",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "109099",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "rreqmlxhnfxx03wewmsa",
            "locality": "Indirapuram",
            "areaName": "Indirapuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Beverages"
            ],
            "avgRating": 3.9,
            "parentId": "60277",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chicago-pizza-indirapuram-noida-1-109099",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "253990",
            "name": "McDonald's",
            "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
            "locality": "Supertech Shopprix Mall",
            "areaName": "Vaishali",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-supertech-shopprix-mall-vaishali-noida-1-253990",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "90172",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Sector 4",
            "areaName": "Vaishali",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.6,
            "parentId": "166",
            "avgRatingString": "4.6",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-sector-4-vaishali-noida-1-90172",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "414691",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Vasundhara Colony",
            "areaName": "Ghaziabad",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-vasundhara-colony-ghaziabad-noida-1-414691",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "39285",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Mahagun Metro Mall",
            "areaName": "Vaishali",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-mahagun-metro-mall-vaishali-noida-1-39285",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "38931",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "eisk2nqz2ylvpspy2vvy",
            "locality": "Vasundhara Colony",
            "areaName": "Ghaziabad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 00:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-vasundhara-colony-ghaziabad-noida-1-38931",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "209853",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Sector 1",
            "areaName": "Vaishali",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 21:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sector-1-vaishali-noida-1-209853",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "183389",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "Jaipuria Sunrise Greens",
            "areaName": "Indirapuram",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-jaipuria-sunrise-greens-indirapuram-noida-1-183389",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "37831",
            "name": "Nazeer Foods",
            "cloudinaryImageId": "6aa38b251b1ee1662961a6dc19e41e95",
            "locality": "Vasundhara Colony",
            "areaName": "Ghaziabad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Mughlai",
                "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "2351",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nazeer-foods-vasundhara-colony-ghaziabad-noida-1-37831",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "85681",
            "name": "Rollsking",
            "cloudinaryImageId": "wjjdxhwgtzjuzmuxm1ye",
            "locality": "Makanpur",
            "areaName": "Makanpur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Fast Food",
                "Rolls & Wraps",
                "North Indian",
                "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "4697",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rollsking-makanpur-noida-1-85681",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "33796",
            "name": "Burger Singh (Big Punjabi Burgers)",
            "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
            "locality": "Indirapuram",
            "areaName": "Indirapuram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Snacks",
                "Fast Food",
                "Indian",
                "American",
                "Beverages",
                "Desserts",
                "Mughlai",
                "North Indian",
                "Biryani"
            ],
            "avgRating": 4.5,
            "parentId": "375065",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 05:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-indirapuram-noida-1-33796",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "35886",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
            "locality": "Vasundhara Colony",
            "areaName": "Ghaziabad",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "4444",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-vasundhara-colony-ghaziabad-noida-1-35886",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "377207",
            "name": "Krispy Kreme",
            "cloudinaryImageId": "sf7b0sgjg8ge7u27eybg",
            "locality": "Indirapuram",
            "areaName": "Ghaziabad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "570",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/krispy-kreme-indirapuram-ghaziabad-noida-1-377207",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "19006",
            "name": "221b Baker Street",
            "cloudinaryImageId": "65f464a980d5bbfedfa4a24a13167c1f",
            "locality": "Tot Mall",
            "areaName": "Sector 62",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Cakes and Pastries",
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2664",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 7.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "7.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/221b-baker-street-tot-mall-sector-62-noida-1-19006",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "206809",
            "name": "Nirula's",
            "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
            "locality": "Indirapuram",
            "areaName": "Ghaziabad",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Ice Cream",
                "Pizzas",
                "Fast Food"
            ],
            "avgRating": 4.4,
            "parentId": "1738",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 04:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nirulas-indirapuram-ghaziabad-noida-1-206809",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "75003",
            "name": "Biryani Blues",
            "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
            "locality": "Indirapuram",
            "areaName": "Indirapuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Lucknowi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "13813",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/biryani-blues-indirapuram-noida-1-75003",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23112",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
            "locality": "Indirapuram",
            "areaName": "Ghaziabad",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "avgRating": 4.4,
            "parentId": "281782",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-indirapuram-ghaziabad-noida-1-23112",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "321053",
            "name": "Barista Coffee",
            "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
            "locality": "Max Hospital",
            "areaName": "Vaishali",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2359",
            "avgRatingString": "4.4",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-10 23:30:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/barista-coffee-max-hospital-vaishali-noida-1-321053",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "652723",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "Nipun Wonder Mall",
            "areaName": "Shakti Khand",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Healthy Food"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.2",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-11 04:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-nipun-wonder-mall-shakti-khand-noida-1-652723",
            "type": "WEBLINK"
        }
    }
];

const Body = () => (
    <div className='body'>
        <div className='search'>
            Search
        </div>
        <div className='restaurant-container'>
            {
                resList.map(res => (
                    <RestaurantCard key={res.info.id} resData={res} />
                ))
            }
            {/* <RestaurantCard resName="KFC" rating="4.5" cuisine="Burger, Fast Food" /> */}
        </div>
    </div>
);

const AppLayoutComponent = () => (
    <div className='app'>
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(AppLayoutComponent());