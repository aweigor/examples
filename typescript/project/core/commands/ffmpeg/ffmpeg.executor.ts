import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { CommandExecutor } from "../../executor/command.executor";
import { ICommandExec } from "../../executor/command.types";
import { IStreamLogger } from "../../handlers/stream-logger.interface";
import { FileService } from '../../files/file.service';
import { PromptService } from '../../prompt/prompt.service';
import { IFfmpegInput, ICommandExecFfmpeg } from "./ffmpeg.types";
import { FfmpegCommandBuilder } from "./ffmpeg.builder";
import { StreamHandler } from "../../handlers/stream.handler";

export class FfmpegExecutor extends CommandExecutor<IFfmpegInput> {
  private fileService: FileService = new FileService();
  private promptService: PromptService = new PromptService();
  constructor(logger: IStreamLogger) {
    super(logger);
  }
  protected async prompt(): Promise<IFfmpegInput> {
    const width = await this.promptService.input<number>('Width', 'number');
    const height = await this.promptService.input<number>('Height', 'number');
    const path = await this.promptService.input<string>('Path', 'input');
    const name = await this.promptService.input<string>('Name', 'input');
    return { width, height, path, name };
  }
  protected build( { width, height, path, name }: IFfmpegInput): ICommandExecFfmpeg {
    const output = this.fileService.getFilePath(path, name, 'mp4');
    const args = (new FfmpegCommandBuilder)
      .input(path)
      .setVideoSize(width, height)
      .output(output)

    return { command: 'ffmpeg', args, output }
  }
  protected spawn({ output, command, args }: ICommandExecFfmpeg): ChildProcessWithoutNullStreams {
    this.fileService.deleteFilesIfExists(output);
    return spawn(command, args);
  }
  protected processSream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void {
    const handler = new StreamHandler(logger);
    handler.processOutput(stream);
  }
}
