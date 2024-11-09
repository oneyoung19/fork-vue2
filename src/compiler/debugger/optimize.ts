import { optimize } from '../optimizer'

import { parseResult as ast, parseResult2 as ast2, parseResult3 as ast3 } from './parser'
import { generate } from '../codegen/index'

optimize(ast, {
  isReservedTag: (tag: string) => true
})
optimize(ast2, {
  isReservedTag: (tag: string) => true
})
optimize(ast3, {
  isReservedTag: (tag: string) => true
})

export const optimizeResult = generate(ast, {})
export const optimizeResult2 = generate(ast2, {})
export const optimizeResult3 = generate(ast3, {})

console.log('optimizeResult', optimizeResult, ast)
console.log('optimizeResult2', optimizeResult2, ast2)
console.log('optimizeResult3', optimizeResult3, ast3)
