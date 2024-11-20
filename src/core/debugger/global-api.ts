import Vue from 'core/index'

const subConstructor1 = Vue.extend({
  name: 'test',
  template: '<div>test</div>',
  props: {
    info: String,
  },
  data() {
    return {
      msg: 'test',
    }
  },
  computed: {
    newInfo() {
      return this.info
    }
  },
  mounted() {
    console.log('test mounted')
  }
})

console.dir(subConstructor1)

const subConstructor2 = subConstructor1.extend({
  name: 'test2',
  template: '<div>test2</div>',
})

console.dir(subConstructor2)
