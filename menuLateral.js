var botaoMenu = document.querySelector(".cabecalho__menu");
var menuLateral = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("menuLateralAtivo")
})










/* ----------------OUTRA MANEIRA DE FAZER----------------------(Porém , desta maneira não tem como colocar um transition) 
 */

/* var pintura = document.getElementById("iconeMenu")

pintura.addEventListener("click", function() {
    console.log("fui clicado")
    var conteudoMenuLateral = document.getElementById("conteudoMenuLateral")

    if (conteudoMenuLateral.style.display == 'block') {
        conteudoMenuLateral.style.display = 'none';
    } else {
        conteudoMenuLateral.style.display = 'block';
    }


}) */