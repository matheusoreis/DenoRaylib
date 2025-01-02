import { raylib } from "../bindings.ts";

export default class Music {
  buffer: ArrayBuffer;

  constructor(fileName: string) {
    const encode = new TextEncoder();
    const fileNameBuffer = encode.encode(fileName + "\0");

    this.buffer = raylib.symbols.LoadMusicStream(fileNameBuffer);
  }

  unload(): void {
    raylib.symbols.UnloadMusicStream(this.buffer);
  }

  play(): void {
    raylib.symbols.PlayMusicStream(this.buffer);
  }

  pause(): void {
    raylib.symbols.PauseMusicStream(this.buffer);
  }

  resume(): void {
    raylib.symbols.ResumeMusicStream(this.buffer);
  }

  stop(): void {
    raylib.symbols.StopMusicStream(this.buffer);
  }

  update(): void {
    raylib.symbols.UpdateMusicStream(this.buffer);
  }

  isPlaying(): boolean {
    return !!raylib.symbols.IsMusicStreamPlaying(this.buffer);
  }

  setVolume(volume: number): void {
    raylib.symbols.SetMusicVolume(this.buffer, volume);
  }

  setPitch(pitch: number): void {
    raylib.symbols.SetMusicPitch(this.buffer, pitch);
  }
}
