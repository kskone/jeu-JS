 var element1 = document.getElementById('casino1');
 var element2 = document.getElementById('casino2');
 var element3 = document.getElementById('casino3');
 var  onclick  = document.getElementById("#btn")

 var timecount = 100;
 var inter = 1000;
 var number =[1,2,3,4,5,6];

function interval(time){
    clearTimeout(inter);
    inter = setInterval(()=>{
        element1.textContent = number[Math.floor(Math.random()*number.length)];
        element2.textContent = number[Math.floor(Math.random()*number.length)];
        element3.textContent = number[Math.floor(Math.random()*number.length)];
    },time);
}


 function timeoaut(){
    setTimeout(()=>{
        timecount+=70;
        if(timecount >=1100){
            clearInterval(inter);
        }else{
            interval(timecount)
            timeoaut()
        }
    },1000)
 }
 interval(timecount)
 timeoaut()

