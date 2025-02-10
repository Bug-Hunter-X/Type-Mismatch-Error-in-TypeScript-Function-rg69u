# Type Mismatch Bug in TypeScript

This repository demonstrates a common type mismatch error in TypeScript. The `greeter` function expects a string argument, but an array is passed to it, resulting in a compilation error.

The `bug.ts` file contains the erroneous code, and `bugSolution.ts` provides the corrected version.

## How to reproduce:

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler (like tsc).
3. Attempt to compile the code.  You will see a compilation error.

## Solution:

The solution involves either changing the function signature to accept an array, or iterating through the array and calling the function multiple times.