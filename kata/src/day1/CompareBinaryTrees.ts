export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // Base cases
  // 1. Structural: Nodes are both null - true
  if (a === null && b === null) {
    return true;
  }
  // 2. Structural: Either node is null - false 
  if (a === null || b === null) {
    return false;
  }
  // 3. Value: noes do not equal - false
  if (a.value !== b.value) {
    return false;
  }

  // recurse
  return compare(a.left, b.left) && compare(a.right, b.right);
}
