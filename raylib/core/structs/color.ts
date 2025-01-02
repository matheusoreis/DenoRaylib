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

  toString(): string {
    return `Color r=${this.r} g=${this.g} b=${this.b} a=${this.a}`;
  }

  getR(): number {
    return this.r;
  }

  setR(newR: number): void {
    this.r = newR;
  }

  getG(): number {
    return this.g;
  }

  setG(newG: number): void {
    this.g = newG;
  }

  getB(): number {
    return this.b;
  }

  setB(newB: number): void {
    this.b = newB;
  }

  getA(): number {
    return this.a;
  }

  setA(newA: number): void {
    this.a = newA;
  }
}
