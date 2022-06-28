// write your code here
document.addEventListener('DOMContentLoaded', () => getImages())

const ulList = document.querySelector('#ulList');

let getImages = () => {
    const url = 'http://localhost:3000/ramens';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(imageObject=>{
            image = imageObject.image;
            imgname = imageObject.name;
            restaurant = imageObject.restaurant;
             rating = imageObject.rating;
             comments = imageObject.comment;
            showImage(image);
        })
    })
}

const showImage = imgUrl =>{
     img = document.createElement('img');
    const listEl = document.createElement('li');
    img.src = imgUrl;
    listEl.appendChild(img);
    img.addEventListener('click', function(){
        showDetails()
    })
    return   ulList.appendChild(listEl);
}

const showDetails = () =>{
    fetch('http://localhost:3000/ramens')
    .then(newResponse=>newResponse.json())
    .then(result=>{result.forEach(restaurantObject=>{
    const newImage = document.querySelector('.detail-image')
    const detailsDiv = document.getElementById('ramen-detail');
    const name = document.querySelector('.name');
    const restaurant = document.querySelector('.restaurant');
    const rating = document.querySelector('#rating-display');
    const comment = document.querySelector('#comment-display');
    const imageHolder = document.querySelector('.detail-image');
    newImage.src = restaurantObject.image;
    name.innerHTML=restaurantObject.name;
    restaurant.innerHTML = restaurantObject.restaurant;
    rating.innerHTML = restaurantObject.rating;
    comment.innerHTML = restaurantObject.comment;
    })
    })
}

function addImage(username, userRestaurant, userRating, userImage, userComment){
    const inputName = document.getElementById('new-name');
    const inputRestaurant = document.getElementById('new-restaurant');
    const inputRating = document.getElementById('new-rating');
    const inputImg = document.getElementById('new-image');
    const inputComment = document.getElementById('new-comment');

    const ramenDetails = {
        userName: inputName.value,
        userRestaurant: inputRestaurant.value,
        userRating: inputRating.value,
        userImage: inputImg.src,
        userComment: inputComment.value
    }
    const configurationObject =   {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(ramenDetails),
      }
      fetch(url, configurationObject)
      .then(res=>res.json())
      .then(results=>
        console.log("successful addition"))
}

const form = document.getElementById('new-ramen');
console.log(addImage);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    addImage()
    event.target.reset()
})