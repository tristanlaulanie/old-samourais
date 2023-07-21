const btnSuccess = document.querySelector(".btn-success");
console.log(btnSuccess);

// DIV cookies
const cookies = document.querySelector(".cookies");
console.log(cookies);

// Je soumets la DIV cookies au clic sur le bouton.
btnSuccess.addEventListener("click", function () {
  console.log("bouton cliqué !");

  cookies.style.opacity = "0";
  localStorage.setItem("banniere", "oui");
});


  // Je stocke la valeur du local storage
  let valeurCle = localStorage.getItem("banniere");

  console.log(valeurCle, "valeur de la clé banniere");

  // je declare la fonction check
  function check() {

    if (valeurCle) {
      // console.log("la valeur de la clé banniere est 'oui' ");
      cookies.remove();
    } else {
      console.log(
        "Le stockage n'existe pas, ma clé et la valeur de la clé banniere sont absentes"
      );
    }
  };

  check();
