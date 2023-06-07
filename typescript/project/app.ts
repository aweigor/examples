import { PromptService } from './core/prompt.service';

export class App {
  run() {
    const res = new PromptService().input<number>('Число', 'number');
    console.log(res);
    return this;
  }
}

const app = new App().run();