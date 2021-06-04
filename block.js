class Block  {
    constructor(x,y,width,height)  {
        var options={
         //isStatic:false,
         restitution: 0.4,
         friction:0.0
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);

    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<=3){
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(this.body.angle);
                rectMode(CENTER);
                fill(171,247,247)
                rect(0, 0, this.width, this.height);
                pop();
        }   
        else{
            World.remove(world,this.body);
            push();
            this.visibility-=5
            pop();
        }
      }
    };