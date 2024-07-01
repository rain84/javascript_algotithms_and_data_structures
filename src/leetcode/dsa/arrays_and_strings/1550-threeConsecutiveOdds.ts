/**
 * 1550. Three Consecutive Odds
 * {@link https://leetcode.com/problems/three-consecutive-odds/description/ | Link}
 */
export function threeConsecutiveOdds(arr: number[]): boolean {
  const n = arr.length
  if (n < 3) return false

  for (let i = 2; i < n; i++) {
    if (arr[i - 2] & arr[i - 1] & arr[i] & 1) {
      return true
    }
  }
  return false
}

export function threeConsecutiveOdds2(arr: number[]): boolean {
  let c = 0
  for (const x of arr) {
    c = x & 1 ? c + 1 : 0
    if (c === 3) return true
  }

  return false
}
