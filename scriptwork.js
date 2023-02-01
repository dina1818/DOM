var btnplus = document.getElementsByClassName("btn btn-success");
console.log("btnplus", btnplus);

for (let j = 0; j < btnplus.length; j++) {
  btnplus[j].addEventListener("click", function () {
    btnplus[j].previousElementSibling.innerText++;
    //update apres   click de plus
  });
}

/*function red() {
  document.getElementById("#card7").style.color = "red";
}*/

/*let coeur = document.querySelector("#card7");
coeur.addEventListener("click", () => (coeur.style.backgroundcolor = "red"));*/

/*const btn = document.getElementById("#card7");

btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = "salmon";
  btn.style.color = "white";
});*/
/*function buttonColor() {
  document.getElementById("card7").style.backgroundColor = "red";
}*/
var deletbtn = document.querySelectorAll(".btn-delete");
console.log("delet", deletbtn);

for (let k = 0; k < deletbtn.length; k++) {
  deletbtn[k].addEventListener("click", () => {
    deletbtn[k].parentElement.parentElement.remove();

    //update de la totalite de mon pannier

    totalPrice();
  });
}
