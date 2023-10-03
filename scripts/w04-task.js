/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name : 'Igwe Emmanuel',
    photo : 'images/Profile.jpg',
    favFood : ['rice', 'beans', 'indomie noodles', 'pawpaw', 'chicken soup', 'banana bread', 'vegetable soup'],
    hobbies : ['Football', 'Video Games', 'Comedy Movies'],
    placesLived : []
}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place : 'Abuja',
    length : '21 years'
}, {
    place: 'Ghana',
    length : '4 years'
}, {
    place : 'Sierra Leone',
    length : '9 months'
}, {
    place : 'Benin City',
    length : '1 year 2 months'
}, {
    place : 'Warri',
    length : '6 months'
}
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;  

/* Photo with attributes */
let imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Image of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li)
});
/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let place = document.createElement('dd');
    let length = document.createElement('dt');
    let lineBreak = document.createElement('br')
    place.innerHTML = `<strong>${placeLived.place}</strong>`
    length.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(place)
    document.querySelector('#places-lived').appendChild(length)

});
