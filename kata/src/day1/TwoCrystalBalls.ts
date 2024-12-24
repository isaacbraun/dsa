export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  // j is iterating n values of jumpAmount (sqrt(n))
  // i is increasing by 1 and used as index
  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
