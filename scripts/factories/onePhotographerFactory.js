function photographerFactory(photographer) {
    const { name, portrait, city, country, tagline, price } = photographer;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
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
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(prix);

        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}