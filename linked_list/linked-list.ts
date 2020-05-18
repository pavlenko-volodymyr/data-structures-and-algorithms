interface IItem {
    data: any;
    nextItem: IItem;
}

interface ILinkedList {
    getHead(): IItem;
    isEmpty(): boolean;
    insertAtHead(data: any): IItem;
    insertAtTail(data: any): IItem;
    delete(data: any): boolean;
    deleteAtHead(data: any): boolean;
    search(data: any): number;
    asString(): string;
  }

class Item implements IItem {
    data: any;
    nextItem: Item | null;

    constructor(data: any, nextItem: Item | null = null) {
        this.data = data;
        this.nextItem = nextItem;
    }
}

const item = new Item("a")