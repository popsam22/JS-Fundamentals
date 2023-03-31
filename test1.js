const restaurant = {
  name: "Water Cress Hotel",
  location: "Balogun Street, Awolowo way, Ikeja",
  categories: ["Italian", "Mexican", "English", "Organic"],
  starterMenu: ["Chicken Salad", "Burger", "Ginger Bread", "Baked Beans"],
  mainMenu: ["Pizza", "Pasta", "Jollof Rice"],
  openingHours: {
    thu: {
      open: 8,
      close: 17,
    },
    fri: {
      open: 9,
      close: 20,
    },
    sat: {
      open: 11,
      close: 23,
    },
  },
};

const myArray = [1, 2, 3];
const a = myArray[0];
const b = myArray[1];
const c = myArray[2];

const [x, y, z] = myArray;
console.log(x, y, z);

const [firstCategory, secondCategory, , fourthCategory] = restaurant.categories;
console.log(firstCategory, secondCategory, fourthCategory);

// destructuring array inside of array
const nestedArray = [1, 3, [5, 7, 9]];
const [m, , [n, q, r]] = nestedArray;
console.log(m, n, r, q);

//setting default values. This is useful when getting data from an API.

const [h = 1, i = 12, j = 120] = [20, 200];
console.log(h, i, j);

//Destructuring objects
const { name, openingHours } = restaurant;
console.log(name, openingHours);

//renaming object names
const { name: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);


//giving object default value 
const {menu = []} = restaurant;
console.log(menu);  


//nested objects
const {fri: {open, close}} = hours;
console.log(open, close);
 




// Spread Operator: it works on only iterables
const myArr = [5, 6, 7];
const newArr = [1, 2, ...myArr]
console.log(newArr)
//logs the individual elements of the array
console.log(...newArr)


//creating shallow copy 
const mainMenuCopy = [...restaurant.mainMenu]


//merging arrays
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menus)


//Objects
const waterCress = {...restaurant, founder:'Ajoke Balogun'};
console.log(waterCress);


//Rest operator is used to pack elements or multiple values into an array(opposite of spread)
const [e, f, ...others]= [1, 2, 3, 4, 5];
console.log(e, f, others);

const [ ChickenSalad, Burger, , BakedBeans, ...otherFoods] = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(ChickenSalad, Burger, ...otherFoods);

// Rest operator on Objects
const {sat, ...otherHours} = {...restaurant.openingHours};
console.log(sat, otherHours);

//using rest parameters in functions
const add = (...nums) => {
    let sum = 0;
    for(let i = 0; i <nums.length; i++) sum +=nums[i];
    console.log(sum);
}

add(2,4);
add(2,4,6,8);


//Short circuiting with && and ||
console.log( 3 || 'Sam') // 3
console.log( undefined || null) // null (there is n shortcircuiting here cos two values are falsy)
console.log( true || 'Julius') // true
console.log( undefined || 0 || '' || 'hi' || true) // 'hi'


console.log(false && 'Sam') // false
console.log( 10 && 'Sam') //'Sam'
console.log('hi' && 75 && undefined && null ) // undefined