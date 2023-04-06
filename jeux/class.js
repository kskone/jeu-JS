//class Serpent
class Snake{
    constructor(body,direction,){
        this.body = body;
        this.direction = direction;
        this.widthSquare = 20;
        this.heightSquare = 20;
        this.increX =1;
        this.increY = 0;
        this.countApple = 0;
    }/**
    * @param {any} newValue
    */
    countApple(newValue){
        this.countApple = newValue;
    }
    grow(isGrow){
        if(isGrow){
            let [x,y] = this.body[this.body.length-1]
            this.body.push([x+this.increX, y+ this.increY]);
        }
       else{
        this.body.shift()
       }
    }
    checkCollision(){
       let rest = this.body.slice(0,this.body.length-1)
       let last = this.body[this.body.length-1]
       return rest.find(b => b[0]==last[0]&& b[1]==last[1])
        
    }

    draw(context){
        for (let i = 0; i < this.body.length; i++) {
           const [x,y] = this.body[i]
           context.fillStyle ="green";
           context.fillRect(x * this.widthSquare,y * this.heightSquare, this.widthSquare,this.heightSquare)
        }
    }
    move(canvasWidth,canvasHeight){
        let [x,y] = this.body[this.body.length - 1];
        let vastX = x + this.increX;
        let vistY = y + this.increY;
        this.body.shift();
        if(vastX < 0){
            vastX = Math.floor(canvasWidth/this.widthSquare)-1
        }
        if(vastX > Math.floor(canvasWidth/this.widthSquare)-1){
            vastX = 0
        }
        if(vistY < 0){
            vistY = Math.floor(canvasHeight/this.heightSquare)-1
        }
        if(vistY > Math.floor(canvasHeight/this.heightSquare)){
           
            vistY = 0
        }

        this.body.push([vastX, vistY]);
        
    }

    changeDirection(keyCode){

        if (keyCode==39 && this.direction !=37){
                    this.increX =1
                    this.increY = 0
                    this.direction = keyCode;
                }
                 if (keyCode==37 && this.direction !=39){
                    this.increX = -1
                     this.increY = 0
                     this.direction = keyCode;
                }
                if(keyCode==38 && this.direction !=40){
                    this.increX =0
                    this.increY = -1
                    this.direction = keyCode;
                }
                if (keyCode==40 && this.direction !=38){
                    this.increX = 0
                    this.increY = 1
                    this.direction = keyCode;
                }
    }
    eatApple(applex,appley){
        let last = this.body[this.body.length-1]
        return (last[0]==applex && last[1]==appley)
    }
    eatPest(pest){
        let last = this.body[this.body.length-1]
        return pest.find(e => e.x == last [0] && e.y == last[1])
    }
    
}
//la pomme
// apple
class Apple{
    constructor (x,y,pest) {
        this.x = x;
        this.y = y;
        this.pest = pest;
        this.widthSquare = 20;
        this.heightSquare = 20;
        this.isSupr = false;
        
    }

   
    draw(context){
        let rayon = this.isSuper ? this.widthSquare : this.widthSquare/2
        context.beginPath()
        context.arc(this.x * this.widthSquare + rayon, this.y * this.heightSquare + rayon,rayon, 0,Math.PI*2,false)
        context.fillStyle = this.pest ? " purple" : "red" ;//fonction tenère
        context.fill()
        

 
    }
    changePosition(snakeBody, apples,canvasHeight,canvasWidth){
        let maxX = Math.floor(canvasWidth/this.widthSquare);
        let maxY = Math.floor(canvasHeight/this.heightSquare);
        
        let x = 0;
        let y = 0;

        do{
            x= Math.floor(Math.random()* maxX);
            y= Math.floor(Math.random()* maxY);
        }
        while( snakeBody.find(b =>{
            return b [0]==x && b [1]==y
        }) || apples.find((a)=>{
            return a.x == x && a.y == y
        }));
    
        this.x = x;
        this.y = y;
    }
    
}

