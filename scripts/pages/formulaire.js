// Prenom
const prenomUser = document.getElementById("first");
// Nom
const nomUser  = document.getElementById("last");
// email
const emailUser = document.getElementById("email");

// quand l'utilisateur appui sur submit
const submitForm = document.getElementById("contact_button-form")
submitForm.addEventListener("click", function(e){
    console.log(prenomUser);
    console.log(nomUser);
    console.log(emailUser);
});