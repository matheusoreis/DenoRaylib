export default class Wave {
  frameCount: number;
  sampleRate: number;
  sampleSize: number;
  channels: number;
  data: ArrayBuffer;

  constructor(
    frameCount: number,
    sampleRate: number,
    sampleSize: number,
    channels: number,
    data: ArrayBuffer,
  ) {
    this.frameCount = frameCount;
    this.sampleRate = sampleRate;
    this.sampleSize = sampleSize;
    this.channels = channels;
    this.data = data;
  }
}
