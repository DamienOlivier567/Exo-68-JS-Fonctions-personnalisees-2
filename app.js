let par = random();
document.getElementsByTagName('p').innerHTML = random;


function random (){
    let randomNumber = Math.random();
    randomNumber *= 100;
    return Math.ceil(randomNumber);
}
console.log(random());



