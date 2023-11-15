const btnAnalo = document.querySelector(".btn.analogico");
const btnDigi = document.querySelector(".btn.digital");
const relogio = document.querySelector("#relogio");

const PonteiroSegundos = document.querySelector(".ponteiro.segundos");
const PonteiroMinutos = document.querySelector(".ponteiro.minutos");
const PonteiroHora = document.querySelector(".ponteiro.horas");

const QuadradoSegundos = document.querySelector(".time.segundos");
const QuadradoMinutos = document.querySelector(".time.minutos");
const QuadradoHora = document.querySelector(".time.horas");


btnAnalo.addEventListener("click",() =>{
    relogio.classList.add("analogico")
    relogio.classList.remove("digital")
})
btnDigi.addEventListener("click",() =>{
    relogio.classList.remove("analogico")
    relogio.classList.add("digital")
})

function GiraPonteiro(element, porcentagem) {
    element.style.transform = `rotate(${porcentagem * 360}deg)`
}

function AcertarPonteiros() {
    const data = new Date();
    // data.setHours(
    //     1,
    //     10,
    //     10
    // )

    const s = data.getSeconds() / 60
    const m = (s + data.getMinutes()) / 60
    const h = (m + data.getHours()) / 12

    GiraPonteiro(PonteiroSegundos, s);
    GiraPonteiro(PonteiroMinutos, m);
    GiraPonteiro(PonteiroHora, h);
}

function GetTime(){
    const data = new Date();
    QuadradoSegundos.innerHTML = data.getSeconds().toString().padStart(2, "0")
    QuadradoMinutos.innerHTML = data.getMinutes().toString().padStart(2, "0")
    QuadradoHora.innerHTML = data.getHours().toString().padStart(2, "0")
}

AcertarPonteiros();
setInterval(AcertarPonteiros, 100);-
setInterval(GetTime, 1000);