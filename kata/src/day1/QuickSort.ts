function qs(arr: number[], lo: number, hi: number): void {
  // Base Cases
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  // Inclusive beginning/ending
  // Sort left side
  qs(arr, lo, pivotIdx - 1);
  // Sort right side
  qs(arr, pivotIdx + 1, hi);
}

// returns pivot index
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;

      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
