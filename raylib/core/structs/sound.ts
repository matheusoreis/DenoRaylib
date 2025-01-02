import AudioStream from "./audio-stream.ts";

export default class Sound {
  stream: AudioStream;
  frameCount: number;

  constructor(stream: AudioStream, frameCount: number) {
    this.stream = stream;
    this.frameCount = frameCount;
  }

  toString(): string {
    return `Sound stream=${this.stream.toString()} frameCount=${this.frameCount}`;
  }

  getStream(): AudioStream {
    return this.stream;
  }

  setStream(newStream: AudioStream): void {
    this.stream = newStream;
  }

  getFrameCount(): number {
    return this.frameCount;
  }

  setFrameCount(newFrameCount: number): void {
    this.frameCount = newFrameCount;
  }
}
