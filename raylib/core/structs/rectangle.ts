export default class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  buffer(): ArrayBuffer {
    return new Float32Array([
      this.x,
      this.y,
      this.width,
      this.height,
    ]).buffer;
  }

  toString(): string {
    return `Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}`;
  }

  getX(): number {
    return this.x;
  }

  setX(newX: number): void {
    this.x = newX;
  }

  getY(): number {
    return this.y;
  }

  setY(newY: number): void {
    this.y = newY;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(newWidth: number): void {
    this.width = newWidth;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(newHeight: number): void {
    this.height = newHeight;
  }
}
