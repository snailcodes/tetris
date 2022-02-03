import { Shape } from '../Shapes/shape';

export class Square extends Shape {
  private color = 'gray';
  private strokeColor = 'black';
  private height = 40;

  constructor(private ctx: CanvasRenderingContext2D) {
    super();
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.strokeRect(
      this.height * this.x,
      this.height * this.y,
      this.height,
      this.height
    );
    this.ctx.fillRect(
      this.height * this.x,
      this.height * this.y,
      this.height,
      this.height
    );
  }
}
