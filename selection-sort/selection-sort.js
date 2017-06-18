const selectionsort = (list, cmp) => {
  const maxlen = list.length
  const compare = cmp || ((a, b) => {
    return (a - b)
  })

  let minPos
  let temp

  for (let index = 0; index < maxlen - 1; index++) {
    minPos = index

    for (let current = index + 1; current < maxlen; current++) {
      if (compare(list[minPos], list[current]) > 0) {
        minPos = current
      }
    }

    if (minPos !== index) {
      temp = list[minPos]
      list[minPos] = list[index]
      list[index] = temp
    }
  }

  return list
}

export default selectionsort
