document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
let titleArray =["We are nice","Support", "Simple search process", "Payment Methods"];
let descriptionArray =["Fantasy is over, there will be something really convincing here", "is there something you don't understand? Feel free to call us. Phone number in the footer", "We checked it out, even the kid did it, but it was my mom's friend's son", "We have a lot of them, from cryptocurrencies to barter for potatoes"];
let dynamic = document.querySelector('.chooseContainer');
for (let i = 0; i < titleArray.length; i++) {
    let fetch = document.querySelector('.chooseContainer').innerHTML;
    dynamic.innerHTML = `
    <div id="chooseContent">
        <img src="assets/${titleArray[i]}.svg" alt="icons">
        <h2>${titleArray[i]}</h2>
        <p>${descriptionArray[i]}</p>
        </div>` + fetch;
};

let roomArray = ["Wilderness Club at Big Ceddar", "Wilderness Club at Big Ceddar", "Wilderness Club at Big Ceddar"];
let photoArray = ["Wilderness Club at", "Wilderness Club", "Wilderness"];
let rateArray = ["rating", "rating", "rating"];
let favoriteArray = ["favorite", "favorite", "favorite"];
let dateArray = ["28 October - 1 November", "28 October - 1 November", "28 October - 1 November"];
let priceArray = ["$2016", "$2016", "$2016"];
let stayArray = ["/6 nights", "/6 nights", "/6 nights"];
let dynamic1 = document.querySelector('.offersContainer');
for (let j = 0; j < roomArray.length; j++) {
    let fetch = document.querySelector('.offersContainer').innerHTML;
    dynamic1.innerHTML = `
    <div class="offersContent">
    <img class="room" src="assets/${photoArray[j]}.png" alt="room photo">
            <div id="imgBox">
                <img src="assets/${rateArray[j]}.svg" alt="4.8 rate icon">
                <img src="assets/${favoriteArray[j]}.svg" alt="heart icon">
            </div>
            <h3>${roomArray[j]}</h3>
            <h4>${dateArray[j]}</h4>
            <div class="price">
                <h1>${priceArray[j]}</h1>
                <p>${stayArray[j]}</p>
            </div>
        </div>
    ` + fetch;
};

let profileArray = ["Piho", "LeBron", "Janik"];
let reviewArray = ["I quickly found the right tour for me, but I had a few questions about the hotle, I wrote to tech suport and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much, I will coma back again and again", "I quickly found the right tour for me, but I had a few questions about the hotle, I wrote to tech suport and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much, I will coma back again and again", "I quickly found the right tour for me, but I had a few questions about the hotle, I wrote to tech suport and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much, I will coma back again and again"];
let reviewerArray = ["Kaarel Piho,", "LeBron Durant,", "Jannike Borg,"];
let jobArray = ["  Chiropodist", "  Flight attendant", "   Publisher"];
let dynamic2 = document.querySelector('.reviewsContainer');
for (let k = 0; k < profileArray.length; k++) {
    let fetch = document.querySelector('.reviewsContainer').innerHTML;
    dynamic2.innerHTML = `
    <div class="reviewsContents">
            <img src="assets/${profileArray[k]}.svg" alt="profile image">
            <p>${reviewArray[k]}</p>
            <h3 class="text"><em>${reviewerArray[k]}<span>${jobArray[k]}</span></em></h3>
        </div>` + fetch;
}; 
let imageArray = ["airplane", "sun glare", "buildings"]
let date2Array = ["May 20, 2022", "May 22, 2022", "May 23, 2022"]
let clockArray = ["clock", "clock", "clock"]
let timeArray = ["15 minutes", "1 minute", "5 minutes"]
let title2Array = ["Tips for flying on a plane", "Vilnius resorts", "My trip to Athens"]
let contentArray = ["If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you", "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs", "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the cuty, but already..."]
let dynamic3 = document.querySelector('.postsContainer');
for (let l = 0; l < imageArray.length; l++) {
    let fetch = document.querySelector('.postsContainer').innerHTML;
    dynamic3.innerHTML = `
    <div class="postsContents">
            <img src="assets/${imageArray[l]}.png" alt="post image">
            <h3 class="time">${date2Array[l]}<img src="assets/${clockArray[l]}.svg" alt="clock icon"><span>${timeArray[l]}</span></h3>
            <h2>${title2Array[l]}</h2>
            <p>${contentArray[l]}</p>
        </div>` + fetch;
}; 
let sectionArray = ["Title of section", "Title of section", "Title of section"];
let pageArray = ["Page title", "Page title", "Page title"];
let dynamic4 = document.querySelector('.titlesContainer');
for (let m = 0; m < sectionArray.length; m++) {
    let fetch = document.querySelector('.titlesContainer').innerHTML;
    dynamic4.innerHTML = `
    <div class="titlesContents">
            <h3>${sectionArray[m]}</h3>
            <p>${pageArray[m]}</p>
            <p>${pageArray[m]}</p>
            <p>${pageArray[m]}</p>
        </div>` + fetch;
};
/* const choose = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];
    
    const renderChoose = choose => {
        const container = document.getElementById('chooseContainer');
        choose.forEach(choose => {
            container.innerHTML += `
                <div>
                    <h3>${choose.name}</h3>
                    <p>Price: ${choose.price}</p>
                </div>
            `;
        });
    }
    
    renderchoose(choose); */