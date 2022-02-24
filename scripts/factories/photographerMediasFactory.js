function photographerMediasFactory(media){
    const {image, title, likes, } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;

    function getUserCardDOMMedia(){
        const article = document.createElement( 'article' );
        article.className = "photo-box";
        const modalPhoto = document.querySelector(".lightbox-modal");
        article.addEventListener("click", function(e){
            modalPhoto.style.display = "block";
        });
        
        // console.log({media});
        // if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(filename)){
        //     console.log("jpg ");
        //     const pht = document.createElement( 'img' );
        // }else{
        //     console.log("video");
        //     const pht = document.createElement( 'img' );
        // }
        const pht = document.createElement( 'img' )
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

function onePhotoFactory(media) {
    const { image, title, likes  } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;

    function getUserPhoto(){

        const article = document.createElement( 'article' );
        article.className = "content";
        
        const pht = document.createElement( 'img' )
        pht.setAttribute("src", imagePhoto);
        pht.className = "photo-modal";
        const titre = document.createElement( 'p' );
        titre.textContent = `${title}`;
        titre.className = "titlePhoto";

        article.appendChild(pht);
        article.appendChild(titre);



        return (article);
    }
    return { image, title, likes, getUserPhoto }
}

