function onePhotographerFactory(photographer) {
    const { name, portrait, city, country, tagline } = photographer;
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {

        const sectionHeadPhotographe = document.createElement( 'section' );
        sectionHeadPhotographe.className = "photograph-header";
        const contentHeadPhotographe = document.createElement('div');
        
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        h1.className ="name-photographe";
        const location = document.createElement ( 'p' );
        location.textContent = `${city}, ${country}`;
        location.className = "ville";
        location.className = "ville-photographer";
        const description = document.createElement ( 'p' );
        description.textContent = tagline;
        description.className = "description";
        const bouton = document.createElement('button')
        bouton.textContent = "Contactez-moi";
        bouton.className ="contact_button"
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const modalForm = document.getElementById("contact_modal");
        bouton.addEventListener("click", function(e){
            modalForm.style.display = "block";
        })

        sectionHeadPhotographe.appendChild(contentHeadPhotographe);
        contentHeadPhotographe.appendChild(h1);
        contentHeadPhotographe.appendChild(location);
        contentHeadPhotographe.appendChild(description);
        sectionHeadPhotographe.appendChild(bouton);
        sectionHeadPhotographe.appendChild(img);



        return (sectionHeadPhotographe);
    }

    // créer une fonction getInfoBarPhotographer

    return { name, picture, getUserCardDOM }
}

