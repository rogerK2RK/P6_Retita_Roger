async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    
    let photographers = '../../data/photographers.json';
    fetch(photographers)
    .then(function(photographers) {
        if (photographers.ok){
            return photographers.json();
        }
    })
    .then(function(data) {
        let photographe = data.photographers;
        console.log(photographe);
        for(let user of photographe){
            console.log(`${user.name}`);
        }
    })
    .catch(function(err) {
        console.log(err);
        });
}

getPhotographers();
// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// };

// init();
