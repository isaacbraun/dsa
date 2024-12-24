function search(curr: BinaryNode<number> | null, needle: number): boolean {
  // Base Cases
  // 1. Null
  if (!curr) {
    return false;
  }
  // 2. Equals needle
  if (curr.value === needle) {
    return true;
  }

  // Recurse
  if (curr.value < needle) {
    return search(curr.right, needle);
  }

  return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle); 
}
