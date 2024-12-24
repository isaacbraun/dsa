export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    // search
    if (curr?.value === needle) {
      // Needle found, return true
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  // Needle not found, return false
  return false;
}
