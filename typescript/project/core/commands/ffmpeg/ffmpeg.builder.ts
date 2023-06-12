export class FfmpegCommandBuilder {
  private inputPath?: string;
  private outputPath?: string;
  private options: Map<string, string> = new Map();

  constructor() {
    this.options.set('-c:v', 'libx264');
  }

  input(inputPath: string) {
    this.inputPath = inputPath;
    return this;
  }

  setVideoSize(width: number, height: number) {
    this.options.set('-s', `${width}x${height}`);
    return this;
  }

  output(outputPath: string) {
    if (!this.inputPath) {
      throw new Error('no import parameters defined');
    }
    const args: string[] = ['-i', this.inputPath];
    this.options.forEach((value, key) => {
      args.push(key);
      args.push(value);
    })
    args.push(outputPath);
    return args;
  }
}