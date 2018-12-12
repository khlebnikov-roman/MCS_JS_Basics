console.log("You are add ");

const byTag = document.getElementsByTagName("div");
const byClass = document.getElementsByClassName("myClass");
const byId = document.getElementById("myId");

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll(".coolClass.mine");
const firstBySelector = document.querySelector("div");
console.log(allBySelector, firstBySelector);



const quest = prompt("Что хотите написать?");
byId.innerHTML = quest;
