/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Igwe Emmanuel";
let currentYear = new Date().getFullYear();
let profilePicture = "images/Profile.jpg";
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
// var imageElement = document.getElementById("profile-image");
/* Step 4 - Adding Content */
const imageElement = document.querySelector("img");

nameElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", "./images/Profile.jpg");
imageElement.setAttribute("alt", `Profile Image of ${fullName}`);
/* Step 5 - Array */
const favorite_food = [
  "pizza",
  "sushi",
  "chocolate",
  "ice cream",
  "vegetable soup",
  "chicken soup",
  "jollof rice",
  "Fried Rice",
  "Goat Meat Pepper soup"
];
// Adding New Favourite Food to an Array
let newFavoriteFood = ["shawama", "yam", "tacos"];
newFavoriteFood.push(favorite_food);
foodElement.innerHTML = favorite_food;
// console.log(favorite_food)

// Adding Single Item to an Array
let singleFoodItem = "Plantain";
// singleFoodItem.push(favorite_food)
favorite_food.push(singleFoodItem)
foodElement.innerHTML += `<br>${favorite_food}`;
console.log(favorite_food)

// Removing the First Element From an Array
favorite_food.shift()
foodElement.innerHTML += `<br>${favorite_food}`;
console.log(favorite_food)

// Removing the Last Element From an Array
favorite_food.pop()
foodElement.innerHTML += `<br>${favorite_food}`;
console.log(favorite_food)
