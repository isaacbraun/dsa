export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  // Set up tracking arrays
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;

    if (curr === needle) {
      break;
    }

    // Grab current row of adjacencies
    const adjs = graph[curr];
    // Loop through to find connections
    for (let i = 0; i < graph.length; ++i) {
      // If there is no connection or we have seen the vertex before, continue
      if (adjs[i] === 0 || seen[i]) {
        continue;
      }

      seen[i] = true;
      // Current vertex has connection, so it is the "parent" in our search
      prev[i] = curr;
      q.push(i);
    }

  } while (q.length);

  // Return null if there is no path
  if (prev[needle] === -1) {
    return null;
  }

  // Else: build the path backwards
  let curr = needle;
  const out: number[] = [];

  while(prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source, ...out.reverse()];
}
