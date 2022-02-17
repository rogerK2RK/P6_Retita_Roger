async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    
    // let url = 'http://localhost/data/data.json';
    let photographers = 'http://localhost/P6_Retita_Roger/data/photographers.json';
    let url = '../../data/photographers.json';
    fetch(url)
    .then(function(reponse) {
        if (reponse.ok){
            return reponse.json();
        }
    })
    .then(function(data) {
        console.log(data);
        let photographe = data.photographers;
        console.log(photographe);
    })
    .catch(function(err) {
        console.log(err);
    });
    return 
}

// getPhotographers();
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
