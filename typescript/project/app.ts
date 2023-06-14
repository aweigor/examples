import { FfmpegExecutor } from './core/commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './core/output/console-logger/console-logger';

export class App {
  run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App().run();