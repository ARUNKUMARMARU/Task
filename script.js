
let paragraph=document.getElementById("paragraph");

let time=10;
let greetings=setInterval(() => {
    if(time>0){
       paragraph.textContent= `${time}`;
       time--;
    }
    else{
        clearInterval(greetings);
        paragraph.textContent=`Happy Independence Day`;
    }
},1000);