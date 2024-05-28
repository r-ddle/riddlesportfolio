const loadMoreBtn = document.querySelector(".loadMore");
const cards = document.querySelectorAll(".card");
let numCardsRevealed = 4;

// Make the first 4 cards active by default
for (let i = 0; i < 4; i++) {
  cards[i].classList.add("active");
}

loadMoreBtn.addEventListener("click", () => {
  for (
    let i = numCardsRevealed;
    i < numCardsRevealed + 4 && i < cards.length;
    i++
  ) {
    cards[i].classList.add("active");
  }
  numCardsRevealed += 4;
  if (numCardsRevealed >= cards.length) {
    loadMoreBtn.style.display = "none";
  }
});

function lazyLoad() {
  var lazyImages = document.querySelectorAll("[data-src]");
  lazyImages.forEach(function (image) {
    var imageSource = image.dataset.src;
    image.src = imageSource;
  });
}

window.addEventListener("scroll", lazyLoad);
