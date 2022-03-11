function initLightbox(mediaArray) {        
        
    // je boucle sur tous mes médias
    mediaArray.forEach(media => {

        const imagePhoto = `assets/photographers/Media/${media.image}`;
        const videoPhotographer = `assets/photographers/Media/${media.video}`
        
        const article = document.createElement( 'article' );
        article.className = "slide";
        
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
        
        pht.className = "media";

        const titre = document.createElement( 'p' );
        titre.textContent = `${media.title}`;
        titre.className = "name-photo-lightbox";

        article.appendChild(pht);
        article.appendChild(titre);

        document.querySelector(".modal-content").appendChild(article);

    });
    
}

var slideIndex;

// affiche le media choisi
function showSlides(n) {
    
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("media");
    var captionText = document.getElementsByClassName("name-photo");

    // si le slide que je veux afficher dépasse le tableau des médias, je reviens au premier du tableau
    if (n > slides.length) {slideIndex = 1}

    // si le slide que je veux afficher est avant le premier, alors je reviens au dernier du tableau
    if (n < 1) {slideIndex = slides.length}

    // je cache toutes les slides et les médias
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("active", "");
    }

    // j'affiche le média sur lequel j'ai cliqué
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// affiche la lightbox
function openModal() {
    document.getElementById("lightbox").style.display = "block";
}

// ferme la lightbox
function closeModalLightBox() {
    document.getElementById("lightbox").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}