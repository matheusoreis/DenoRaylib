import { raylib } from "./bindings.ts";
import {
  CursorShape,
  cursorShape,
  Flag,
  flag,
  KeyboardKey,
  keyboardKey,
} from "./enums.ts";
import Camera2D from "./structs/camera.ts";
import Color from "./structs/color.ts";
import Image from "./structs/image.ts";
import Rectangle from "./structs/rectangle.ts";
import Vector2 from "./structs/vector2.ts";

export default class Core {
  static initWindow(
    width: number,
    height: number,
    title: string,
    flags?: Partial<Record<Flag, boolean>>,
  ): void {
    const encoder = new TextEncoder();
    const titleBuffer = encoder.encode(title + "\0");

    if (flags) {
      const combinedFlags = Object.keys(flags).reduce((acc, key) => {
        return acc | flag[key as Flag];
      }, 0);

      raylib.symbols.SetConfigFlags(combinedFlags);
    }

    raylib.symbols.InitWindow(width, height, titleBuffer);
  }

  static closeWindow(): void {
    raylib.symbols.CloseWindow();
  }

  static windowShouldClose(): boolean {
    return !!raylib.symbols.WindowShouldClose();
  }

  static isWindowReady(): boolean {
    return !!raylib.symbols.IsWindowReady();
  }

  static isWindowFullscreen(): boolean {
    return !!raylib.symbols.IsWindowFullscreen();
  }

  static isWindowHidden(): boolean {
    return !!raylib.symbols.IsWindowHidden();
  }

  static isWindowMinimized(): boolean {
    return !!raylib.symbols.IsWindowMinimized();
  }

  static isWindowMaximized(): boolean {
    return !!raylib.symbols.IsWindowMaximized();
  }

  static isWindowFocused(): boolean {
    return !!raylib.symbols.IsWindowFocused();
  }

  static isWindowResized(): boolean {
    return !!raylib.symbols.IsWindowResized();
  }

  static isWindowState(flags: Partial<Record<Flag, boolean>>): boolean {
    const combinedFlags = Object.keys(flags).reduce((acc, key) => {
      return acc | flag[key as Flag];
    }, 0);

    return !!raylib.symbols.IsWindowState(combinedFlags);
  }

  static setWindowState(flags: Partial<Record<Flag, boolean>>): void {
    const combinedFlags = Object.keys(flags).reduce((acc, key) => {
      return acc | flag[key as Flag];
    }, 0);

    raylib.symbols.SetWindowState(combinedFlags);
  }

  static clearWindowState(flags: Partial<Record<Flag, boolean>>): void {
    const combinedFlags = Object.keys(flags).reduce((acc, key) => {
      return acc | flag[key as Flag];
    }, 0);

    raylib.symbols.ClearWindowState(combinedFlags);
  }

  static toggleFullscreen(): void {
    raylib.symbols.ToggleFullscreen();
  }

  static toggleBorderlessWindowed(): void {
    raylib.symbols.ToggleBorderlessWindowed();
  }

  static maximizeWindow(): void {
    raylib.symbols.MaximizeWindow();
  }

  static minimizeWindow(): void {
    raylib.symbols.MinimizeWindow();
  }

  static restoreWindow(): void {
    raylib.symbols.RestoreWindow();
  }

  static setWindowIcon(image: Image): void {
    raylib.symbols.SetWindowIcon(image.data);
  }

  static setWindowTitle(title: string): void {
    const encoder = new TextEncoder();
    const titleBuffer = encoder.encode(title + "\0");

    raylib.symbols.SetWindowTitle(titleBuffer);
  }

  static setWindowPosition(x: number, y: number): void {
    raylib.symbols.SetWindowPosition(x, y);
  }

  static setWindowMonitor(monitor: number): void {
    raylib.symbols.SetWindowMonitor(monitor);
  }

  static setWindowMinSize(width: number, height: number): void {
    raylib.symbols.SetWindowMinSize(width, height);
  }

  static setWindowMaxSize(width: number, height: number): void {
    raylib.symbols.SetWindowMaxSize(width, height);
  }

  static setWindowSize(width: number, height: number): void {
    raylib.symbols.SetWindowSize(width, height);
  }

  static setWindowFocused(): void {
    raylib.symbols.SetWindowFocused();
  }

  static getScreenWidth(): number {
    return raylib.symbols.GetScreenWidth();
  }

  static getScreenHeight(): number {
    return raylib.symbols.GetScreenHeight();
  }

  static getRenderWidth(): number {
    return raylib.symbols.GetRenderWidth();
  }

  static getRenderHeight(): number {
    return raylib.symbols.GetRenderHeight();
  }

  static getMonitorCount(): number {
    return raylib.symbols.GetMonitorCount();
  }

  static getCurrentMonitor(): number {
    return raylib.symbols.GetCurrentMonitor();
  }

  static getMonitorWidth(monitor: number): number {
    return raylib.symbols.GetMonitorWidth(monitor);
  }

  static getMonitorHeight(monitor: number): number {
    return raylib.symbols.GetMonitorHeight(monitor);
  }

