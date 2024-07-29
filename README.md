# dsa
Notes and tests of different data structures and algorithms

## Key Thoughts
### BigO
- Growth is with respect to input
- Drop constants, because it is still growing linearly and not meant to be exact measurement
- Usually measure using worst case
- If you half input at each step, most likely logn or nlogn 

### Algorithms
- Practice with only .length property, no other methods
- logn: referred to as binary search because you have to do a log N amount of halving
- Be prepared with binary search
- Bubble Sort: single interation will move largest item to end, next iteration goes up too but not including the last move
- More complex DS add constraints to increase peformance. You can only use it a certain way intentionally
- Think of calling functions like a stack, especially recursion
- Ring Buffer: items sit in middle and move index of head/tail and can wrap around memory allocation
- Recursion Steps: pre, recurse, post
