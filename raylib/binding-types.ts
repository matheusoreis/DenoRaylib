export const i32 = "i32";
export type i32 = typeof i32;

export const u32 = "u32";
export type u32 = typeof u32;

export const f32 = "f32";
export type f32 = typeof f32;

export const f64 = "f64";
export type f64 = typeof f64;

export const u8 = "u8";
export type u8 = typeof u8;

export const buffer = "buffer";
export type buffer = typeof buffer;

export const pointer = "pointer";
export type pointer = typeof pointer;

export const voidType = "void";
export type voidType = typeof voidType;

export const vector2 = {
  struct: [f32, f32],
} as const;
export type vector2 = typeof vector2;

export const color = {
  struct: [u8, u8, u8, u8],
} as const;
export type color = typeof color;

export const rectangle = {
  struct: [f32, f32, f32, f32],
} as const;
export type rectangle = typeof rectangle;

export const image = {
  struct: [pointer, i32, i32, i32, i32],
} as const;
export type image = typeof image;

export const texture = {
  struct: [u32, u32, u32, u32, u32],
} as const;
export type texture = typeof texture;

export const renderTexture = {
  struct: [u32, texture, texture],
} as const;
export type renderTexture = typeof renderTexture;

export const font = {
  struct: [u32, u32, u32, texture, pointer, pointer],
} as const;
export type font = typeof font;

export const camera2D = {
  struct: [vector2, vector2, f32, f32],
} as const;
export type camera2D = typeof camera2D;

export const audioStream = {
  struct: [pointer, pointer, u32, u32, u32],
} as const;
export type audioStream = typeof audioStream;

export const wave = {
  struct: [u32, u32, u32, u32, pointer],
} as const;
export type wave = typeof wave;

export const sound = {
  struct: [audioStream, u32],
} as const;
export type sound = typeof sound;

export const music = {
  struct: [audioStream, u32, u8, i32, pointer],
} as const;
export type music = typeof music;
