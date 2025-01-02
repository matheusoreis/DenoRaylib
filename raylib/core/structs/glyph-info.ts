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

  toString(): string {
    return `GlyphInfo value=${this.value} offsetX=${this.offsetX} offsetY=${this.offsetY} advanceX=${this.advanceX} image=${this.image.toString()}`;
  }

  getValue(): number {
    return this.value;
  }

  setValue(newValue: number): void {
    this.value = newValue;
  }

  getOffsetX(): number {
    return this.offsetX;
  }

  setOffsetX(newOffsetX: number): void {
    this.offsetX = newOffsetX;
  }

  getOffsetY(): number {
    return this.offsetY;
  }

  setOffsetY(newOffsetY: number): void {
    this.offsetY = newOffsetY;
  }

  getAdvanceX(): number {
    return this.advanceX;
  }

  setAdvanceX(newAdvanceX: number): void {
    this.advanceX = newAdvanceX;
  }

  getImage(): Image {
    return this.image;
  }

  setImage(newImage: Image): void {
    this.image = newImage;
  }
}
