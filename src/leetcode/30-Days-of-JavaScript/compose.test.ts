import { type F, compose } from './compose'

it('compose() should work', () => {
  const fx: F[] = [(x) => x + 1, (x) => x * x, (x) => 2 * x]
  expect(compose(fx)(4)).toBe(65)
})
