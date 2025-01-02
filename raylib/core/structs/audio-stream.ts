import { raylib } from "../bindings.ts";

export default class AudioStream {
  buffer: ArrayBuffer;

  constructor(sampleRate: number, sampleSize: number, channels: number) {
    this.buffer = raylib.symbols.LoadAudioStream(
      sampleRate,
      sampleSize,
      channels,
    );
  }

  isReady(): boolean {
    return !!raylib.symbols.IsAudioStreamReady(this.buffer);
  }

  unload(): void {
    raylib.symbols.UnloadAudioStream(this.buffer);
  }

  play(): void {
    raylib.symbols.PlayAudioStream(this.buffer);
  }

  pause(): void {
    raylib.symbols.PauseAudioStream(this.buffer);
  }

  resume(): void {
    raylib.symbols.ResumeAudioStream(this.buffer);
  }

  stop(): void {
    raylib.symbols.StopAudioStream(this.buffer);
  }

  update(data: ArrayBuffer, frameCount: number): void {
    raylib.symbols.UpdateAudioStream(
      this.buffer,
      Deno.UnsafePointer.of(data),
      frameCount,
    );
  }

  isPlaying(): boolean {
    return !!raylib.symbols.IsAudioStreamPlaying(this.buffer);
  }

  setVolume(volume: number): void {
    raylib.symbols.SetAudioStreamVolume(this.buffer, volume);
  }

  setPitch(pitch: number): void {
    raylib.symbols.SetAudioStreamPitch(this.buffer, pitch);
  }
}
