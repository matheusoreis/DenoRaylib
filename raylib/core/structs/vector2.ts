export default class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  buffer(): ArrayBuffer {
    return new Float32Array([this.x, this.y]).buffer;
  }

  static fromBuffer(buffer: Uint8Array): Vector2 {
    const dataView = new DataView(buffer.buffer);

    const x = dataView.getFloat32(0, true);
    const y = dataView.getFloat32(4, true);

    return new Vector2(x, y);
  }
}
