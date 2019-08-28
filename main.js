console.log('hi');

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const pieCollection = [
    {
        name: 'Apple',
        image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_3819_1565.JPEG',
        instructorName: 'zoe',
    },
    {
        name: 'Cherry',
        image: 'https://pbs.twimg.com/profile_images/676260818149752834/0gdEsEsD_400x400.jpg',
        instructorName: 'michael',
    },
    {
        name: 'Chess',
        image: 'http://images.bigoven.com/image/upload/t_recipe-256/brown-bag-apple-pie-13f2bb.jpg',
        instructorName: 'callan',
    },
    {
        name: 'Blueberry',
        image: 'https://cdn.copymethat.com/media/orig_blueberry_pie_bites_20150724212514754371sgyue3.jpg',
        instructorName: 'callan',
    },
    {
        name: 'Strawberry Rhubarb',
        image: 'http://redirect.bigoven.com/pics/rs/256/berryrhubarbpie-93eb30.jpg',
        instructorName: 'michael',
    },
    {
        name: 'Peach',
        image: 'http://images.bigoven.com/image/upload/t_recipe-256/peachpie-74bf76.jpg',
        instructorName: 'callan',
    },
]

const piePrint = (dessert) => {
    let allTheDesserts = '';
    for (let i=0; i < dessert.length; i++) {
        const dessertCollective = dessert[i];
        allTheDesserts += `
        <div class="dessertGroup">
            <h3>${dessertCollective.name}</h3>
            <img src="${dessertCollective.image}">
        </div>        
        `
        printToDOM(allTheDesserts, 'pieLife');
    }
}

const buttonClick = (e) => {
    // figure out who instructor is for button we click on
    const instructor = e.target.id
    // only get those pies from the list of all the pies
    const selectedPies = [];
    for (let i = 0; i < pieCollection.length; i++) {
        const pie = pieCollection[i];
        if (pie.instructorName === instructor) {
            selectedPies.push(pie);
        }
    }
    // pass small list of pies back into the pie builder
    piePrint(selectedPies);
}

document.getElementById('zoe').addEventListener('click', buttonClick)

document.getElementById('michael').addEventListener('click', buttonClick)

// piePrint(pieCollection);