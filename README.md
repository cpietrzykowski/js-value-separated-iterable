# value separated iterable

![npm](https://github.com/cpietrzykowski/js-value-separated-iterable/actions/workflows/package.yml/badge.svg)

Creates a value separated iterable (and iterator) with provided `separator` separating values traversed by `base` iterable.
 

# Installing

```sh
> npm install --save @cpietrzykowski/value-separated-iterable
```

# Using

```typescript
import { ValueSeparatedIterable } from 'value-separated-iterable';

console.log([...ValueSeparatedIterable(['foo', 'baz'], 'bar')]);
// ['foo', 'bar', 'baz']

console.log([...ValueSeparatedIterable(Array(10).keys(), '$')]);
// [0, '$', 1, '$', 2, '$', 3, '$', 4, '$', 5, '$', 6, '$', 7, '$', 8, '$', 9]
```
