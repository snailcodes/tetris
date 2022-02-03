import { Shape } from './shape';

export class Rect extends Shape {
  private color = 'green';
  private strokeColor = 'black';

  private width = 80;
  private height = 20;

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
      this.width
    );
    this.ctx.fillRect(
      this.height * this.x,
      this.height * this.y,
      this.height,
      this.width
    );
  }
}
