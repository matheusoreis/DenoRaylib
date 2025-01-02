import Vector2 from "./vector2.ts";

export default class Camera2D {
  offset: Vector2;
  target: Vector2;
  rotation: number;
  zoom: number;

  constructor(
    offset: Vector2,
    target: Vector2,
    rotation: number,
    zoom: number,
  ) {
    this.offset = offset;
    this.target = target;
    this.rotation = rotation;
    this.zoom = zoom;
  }

  buffer(): ArrayBuffer {
    return new Float32Array([
      this.offset.x,
      this.offset.y,
      this.target.x,
      this.target.y,
      this.rotation,
      this.zoom,
    ]).buffer;
  }
}
