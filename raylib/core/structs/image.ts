export default class Image {
  data: ArrayBuffer;
  width: number;
  height: number;
  mipmaps: number;
  format: number;

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
}
