function photographerMediasFactory(media){
    const {image, title, likes, video } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;
    const videoPhotographer = `assets/photographers/Media/${video}`

    function getUserCardDOMMedia(){
        const article = document.createElement( 'article' );
        article.className = "photo-box";
        const modalPhoto = document.querySelector(".lightbox-modal");
        // article.addEventListener("click", function(e){
        //     modalPhoto.style.display = "block";
        // });
        
        // verifie si le media est une image ou une video
        let pht;
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(media.image)){
            pht = document.createElement( 'img' );
            pht.setAttribute("src", imagePhoto);
        }else{
            pht = document.createElement( 'video' );
            pht.setAttribute("src", videoPhotographer);
            pht.setAttribute("controls","controls")
        }
        
        pht.className = "photo";
        const boxeContent = document.createElement( 'div' );
        boxeContent.className = "description-photo";

        const titre = document.createElement( 'p' );
        titre.textContent = `${title}`;
        titre.className = "name-photo";

        const boxLike = document.createElement( 'div' );
        boxLike.className = "notif-photo";

        let numberLikePhoto = document.createElement( 'p' );
        numberLikePhoto.textContent = likes;
        numberLikePhoto.className = "likes-photo"

        const picto = document.createElement( 'i' );
        picto.className = "far fa-heart heart-picto";

        // incrément du like quand on clic dessus
        let infobarLikes = document.getElementsByClassName("contentTotalLike");
        picto.addEventListener("click", function(e){
            numberLikePhoto.textContent = likes+1;
             
            // j'ajoute également 1 au nombre dans l'infobar
            console.log(infobarLikes);
        });

        article.appendChild(pht);
        article.appendChild(boxeContent);
        boxeContent.appendChild(titre);
        boxeContent.appendChild(boxLike);
        boxLike.appendChild(numberLikePhoto);
        boxLike.appendChild(picto);


        return (article);
    }

    return { getUserCardDOMMedia }
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

