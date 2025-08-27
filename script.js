// alert("Dangerous")

document.getElementById("decrease").addEventListener("click", function(){
    let counter = document.getElementById("count").innerText;
    counter--;
    document.getElementById("count").innerText = counter;
});
document.getElementById("reset").addEventListener("click", function(){
    let counter = document.getElementById("count").innerText;
    counter = 0;
    document.getElementById("count").innerText = counter;
});
document.getElementById("increase").addEventListener("click", function(){
    let counter = document.getElementById("count").innerText;
    counter++;
    document.getElementById("count").innerText = counter;
});