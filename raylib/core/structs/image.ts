export default class Image {
  private data: ArrayBuffer;
  private width: number;
  private height: number;
  private mipmaps: number;
  private format: number;

  constructor(
    data: ArrayBuffer,
    width: number,
    height: number,
    mipmaps: number,
    format: number,
  ) {
    this.data = data;
    this.width = width;
    this.height = height;
    this.mipmaps = mipmaps;
    this.format = format;
  }

  toString(): string {
    return `Image data=${this.data} width=${this.width} height=${this.height} mipmaps=${this.mipmaps} format=${this.format}`;
  }

  getData(): ArrayBuffer {
    return this.data;
  }

  setData(newData: ArrayBuffer): void {
    this.data = newData;
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
