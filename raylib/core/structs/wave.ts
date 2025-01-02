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

  toString(): string {
    return `Wave frameCount=${this.frameCount} sampleRate=${this.sampleRate} sampleSize=${this.sampleSize} channels=${this.channels} data=${this.data}`;
  }

  getFrameCount(): number {
    return this.frameCount;
  }

  setFrameCount(newFrameCount: number): void {
    this.frameCount = newFrameCount;
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

  getData(): ArrayBuffer {
    return this.data;
  }

  setData(newData: ArrayBuffer): void {
    this.data = newData;
  }
}
