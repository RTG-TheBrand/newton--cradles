class log{
    constructor(x,y,width,height){
        var options={
            "isStatic":true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("silver");
        stroke("silver");
        rect(this.body.position.x,this.body.position.y,600,30);
    }
}