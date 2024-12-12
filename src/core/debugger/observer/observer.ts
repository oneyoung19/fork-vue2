import { observe, defineReactive } from '../../observer'

const data1 = {
  msg: 'data1'
}

const data2 = {
  msg: 'data2'
}

observe(data1)
defineReactive(data2, 'msg')

console.log(data1)
console.log(data1.msg)
console.log(data2)
console.log(data2.msg)
