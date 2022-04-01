import {currentSlide, openModal } from "../utils/lightbox.js";

export function photographerMediasFactory(media, compteur){
    let {image, title, likes, video, date } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;
    const videoPhotographer = `assets/photographers/Media/${video}`;

    function getUserCardDOMMedia(){
        const article = document.createElement( 'article' );
        article.className = "photo-box";
        const link = document.createElement( 'a' );
        link.setAttribute("href","#");
        link.addEventListener("click", function() {
            openModal();
            currentSlide(compteur)
        })
        // verifie si le media est une image ou une video
        let pht;
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(media.image)){
            pht = document.createElement( 'img' );
            pht.setAttribute("src", imagePhoto);
        }else{
            pht = document.createElement( 'video' );
            pht.setAttribute("src", videoPhotographer);
            pht.setAttribute("controls","controls");
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
        numberLikePhoto.className = "likes-photo";
        numberLikePhoto.setAttribute("aria-label", "likes");
        const buttonLike = document.createElement( 'button' );
        buttonLike.className = "buttonLikes";

        const picto = document.createElement( 'i' );
        picto.className = "far fa-heart heart-picto";

        // incrément du like quand on clic dessus
        let infobarLikes = document.getElementsByClassName("contentTotalLike");
        buttonLike.addEventListener("click", function(){
            likes += 1;
            numberLikePhoto.textContent = likes;

            // j'ajoute également 1 au nombre dans l'infobar
            let totalLike = Number(infobarLikes[0].innerHTML)+1;
            infobarLikes[0].textContent = totalLike;
        });
        article.appendChild(link);
        link.appendChild(pht);
        article.appendChild(boxeContent);
        boxeContent.appendChild(titre);
        boxeContent.appendChild(boxLike);
        boxLike.appendChild(numberLikePhoto);
        buttonLike.appendChild(picto);
        boxLike.appendChild(buttonLike);


        return (article);
    }

    return { getUserCardDOMMedia,image, title, likes, video, date }
}

