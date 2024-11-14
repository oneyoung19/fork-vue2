import { optimize } from '../optimizer'

import { parseResult as ast, parseResult2 as ast2, parseResult3 as ast3, parseResult4 as ast4, parseResult5 as ast5 } from './parser'
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
optimize(ast4, {
  isReservedTag: (tag: string) => true
})
optimize(ast5, {
  isReservedTag: (tag: string) => true
})

export const optimizeResult = generate(ast, {})
export const optimizeResult2 = generate(ast2, {})
export const optimizeResult3 = generate(ast3, {})
export const optimizeResult4 = generate(ast4, {})
export const optimizeResult5 = generate(ast5, {})

console.log('optimizeResult', optimizeResult, ast)
console.log('optimizeResult2', optimizeResult2, ast2)
console.log('optimizeResult3', optimizeResult3, ast3)
console.log('optimizeResult4', optimizeResult4, ast4)
console.log('optimizeResult5', optimizeResult5, ast5)
