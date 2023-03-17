const weekdays = {
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday',
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
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
    { "id": 1, "type": "activity", "name": "Health" },
    { "id": 2, "type": "users", "name": "Contacts" },
    { "id": 3, "type": "book-open", "name": "Book" },
    { "id": 4, "type": "monitor", "name": "work" },
    { "id": 5, "type": "dribbble", "name": "Fun" },
    { "id": 6, "type": "award", "name": "Skills" },
    { "id": 7, "type": "home", "name": "Home" },
    { "id": 8, "type": "dollar-sign", "name": "Financial" },
];

const icons = [
    { "type": "book-open" },
    { "type": "briefcase" },
    { "type": "dribbble" },
    { "type": "film" },
    { "type": "heart" },
    { "type": "moon" },
    { "type": "home" },
    { "type": "monitor" },
    { "type": "shopping-cart" },
    { "type": "dollar-sign" },
    { "type": "check" },
    { "type": "book" },
    { "type": "droplet" },
    { "type": "music" },
    { "type": "users" },
    { "type": "edit" },
    { "type": "globe" }
];

const habits = [
    {
        "id": 1,
        "title": "Brush my teeth",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 2,
        "title": "Exercise",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 3,
        "title": "Control my Weight",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 4,
        "title": "Read a book",
        "categoryId": 6,
        "type": "book",
        "categoryName": "Skills"
    },
    {
        "id": 5,
        "title": "Drink 8 glasses of water",
        "categoryId": 1,
        "type": "droplet",
        "categoryName": "Health"
    },
    {
        "id": 6,
        "title": "Clean my room",
        "categoryId": 7,
        "type": "home",
        "categoryName": "Home"
    },
    {
        "id": 7,
        "title": "Water the plants",
        "categoryId": 7,
        "type": "droplet",
        "categoryName": "Home"
    },
    {
        "id": 8,
        "title": "Take meds ",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 9,
        "title": "Save 20% of my income",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 10,
        "title": "Spend 30% of my income on what i want to spend",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 11,
        "title": "spend 50% of my income on what i need to spend",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 12,
        "title": "Let's study",
        "categoryId": 3,
        "type": "book-open",
        "categoryName": "Book"
    },
    {
        "id": 13,
        "title": "Play an instrument",
        "categoryId": 6,
        "type": "music",
        "categoryName": "Skills"
    },
    {
        "id": 14,
        "title": "Spend time with friends",
        "categoryId": 2,
        "type": "users",
        "categoryName": "Relationship"
    },
    {
        "id": 15,
        "title": "i will travel",
        "categoryId": 5,
        "type": "briefcase",
        "categoryName": "Entertainment"
    },
    {
        "id": 16,
        "title": "sleep enough  and on time",
        "categoryId": 1,
        "type": "moon",
        "categoryName": "Health"
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
        "title": "Do my homework",
        "categoryId": 3,
        "type": "edit",
        "categoryName": "Education"
    },
    {
        "id": 19,
        "title": "Update my Knowledge and skills",
        "categoryId": 4,
        "type": "book-open",
        "categoryName": "Work"
    },
    {
        "id": 20,
        "title": "Do the shooping list",
        "categoryId": 7,
        "type": "shopping-cart",
        "categoryName": "Database"
    },
    {
        "id": 21,
        "title": "Cook",
        "categoryId": 7,
        "type": "check",
        "categoryName": "Database"
    },
    {
        "id": 22,
        "title": "Upload my general information",
        "categoryId": 6,
        "type": "globe",
        "categoryName": "skills"
    },
    {
        "id": 23,
        "title": "Play",
        "categoryId": 5,
        "type": "dribbble",
        "categoryName": "Entertainment"
    }
];


export {
    categories, habits, icons, weekdays, colors
};