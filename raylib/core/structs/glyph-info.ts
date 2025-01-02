import Image from "./image.ts";

export default class GlyphInfo {
  value: number;
  offsetX: number;
  offsetY: number;
  advanceX: number;
  image: Image;

  constructor(
    value: number,
    offsetX: number,
    offsetY: number,
    advanceX: number,
    image: Image,
  ) {
    this.value = value;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.advanceX = advanceX;
    this.image = image;
  }
}
