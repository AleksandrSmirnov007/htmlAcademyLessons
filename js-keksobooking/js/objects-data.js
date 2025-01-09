const data = [
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 77116,
      "type": "palace",
      "rooms": 1,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "6:00",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ashim-d-silva-zL_urJ_3bDM.jpg"
      ]
    },
    "location": {
      "lat": 35.65935818784681,
      "lng": 139.78305159450522
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user10.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 35000,
      "type": "palace",
      "rooms": 3,
      "guests": 2,
      "checkin": "14:00",
      "checkout": "21:00",
      "features": [
        "washer",
        "elevator",
        "wifi",
        "dishwasher"
      ],
      "description": "Хейтеров просьба не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg"
      ]
    },
    "location": {
      "lat": 35.656472136061886,
      "lng": 139.71157103726063
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "Chiyoda-ku, Tōkyō-to 102-0082",
      "price": 36042,
      "type": "flat",
      "rooms": 2,
      "guests": 2,
      "checkin": "18:00",
      "checkout": "16:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking"
      ],
      "description": "Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg"
      ]
    },
    "location": {
      "lat": 35.68352766131271,
      "lng": 139.7647322706475
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Уютное гнездышко для молодоженов",
      "address": "Chiyoda-ku, Tōkyō-to 102-0091",
      "price": 15091,
      "type": "palace",
      "rooms": 3,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "7:00",
      "features": [
        "dishwasher"
      ],
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg"
      ]
    },
    "location": {
      "lat": 35.676682384455255,
      "lng": 139.7747946177843
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Тихая квартирка недалеко от метро",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 61218,
      "type": "palace",
      "rooms": 3,
      "guests": 1,
      "checkin": "3:00",
      "checkout": "19:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "conditioner"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg"
      ]
    },
    "location": {
      "lat": 35.69749359769529,
      "lng": 139.70841815681032
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6",
      "price": 54335,
      "type": "hotel",
      "rooms": 3,
      "guests": 1,
      "checkin": "15:00",
      "checkout": "15:00",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg"
      ]
    },
    "location": {
      "lat": 35.65146364572148,
      "lng": 139.79444849426574
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user11.png"
    },
    "offer": {
      "title": "Стандартная квартира в центре",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 61158,
      "type": "house",
      "rooms": 2,
      "guests": 2,
      "checkin": "10:00",
      "checkout": "15:00",
      "description": "Маленькая квартирка на чердаке. Для самых не требовательных.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg"
      ]
    },
    "location": {
      "lat": 35.66032819287872,
      "lng": 139.78885651513713
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Квартира студия в престижном районе",
      "address": "102-0080 Tōkyō-to, Chiyoda-ku, 14-7",
      "price": 32164,
      "type": "house",
      "rooms": 2,
      "guests": 2,
      "checkin": "13:00",
      "checkout": "7:00",
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg"
      ]
    },
    "location": {
      "lat": 35.69831723251577,
      "lng": 139.73507533522053
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Милое гнездышко для фанатов Анимэ",
      "address": "102-0080 Tōkyō-to, Chiyoda-ku, 14-7",
      "price": 92896,
      "type": "palace",
      "rooms": 2,
      "guests": 2,
      "checkin": "9:00",
      "checkout": "8:00",
      "features": [
        "conditioner"
      ],
      "description": "Отель для ценителей истории. Почуствуй себя героем из прошлого.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.66361144864966,
      "lng": 139.7908574246626
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Стандартная квартира в центре",
      "address": "105-0016 Tōkyō-to, Chiyoda-ku, 14-9",
      "price": 9784,
      "type": "house",
      "rooms": 1,
      "guests": 1,
      "checkin": "13:00",
      "checkout": "3:00",
      "features": [
        "parking"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg"
      ]
    },
    "location": {
      "lat": 35.67793949470679,
      "lng": 139.72186133172855
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Императорский дворец в центре Токио",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 80165,
      "type": "palace",
      "rooms": 2,
      "guests": 2,
      "checkin": "11:00",
      "checkout": "0:00",
      "features": [
        "wifi",
        "washer",
        "parking",
        "conditioner",
        "elevator"
      ],
      "description": "Отель для ценителей истории. Почуствуй себя героем из прошлого.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/anelale-najera-vdeZfLQ6Hts.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/angela-bailey-8KzgXVPTZn0.jpg"
      ]
    },
    "location": {
      "lat": 35.695938487287634,
      "lng": 139.70642851437998
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Уютное гнездышко для молодоженов",
      "address": "105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3",
      "price": 63641,
      "type": "house",
      "rooms": 1,
      "guests": 1,
      "checkin": "22:00",
      "checkout": "19:00",
      "features": [
        "parking",
        "wifi",
        "washer",
        "dishwasher",
        "conditioner",
        "elevator"
      ],
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.68072104459306,
      "lng": 139.79773554732986
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Загородный дом для спокойного отдыха",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 3533,
      "type": "flat",
      "rooms": 2,
      "guests": 2,
      "checkin": "18:00",
      "checkout": "18:00",
      "features": [
        "washer",
        "elevator",
        "parking",
        "conditioner",
        "wifi"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg"
      ]
    },
    "location": {
      "lat": 35.67040769651195,
      "lng": 139.75366854153359
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Милейший чердачок",
      "address": "102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6",
      "price": 50722,
      "type": "hotel",
      "rooms": 100,
      "guests": 0,
      "checkin": "7:00",
      "checkout": "16:00",
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе."
    },
    "location": {
      "lat": 35.659841104263876,
      "lng": 139.72067879592393
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Хостел «Для друзей»",
      "address": "105-0016 Tōkyō-to, Minato-ku",
      "price": 12040,
      "type": "hotel",
      "rooms": 2,
      "guests": 1,
      "checkin": "4:00",
      "checkout": "22:00",
      "description": "Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
      ]
    },
    "location": {
      "lat": 35.68769226320407,
      "lng": 139.75286067778654
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "105-0016 Tōkyō-to, Chiyoda-ku, 14-9",
      "price": 72113,
      "type": "bungalow",
      "rooms": 2,
      "guests": 1,
      "checkin": "19:00",
      "checkout": "9:00",
      "description": "У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.68408997460006,
      "lng": 139.74368055291785
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user09.png"
    },
    "offer": {
      "title": "Стандартная квартира в центре",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 96489,
      "type": "flat",
      "rooms": 100,
      "guests": 0,
      "checkin": "12:00",
      "checkout": "21:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "conditioner"
      ],
      "description": "Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg"
      ]
    },
    "location": {
      "lat": 35.65463490008134,
      "lng": 139.79657819127632
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 5194,
      "type": "hotel",
      "rooms": 2,
      "guests": 1,
      "checkin": "18:00",
      "checkout": "5:00",
      "features": [
        "parking",
        "wifi",
        "dishwasher",
        "elevator",
        "washer",
        "conditioner"
      ],
      "description": "Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье."
    },
    "location": {
      "lat": 35.67701041248316,
      "lng": 139.7752938805138
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "105-0016 Tōkyō-to, Minato-ku",
      "price": 35226,
      "type": "palace",
      "rooms": 1,
      "guests": 1,
      "checkin": "5:00",
      "checkout": "9:00",
      "features": [
        "wifi"
      ],
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg"
      ]
    },
    "location": {
      "lat": 35.664805256520395,
      "lng": 139.71406541647835
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user09.png"
    },
    "offer": {
      "title": "Императорский дворец в центре Токио",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 57619,
      "type": "flat",
      "rooms": 2,
      "guests": 1,
      "checkin": "1:00",
      "checkout": "8:00",
      "features": [
        "washer",
        "wifi",
        "conditioner",
        "dishwasher",
        "elevator",
        "parking"
      ],
      "description": "Хейтеров просьба не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg"
      ]
    },
    "location": {
      "lat": 35.691874433068726,
      "lng": 139.73558753164525
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user09.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 24508,
      "type": "hotel",
      "rooms": 3,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "19:00",
      "features": [
        "elevator",
        "dishwasher",
        "wifi",
        "washer",
        "parking",
        "conditioner"
      ],
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.68223823025502,
      "lng": 139.78710404558728
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user03.png"
    },
    "offer": {
      "title": "Тихая квартирка недалеко от метро",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 76760,
      "type": "flat",
      "rooms": 1,
      "guests": 1,
      "checkin": "10:00",
      "checkout": "5:00",
      "features": [
        "washer",
        "conditioner"
      ],
      "description": "Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.664523180414335,
      "lng": 139.77224975125284
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user03.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0080 Tōkyō-to, Chiyoda-ku, 14-7",
      "price": 13723,
      "type": "palace",
      "rooms": 1,
      "guests": 1,
      "checkin": "18:00",
      "checkout": "3:00",
      "description": "Отель для ценителей истории. Почуствуй себя героем из прошлого.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg"
      ]
    },
    "location": {
      "lat": 35.6703803416638,
      "lng": 139.7524317564291
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 17730,
      "type": "palace",
      "rooms": 2,
      "guests": 2,
      "checkin": "22:00",
      "checkout": "9:00",
      "features": [
        "washer",
        "elevator",
        "conditioner",
        "wifi",
        "dishwasher"
      ],
      "description": "Отель для ценителей истории. Почуствуй себя героем из прошлого."
    },
    "location": {
      "lat": 35.66875043103629,
      "lng": 139.7604736465641
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "Chiyoda-ku, Tōkyō-to 102-0082",
      "price": 11211,
      "type": "hotel",
      "rooms": 1,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "2:00",
      "features": [
        "washer",
        "dishwasher",
        "elevator",
        "parking",
        "wifi"
      ],
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg"
      ]
    },
    "location": {
      "lat": 35.67044800906814,
      "lng": 139.74602255116906
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Отель-музей",
      "address": "105-0016 Tōkyō-to, Chiyoda-ku, 14-9",
      "price": 38779,
      "type": "bungalow",
      "rooms": 100,
      "guests": 0,
      "checkin": "10:00",
      "checkout": "3:00",
      "description": "Отель для ценителей истории. Почуствуй себя героем из прошлого."
    },
    "location": {
      "lat": 35.68152697528862,
      "lng": 139.74427488076492
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user11.png"
    },
    "offer": {
      "title": "Хостел «Для друзей»",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 3819,
      "type": "flat",
      "rooms": 1,
      "guests": 1,
      "checkin": "21:00",
      "checkout": "21:00",
      "features": [
        "conditioner",
        "elevator",
        "parking",
        "dishwasher",
        "wifi",
        "washer"
      ],
      "description": "Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.6904170987766,
      "lng": 139.70261236872665
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user09.png"
    },
    "offer": {
      "title": "Отель-музей",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 93760,
      "type": "hotel",
      "rooms": 1,
      "guests": 1,
      "checkin": "21:00",
      "checkout": "19:00",
      "features": [
        "elevator",
        "wifi"
      ],
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg"
      ]
    },
    "location": {
      "lat": 35.67339786379556,
      "lng": 139.7454529950168
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Тихая квартирка недалеко от метро",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
      "price": 25176,
      "type": "palace",
      "rooms": 1,
      "guests": 1,
      "checkin": "11:00",
      "checkout": "5:00",
      "description": "Маленькая квартирка на чердаке. Для самых не требовательных.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
      ]
    },
    "location": {
      "lat": 35.65270825145613,
      "lng": 139.76419591772063
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
      "price": 75341,
      "type": "flat",
      "rooms": 1,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "12:00",
      "features": [
        "washer",
        "wifi",
        "parking",
        "conditioner"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/anelale-najera-vdeZfLQ6Hts.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/angela-bailey-8KzgXVPTZn0.jpg"
      ]
    },
    "location": {
      "lat": 35.687205635723345,
      "lng": 139.74165258354594
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Милейший чердачок",
      "address": "Chiyoda-ku, Tōkyō-to 102-0091",
      "price": 31355,
      "type": "flat",
      "rooms": 100,
      "guests": 0,
      "checkin": "4:00",
      "checkout": "21:00",
      "features": [
        "dishwasher",
        "washer",
        "parking"
      ],
      "description": "Хейтеров просьба не беспокоить."
    },
    "location": {
      "lat": 35.682988683716395,
      "lng": 139.7740619280329
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Императорский дворец в центре Токио",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 92364,
      "type": "palace",
      "rooms": 3,
      "guests": 1,
      "checkin": "19:00",
      "checkout": "15:00",
      "features": [
        "dishwasher",
        "washer",
        "parking",
        "wifi",
        "conditioner",
        "elevator"
      ],
      "description": "Хейтеров просьба не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ashim-d-silva-zL_urJ_3bDM.jpg"
      ]
    },
    "location": {
      "lat": 35.66537569619229,
      "lng": 139.79825274892187
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Милое гнездышко для фанатов Анимэ",
      "address": "Chiyoda-ku, Tōkyō-to 102-0082",
      "price": 39926,
      "type": "house",
      "rooms": 100,
      "guests": 0,
      "checkin": "9:00",
      "checkout": "1:00",
      "features": [
        "elevator",
        "dishwasher",
        "conditioner",
        "wifi",
        "washer"
      ]
    },
    "location": {
      "lat": 35.671170963609384,
      "lng": 139.75622243655874
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user10.png"
    },
    "offer": {
      "title": "Загородный дом для спокойного отдыха",
      "address": "105-0016 Tōkyō-to, Minato-ku",
      "price": 93436,
      "type": "house",
      "rooms": 100,
      "guests": 0,
      "checkin": "8:00",
      "checkout": "9:00",
      "description": "Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg"
      ]
    },
    "location": {
      "lat": 35.656796191682204,
      "lng": 139.7035551274593
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 10220,
      "type": "hotel",
      "rooms": 3,
      "guests": 2,
      "checkin": "4:00",
      "checkout": "5:00",
      "features": [
        "washer",
        "parking",
        "conditioner"
      ],
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
      ]
    },
    "location": {
      "lat": 35.66063266075974,
      "lng": 139.76210015885064
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Небольшая бюджетная комната для студентов",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 52772,
      "type": "bungalow",
      "rooms": 1,
      "guests": 1,
      "checkin": "6:00",
      "checkout": "6:00",
      "features": [
        "washer",
        "wifi",
        "parking",
        "elevator",
        "conditioner",
        "dishwasher"
      ],
      "description": "Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg"
      ]
    },
    "location": {
      "lat": 35.66152970010107,
      "lng": 139.79154363249074
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user11.png"
    },
    "offer": {
      "title": "Хостел «Для друзей»",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 30990,
      "type": "hotel",
      "rooms": 2,
      "guests": 1,
      "checkin": "6:00",
      "checkout": "13:00",
      "features": [
        "elevator",
        "wifi",
        "washer",
        "conditioner",
        "parking"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе."
    },
    "location": {
      "lat": 35.69771665463698,
      "lng": 139.771316298584
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Милейший чердачок",
      "address": "105-0016 Tōkyō-to, Chiyoda-ku, 14-9",
      "price": 66602,
      "type": "hotel",
      "rooms": 1,
      "guests": 1,
      "checkin": "16:00",
      "checkout": "3:00",
      "features": [
        "conditioner",
        "elevator"
      ],
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg"
      ]
    },
    "location": {
      "lat": 35.67402263436427,
      "lng": 139.72421854948993
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user09.png"
    },
    "offer": {
      "title": "Тихая квартирка недалеко от метро",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
      "price": 29525,
      "type": "hotel",
      "rooms": 1,
      "guests": 1,
      "checkin": "4:00",
      "checkout": "4:00",
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты."
    },
    "location": {
      "lat": 35.67896945956223,
      "lng": 139.74880598839988
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Загородный дом для спокойного отдыха",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 74915,
      "type": "house",
      "rooms": 2,
      "guests": 2,
      "checkin": "20:00",
      "checkout": "20:00",
      "features": [
        "elevator",
        "parking",
        "wifi",
        "washer"
      ],
      "description": "Маленькая квартирка на чердаке. Для самых не требовательных."
    },
    "location": {
      "lat": 35.674318879263716,
      "lng": 139.70923628302856
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Небольшая бюджетная комната для студентов",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 86854,
      "type": "bungalow",
      "rooms": 2,
      "guests": 1,
      "checkin": "13:00",
      "checkout": "14:00",
      "features": [
        "elevator",
        "washer",
        "parking",
        "conditioner",
        "dishwasher"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg"
      ]
    },
    "location": {
      "lat": 35.670899432668435,
      "lng": 139.75563524084842
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0080 Tōkyō-to, Chiyoda-ku, 14-7",
      "price": 93938,
      "type": "palace",
      "rooms": 2,
      "guests": 1,
      "checkin": "7:00",
      "checkout": "19:00",
      "description": "Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg"
      ]
    },
    "location": {
      "lat": 35.677785311228234,
      "lng": 139.75419122587837
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Стандартная квартира в центре",
      "address": "102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6",
      "price": 82889,
      "type": "house",
      "rooms": 100,
      "guests": 0,
      "checkin": "1:00",
      "checkout": "9:00",
      "features": [
        "washer"
      ],
      "description": "Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg"
      ]
    },
    "location": {
      "lat": 35.689961393800715,
      "lng": 139.76676820393473
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Милое гнездышко для фанатов Анимэ",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 14746,
      "type": "house",
      "rooms": 2,
      "guests": 2,
      "checkin": "9:00",
      "checkout": "9:00",
      "description": "Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg"
      ]
    },
    "location": {
      "lat": 35.65295190900885,
      "lng": 139.76245759276466
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Квартира студия в престижном районе",
      "address": "105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō",
      "price": 24020,
      "type": "flat",
      "rooms": 2,
      "guests": 1,
      "checkin": "10:00",
      "checkout": "3:00",
      "features": [
        "wifi"
      ]
    },
    "location": {
      "lat": 35.68790085442377,
      "lng": 139.7510545697609
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Загородный дом для спокойного отдыха",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 23718,
      "type": "house",
      "rooms": 3,
      "guests": 1,
      "checkin": "16:00",
      "checkout": "11:00",
      "features": [
        "wifi",
        "washer",
        "elevator",
        "parking"
      ],
      "description": "Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg"
      ]
    },
    "location": {
      "lat": 35.69085442278885,
      "lng": 139.7485627424538
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "Chiyoda-ku, Tōkyō-to 102-0091",
      "price": 11408,
      "type": "house",
      "rooms": 1,
      "guests": 1,
      "checkin": "10:00",
      "checkout": "6:00",
      "features": [
        "wifi",
        "elevator",
        "dishwasher",
        "conditioner",
        "parking",
        "washer"
      ],
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/anelale-najera-vdeZfLQ6Hts.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/angela-bailey-8KzgXVPTZn0.jpg"
      ]
    },
    "location": {
      "lat": 35.655881842111825,
      "lng": 139.7835827692106
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 69019,
      "type": "house",
      "rooms": 3,
      "guests": 1,
      "checkin": "0:00",
      "checkout": "18:00",
      "features": [
        "dishwasher",
        "wifi",
        "washer",
        "parking",
        "conditioner",
        "elevator"
      ],
      "description": "Хейтеров просьба не беспокоить."
    },
    "location": {
      "lat": 35.68731099516881,
      "lng": 139.7043961823429
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Уютное гнездышко для молодоженов",
      "address": "102-0080 Tōkyō-to, Chiyoda-ku, 14-7",
      "price": 15607,
      "type": "flat",
      "rooms": 3,
      "guests": 3,
      "checkin": "5:00",
      "checkout": "5:00",
      "description": "Хейтеров просьба не беспокоить.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg"
      ]
    },
    "location": {
      "lat": 35.69101175381182,
      "lng": 139.72230235905883
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Отель-музей",
      "address": "105-0016 Tōkyō-to, Minato-ku",
      "price": 93436,
      "type": "hotel",
      "rooms": 2,
      "guests": 1,
      "checkin": "6:00",
      "checkout": "14:00",
      "features": [
        "conditioner",
        "washer",
        "elevator",
        "parking",
        "wifi",
        "dishwasher"
      ],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
      ]
    },
    "location": {
      "lat": 35.67026529365314,
      "lng": 139.735182028366
    }
  }
]


