export class App {
  run() {
    console.log('run');
    return this;
  }
}

const app = new App().run();