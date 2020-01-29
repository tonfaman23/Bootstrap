const ducks = [
    {
        isRubber: true,
        color: 'blue',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'none',
        age: 55,
        featherNum: 0,
        name: 'Rubber Ducky',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/31q-v-h3cQL._SX355_.jpg'
    },
    {
        isRubber: true,
        color: 'yellow',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'none',
        age: 67,
        featherNum: 0,
        name: 'Nora',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg'
    },
    {
        isRubber: false,
        color: 'green',
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 33,
        name: 'Norbert',
        imgUrl: 'https://i.pinimg.com/originals/a5/f5/57/a5f557ba7002237e2e6ac0fa11a6d019.jpg'
    },
    {
        isRubber: false,
        color: 'green',
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 27,
        name: 'Alexander',
        imgUrl: 'https://live.staticflickr.com/3115/3179800771_e0f22306b9_b.jpg'
    },
    {
        isRubber: false,
        color: 'brown',
        gender: 'female',
        isMigrator: true,
        socialStatus: 'looking for partner',
        diet: 'vegan',
        age: 32,
        name: 'Yvette',
        imgUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60021801-480px.jpg'
    },
    {
        isRubber: true,
        color: 'orange',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'none',
        name: 'Gudao',
        imgUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60021801-480px.jpg'
    },
    {
        isRubber: true,
        color: 'blue',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'loner',
        diet: 'instant food',
        name: 'Deadbeat',
        imgUrl: 'https://cdn.shopify.com/s/files/1/0604/4801/products/Blue_3.jpeg?v=1514845837'
    },
    {
        isRubber: true,
        color: 'yellow',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'party animal',
        diet: 'luxury meals',
        name: 'Prince',
        imgUrl: 'https://cdn11.bigcommerce.com/s-jnapaiw/images/stencil/1280x1280/products/2945/4049/Sunny_duck__52036.1400093435.jpg?c=2'
    }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckCards = (quackers) =>{
    let domString = '';
    for (let i = 0; i < quackers.length; i++) {
    domString += '<div class= "col-md-6 col-lg-4">';    
    domString += '<div class="card">';
    domString += `<img src="${quackers[i].imgUrl}" class="cardImg" alt="...">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="name">${quackers[i].name}</h5>`;
    domString += `<p class="diet">${quackers[i].diet}</p>`;
    domString += `<p class="social">${quackers[i].socialStatus}</p>`;
    domString += '  </div>';
    domString += '</div>';
    domString += '</div>';
    };
    printToDom('duckies', domString);
};

const init = () => {
    duckCards(ducks);
};

init();