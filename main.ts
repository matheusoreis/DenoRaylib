import { RAYWHITE, RED } from "./raylib/core/colors.ts";
import Core from "./raylib/core/functions.ts";
import Music from "./raylib/core/structs/music.ts";
import Rectangle from "./raylib/core/structs/rectangle.ts";
import Vector2 from "./raylib/core/structs/vector2.ts";

function main() {
  Core.initWindow(800, 450, "Hello, World!", {
    resizable: true,
  });

  Core.setTargetFPS(60);
  Core.setWindowMinSize(800, 600);

  // Inicializar o dispositivo de áudio
  Core.initAudioDevice();

  let isFullscreen = false;
  let currentMonitor = 0;

  const music = new Music("star.wav");
  music.play();

  while (!Core.windowShouldClose()) {
    Core.beginDrawing();
    Core.clearBackground(RAYWHITE);

    if (Core.isKeyDown("enter")) {
      currentMonitor = Core.getCurrentMonitor();

      const monitorWidth = Core.getMonitorWidth(currentMonitor);
      const monitorHeight = Core.getMonitorHeight(currentMonitor);

      Core.setWindowSize(monitorWidth, monitorHeight);
      Core.setWindowPosition(0, 0);
      Core.toggleFullscreen();
    }

    if (Core.isKeyPressed("p")) {
      if (music.isPlaying()) {
        music.pause();
      } else {
        music.resume();
      }
    }

    music.update();

    const mouseX = Core.getMouseX();
    const mouseY = Core.getMouseY();
    const rect = new Rectangle(10, 10, 100, 100);
    const mouseVector = new Vector2(mouseX, mouseY);

    if (
      Core.isMouseButtonPressed(0) &&
      Core.checkCollisionPointRec(mouseVector, rect)
    ) {
      console.log("Retângulo vermelho clicado!");
    }

    Core.drawRectangleRec(rect, RED);

    Core.endDrawing();
  }

  music.unload();

  // Fechar o dispositivo de áudio
  Core.closeAudioDevice();
}

main();
