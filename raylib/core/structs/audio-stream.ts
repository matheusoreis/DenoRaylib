export default class AudioStream {
  buffer: ArrayBuffer;
  processor: ArrayBuffer;
  sampleRate: number;
  sampleSize: number;
  channels: number;

  constructor(
    buffer: ArrayBuffer,
    processor: ArrayBuffer,
    sampleRate: number,
    sampleSize: number,
    channels: number,
  ) {
    this.buffer = buffer;
    this.processor = processor;
    this.sampleRate = sampleRate;
    this.sampleSize = sampleSize;
    this.channels = channels;
  }
}
