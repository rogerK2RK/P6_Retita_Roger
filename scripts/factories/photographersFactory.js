function photographersFactory(photographer) {
    const { name, portrait, city, country, tagline, price, id } = photographer;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.href = "photographer.html?id="+id;
        link.id = id;
        link.className ="link";

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

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


        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}

