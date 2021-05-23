class Chain{
    constructor(body1,body2,point2){
        var options= { 
            bodyA:body1,
            bodyB:body2,
            pointB:point2,
            length:250,
            stiffness: 1.0
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
        
    }
    display(){
        var pointA= this.chain.bodyA.position
        var pointBx= this.chain.bodyB.position.x+this.chain.pointB.x
        var pointBy= this.chain.bodyB.position.y+this.chain.pointB.y
        stroke("white")
        strokeWeight(4);
    line(pointA.x,pointA.y,pointBx,pointBy)
    }
}