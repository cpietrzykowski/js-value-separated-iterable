/**
 * Creates a value separated iterable (and iterator) with provided `separator`
 * separating values traversed by `base` iterable.
 *
 * @param iterable
 * @param separator
 */
export function ValueSeparatedIterable<T>(
  base: Iterable<T>,
  separator: T,
): Iterator<T> & Iterable<T> {
  const iterator = base[Symbol.iterator]();
  let generatingSeparators = false;
  let n = iterator.next();

  return {
    next(): IteratorResult<T> {
      if (generatingSeparators === true) {
        generatingSeparators = false;
        return { value: separator, done: false };
      }

      const result = n;
      n = iterator.next();
      generatingSeparators = !n.done;
      return result;
    },
    [Symbol.iterator](): Iterator<T> {
      return this;
    },
  };
}
