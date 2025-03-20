var crsr = document.querySelector("#cursor")
var crsr_br = document.querySelector("#cursor-br")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr_br.style.left = dets.x - 100 + "px";
    crsr_br.style.top = dets.y - 100 + "px";
})
