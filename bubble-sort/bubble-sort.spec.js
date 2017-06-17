import test from 'ava'
import { bubblesort } from './bubble-sort'

test("returns hello", t => {
  t.is(bubblesort(), "hello", "Sample test")
});

