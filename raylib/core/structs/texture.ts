export default class Texture {
  id: number;
  width: number;
  height: number;
  mipmaps: number;
  format: number;

  constructor(
    id: number,
    width: number,
    height: number,
    mipmaps: number,
    format: number,
  ) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.mipmaps = mipmaps;
    this.format = format;
  }
}

export class Texture2D extends Texture {}
