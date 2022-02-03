import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Rect } from '../Shapes/rect';
import { Shape } from '../Shapes/shape';
import { Square } from '../Shapes/square';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  movingShape: Shape[] = [];
  //change Square to all options
  existingShapes: Shape[] = [];

  private ctx!: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    let temp = this.canvas.nativeElement.getContext('2d');
    if (temp) {
      this.ctx = temp;
    }
  }

  animate() {
    const newSquare = new Square(this.ctx);
    const newRect = new Rect(this.ctx);
    this.movingShape.push(newSquare, newRect);
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.movingShape.forEach((shape: Shape) => {
        shape.moveDown();
      });
    }, 300);
  }
}
