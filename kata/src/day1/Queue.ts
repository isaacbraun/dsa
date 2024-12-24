type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    // Create node and increase length
    const node = { value: item } as Node<T>;
    this.length++;

    // No node exists, need to create head and tail
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    // free memory - not needed in JS
    head.next = undefined;

    // Remove tail if no more nodes
    if (this.length === 0) {
      this.tail = undefined;
    }

    // Return old head value
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
