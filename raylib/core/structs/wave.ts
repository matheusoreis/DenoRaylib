import { raylib } from "../bindings.ts";

export default class Wave {
  buffer: ArrayBuffer;

  constructor(
    fileName: string,
  ) {
    const encode = new TextEncoder();
    const fileNameBuffer = encode.encode(fileName + "\0");

    this.buffer = raylib.symbols.LoadWave(fileNameBuffer);
  }

  unload(): void {
    raylib.symbols.UnloadWave(this.buffer);
  }

  get channels(): number {
    const view = new DataView(this.buffer);
    return view.getInt32(12, true);
  }
}
