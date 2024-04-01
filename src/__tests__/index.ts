import test from "ava";
import { ValueSeparatedIterable } from "..";

const cases = [
  { elements: [], separator: "", expected: [] },
  { elements: [], separator: "foo", expected: [] },
  {
    elements: ["foo", "baz"],
    separator: "bar",
    expected: ["foo", "bar", "baz"],
  },
  {
    elements: [1, 3],
    separator: 2,
    expected: [1, 2, 3],
  },
  {
    elements: [{}, {}],
    separator: { foo: "bar" },
    expected: [{}, { foo: "bar" }, {}],
  },
  {
    elements: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    separator: "$",
    expected: [
      1,
      "$",
      2,
      "$",
      3,
      "$",
      4,
      "$",
      5,
      "$",
      6,
      "$",
      7,
      "$",
      8,
      "$",
      9,
    ],
  },
];

test(`value-separated-iterable:iterable`, function (t) {
  for (const c of cases) {
    t.deepEqual(
      [...ValueSeparatedIterable([...c.elements], c.separator)],
      c.expected,
    );
  }
});
