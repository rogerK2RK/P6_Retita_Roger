async function getPhotographer() {
    
    // je récupère tous les photographe
    let dataPhotograph = await fetch('../../data/photographers.json');
    dataPhotograph = await dataPhotograph.json();
    
    
   
    // filtrer les données du JSON avec une fonction filter : 



    // je filtre les photographe pour ne récupérer que celui avec le bon id
    dataPhotograph.photographer = dataPhotograph.photographers.filter((photographer) => photographer.id == idrecuperedelurl)[0];
    console.log(dataPhotograph.photographer)

    return dataPhotograph;
}
// récupérer l'id avec urlSearchParams



async function displayData(photographers) {

    photographers.forEach((photographer) => {

        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        document.querySelector(".photographe_page-content").appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographer();
    displayData(photographers);
};

init();