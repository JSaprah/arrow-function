//Destructuring arrays
let ages = [30, 23, 25];
let[John, Mary, Joe] = ages;

console.log(John,Mary,Joe);

//Destructuring objects

let jobs = {
    Mike: "designer",
    Jill: "developer",
    Alicia: "accountant"
};

let{Mike, Jill, Alicia} = jobs;
console.log(Mike, Jill, Alicia);

//Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'spanish'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let language2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};

let {firstLanguage, thirdLanguage} =language2;
console.log(firstLanguage, thirdLanguage);

//Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite, secondFavorite, others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
}
let {brian, anna, ...rest} = favoriteFoods;

console.log(brian, anna, rest);
