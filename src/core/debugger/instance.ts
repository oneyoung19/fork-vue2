import Vue from 'core/index'
// import 'compiler/debugger/create-compiler'

Vue.config.performance = true

console.dir(Vue)

Vue.component('test', {
  template: '<div>test</div>',
})

console.log(new Vue({
  data () {
    return {
      a: 1
    }
  }
}))
