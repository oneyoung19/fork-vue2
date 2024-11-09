/*
  parser的作用就是将template转换为ast
*/
import { parse } from '../parser/index'
import { parseHTML } from '../parser/html-parser'
import { template, template2, template3 } from './template'

export const parseResult = parse(template, {})
export const parseResult2 = parse(template2, {})
export const parseResult3 = parse(template3, {})

const parseHTMLResult = parseHTML(template, {
  start(tag, attrs, unary, start, end) {
    console.log('start', tag, attrs, unary, start, end)
  },
  end(tag, start, end) {
    console.log('end', tag, start, end)
  },
  chars(text, start, end) {
    console.log('chars', text, start, end)
  },
  comment(content, start, end) {
    console.log('comment', content, start, end)
  }
})

console.log('parseResult', parseResult)
console.log('parseResult2', parseResult2)
console.log('parseHTMLResult', parseHTMLResult)
