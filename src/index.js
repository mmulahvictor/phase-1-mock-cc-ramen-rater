// write your code here
const form = document.querySelector('form')
form.addEventListener('submit', checkSubmit);
let checkSubmit = event => {
event.preventDefault()
let menuObj ={
    name: event.target.name.value,
    restuarant: event.target.restuarant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target.comment.value
}
newRamen(menuObj)
addRamen(menuObj )
}
let initialize = () => getRamen()
let getRamen = () => {
    fetch("http://localhost:3000/ramens")
    .then (response => response.json())
    .then (data => data.forEach(item => newRamen = () => {

// let newRamen = item=>{
let parentDiv = document.getElementById('ramen-menu')
let image = document. createElement('img')
image.addEventListener ('click', () => imageInfo(item.id))
image.src = item.image
parentDiv.append(image)
}))}
let imgInfo = id => {
    fetch(`http://localhost:3000/ramens${id}`)
    .then (response => response.json())
    .then (data => {
        let ramenDetails = document.getElementsById('ramen-detail');
        let rating= document.getElementById('rating-display')
        let comment =document.getElementById('comment-display')
        ramenDetails.innerHTML =`
        <img class ="detail-image" src="${data.image}" alt="Insert Name Here" />
        <h2 class="name">${data.name}</h2>
        <h3 class="restaurant">${data.restuarant}</h3>`;
        rating.textContent = `${data.rating}`
        comment.textContent = `${data.comment}`
    })
}
let addRamen = (menu)=>{
    fetch("http://localhost:3000/ramens",{
        method : "POST",
        headers: {
            'Content-Type':"application/json",
            Accept: 'application/json'
        },
        body: JSON.stringify(menu)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
initialize()