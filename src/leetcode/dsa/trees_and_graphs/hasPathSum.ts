import { type TreeNode } from '../utils'

/**
 * @description https://leetcode.com/problems/path-sum/description/
 *
 */
export function hasPathSum(root: TreeNode, targetSum: number): boolean {
  if (!root) return false

  const diff = targetSum - root.val

  if (diff === 0 && !root.left && !root.right) return true

  return hasPathSum(root.left, diff) || hasPathSum(root.right, diff)
}
