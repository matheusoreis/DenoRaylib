export default class Vector2 {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public x: number;
  public y: number;

  static fromBuffer(buffer: ArrayBuffer): Vector2 {
    const view = new DataView(buffer);

    const x = view.getFloat32(0, true);
    const y = view.getFloat32(4, true);

    return new Vector2(x, y);
  }

  get buffer(): ArrayBuffer {
    return new Float32Array([this.x, this.y]).buffer;
  }
}
