const lampada = document.querySelector("#lampada")
const btligar = document.querySelector("#btligar")
const btdesligar = document.querySelector("#btdesligar")
const body = document.body;
let corAtual = "black"

btligar.addEventListener("click", ligar)
btdesligar.addEventListener("click", desligar)

function ligar(){
    lampada.src = "images/lampada-acesa.png"
    if (corAtual === "black") {
        body.style.background = "#ffdb58";
        corAtual = "#ffdb58";
      }
    }

function desligar(){
    lampada.src = "images/lampada-apagada.png"
    if (corAtual === "#ffdb58") {
        body.style.background = "black";
        corAtual = "black";
      }
}

