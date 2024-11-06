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
}
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