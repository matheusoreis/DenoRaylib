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

  toString(): string {
    return `AudioStream buffer=${this.buffer} processor=${this.processor} sampleRate=${this.sampleRate} sampleSize=${this.sampleSize} channels=${this.channels}`;
  }

  getBuffer(): ArrayBuffer {
    return this.buffer;
  }

  setBuffer(newBuffer: ArrayBuffer): void {
    this.buffer = newBuffer;
  }

  getProcessor(): ArrayBuffer {
    return this.processor;
  }

  setProcessor(newProcessor: ArrayBuffer): void {
    this.processor = newProcessor;
  }

  getSampleRate(): number {
    return this.sampleRate;
  }

  setSampleRate(newSampleRate: number): void {
    this.sampleRate = newSampleRate;
  }

  getSampleSize(): number {
    return this.sampleSize;
  }

  setSampleSize(newSampleSize: number): void {
    this.sampleSize = newSampleSize;
  }

  getChannels(): number {
    return this.channels;
  }

  setChannels(newChannels: number): void {
    this.channels = newChannels;
  }
}
