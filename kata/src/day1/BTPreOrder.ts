function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base Case - no child
  if (!curr) {
    return path;
  }

  // pre
  path.push(curr.value);

  // recurse
  // visit left
  walk(curr.left, path);
  walk(curr.right, path);
  
  // post
  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
