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
}
