import test from 'ava'
import selectionsort from './selection-sort'

function desc(a, b) {
  return (b - a)
}

const songs = [
  {title: 'One more time', artist: 'Daft Punk', year: 2000},
  {title: 'A whole new world', artist: 'Lea Salonga', year: 1990},
  {title: 'Starboy', artist: 'The Weeknd', year: 2016}
]

test('returns sorted array', t => {
  t.deepEqual(selectionsort([5, 4, 2, 3, 1]), [1, 2, 3, 4, 5])
  t.deepEqual(selectionsort([0, 1, 2, 0, 3]), [0, 0, 1, 2, 3])
  t.deepEqual(selectionsort([5, 3, 2, 1, 4], desc), [5, 4, 3, 2, 1])
})

test('returns sorted array of objects', t => {
  t.deepEqual(selectionsort(songs, (a, b) => {
    return (a.year - b.year)
  }), [
    {title: 'A whole new world', artist: 'Lea Salonga', year: 1990},
    {title: 'One more time', artist: 'Daft Punk', year: 2000},
    {title: 'Starboy', artist: 'The Weeknd', year: 2016}
  ])

  t.deepEqual(selectionsort(songs, (a, b) => {
    return (b.year - a.year)
  }), [
    {title: 'Starboy', artist: 'The Weeknd', year: 2016},
    {title: 'One more time', artist: 'Daft Punk', year: 2000},
    {title: 'A whole new world', artist: 'Lea Salonga', year: 1990}
  ])
})

