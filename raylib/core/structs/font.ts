import Rectangle from "./rectangle.ts";
import GlyphInfo from "./glyph-info.ts";
import { Texture2D } from "./texture.ts";

export default class Font {
  baseSize: number;
  glyphCount: number;
  glyphPadding: number;
  texture: Texture2D;
  recs: Rectangle[];
  glyphs: GlyphInfo[];

  constructor(
    baseSize: number,
    glyphCount: number,
    glyphPadding: number,
    texture: Texture2D,
    recs: Rectangle[],
    glyphs: GlyphInfo[],
  ) {
    this.baseSize = baseSize;
    this.glyphCount = glyphCount;
    this.glyphPadding = glyphPadding;
    this.texture = texture;
    this.recs = recs;
    this.glyphs = glyphs;
  }

  toString(): string {
    return `Font baseSize=${this.baseSize} glyphCount=${this.glyphCount} glyphPadding=${this.glyphPadding} texture=${this.texture.toString()} recs=${this.recs.toString()} glyphs=${this.glyphs.toString()}`;
  }

  getBaseSize(): number {
    return this.baseSize;
  }

  setBaseSize(newBaseSize: number): void {
    this.baseSize = newBaseSize;
  }

  getGlyphCount(): number {
    return this.glyphCount;
  }

  setGlyphCount(newGlyphCount: number): void {
    this.glyphCount = newGlyphCount;
  }

  getGlyphPadding(): number {
    return this.glyphPadding;
  }

  setGlyphPadding(newGlyphPadding: number): void {
    this.glyphPadding = newGlyphPadding;
  }

  getTexture(): Texture2D {
    return this.texture;
  }

  setTexture(newTexture: Texture2D): void {
    this.texture = newTexture;
  }

  getRecs(): Rectangle[] {
    return this.recs;
  }

  setRecs(newRecs: Rectangle[]): void {
    this.recs = newRecs;
  }

  getGlyphs(): GlyphInfo[] {
    return this.glyphs;
  }

  setGlyphs(newGlyphs: GlyphInfo[]): void {
    this.glyphs = newGlyphs;
  }
}
