// 类似于v-demo="{ color: 'red' }"这样的指令 Vue其实并不会解析"{ color: 'red' }"字符串从而将其转化为对象，而是在codegen阶段生成({ color: 'red' })这样的表达式 利用new Function()自动解析

export const template = `<div
  class="container"
  style="color: red"
  v-if="isShow"
  :class="className"
  :style="style"
  :[dynamic]="dynamic"
  @click="handleClick"
  @confirm.stop.prevent="handleConfirm"
  @[event]="handleEvent"
  v-model="value"
  v-html="html"
  v-demo="{ color: 'red' }"
>
  <slot></slot>
  <span>static</span>
  <span>{{ name }}</span>
  <span>{{ msg | convert }}</span>
  <HelloWorld>
    <template v-slot:default>123</template>
    <template v-slot:scope="slotScope">
      {{ slotScope }}
    </template>
  </HelloWorld>
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

export const template4 = `<div>
  <div>
    <span>静态根节点1</span>
  </div>
  <div>{{ msg }}</div>
  <div>
    <span>静态根节点2</span>
  </div>
</div>`

export const template5 = `<div>
  <div>{{ msg }}</div>
  <div>
    <span>节点1</span>
  </div>
  <div>
    <span>节点2</span>
  </div>
  <div v-show="show">
    <span>节点3</span>
  </div>
</div>`
