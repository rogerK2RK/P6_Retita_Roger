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

function displayPhotographerInfo(photographer) {
    const photographerModel = onePhotographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    document.querySelector(".photographe_page-content").appendChild(userCardDOM);
};

function displayMedias(media){
    media.forEach((media) => {
        const photographerMedia = photographerMediasFactory(media);
        const userCardDOMMedia = photographerMedia.getUserCardDOMMedia();
        document.querySelector(".photographe_page_photo-content").appendChild(userCardDOMMedia);
    });

}

// créer ici une fonction displayInfoBar qui appellera la fonction getInfoBarPhotographer de la factory onePhotographerFactory

function displayMediasOnePhoto(media){
    const photographerOnePhoto = onePhotoFactory(media);
    const userCardDOMPhoto = photographerOnePhoto.getUserPhoto();
    document.querySelector(".lightbox-modal").appendChild(userCardDOMPhoto);
}

async function init() {
    // Récupère les datas des photographes
    const { photographer, media } = await getPhotographer();
    
    displayPhotographerInfo(photographer);
    displayMedias(media);
    displayMediasOnePhoto(media);

};

init();