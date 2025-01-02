import { raylib } from "../bindings.ts";

export default class Music {
  music: any;

  constructor(fileName: string) {
    const encode = new TextEncoder();
    const fileNameBuffer = encode.encode(fileName + "\0");

    this.music = raylib.symbols.LoadMusicStream(fileNameBuffer);
  }

  unload(): void {
    raylib.symbols.UnloadMusicStream(this.music);
  }

  play(): void {
    raylib.symbols.PlayMusicStream(this.music);
  }

  pause(): void {
    raylib.symbols.PauseMusicStream(this.music);
  }

  resume(): void {
    raylib.symbols.ResumeMusicStream(this.music);
  }

  stop(): void {
    raylib.symbols.StopMusicStream(this.music);
  }

  update(): void {
    raylib.symbols.UpdateMusicStream(this.music);
  }

  isPlaying(): boolean {
    return !!raylib.symbols.IsMusicStreamPlaying(this.music);
  }

  setVolume(volume: number): void {
    raylib.symbols.SetMusicVolume(this.music, volume);
  }

  setPitch(pitch: number): void {
    raylib.symbols.SetMusicPitch(this.music, pitch);
  }
}
