var seg = 60;
var timer = 24;
var valor = 0;
const res_final = document.querySelector("#res_fin")
var minutes = document.querySelector("#mins")
var result_min = document.querySelector("#res_min");
var limite = 0;
const teste = () => x = 10;
var result_seg = document.getElementById("res")
function segundos() {
tempo = setInterval(() => {
        seg -=1
        
        if (seg == 0) {
            seg = 60;
            timer-=1;
        }
        if(timer == 0 || seg == 0){
            console.log("funfou")
            clearInterval(tempo)
            seg =00;
        }
    res_final.innerHTML = `00: ${timer} : ${seg}`
    }, 1000);
}
function parar(){
    clearInterval(tempo)
}
function zerar(){
    timer = 24;
    seg = 60;
    res_final.innerHTML = "00:25:00"
}
