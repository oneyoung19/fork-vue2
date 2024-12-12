- [ ] `staticRenderFns` 这个怎么不展示？
- [ ] `vm` 上的内置方法有哪些？譬如 `_c`、`_b`、`_d`、`_e`、`_s`、`_f` 等

```
模板字符串
↓
parse (解析) → AST
↓
optimize (优化) → 优化后的 AST，标记静态节点
↓
codegen (代码生成) → 代码字符串  【codegen/index.ts】
↓
to-function (转换函数) → 可执行函数  【to-function.ts】
```

```js
export function installRenderHelpers(target: any) {
  target._o = markOnce
  target._n = toNumber
  target._s = toString
  target._l = renderList
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic
  target._f = resolveFilter
  target._k = checkKeyCodes
  target._b = bindObjectProps
  target._v = createTextVNode
  target._e = createEmptyVNode
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
  target._d = bindDynamicKeys
  target._p = prependModifier
}
```