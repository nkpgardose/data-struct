const bubblesort = (list, cmp) => {
  const maxlen = list.length
  const compare = cmp || ((a, b) => {
    return (a - b)
  })
  let count = 0
  let isSwap = true
  let temp

  while ((count < maxlen - 1) && isSwap) {
    isSwap = false
    count++

    for (let i = 0; i < maxlen - count; i++) {
      if (compare(list[i], list[i + 1]) > 0) {
        temp = list[i]
        list[i] = list[i + 1]
        list[i + 1] = temp
        isSwap = true
      }
    }
  }

  return list
}

export default bubblesort
