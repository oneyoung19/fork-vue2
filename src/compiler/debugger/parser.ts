import { parse } from '../parser/index'

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

const result = parse(template, {})

console.log(result)
