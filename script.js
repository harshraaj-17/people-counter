let count=0
let countel=document.getElementById("counter")
let pentries=document.getElementById("pe")
console.log(pentries)
function increment(){
    count = count +1
    countel.innerText=count
}
function reset(){
    count=0;
    countel.innerText=count
}
function save(){
    let countstr=count+" - "
    pentries.textContent+=countstr
    console.log(count)
    reset()
}
