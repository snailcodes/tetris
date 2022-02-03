export class Shape {
  y = 0;
  x = 0;

  moveDown() {
    this.y++;
    this.draw();
  }

  draw() {}
}
