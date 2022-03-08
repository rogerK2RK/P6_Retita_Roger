function onePhotoFactory(media) {
    const {image, title, video } = media;
    const imagePhoto = `assets/photographers/Media/${image}`;
    const videoPhotographer = `assets/photographers/Media/${video}`

    function getUserPhoto(){
        const article = document.createElement( 'article' );
        article.className = "mySlides";
        
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
        
        pht.className = "demo";

        const titre = document.createElement( 'p' );
        titre.textContent = `${title}`;
        titre.className = "name-photo-lightbox";

        article.appendChild(pht);
        article.appendChild(titre);


        return (article);
    }
    return { image, title, getUserPhoto }
}
// Open LightBox
function openModal() {
    document.getElementById("lightbox").style.display = "block";
}

function closeModalLightBox() {
    document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementsByClassName("name-photo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
showSlides(slideIndex);