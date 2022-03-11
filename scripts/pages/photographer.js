async function getPhotographer() {

    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');

    // je récupère tous les photographe
    let dataPhotograph = await fetch('../../data/photographers.json');
    dataPhotograph = await dataPhotograph.json();

    // je filtre les photographe pour ne récupérer que celui avec le bon id
    dataPhotograph.photographer = dataPhotograph.photographers.filter((photographer) => photographer.id == id)[0];
    dataPhotograph.media = dataPhotograph.media.filter((media) => media.photographerId == id);
    return dataPhotograph;
}

//function qui appel onePhotographerFactory pour afficher les informations d'un photographe
function displayPhotographerInfo(photographer) {
    const photographerModel = onePhotographerFactory(photographer, null);
    const userCardDOM = photographerModel.getUserCardDOM();
    document.querySelector(".photographe_page-content").appendChild(userCardDOM);
};

// function qui appel photographerMediasFactory pour afficher les photos d'un photographe
function displayMedias(media) {

    document.querySelector(".photographe_page_photo-content").innerHTML = "";

    media.forEach((media) => {
        const photographerMedia = photographerMediasFactory(media);
        const userCardDOMMedia = photographerMedia.getUserCardDOMMedia();
        document.querySelector(".photographe_page_photo-content").appendChild(userCardDOMMedia);
    });
}

// créer ici une fonction displayInfoBar qui appellera la fonction getInfoBarPhotographer de la factory onePhotographerFactory
function displayInfoBar(media, photographer) {
    const photographerModel = onePhotographerFactory(photographer, media);
    const userCardDOM = photographerModel.getInfoBarPhotographer();
    document.querySelector(".photographe_page-infobar").appendChild(userCardDOM);
}

// trie les medias en fonction d'un ordre de tri
function triMedia(media, ordreTri) {
    
    if (ordreTri == "popularite") {
        media.sort((a, b) => {
            return b.likes - a.likes;
        });
        
    } else if (ordreTri == "date") {
        media.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        
    } else if (ordreTri == "titre") {
        media.sort((a, b) => a.title.localeCompare(b.title));
    }

}

async function init() {
    // Récupère les datas des photographes
    const { photographer, media } = await getPhotographer();

    displayPhotographerInfo(photographer);
    triMedia(media, "popularite");
    displayMedias(media);
    displayInfoBar(media, photographer);
   
    initLightbox(media);

    // evenement qui lance un tri sur les médias
    document.getElementById("filtre").addEventListener('change', function (event) {
        triMedia(media, event.target.value);
        displayMedias(media);
    });

};

init();