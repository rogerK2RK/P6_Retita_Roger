function photographerMediasFactory(media){
    const {image, title, likes, } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;

    function getUserCardDOMMedia(){
        const article = document.createElement( 'article' );
        article.className = "photo-box";
        
        // console.log({media});
        
        const pht = document.createElement( 'img' );
        pht.setAttribute("src", imagePhoto);
        pht.className = "photo";
        const boxeContent = document.createElement( 'div' );
        boxeContent.className = "description-photo";
        const titre = document.createElement( 'p' );
        titre.textContent = `${title}`;
        titre.className = "name-photo";
        const boxLike = document.createElement( 'div' );
        boxLike.className = "notif-photo";
        const numberLikePhoto = document.createElement( 'p' );
        numberLikePhoto.textContent = likes;
        numberLikePhoto.className = "likes-photo"
        const picto = document.createElement( 'i' );
        picto.className = "far fa-heart heart-picto";



        article.appendChild(pht);
        article.appendChild(boxeContent);
        boxeContent.appendChild(titre);
        boxeContent.appendChild(boxLike);
        boxLike.appendChild(numberLikePhoto);
        boxLike.appendChild(picto);





        return (article);
    }
    return { image, title, likes, getUserCardDOMMedia }
}