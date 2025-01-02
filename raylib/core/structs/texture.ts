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

  toString(): string {
    return `Texture id=${this.id} width=${this.width} height=${this.height} mipmaps=${this.mipmaps} format=${this.format}`;
  }

  getId(): number {
    return this.id;
  }

  setId(newId: number): void {
    this.id = newId;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(newWidth: number): void {
    this.width = newWidth;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(newHeight: number): void {
    this.height = newHeight;
  }

  getMipmaps(): number {
    return this.mipmaps;
  }

  setMipmaps(newMipmaps: number): void {
    this.mipmaps = newMipmaps;
  }

  getFormat(): number {
    return this.format;
  }

  setFormat(newFormat: number): void {
    this.format = newFormat;
  }
}

export class Texture2D extends Texture {}
