function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base Case - no child
  if (!curr) {
    return path;
  }

  // pre
  // path.push(curr.value);

  // recurse
  // walk left and right
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  // When at end, push in value
  path.push(curr.value);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
