function displayOrderIdAndPrice() {
  const totalConfirmation = document.querySelector(".total_price span");
  const orderId = document.querySelector(".order_id span");

  totalConfirmation.innerText = localStorage.getItem("total");
  orderId.innerText = localStorage.getItem("orderId");

  // On vide le localStorage pour recommencer plus tard le processus d'achat
  localStorage.clear();
}

function main() {
  displayOrderIdAndPrice();
}

main();
