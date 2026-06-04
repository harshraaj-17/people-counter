let count=0
let countel=document.getElementById("counter")
function increment(){
    count = count +1
    countel.innerText=count
}
function reset(){
    count=0;
    countel.innerText=count
}