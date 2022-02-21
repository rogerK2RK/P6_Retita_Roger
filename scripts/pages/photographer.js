async function getPhotographer(idrecuperedelurl) {
    
    // je récupère tous les photographe
    let dataPhotograph = await fetch('../../data/photographers.json');
    dataPhotograph = await dataPhotograph.json();
    
    
   
    // filtrer les données du JSON avec une fonction filter : 



    // je filtre les photographe pour ne récupérer que celui avec le bon id
    dataPhotograph.photographer = dataPhotograph.photographers.filter((photographer) => photographer.id == idrecuperedelurl)[0];
    dataPhotograph.media = dataPhotograph.media.filter((media) => media.photographerId == idrecuperedelurl);

    console.log(dataPhotograph)
    return dataPhotograph;
}
// récupérer l'id avec urlSearchParams



async function displayData(photographer, media) {
        const photographerModel = photographerFactory(photographer, media);
        const userCardDOM = photographerModel.getUserCardDOM();
        document.querySelector(".photographe_page-content").appendChild(userCardDOM);
};

async function init() {
    // Récupère les datas des photographes
    
    let searchParams = new URLSearchParams(window.location.href);
    let id = searchParams.get('id');
    console.log(id);
    const { photographer, media } = await getPhotographer(id);
    displayData(photographer, media);
    // console.log(photographers)

};

init();