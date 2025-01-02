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
}

export class RenderTexture2D extends RenderTexture {}