  static getMonitorRefreshRate(monitor: number): number {
    return raylib.symbols.GetMonitorRefreshRate(monitor);
  }

  static getWindowPosition(): Vector2 {
    const position = raylib.symbols.GetWindowPosition();

    return Vector2.fromBuffer(position);
  }

  static showCursor(): void {
    raylib.symbols.ShowCursor();
  }

  static hideCursor(): void {
    raylib.symbols.HideCursor();
  }

  static isCursorHidden(): boolean {
    return !!raylib.symbols.IsCursorHidden();
  }

  static enableCursor(): void {
    raylib.symbols.EnableCursor();
  }

  static disableCursor(): void {
    raylib.symbols.DisableCursor();
  }

  static isCursorOnScreen(): boolean {
    return !!raylib.symbols.IsCursorOnScreen();
  }

  static clearBackground(color: Color): void {
    raylib.symbols.ClearBackground(color.buffer());
  }

  static beginDrawing(): void {
    raylib.symbols.BeginDrawing();
  }

  static endDrawing(): void {
    raylib.symbols.EndDrawing();
  }

  static beginMode2D(camera: Camera2D): void {
    raylib.symbols.BeginMode2D(camera.buffer());
  }

  static endMode2D(): void {
    raylib.symbols.EndMode2D();
  }

  static getWorldToScreen2D(position: Vector2, camera: Camera2D): Vector2 {
    const result = raylib.symbols.GetWorldToScreen2D(
      position.buffer(),
      camera.buffer(),
    );

    return Vector2.fromBuffer(result);
  }

  static getScreenToWorld2D(position: Vector2, camera: Camera2D): Vector2 {
    const result = raylib.symbols.GetScreenToWorld2D(
      position.buffer(),
      camera.buffer(),
    );

    return Vector2.fromBuffer(result);
  }

  static setTargetFPS(fps: number): void {
    raylib.symbols.SetTargetFPS(fps);
  }

  static getFrameTime(): number {
    return raylib.symbols.GetFrameTime();
  }

  static getTime(): number {
    return raylib.symbols.GetTime();
  }

  static getFPS(): number {
    return raylib.symbols.GetFPS();
  }

  static openURL(url: string): void {
    const encoder = new TextEncoder();
    const urlBuffer = encoder.encode(url + "\0");

    raylib.symbols.OpenURL(urlBuffer);
  }

  static isKeyPressed(key: number): boolean {
    return !!raylib.symbols.IsKeyPressed(key);
  }

  static isKeyDown(key: KeyboardKey): boolean {
    return !!raylib.symbols.IsKeyDown(keyboardKey[key]);
  }

  static isKeyReleased(key: number): boolean {
    return !!raylib.symbols.IsKeyReleased(key);
  }

  static isKeyUp(key: number): boolean {
    return !!raylib.symbols.IsKeyUp(key);
  }

  static getKeyPressed(): number {
    return raylib.symbols.GetKeyPressed();
  }

  static getCharPressed(): number {
    return raylib.symbols.GetCharPressed();
  }

  static isMouseButtonPressed(button: number): boolean {
    return !!raylib.symbols.IsMouseButtonPressed(button);
  }

  static isMouseButtonDown(button: number): boolean {
    return !!raylib.symbols.IsMouseButtonDown(button);
  }

  static isMouseButtonReleased(button: number): boolean {
    return !!raylib.symbols.IsMouseButtonReleased(button);
  }

  static isMouseButtonUp(button: number): boolean {
    return !!raylib.symbols.IsMouseButtonUp(button);
  }

  static getMouseX(): number {
    return raylib.symbols.GetMouseX();
  }

  static getMouseY(): number {
    return raylib.symbols.GetMouseY();
  }

  static getMousePosition(): Vector2 {
    const position = raylib.symbols.GetMousePosition();

    return Vector2.fromBuffer(position);
  }

  static getMouseWheelMove(): number {
    return raylib.symbols.GetMouseWheelMove();
  }

  static setMouseCursor(cursor: CursorShape): void {
    raylib.symbols.SetMouseCursor(cursorShape[cursor]);
  }

  static drawPixel(x: number, y: number, color: Color): void {
    raylib.symbols.DrawPixel(x, y, color.buffer());
  }

  static drawLine(
    startPosX: number,
    startPosY: number,
    endPosX: number,
    endPosY: number,
    color: Color,
  ): void {
    raylib.symbols.DrawLine(
      startPosX,
      startPosY,
      endPosX,
      endPosY,
      color.buffer(),
    );
  }

  static drawRectangle(
    posX: number,
    posY: number,
    width: number,
    height: number,
    color: Color,
  ): void {
    raylib.symbols.DrawRectangle(posX, posY, width, height, color.buffer());
  }

  static drawRectangleRec(
    rectangle: Rectangle,
    color: Color,
  ): void {
    raylib.symbols.DrawRectangleRec(rectangle.buffer(), color.buffer());
  }

  static checkCollisionPointRec(point: Vector2, rec: Rectangle): boolean {
    return !!raylib.symbols.CheckCollisionPointRec(
      point.buffer(),
      rec.buffer(),
    );
  }
}
