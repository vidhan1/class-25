class Bird extends Baseclass{
    constructor(x, y) {
      super(x, y, 50, 50);  //transfering the constructor of base to the sub
      this.image = loadImage("sprites/bird.png");
    };

    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

      super.display();
    };
  };
  