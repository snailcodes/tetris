import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Square } from '../square';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  squares!: Square[];

  private ctx!: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    this.squares = [];
    let temp = this.canvas.nativeElement.getContext('2d');
    if (temp) {
      this.ctx = temp;
    }
  }

  animate() {
    const newSquare = new Square(this.ctx);
    this.squares.push(newSquare);
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.squares.forEach((square: Square) => {
        square.moveDown();
      });
    }, 300);
  }

  // animate() {
  //   // this.ctx.fillStyle = 'red';
  //   const square = new Square(this.ctx);
  //   square.move(1, 40);
  // }
}
