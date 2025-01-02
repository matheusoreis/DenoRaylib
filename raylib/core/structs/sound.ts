import AudioStream from "./audio-stream.ts";

export default class Sound {
  stream: AudioStream;
  frameCount: number;

  constructor(stream: AudioStream, frameCount: number) {
    this.stream = stream;
    this.frameCount = frameCount;
  }
}
