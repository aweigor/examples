interface IProvider {
  sendMessage(message: string): void;
  connect<T>(config: T): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect<T>(config: T): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('disconnected')
  }
}

class WhatsupProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect<T>(config: T): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('disconnected')
  }
}


class NotificationSender {
  constructor(private provider: IProvider) {}
  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {};
}
