import React from "react";
import ReactDOM from "react-dom/client";

// header 
// - logo
// - nav items - home, about us, contact, cart

// body 
// search
// search-container , search icon
// card
// restaurant- card
// res image 
// cuisines
// price
//eta
//star rating
// footer
// copyright, address, links
const resList = [
  {
    "info": {
      "id": "69061",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/18ab1a2a-c2a7-4cf0-a410-dacdf189bbd8_69061.JPG",
      "locality": "Race Course",
      "areaName": "Race Course",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            "description": "Delivery!"
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/subway-race-course-rest69061",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "311806",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_311806.JPG",
      "locality": "Ballupur",
      "areaName": "Ballupur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "14K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-10 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
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
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
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
        "header": "ITEMS",
        "subHeader": "AT ₹99"
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.6",
          "ratingCount": "1.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/burger-king-ballupur-rest311806",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "281404",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/3c643624-5dd2-4bc4-814c-7ae12f237bda_281404.JPG",
      "locality": "Gandhi Road",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.7",
      "totalRatingsString": "4.2K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 23:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
            "description": "Delivery!"
          },
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
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                }
              },
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
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/kwality-walls-ice-cream-and-more-gandhi-road-paltan-bazaar-rest281404",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "89564",
      "name": "Ubq By Barbeque Nation",
      "cloudinaryImageId": "jtvzici548fquo7ieoch",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.6,
      "parentId": "10804",
      "avgRatingString": "3.6",
      "totalRatingsString": "5.8K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 16:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Thali.png",
            "description": "Delivery!"
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
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Thali.png"
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/ubq-by-barbeque-nation-rajpur-road-hathibarkala-salwala-rest89564",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69701",
      "name": "Ellora's Melting Moments",
      "cloudinaryImageId": "3bdf48e50f6b4d0031221401440defbb",
      "locality": "Rajpur Road",
      "areaName": "Rajpur Road",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Bakery",
        "Snacks",
        "Desserts",
        "Italian"
      ],
      "avgRating": 4.3,
      "parentId": "13689",
      "avgRatingString": "4.3",
      "totalRatingsString": "23K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "8.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/elloras-melting-moments-rajpur-road-rest69701",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69499",
      "name": "Uss Da Dhaba",
      "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
      "locality": "Race Course",
      "areaName": "Race Course",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Continental"
      ],
      "avgRating": 3.8,
      "parentId": "13693",
      "avgRatingString": "3.8",
      "totalRatingsString": "25K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
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
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "6.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/uss-da-dhaba-race-course-rest69499",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "371422",
      "name": "Handi Punjab Ki",
      "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "93115",
      "avgRatingString": "4.1",
      "totalRatingsString": "17K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 17:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
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
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
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
        "header": "₹100 OFF",
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/handi-punjab-ki-rajpur-road-hathibarkala-salwala-rest371422",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74373",
      "name": "Walk In Woods",
      "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
      "locality": "General Mahadev Singh Road",
      "areaName": "Ballupur",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.1,
      "parentId": "7148",
      "avgRatingString": "4.1",
      "totalRatingsString": "24K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-10 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Snacks.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Thali.png",
            "description": "Delivery!"
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
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Thali.png"
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
        "header": "₹100 OFF",
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/walk-in-woods-general-mahadev-singh-road-ballupur-rest74373",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "657142",
      "name": "Punjabi Angithi (Delhi Wale)",
      "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "471145",
      "avgRatingString": "4.2",
      "totalRatingsString": "9.1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-10 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Thali.png",
            "description": "Delivery!"
          },
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
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Thali.png"
                }
              },
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-rest657142",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69447",
      "name": "Gaylord Express",
      "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Chinese",
        "North Indian",
        "Beverages"
      ],
      "avgRating": 3.4,
      "parentId": "13696",
      "avgRatingString": "3.4",
      "totalRatingsString": "67K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-16 00:00:00",
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.3",
          "ratingCount": "2.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/gaylord-express-paltan-bazar-paltan-bazaar-rest69447",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69769",
      "name": "Aman Vegetarian",
      "cloudinaryImageId": "ygczg6efdbjietl1req7",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹260 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "13687",
      "avgRatingString": "4.0",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png",
            "description": "Delivery!"
          },
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
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png"
                }
              },
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "349"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aman-vegetarian-paltan-bazar-paltan-bazaar-rest69769",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69392",
      "name": "Aangan Restaurant & Bar",
      "cloudinaryImageId": "lce61flh8zpi5uu7vwwu",
      "locality": "Karanpur",
      "areaName": "Ashtley Hall",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "Continental"
      ],
      "avgRating": 4,
      "parentId": "15804",
      "avgRatingString": "4.0",
      "totalRatingsString": "8.7K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-09 23:00:00",
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
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "1.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aangan-restaurant-and-bar-karanpur-ashtley-hall-rest69392",
      "type": "WEBLINK"
    }
  }
]
const Header = () => {
  return (
    <div className="header-container">
      <div className="img-container">
        <img src="https://c7.alamy.com/comp/2H6AEDN/creative-burger-logo-design-symbol-vector-illustration-2H6AEDN.jpg" className="logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <li>
            Cart
          </li>
        </ul>
      </div>
    </div>
  )

}
const RestaurantCard = ({resData}) => {
  console.log(resData)
  const { cloudinaryImageId, name, cuisines, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
      </div>
      <div>
        {name}
      </div>
      <div>
        {cuisines.join(",")}
      </div>
      <div>
        {costForTwo}
      </div>
    </div>
  )
}
const Body = () => {
  return(
    <div className="body-container">
    <div className="search-container">Search</div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  </div>
  )

}



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )

}

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(<AppLayout />);