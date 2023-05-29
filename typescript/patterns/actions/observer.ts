interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NotificationsService implements Observer {
  update(subject: Subject): void {
    console.log('event emitted 1');
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log('event emitted 2');
  }
}

const subject = new NewLead();
subject.state = new Lead('Антон', '00000');
const s1 = new NotificationsService();
const s2 = new LeadService();