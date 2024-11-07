import { parseResult as ast, parseResult2 as ast2 } from './parser'
import { generate } from '../codegen/index'

export const codegenResult = generate(ast, {})
export const codegenResult2 = generate(ast2, {})

console.log('codegenResult', codegenResult)
console.log('codegenResult2', codegenResult2)
