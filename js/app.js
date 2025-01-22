const searchButton = document.getElementById("searchButton");
const largeurEcran = window.innerWidth;

function screenR(){
  if (largeurEcran <= 763) {
    searchButton.innerText = "";
    searchButton.classList.add("bi-search");
    return true;
    
  } else {
    searchButton.innerText = "Rechercher";
    searchButton.classList.remove("bi-search");
    return false;
  }
}

window.addEventListener("resize", function () {
  const largeurEcran = window.innerWidth;

  if (largeurEcran <= 763) {
    searchButton.innerText = "";
    searchButton.classList.add("bi-search");
    return true;

  } else {
    searchButton.innerText = "Rechercher";
    searchButton.classList.remove("bi-search");
    return false;
  }
});

screenR();