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
        
        let pht;
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(media.image)){
            console.log("jpg ");
            pht = document.createElement( 'img' );
            pht.setAttribute("src", imagePhoto);
        }else{
            console.log("video");
            pht = document.createElement( 'video' );
            pht.setAttribute("src", videoPhotographer);
            // pht.play();
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
        picto.addEventListener("click", function(e){
            numberLikePhoto.textContent = likes+1;
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

