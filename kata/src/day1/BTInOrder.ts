function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base Case - no child
  if (!curr) {
    return path;
  }

  // pre
  // path.push(curr.value);

  // recurse
  // walk left
  walk(curr.left, path);

  // When at end, push in value
  path.push(curr.value);

  // walk right
  walk(curr.right, path);
  
  // post
  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
