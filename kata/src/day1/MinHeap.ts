export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    // no elements
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    // Need to reduce length before heapifyDown
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    // Move last element to head
    this.data[0] = this.data[this.length]
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx);

    // Base: gte to length
    // Always filled in from left to right
    // If left index greater than or equal to length, we are no longer on heap node (farthest left pos)
    if (idx >= this.length || leftIdx >= this.length) {
      return;
    }

    // Get both values, find minimum, then compare and swap
    const leftVal = this.data[leftIdx];
    const rightVal = this.data[rightIdx];
    const currVal = this.data[idx];

    if (leftVal > rightVal && currVal > rightVal) {
      this.data[idx] = rightVal;
      this.data[rightIdx] = currVal;
      this.heapifyDown(rightIdx);
    }
    else if (rightVal > leftVal && currVal > leftVal) {
      this.data[idx] = leftVal;
      this.data[leftIdx] = currVal;
      this.heapifyDown(leftIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    // Get parent and value
    const p = this.parent(idx);
    const parentVal = this.data[p];
    const v = this.data[idx];

    if (parentVal > v) {
      // Swap values
      this.data[idx] = parentVal;
      this.data[p] = v;
      // Bubble up
      this.heapifyUp(p);
    } 
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return (idx * 2) + 1;
  }

  private rightChild(idx: number): number {
    return (idx * 2) + 2;
  }
}
