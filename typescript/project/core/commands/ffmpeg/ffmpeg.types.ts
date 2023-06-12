import { ICommandExec } from "../../executor/command.types";

export interface IFfmpegInput {
  width: number;
  height: number;
  path: string;
  name: string
}

export interface ICommandExecFfmpeg extends ICommandExec {
  output: string
}