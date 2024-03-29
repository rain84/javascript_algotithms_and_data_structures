import { fibonacci, fibonacci2 } from './fibonacci'

const IO = new Map([
  [3, 2],
  [10, 55],
  [7, 13],
])

it('fibonacci should work', () => {
  IO.forEach((output, input) => expect(fibonacci(input)).toBe(output))
})

it('fibonacci2 should work', () => {
  IO.forEach((output, input) => expect(fibonacci2(input)).toBe(output))
})
