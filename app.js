let element = document.getElementsByTagName("p");

function alea() {
    return Math.ceil(Math.random()*100);
}

for(let i = 0; i < element.length; i++){
    element.item(i).innerHTML = alea().toString();
}



