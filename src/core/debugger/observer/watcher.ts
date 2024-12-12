import Watcher from '../../observer/watcher'
import { observe } from '../../observer'

const data1 = {
  msg: 'data1'
}
const data2 = {
  msg: 'data2'
}

observe(data1)
observe(data2)
// 既是监听者 又是订阅者
new Watcher(null, () => data1.msg + data2.msg, (value) => {
  console.log('data1.msg', value)
})

data1.msg = 'data1-1'

console.log('data1', data1)


// data3
const data3 = {
  value: {
    count: {
      num: 1
    }
  }
}

observe(data3)
new Watcher(null, () => data3.value.count.num, (value) => {
  console.log('data3.value.count.num', value)
})

new Watcher(null, () => (data3.value.count.num + 100), (value) => {
  console.log('data3.value.count.num', value)
})

data3.value.count.num = 2
// data3.value = {
//   count: 1019
// }

console.log('data3', data3)
