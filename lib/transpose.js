const transpose = (note, steps) => {
  const baseNotes = [
    ['A'],
    ['A#', 'Bb'],
    ['B'],
    ['C'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E'],
    ['F'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab']
  ]

  let baseNoteIndex
  let baseNoteIndexNote

  baseNotes.forEach((bn, i) => {
    bn.forEach((n, j) => {
      if (n === note) {
        baseNoteIndex = i
        baseNoteIndexNote = j
      }
    })
  })

  let returnNote = baseNoteIndex + steps

  if (returnNote >= baseNotes.length) {
    returnNote -= baseNotes.length
  } else if (returnNote < 0) {
    returnNote += baseNotes.length
  }

  if (baseNotes[returnNote].length === 1) {
    return baseNotes[returnNote][0]
  } else {
    return baseNotes[returnNote][baseNoteIndexNote]
  }
}

export default transpose
