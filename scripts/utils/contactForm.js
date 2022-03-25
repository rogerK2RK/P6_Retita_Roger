const prenom = document.getElementById("first");
// Verifie le prenom passé dans le formulaire
function checkPrenom(){
    let prenomMessage = document.getElementById("prenom-validation");
    if(/^([a-z]{2,})$/.test(prenom.value)){
      prenomMessage.innerText = "";
    }else{
      prenomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; 
      return false;
    }
  }
// quand l'utilisateur écrit son prénom
    prenom.addEventListener("input", function(){
        checkPrenom();
    });

const nom = document.getElementById("last");

// Verifie le nom passé dans le formulaire
function checkNom(){
    let nomMessage = document.getElementById("nom-validation");
    if(/^([a-z]{2,})$/.test(nom.value)){
      nomMessage.innerText = "";
    }else{
      nomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      return false;
    }
}

// quand l'utilisateur écrit son Nom
nom.addEventListener("input", function(){
    checkNom();
});

const mail = document.getElementById("email");

// Verifie l'email passé dans le formulaire
function checkEmail(){
    let emailMessage = document.getElementById("email-validation");
    if(/^(([0-9a-z]{2,}))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.value)){
      emailMessage.innerText = "";
    }else{
      emailMessage.innerText = "Veuiller saisir un mail "+'"'+" exemple : nom.prenom@gmail.com "+'" !';
      return false;
    }
}

// quand l'utilisateur écris son email
mail.addEventListener("input", function(){
    checkEmail();
  });

const message = document.getElementById("formMessage");

// Verifie le message passé dans le formulaire
function checkMessage(){
    let messageResultat = document.getElementById("message-validation");
    if(/^([a-z]{2,})$/.test(message.value)){
        messageResultat.innerText = "";
    }else{
        messageResultat.innerText = "Veuillez entrer votre message !";
      return false;
    }
}

// quand l'utilisateur écrit son message
message.addEventListener("input", function(){
    checkMessage();
});

const submitForm = document.getElementById("contact_button-form");
submitForm.addEventListener("click", function(e){
    e.preventDefault();
    //declaration d'un booleen pour le test final
    let isValid = true;

    // check du prenom
    let testPrenom = checkPrenom();
    if(testPrenom == false){
    isValid = false;
    }

    // check du nom
    let testNom = checkNom();
    if(testNom == false){
        isValid = false;
    }

    // check du email
    let testEmail = checkEmail();
    if(testEmail == false){
        isValid = false;
    }

    // check du message
    let testMessage = checkMessage();
    if(testMessage == false){
        isValid = false;
    }

    // si mon formulaire est valide ...
    if(isValid){
    console.log("Prénom : " + prenom.value);
    console.log("Nom : " + nom.value);
    console.log("Email : " + mail.value);
    console.log("Message : " + message.value);
    closeModal();
    }
    // pour éviter que le formulaire ne soit submit
    return false;
});

const closeModalContact = document.getElementById("closeModaleContacte");
closeModalContact.addEventListener("click", function(){
    closeModal();
});
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}