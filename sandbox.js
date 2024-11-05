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