export const template = `<div
  class="container"
  style="color: red"
  v-if="isShow"
  :class="class"
  :style="style"
  :[dynamic]="dynamic"
  @click="handleClick"
  @confirm.stop.prevent="handleConfirm"
  @[event]="handleEvent"
  v-model="value"
>
  <span>static</span>
  <span>{{ name }}</span>
  <span>{{ msg | convert }}</span>
</div>`

export const template2 = `<div>
  static message
  <span>静态根节点不能只有一个文本子节点</span>
</div>`

export const template3 = `<div v-for="item in list" :key="item.id">
  <div>
    static message
    <span>静态根节点存在for作用域内</span>
  </div>
</div>`
