class DocumentItem {
  public text: string;
  public state: DocumentItemState;

  getState() {
    return this.state;
  }
  setState(state: DocumentItemState) {
    this.state = state;
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public publish(): void {
    this.item.setState(new PublishDocumentItemState());
  }

  public delete(): void {

  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public publish(): void {
    
  }

  public delete(): void {
    this.item.setState(new DraftDocumentItemState());

  }
}

const item = new DocumentItem();
item.text = "post";
item.publishDoc();
item.deleteDoc;();

export {};