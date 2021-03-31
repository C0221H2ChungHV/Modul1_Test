class Circle {
  constructor(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  render() {
    let canvas = document.getElementById("mycanvas");
    canvas.width=500;
    canvas.height=500;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle=this.color;
    ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
    ctx.fill();
  }
}
let circleTest = new Circle(10,10,100,"#000000");
circleTest.render();