console.log(data[0].offer.description);

// const compare = (arr, element) => {
//   let match = false;
//   arr.forEach((item) => {
//     if(item == element) {
//       match = true;
//     }
//   });
//   return match;
// };


const compare = (arr, element) => {
  return arr.some((item) => item == element);
};

console.log(compare(['Маленькая квартирка рядом с парком', 'Чёткая хата', 'Небольшая лавочка в парке'], 'Небольшая лавочка в парке'));


const printData = (data) => {
  let arr = [];
  data.forEach(element => {
    const property = element.offer.description;
    if (property && !compare(arr, property) ) {
      arr.push(property);
    }
  });
  console.log(arr);
};

printData(data);


const TITLE = ['Маленькая квартирка рядом с парком', 'Чёткая хата', 'Небольшая лавочка в парке', 'Уютное гнездышко для молодоженов', 'Тихая квартирка недалеко от метро', 'Чёткая хата', 'Стандартная квартира в центре', 'Квартира студия в престижном районе', 'Милое гнездышко для фанатов Анимэ', 'Стандартная квартира в центре', 'Императорский дворец в центре Токио', 'Уютное гнездышко для молодоженов', 'Загородный дом для спокойного отдыха', 'Милейший чердачок', 'Хостел «Для друзей»', 'Маленькая квартирка рядом с парком', 'Стандартная квартира в центре', 'Чёткая хата', 'Маленькая квартирка рядом с парком', 'Императорский дворец в центре Токио', 'Маленькая квартирка рядом с парком', 'Тихая квартирка недалеко от метро', 'Маленькая квартирка рядом с парком', 'Небольшая лавочка в парке', 'Маленькая квартирка рядом с парком', 'Отель-музей', 'Хостел «Для друзей»', 'Отель-музей', 'Тихая квартирка недалеко от метро', 'Небольшая лавочка в парке', 'Милейший чердачок', 'Императорский дворец в центре Токио', 'Милое гнездышко для фанатов Анимэ', 'Загородный дом для спокойного отдыха', 'Чёткая хата', 'Небольшая бюджетная комната для студентов', 'Хостел «Для друзей»', 'Милейший чердачок', 'Тихая квартирка недалеко от метро', 'Загородный дом для спокойного отдыха', 'Небольшая бюджетная комната для студентов', 'Чёткая хата', 'Стандартная квартира в центре', 'Милое гнездышко для фанатов Анимэ', 'Квартира студия в престижном районе', 'Загородный дом для спокойного отдыха', 'Небольшая лавочка в парке', 'Чёткая хата', 'Уютное гнездышко для молодоженов', 'Отель-музей'];

const DESCRIPTION_UNIQUE = [
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире',
  'подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Замечательный дворец в старинном центре города. То…рец. Лакеев и прочих жокеев просим не беспокоить.',
  'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Великолепная квартира-студия в центре Токио. Подхо…а полностью укомплектована и имеет свежий ремонт.',
  'Один из лучших хостелов для душевного общения. Ужи…борка, бесплатный Wi-Fi, чистое постельное белье.',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.'
];

const TYPE = ['palace', 'flat', 'hotel', 'house', 'bungalow'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
