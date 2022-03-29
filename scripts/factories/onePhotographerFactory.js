export function onePhotographerFactory(photographer, media) {
    const { name, portrait, city, country, tagline, price } = photographer;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
// les informations d'un photographe 
    function getUserCardDOM() {

        const sectionHeadPhotographe = document.createElement( 'div' );
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
        bouton.setAttribute("aria-label", "Contact Me");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

           
        //affiche le formule de contact d'un photographe
        const modalForm = document.getElementById("contact_modal");
        bouton.addEventListener("click", function(){
            modalForm.style.display = "block";
            document.getElementById("closeModaleContacte").focus();
        })

        const nameCont = document.querySelector(".name-contact");
        nameCont.textContent = `Contactez-moi ${name}`;

        sectionHeadPhotographe.appendChild(contentHeadPhotographe);
        contentHeadPhotographe.appendChild(h1);
        contentHeadPhotographe.appendChild(location);
        contentHeadPhotographe.appendChild(description);
        sectionHeadPhotographe.appendChild(bouton);
        sectionHeadPhotographe.appendChild(img);

        return (sectionHeadPhotographe);
    }

    // créer une fonction getInfoBarPhotographer qui permet de construire l'info bar de la page photographer
    function getInfoBarPhotographer(){
        const infobarBox = document.createElement( "div" );
        infobarBox.className = "d-flex infobarBox";
        const likesBox = document.createElement( "div" );
        likesBox.className = "d-flex likeBoxe";
        const contentTotalLike = document.createElement( "p" );
        contentTotalLike.className = "contentTotalLike";
        //Calcule la somme des likes
        let totalLikes = 0;
        for (let i = 0; i < media.length; i++) {
            totalLikes += media[i].likes;
        }
        contentTotalLike.textContent = totalLikes;

        const picto = document.createElement( 'i' );
        picto.className = "far fa-heart heart-picto-infobar";

        const tarifPhotographer = document.createElement( "p" );
        tarifPhotographer.textContent = `${price}€ / jour`;
        
        infobarBox.appendChild(likesBox);
        likesBox.appendChild(contentTotalLike);
        likesBox.appendChild(picto);
        infobarBox.appendChild(tarifPhotographer);
        
        return (infobarBox);
    }
    return { getUserCardDOM, getInfoBarPhotographer}
}

