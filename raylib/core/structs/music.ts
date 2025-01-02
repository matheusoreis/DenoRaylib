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
}
