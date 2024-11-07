/*
  parser的作用就是将template转换为ast
*/
import { parse } from '../parser/index'
import { parseHTML } from '../parser/html-parser'

const template = `<div
  class="container"
  style="color: red"
  v-if="isShow"
  :class="class"
  :style="style"
  :[dynamic]="dynamic"
  @click="handleClick"
  @[event]="handleEvent"
  v-model="value"
>
  <span>{{ name }}</span>
  <span>{{ msg | convert }}</span>
</div>`

export const parseResult = parse(template, {})
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
console.log('parseHTMLResult', parseHTMLResult)
