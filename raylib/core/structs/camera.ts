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

  toString(): string {
    return `Camera2D offset=${this.offset.toString()} target=${this.target.toString()} rotation=${this.rotation} zoom=${this.zoom}`;
  }

  getOffset(): Vector2 {
    return this.offset;
  }

  setOffset(newOffset: Vector2): void {
    this.offset = newOffset;
  }

  getTarget(): Vector2 {
    return this.target;
  }

  setTarget(newTarget: Vector2): void {
    this.target = newTarget;
  }

  getRotation(): number {
    return this.rotation;
  }

  setRotation(newRotation: number): void {
    this.rotation = newRotation;
  }

  getZoom(): number {
    return this.zoom;
  }

  setZoom(newZoom: number): void {
    this.zoom = newZoom;
  }
}
