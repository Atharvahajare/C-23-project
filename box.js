class  Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
   World.add(world,this.body)
    }
    display(){
        var p = this.body.position
        var angle = this.body.angle
        push();
        fill("red")
        rectMode(CENTER)
        translate(p.x,p.y)
        rect(0,0,this.width,this.height)
        pop()
    }
}