const insertionsort = (list, cmp) => {
  const maxlen = list.length
  const compare = cmp || ((a, b) => {
    return a - b
  })

  let itemToInsert
  let isLooking
  let pos

  for (let index = 1; index < maxlen; index++) {
    itemToInsert = list[index]
    pos = index - 1
    isLooking = true

    while (pos >= 0 && isLooking) {
      if (compare(itemToInsert, list[pos]) < 0) {
        list[pos + 1] = list[pos]
        pos--
      } else {
        isLooking = false
      }
    }

    list[pos + 1] = itemToInsert
  }

  return list
}

export default insertionsort
