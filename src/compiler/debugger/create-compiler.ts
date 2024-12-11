import { template, template2, template4, template6, template7 } from './template'
import { createCompiler } from '../index'

import { baseOptions } from 'web/compiler/options'
// const baseOptions = {}
const { compile, compileToFunctions } = createCompiler(baseOptions)


// compile会将template编译成render字符串
// compileToFunctions会将template编译成render函数

console.log('compile', compile)
console.log('compileToFunctions', compileToFunctions)

console.log('template', compile(template))
console.log('template', compileToFunctions(template).render)

console.log('template2', compile(template2))
console.log('template2', compileToFunctions(template2))

// console.log('template3', compile(template3))
// console.log('template3', compileToFunctions(template3))

console.log('template4', compile(template4))
console.log('template4', compileToFunctions(template4))

console.log('template6', compile(template6))
console.log('template6', compileToFunctions(template6).render)

console.log('template7', compile(template7))
console.log('template7', compileToFunctions(template7).render)
