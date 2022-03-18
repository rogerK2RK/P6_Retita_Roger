
// Prenom
var prenomUser = document.getElementById("first").value;

// quand l'utilisateur appui sur submit
const submitForm = document.getElementById("contact_button-form")
submitForm.addEventListener("click", function(){
    console.log(prenomUser);
});