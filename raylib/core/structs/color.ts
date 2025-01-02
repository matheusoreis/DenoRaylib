export default class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  buffer(): ArrayBuffer {
    return new Uint8Array([this.r, this.g, this.b, this.a]).buffer;
  }
}
