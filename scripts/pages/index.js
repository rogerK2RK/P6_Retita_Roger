async function getPhotographers() {
    
    let dataPhotograph = await fetch('../../data/photographers.json');
    dataPhotograph = await dataPhotograph.json();
    
    return dataPhotograph;
   
}

async function displayData(photographers) {

    photographers.forEach((photographer) => {

        const photographerModel = photographersFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        document.querySelector(".photographer_section").appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();