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
}
