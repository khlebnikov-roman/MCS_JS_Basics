
const image = document.querySelector("img");

console.log(image.hasAttribute("alt"));
image.removeAttribute("alt");
console.log(image.hasAttribute("alt"));

console.log(image.getAttribute("src"));