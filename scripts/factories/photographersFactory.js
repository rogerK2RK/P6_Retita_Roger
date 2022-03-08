function photographersFactory(photographer) {
    const { name, portrait, city, country, tagline, price, id } = photographer;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.href = "photographer.html?id="+id;
        link.id = id;
        link.className ="link";
        link.setAttribute("alt", name);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement ( 'p' );
        location.textContent = `${city}, ${country}`;
        location.className = "ville";

        const description = document.createElement ( 'p' );
        description.textContent = tagline;
        description.className = "description";
        
        const prix = document.createElement ( 'p' );
        prix.textContent = `${price}€/jour`;
        prix.className = "tarif";
        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(location);
        link.appendChild(description);
        link.appendChild(prix);
            // On récupère l'élément sur lequel on veut détecter le clic
        link.addEventListener('click', function(e) {          // On écoute l'événement click
            console.log(id);               // On change le contenu de notre élément pour afficher "C'est cliqué !"
        });


        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}

