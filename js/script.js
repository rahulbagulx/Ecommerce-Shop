const heading = document.querySelector(".hero-heading");
const cartCount = document.querySelector(".cart-count");
let count = 0;
heading.addEventListener("click", () => {
  count++;
  cartCount.innerHTML = `${count}`;
});
