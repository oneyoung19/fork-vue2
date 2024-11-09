import { template, template2, template4 } from './template'
import { createCompiler } from '../index'

import { baseOptions } from 'web/compiler/options'

const { compile, compileToFunctions } = createCompiler(baseOptions)


// compile会将template编译成render字符串
// compileToFunctions会将template编译成render函数

console.log('compile', compile)
console.log('compileToFunctions', compileToFunctions)

console.log('template', compile(template))
console.log('template', compileToFunctions(template))

console.log('template2', compile(template2))
console.log('template2', compileToFunctions(template2))

// console.log('template3', compile(template3))
// console.log('template3', compileToFunctions(template3))

console.log('template4', compile(template4))
console.log('template4', compileToFunctions(template4))
