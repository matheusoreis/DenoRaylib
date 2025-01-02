import { raylib } from "../bindings.ts";

export default class Sound {
  buffer: ArrayBuffer;

  constructor(fileName: string) {
    const encode = new TextEncoder();
    const fileNameBuffer = encode.encode(fileName + "\0");

    this.buffer = raylib.symbols.LoadSound(fileNameBuffer);
  }

  unload(): void {
    raylib.symbols.UnloadSound(this.buffer);
  }

  play(): void {
    raylib.symbols.PlaySound(this.buffer);
  }

  pause(): void {
    raylib.symbols.PauseSound(this.buffer);
  }

  resume(): void {
    raylib.symbols.ResumeSound(this.buffer);
  }

  stop(): void {
    raylib.symbols.StopSound(this.buffer);
  }

  update(data: Float32Array): void {
    raylib.symbols.UpdateSound(
      this.buffer,
      Deno.UnsafePointer.of(data),
      data.length,
    );
  }

  isPlaying(): boolean {
    return !!raylib.symbols.IsSoundPlaying(this.buffer);
  }

  setVolume(volume: number): void {
    raylib.symbols.SetSoundVolume(this.buffer, volume);
  }

  setPitch(pitch: number): void {
    raylib.symbols.SetSoundPitch(this.buffer, pitch);
  }
}
