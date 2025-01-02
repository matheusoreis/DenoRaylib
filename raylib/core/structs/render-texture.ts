import Texture from "./texture.ts";

export default class RenderTexture {
  id: number;
  texture: Texture;
  depth: Texture;

  constructor(id: number, texture: Texture, depth: Texture) {
    this.id = id;
    this.texture = texture;
    this.depth = depth;
  }

  toString(): string {
    return `RenderTexture id=${this.id} texture=${this.texture.toString()} depth=${this.depth.toString()}`;
  }

  getId(): number {
    return this.id;
  }

  setId(newId: number): void {
    this.id = newId;
  }

  getTexture(): Texture {
    return this.texture;
  }

  setTexture(newTexture: Texture): void {
    this.texture = newTexture;
  }

  getDepth(): Texture {
    return this.depth;
  }

  setDepth(newDepth: Texture): void {
    this.depth = newDepth;
  }
}

export class RenderTexture2D extends RenderTexture {}
