// Récupérer les articles depuis l'API
function getArticles() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    // message en cas d'erreur
    .catch((error) => {
      let productsContainer = document.querySelector(".card_container");
      productsContainer.innerHTML =
        "Nous n'avons pas réussi à afficher nos nounours. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
      productsContainer.style.textAlign = "center";
      productsContainer.style.padding = "30vh 0";
    })

    // Données de chaque produit (prix, nom...)
    // construction des lignes de cartes (tableau)
    .then(function (resultatAPI) {
      const tableauNounours = resultatAPI;
      console.log(tableauNounours);

      // construction d'une carte
      for (let nounours in tableauNounours) {
        //création de la <div> pour une carte
        let productCard = document.createElement("div");
        document.querySelector(".card_container").appendChild(productCard);
        productCard.classList.add("product_card");

        // lien cliquable de la carte
        let lienNounours = document.createElement("a");
        productCard.appendChild(lienNounours);
        lienNounours.href = `produits.html?id=${resultatAPI[nounours]._id}`;
        lienNounours.classList.add("produitNounours__liens");

        //<div> image
        let divImageNounours = document.createElement("div");
        lienNounours.appendChild(divImageNounours);
        divImageNounours.classList.add("produitNounours__img");

        // paramètre image
        let imageNounours = document.createElement("img");
        divImageNounours.appendChild(imageNounours);
        imageNounours.src = resultatAPI[nounours].imageUrl;

        // <div> information (nom, prix, etc...)
        let divInfosNounours = document.createElement("div");
        lienNounours.appendChild(divInfosNounours);
        divInfosNounours.classList.add("produuitNounours__infos");

        // <div> identité du nounours
        let nomNounours = document.createElement("div");
        divInfosNounours.appendChild(nomNounours);
        nomNounours.classList.add("produitNounours__infos__nom");
        nomNounours.innerHTML = resultatAPI[nounours].name;

        // <div> prix nounours
        let prixNounours = document.createElement("div");
        divInfosNounours.appendChild(prixNounours);
        prixNounours.classList.add("produitNounours__infos__price");

        // Formatage du prix pour l'afficher en euros
        resultatAPI[nounours].price = resultatAPI[nounours].price / 100;
        prixNounours.innerHTML = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(resultatAPI[nounours].price);
      }
    });
}

// fonction appelé quand le fichier est chargé
function main() {
  getArticles();
}

main(); // Appel de fonction quand le fichier est chargé
