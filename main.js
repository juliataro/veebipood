const aboutButton = document.getElementById("aboutButton");
const article = document.getElementById("article");
const productButton = document.getElementById("productButton");
const successMessage = document.getElementById("successMessage");

if (aboutButton) {
  aboutButton.addEventListener("click", (event) => {
    article.classList.toggle("opened");
    if (article.classList.contains("opened")) {
      aboutButton.innerHTML = "Close article";
    } else {
      aboutButton.innerHTML = "More";
    }
  });
}

if (productButton) {
  productButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (successMessage.style.visibility !== "visible") {
      successMessage.style.visibility = "visible";
    }
  });
}
