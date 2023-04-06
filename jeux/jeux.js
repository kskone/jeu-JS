
let canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let point = document.querySelector(".score");
let score = 0;
const snake = new Snake( [
    [2,3],
    [3,3],
    [4,3],
    [5,3],
    [6,3]
],39);
window.addEventListener('keyup', (e) => snake.changeDirection(e.keyCode))
const apple = new Apple(7,5);
const pest = [new Apple(1,2,true), new Apple(8,3,true), new Apple(10,15,true)]
const inter = setInterval(()=>{
    if(snake.checkCollision() || snake.body.length == 1){
        clearInterval(inter);
        alert(" Game over !!! ")
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    let isEatPosition = snake.eatPest(pest)
    if(isEatPosition){
        snake.countApple = 1
        isEatPosition.changePosition(snake.body,[...pest,apple], canvas.height, canvas.width)
        snake.grow(false)
        score = 10;
    }

    let isEatApple = snake.eatApple(apple.x, apple.y) 
    if( isEatApple){
        if(!apple.isSuper){
            snake.countApple += 1
        } if (snake.countApple == 2){
            snake.countApple = 0
            apple.isSupr = true
        }else{
            apple.isSupr =false
        }
        snake.countApple += 1
        snake.grow(true)
        apple.changePosition(snake.body,pest, canvas.height, canvas.width)
        score += 10;
       
        
    }
  
    apple.draw(context)
    pest.forEach((elemnt)=>{
        elemnt.draw(context)
    })
    snake.draw(context);
    snake.move(canvas.width,canvas.height);
    point.textContent = "score : " + score

 }, 500)




//     let widthSquare = 20;
//     let heightSquare = 20;
//     let canvas = document.getElementById('canvas')
//     var x = 1;
//     var y =1;
//     let increX = 1;
//     let increY = 0;
//     var snake = [
//         [2,3],
//         [3,3],
//         [4,3],
//         [5,3],
//         [6,3]
//     ]
//     var context = canvas.getContext('2d');
//     var direction = 39;
    

//     context.fillStyle = "yellow";
//     context.fillRect(x*widthSquare,y*heightSquare,widthSquare,heightSquare)

// function drow(time){
//     context.clearRect(0,0,canvas.width ,canvas.height)
//     for (let i = 0; i < time.length; i++) {
//        const [x,y] = time[i]
//        context.fillStyle ="orange";
//        context.fillRect(x*widthSquare,y*heightSquare,widthSquare,heightSquare)
//     }
// }


// drow(snake);


// setInterval(()=>{
//     Movesnacke()
//     drow(snake);
// },500);

// function changeDirection(keyCode){
    
//     if (keyCode==39 && direction !=37){
//         increX =1
//         increY = 0
//         direction = keyCode;
//     }
//      if (keyCode==37 && direction !=39){
//          increX = -1
//          increY = 0
//          direction = keyCode;
//     }
//     if(keyCode==38 && direction !=40){
//         increX =0
//         increY = -1
//         direction = keyCode;
//     }
//     if (keyCode==40 && direction !=38){
//         increX = 0
//         increY = 1
//         direction = keyCode;
//     }

    
// }
//  document.addEventListener('keyup', (e) => changeDirection(e.keyCode))


//  function Movesnacke(){
//     let [x,y] = snake[snake.length - 1];
//     snake.shift();
//     snake.push([x+increX, y+increY])
   
//  }