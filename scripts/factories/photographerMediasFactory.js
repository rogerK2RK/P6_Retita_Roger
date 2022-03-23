import {currentSlide, openModal } from "../utils/lightbox.js";

export function photographerMediasFactory(media){
    let {image, title, likes, video } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;
    const videoPhotographer = `assets/photographers/Media/${video}`
    let compteur = 1;
    function getUserCardDOMMedia(){
        const article = document.createElement( 'article' );
        article.className = "photo-box";
        const link = document.createElement( 'a' );
        link.setAttribute("href","#");
        
        // verifie si le media est une image ou une video
        let pht;
        for(let i = 1 ; i <= media ; i++ ){
            console.log(i);
        }
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(media.image)){
            pht = document.createElement( 'img' );
            pht.setAttribute("src", imagePhoto);
            // pht.setAttribute("onclick",`openModal();currentSlide(${compteur})`);
            pht.addEventListener("click", function() {
                openModal();
                currentSlide(compteur);
            });
        }else{
            pht = document.createElement( 'video' );
            pht.setAttribute("src", videoPhotographer);
            pht.setAttribute("controls","controls");
            // pht.setAttribute("onclick",`openModal();currentSlide(${compteur})`);
            pht.addEventListener("click", function() {
                openModal();
                currentSlide(1)
            })
        }
        pht.setAttribute("aria-label", title);
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
        numberLikePhoto.setAttribute("aria-label", "likes");

        const picto = document.createElement( 'i' );
        picto.className = "far fa-heart heart-picto";

        // incrément du like quand on clic dessus
        let infobarLikes = document.getElementsByClassName("contentTotalLike");
        picto.addEventListener("click", function(){
            likes += 1;
            numberLikePhoto.textContent = likes;

             
            // j'ajoute également 1 au nombre dans l'infobar
            let totalLike = Number(infobarLikes[0].innerHTML)+1;
            infobarLikes[0].textContent = totalLike;
        });
        console.log(compteur);
        article.appendChild(link);
        link.appendChild(pht);
        article.appendChild(boxeContent);
        boxeContent.appendChild(titre);
        boxeContent.appendChild(boxLike);
        boxLike.appendChild(numberLikePhoto);
        boxLike.appendChild(picto);


        return (article);
    }

    return { getUserCardDOMMedia,image, title, likes, video }
}

