import AudioStream from "./audio-stream.ts";

export default class Music {
  stream: AudioStream;
  frameCount: number;
  looping: boolean;
  ctxType: number;
  ctxData: ArrayBuffer;

  constructor(
    stream: AudioStream,
    frameCount: number,
    looping: boolean,
    ctxType: number,
    ctxData: ArrayBuffer,
  ) {
    this.stream = stream;
    this.frameCount = frameCount;
    this.looping = looping;
    this.ctxType = ctxType;
    this.ctxData = ctxData;
  }

  toString(): string {
    return `Music stream=${this.stream.toString()} frameCount=${this.frameCount} looping=${this.looping} ctxType=${this.ctxType} ctxData=${this.ctxData}`;
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

  isLooping(): boolean {
    return this.looping;
  }

  setLooping(newLooping: boolean): void {
    this.looping = newLooping;
  }

  getCtxType(): number {
    return this.ctxType;
  }

  setCtxType(newCtxType: number): void {
    this.ctxType = newCtxType;
  }

  getCtxData(): ArrayBuffer {
    return this.ctxData;
  }

  setCtxData(newCtxData: ArrayBuffer): void {
    this.ctxData = newCtxData;
  }
}
