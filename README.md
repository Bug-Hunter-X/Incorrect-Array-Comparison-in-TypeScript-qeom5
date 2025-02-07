# Incorrect Array Comparison in TypeScript

This repository demonstrates a common error in TypeScript: incorrect handling of array comparison. The `compareArrays` function correctly compares arrays of the same length, but it fails when comparing arrays of different lengths. This can lead to unexpected behavior in applications that rely on accurate array comparisons.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version. The solution uses the built-in `every()` method for a more concise and robust comparison.