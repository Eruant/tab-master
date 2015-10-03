import tape from 'tape'
import transpose from '../../lib/transpose'

tape('transpose + 1', (test) => {
  test.plan(16)

  test.equal(transpose('A', 1), 'A#', 'A up 1 => A#')
  test.equal(transpose('A#', 1), 'B', 'A# up 1 => B')
  test.equal(transpose('Bb', 1), 'B', 'Bb up 1 => B')
  test.equal(transpose('B', 1), 'C', 'B up 1 => C')
  test.equal(transpose('C', 1), 'C#', 'C up 1 => C#')
  test.equal(transpose('C#', 1), 'D', 'C# up 1 => D')
  test.equal(transpose('Db', 1), 'D', 'Db up 1 => D')
  test.equal(transpose('D', 1), 'D#', 'D up 1 => D#')
  test.equal(transpose('D#', 1), 'E', 'D# up 1 => E')
  test.equal(transpose('E', 1), 'F', 'E up 1 => F')
  test.equal(transpose('F', 1), 'F#', 'F up 1 => F#')
  test.equal(transpose('F#', 1), 'G', 'F# up 1 => G')
  test.equal(transpose('Gb', 1), 'G', 'Gb up 1 => G')
  test.equal(transpose('G', 1), 'G#', 'G up 1 => G#')
  test.equal(transpose('G#', 1), 'A', 'G# up 1 => A')
  test.equal(transpose('Ab', 1), 'A', 'Ab up 1 => A')
})

tape('transpose - 1', (test) => {
  test.plan(16)

  test.equal(transpose('A', -1), 'G#', 'A down 1 => G#')
  test.equal(transpose('A#', -1), 'A', 'A# down 1 => A')
  test.equal(transpose('Bb', -1), 'A', 'Bb down 1 => A')
  test.equal(transpose('B', -1), 'A#', 'B down 1 => A#')
  test.equal(transpose('C', -1), 'B', 'C down 1 => B')
  test.equal(transpose('C#', -1), 'C', 'C# down 1 => C')
  test.equal(transpose('Db', -1), 'C', 'Db down 1 => C')
  test.equal(transpose('D', -1), 'C#', 'D down 1 => C#')
  test.equal(transpose('D#', -1), 'D', 'D# down 1 => D')
  test.equal(transpose('E', -1), 'D#', 'E down 1 => D#')
  test.equal(transpose('F', -1), 'E', 'F down 1 => E')
  test.equal(transpose('F#', -1), 'F', 'F# down 1 => F')
  test.equal(transpose('Gb', -1), 'F', 'Gb down 1 => F')
  test.equal(transpose('G', -1), 'F#', 'G down 1 => F#')
  test.equal(transpose('G#', -1), 'G', 'G# down 1 => G')
  test.equal(transpose('Ab', -1), 'G', 'Ab down 1 => G')
})
