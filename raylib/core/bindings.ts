import { dlopen } from "https://deno.land/x/plug@1.0.3/mod.ts";
import {
  audioStream,
  buffer,
  camera2D,
  color,
  f32,
  f64,
  i32,
  image,
  music,
  pointer,
  rectangle,
  u32,
  u8,
  vector2,
  voidType,
} from "../binding-types.ts";
import { sound } from "../binding-types.ts";

export const raylib = await dlopen({
  name: "raylib",
  url: import.meta.resolve("../../external"),
}, {
  InitWindow: {
    parameters: [i32, i32, buffer],
    result: voidType,
  },
  CloseWindow: {
    parameters: [],
    result: voidType,
  },
  WindowShouldClose: {
    parameters: [],
    result: u8,
  },
  IsWindowReady: {
    parameters: [],
    result: u8,
  },
  IsWindowFullscreen: {
    parameters: [],
    result: u8,
  },
  IsWindowHidden: {
    parameters: [],
    result: u8,
  },
  IsWindowMinimized: {
    parameters: [],
    result: u8,
  },
  IsWindowMaximized: {
    parameters: [],
    result: u8,
  },
  IsWindowFocused: {
    parameters: [],
    result: u8,
  },
  IsWindowResized: {
    parameters: [],
    result: u8,
  },
  IsWindowState: {
    parameters: [u32],
    result: u8,
  },
  SetWindowState: {
    parameters: [u32],
    result: voidType,
  },
  ClearWindowState: {
    parameters: [u32],
    result: voidType,
  },
  ToggleFullscreen: {
    parameters: [],
    result: voidType,
  },
  ToggleBorderlessWindowed: {
    parameters: [],
    result: voidType,
  },
  MaximizeWindow: {
    parameters: [],
    result: voidType,
  },
  MinimizeWindow: {
    parameters: [],
    result: voidType,
  },
  RestoreWindow: {
    parameters: [],
    result: voidType,
  },
  SetWindowIcon: {
    parameters: [image],
    result: voidType,
  },
  SetWindowTitle: {
    parameters: [buffer],
    result: voidType,
  },
  SetWindowPosition: {
    parameters: [i32, i32],
    result: voidType,
  },
  SetWindowMonitor: {
    parameters: [i32],
    result: voidType,
  },
  SetWindowMinSize: {
    parameters: [i32, i32],
    result: voidType,
  },
  SetWindowMaxSize: {
    parameters: [i32, i32],
    result: voidType,
  },
  SetWindowSize: {
    parameters: [i32, i32],
    result: voidType,
  },
  SetWindowFocused: {
    parameters: [],
    result: voidType,
  },
  GetScreenWidth: {
    parameters: [],
    result: i32,
  },
  GetScreenHeight: {
    parameters: [],
    result: i32,
  },
  GetRenderWidth: {
    parameters: [],
    result: i32,
  },
  GetRenderHeight: {
    parameters: [],
    result: i32,
  },
  GetMonitorCount: {
    parameters: [],
    result: i32,
  },
  GetCurrentMonitor: {
    parameters: [],
    result: i32,
  },
  GetMonitorWidth: {
    parameters: [i32],
    result: i32,
  },
  GetMonitorHeight: {
    parameters: [i32],
    result: i32,
  },
  GetMonitorRefreshRate: {
    parameters: [i32],
    result: i32,
  },
  GetWindowPosition: {
    parameters: [],
    result: vector2,
  },

  ShowCursor: {
    parameters: [],
    result: voidType,
  },
  HideCursor: {
    parameters: [],
    result: voidType,
  },
  IsCursorHidden: {
    parameters: [],
    result: u8,
  },
  EnableCursor: {
    parameters: [],
    result: voidType,
  },
  DisableCursor: {
    parameters: [],
    result: voidType,
  },
  IsCursorOnScreen: {
    parameters: [],
    result: u8,
  },

  ClearBackground: {
    parameters: [color],
    result: voidType,
  },
  BeginDrawing: {
    parameters: [],
    result: voidType,
  },
  EndDrawing: {
    parameters: [],
    result: voidType,
  },
  BeginMode2D: {
    parameters: [camera2D],
    result: voidType,
  },
  EndMode2D: {
    parameters: [],
    result: voidType,
  },

  GetWorldToScreen2D: {
    parameters: [vector2, camera2D],
    result: vector2,
  },
  GetScreenToWorld2D: {
    parameters: [vector2, camera2D],
    result: vector2,
  },

  SetTargetFPS: {
    parameters: [i32],
    result: voidType,
  },
  GetFrameTime: {
    parameters: [],
    result: f32,
  },
  GetTime: {
    parameters: [],
    result: f64,
  },
  GetFPS: {
    parameters: [],
    result: i32,
  },

  SetConfigFlags: {
    parameters: ["u32"],
    result: "void",
  },
  OpenURL: {
    parameters: [buffer],
    result: voidType,
  },

  IsKeyPressed: {
    parameters: [i32],
    result: u8,
  },
  IsKeyDown: {
    parameters: [i32],
    result: u8,
  },
  IsKeyReleased: {
    parameters: [i32],
    result: u8,
  },
  IsKeyUp: {
    parameters: [i32],
    result: u8,
  },
  GetKeyPressed: {
    parameters: [],
    result: i32,
  },
  GetCharPressed: {
    parameters: [],
    result: i32,
  },

  IsMouseButtonPressed: {
    parameters: [i32],
    result: u8,
  },
  IsMouseButtonDown: {
    parameters: [i32],
    result: u8,
  },
  IsMouseButtonReleased: {
    parameters: [i32],
    result: u8,
  },
  IsMouseButtonUp: {
    parameters: [i32],
    result: u8,
  },
  GetMouseX: {
    parameters: [],
    result: i32,
  },
  GetMouseY: {
    parameters: [],
    result: i32,
  },
  GetMousePosition: {
    parameters: [],
    result: vector2,
  },
  GetMouseWheelMove: {
    parameters: [],
    result: f32,
  },
  SetMouseCursor: {
    parameters: [i32],
    result: voidType,
  },

  DrawPixel: {
    parameters: [i32, i32, color],
    result: voidType,
  },
  DrawLine: {
    parameters: [i32, i32, i32, i32, color],
    result: voidType,
  },
  DrawRectangle: {
    parameters: [i32, i32, i32, i32, color],
    result: voidType,
  },
  DrawRectangleRec: {
    parameters: [rectangle, color],
    result: voidType,
  },
  CheckCollisionPointRec: {
    parameters: [vector2, rectangle],
    result: u8,
  },

  InitAudioDevice: {
    parameters: [],
    result: voidType,
  },

  CloseAudioDevice: {
    parameters: [],
    result: voidType,
  },

  LoadWave: {
    parameters: [buffer],
    result: audioStream,
  },

  UnloadWave: {
    parameters: [audioStream],
    result: voidType,
  },

  LoadSound: {
    parameters: [buffer],
    result: sound,
  },

  UnloadSound: {
    parameters: [sound],
    result: voidType,
  },

  PlaySound: {
    parameters: [sound],
    result: voidType,
  },

  PauseSound: {
    parameters: [sound],
    result: voidType,
  },

  ResumeSound: {
    parameters: [sound],
    result: voidType,
  },

  StopSound: {
    parameters: [sound],
    result: voidType,
  },

  UpdateSound: {
    parameters: [sound, pointer, i32],
    result: voidType,
  },

  IsSoundPlaying: {
    parameters: [sound],
    result: u8,
  },

  SetSoundVolume: {
    parameters: [sound, f32],
    result: voidType,
  },

  SetSoundPitch: {
    parameters: [sound, f32],
    result: voidType,
  },

  LoadMusicStream: {
    parameters: [buffer],
    result: music,
  },

  UnloadMusicStream: {
    parameters: [music],
    result: voidType,
  },

  PlayMusicStream: {
    parameters: [music],
    result: voidType,
  },

  PauseMusicStream: {
    parameters: [music],
    result: voidType,
  },

  ResumeMusicStream: {
    parameters: [music],
    result: voidType,
  },

  StopMusicStream: {
    parameters: [music],
    result: voidType,
  },

  UpdateMusicStream: {
    parameters: [music],
    result: voidType,
  },

  IsMusicStreamPlaying: {
    parameters: [music],
    result: u8,
  },

  SetMusicVolume: {
    parameters: [music, f32],
    result: voidType,
  },

  SetMusicPitch: {
    parameters: [music, f32],
    result: voidType,
  },

  LoadAudioStream: {
    parameters: [u32, u32, u32],
    result: audioStream,
  },

  UnloadAudioStream: {
    parameters: [audioStream],
    result: voidType,
  },

  PlayAudioStream: {
    parameters: [audioStream],
    result: voidType,
  },

  PauseAudioStream: {
    parameters: [audioStream],
    result: voidType,
  },

  ResumeAudioStream: {
    parameters: [audioStream],
    result: voidType,
  },

  StopAudioStream: {
    parameters: [audioStream],
    result: voidType,
  },

  UpdateAudioStream: {
    parameters: [audioStream, pointer, i32],
    result: voidType,
  },

  IsAudioStreamPlaying: {
    parameters: [audioStream],
    result: u8,
  },

  SetAudioStreamVolume: {
    parameters: [audioStream, f32],
    result: voidType,
  },

  SetAudioStreamPitch: {
    parameters: [audioStream, f32],
    result: voidType,
  },
});
