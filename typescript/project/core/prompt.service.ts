import inquirer from 'inquirer';
import { PromptType } from './prompt.types';


export class PromptService {
  public async input(message: string, type: PromptType) {
    const data = await inquirer.prompt([
      {
        type: '',
        name: 'result',
        message: 'Сообщение'
      }
    ]);
  }
}