let color = ['red','blue','yellow','gray','green']

 var range = document.querySelector("#range");
var div = document.querySelector('.main');
var doum = 100;
range.addEventListener('change',(e)=>{
    
})
console.log(div);
 var demo = setInterval(function (){
    doum = Math.floor(Math.random() * 200 +100)
 console.log(doum)
 index = Math.floor(Math.random () * color.length)
 console.log(index)
 div.style.width = doum + "px"
 div.style.height = doum + "px"
 div.style.background = color[index]
 },500)
 
 
 
