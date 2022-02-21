function photographerFactory(photographer, media) {
    const { name, portrait, city, country, tagline } = photographer;
    const {image, title, likes } = media;
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const imagePhoto = `assets/photographers/${image}`;

    function getUserCardDOM() {
        const sectionPhotographe = document.createElement( 'div' );

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

        
        
        sectionPhotographe.appendChild(sectionHeadPhotographe);
        sectionHeadPhotographe.appendChild(contentHeadPhotographe);
        contentHeadPhotographe.appendChild(h1);
        contentHeadPhotographe.appendChild(location);
        contentHeadPhotographe.appendChild(description);
        sectionHeadPhotographe.appendChild(bouton);
        sectionHeadPhotographe.appendChild(img);


        return (sectionPhotographe);
    }
    return { name, picture, getUserCardDOM }
}

