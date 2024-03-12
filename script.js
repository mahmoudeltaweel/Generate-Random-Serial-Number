
let btnElment=document.querySelector(".generate");
let serialElment=document.querySelector(".serial");

btnElment.onclick=function(){
    let characters = "123456789qwertyuiopasdfghjklzxcvbnmASDFGHJKLZXCVBNMQWERTYUIOP";
    let charcount=10;
    let randomserial="";
    for( let i =0 ; i < charcount ; i++ ){
        randomserial += characters[Math.floor(Math.random()* characters.length)]
    }
    serialElment.innerHTML=randomserial;

}

