import { parse } from '../index'

const template = `<div
  class="container"
  style="color: red"
  v-if="isShow"
  :class="class"
  :style="style"
  @click="handleClick"
>
  <span>{{ name }}</span>
  <span>{{ msg | convert }}</span>
</div>`

export const result = parse(template, {})

console.log(result)
