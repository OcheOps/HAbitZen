const weekdays = {
    SATURDAY: 'شنبه',
    SUNDAY: 'یکشنبه',
    MONDAY: 'دوشنبه',
    TUESDAY: 'سه شنبه',
    WEDNESDAY: 'چهارشنبه',
    THURSDAY: 'پنج شنبه',
    FRIDAY: 'جمعه',
};
const colors = {
    darkGreen: 'bg-darkGreen',
    purple: 'bg-purple',
    gray: 'bg-gray',
    blue: 'bg-blue',
    red: 'bg-red',
    yellow: 'bg-yellow',
    pink: 'bg-pink',
    darkBlue: 'bg-darkBlue',
    lightGreen: 'bg-lightGreen',
    orange: 'bg-orange'
}

const categories = [
    {"id": 1, "type": "activity", "name": "سلامت"},
    {"id": 2, "type": "users", "name": "روابط"},
    {"id": 3, "type": "book-open", "name": "تحصیل"},
    {"id": 4, "type": "monitor", "name": "کار"},
    {"id": 5, "type": "dribbble", "name": "تفریح"},
    {"id": 6, "type": "award", "name": "مهارت"},
    {"id": 7, "type": "home", "name": "امورخانه"},
    {"id": 8, "type": "dollar-sign", "name": "مالی"}
];

const icons = [
    {"type": "book-open"},
    {"type": "briefcase"},
    {"type": "dribbble"},
    {"type": "film"},
    {"type": "heart"},
    {"type": "moon"},
    {"type": "home"},
    {"type": "monitor"},
    {"type": "shopping-cart"},
    {"type": "dollar-sign"},
    {"type": "check"},
    {"type": "book"},
    {"type": "droplet"},
    {"type": "music"},
    {"type": "users"},
    {"type": "edit"},
    {"type": "globe"}
];

const habits = [
    {
        "id": 1,
        "title": "مسواک بزنم",
        "categoryId": 1,
        "type": "check",
        "categoryName": "سلامت"
    },
    {
        "id": 2,
        "title": "ورزش کنم",
        "categoryId": 1,
        "type": "check",
        "categoryName": "سلامت"
    },
    {
        "id": 3,
        "title": "وزنمو کنترل کنم",
        "categoryId": 1,
        "type": "check",
        "categoryName": "سلامت"
    },
    {
        "id": 4,
        "title": "مطالعه کنم",
        "categoryId": 6,
        "type": "book",
        "categoryName": "مهارت"
    },
    {
        "id": 5,
        "title": "آب بنوشم",
        "categoryId": 1,
        "type": "droplet",
        "categoryName": "سلامت"
    },
    {
        "id": 6,
        "title": "خونه رو نظافت کنم",
        "categoryId": 7,
        "type": "home",
        "categoryName": "امورخانه"
    },
    {
        "id": 7,
        "title": " به گیاه ها آب بدم",
        "categoryId": 7,
        "type": "droplet",
        "categoryName": "امورخانه"
    },
    {
        "id": 8,
        "title": "قرص ویتامینه بخورم",
        "categoryId": 1,
        "type": "check",
        "categoryName": "سلامت"
    },
    {
        "id": 9,
        "title": "درصد درآمدمو پس انداز کنم ۲۰",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "مالی"
    },
    {
        "id": 10,
        "title": "30 درصد درآمدمو صرف خواسته هام کنم",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "مالی"
    },
    {
        "id": 11,
        "title": "50 درصد درآمدمو صرف خواسته هام کنم",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "مالی"
    },
    {
        "id": 12,
        "title": "زبان بخونم",
        "categoryId": 3,
        "type": "book-open",
        "categoryName": "تحصیل"
    },
    {
        "id": 13,
        "title": "ساز بزنم",
        "categoryId": 6,
        "type": "music",
        "categoryName": "مهارت"
    },
    {
        "id": 14,
        "title": "با دوستام وقت بگذرونم",
        "categoryId": 2,
        "type": "users",
        "categoryName": "روابط"
    },
    {
        "id": 15,
        "title": "سفر برم",
        "categoryId": 5,
        "type": "briefcase",
        "categoryName": "تفریح"
    },
    {
        "id": 16,
        "title": "به موقع و به اندازه بخوابم",
        "categoryId": 1,
        "type": "moon",
        "categoryName": "سلامت"
    },
    {
        "id": 17,
        "title": "کلاس تقویتی برم",
        "categoryId": 3,
        "type": "book",
        "categoryName": "تحصیل"
    },
    {
        "id": 18,
        "title": "تکالیفمو انجام بدم",
        "categoryId": 3,
        "type": "edit",
        "categoryName": "تحصیل"
    },
    {
        "id": 19,
        "title": "دانش و مهارتمو به روز کنم",
        "categoryId": 4,
        "type": "book-open",
        "categoryName": "کار"
    },
    {
        "id": 20,
        "title": "خرید های خونه رو انجام بدم",
        "categoryId": 7,
        "type": "shopping-cart",
        "categoryName": "امورخانه"
    },
    {
        "id": 21,
        "title": "آشپزی کنم",
        "categoryId": 7,
        "type": "check",
        "categoryName": "امورخانه"
    },
    {
        "id": 22,
        "title": "اطلاعات عمومیمو بالا ببرم",
        "categoryId": 6,
        "type": "globe",
        "categoryName": "مهارت"
    },
    {
        "id": 23,
        "title": "بازی کنم",
        "categoryId": 5,
        "type": "dribbble",
        "categoryName": "تفریح"
    }
];


export  {
    categories, habits, icons,weekdays,colors
};