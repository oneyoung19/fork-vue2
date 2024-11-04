## 1. genHandlers 函数
这个函数用于生成事件处理器的代码字符串。它处理原生事件和自定义事件，并支持静态和动态事件处理。

示例输入:
```typescript
const events = {
  click: {
    value: 'handleClick',
    modifiers: {}
  },
  'my-custom-event': {
    value: 'handleCustom',
    dynamic: true
  }
}

// 调用函数
console.log(genHandlers(events, false))  // 非原生事件
console.log(genHandlers(events, true))   // 原生事件
```

输出:
```javascript
// 非原生事件
on:{"click":handleClick,_d({},[my-custom-event,handleCustom])}

// 原生事件
nativeOn:{"click":handleClick,_d({},[my-custom-event,handleCustom])}
```

## 2. genHandler 函数
这个函数用于生成单个事件处理器的代码。它支持多种形式的处理器，包括方法路径、函数表达式、函数调用等。

示例:
```typescript
// 示例1: 简单方法
const handler1 = {
  value: 'handleClick',
  modifiers: {}
}
console.log(genHandler(handler1))  // 输出: handleClick

// 示例2: 带修饰符的处理器
const handler2 = {
  value: 'handleClick',
  modifiers: { stop: true, prevent: true }
}
console.log(genHandler(handler2))  
// 输出: function($event){$event.stopPropagation();$event.preventDefault();return handleClick.apply(null, arguments)}

// 示例3: 内联函数表达式
const handler3 = {
  value: '() => console.log("clicked")',
  modifiers: {}
}
console.log(genHandler(handler3))  // 输出: () => console.log("clicked")
```

## 3. genKeyFilter 函数
这个函数用于生成键盘事件过滤器的代码，确保事件处理器只响应特定的按键。

示例:
```typescript
const keys = ['enter', 'esc']
console.log(genKeyFilter(keys))
```

输出:
```javascript
if(!$event.type.indexOf('key')&&_k($event.keyCode,"enter",13,$event.key,"Enter")&&_k($event.keyCode,"esc",27,$event.key,["Esc","Escape"]))return null;
```

## 4. genFilterCode 函数
这个函数用于生成单个按键的过滤代码，支持按键码和按键名称的检查。

示例:
```typescript
// 数字键码
console.log(genFilterCode('13'))  // 输出: $event.keyCode!==13

// 预定义按键
console.log(genFilterCode('enter'))  
// 输出: _k($event.keyCode,"enter",13,$event.key,"Enter")

console.log(genFilterCode('esc'))
// 输出: _k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])
```

## 5. 静态处理器和动态处理器

在 Vue 中，`staticHandlers` 和 `dynamicHandlers` 的主要区别在于事件处理器是否是动态的。

### 5-1.静态处理器 (staticHandlers)
- 在模板编译时就能确定的事件处理器
- 不会改变的事件绑定
- 直接以对象属性的形式生成

### 5-2.动态处理器 (dynamicHandlers)
- 在运行时可能会改变的事件处理器
- 使用动态绑定语法 `:[event]` 的事件处理器
- 需要通过 `_d()` 函数包装处理

```vue
<!-- 静态事件处理器 -->
<button @click="handleClick">
  Click me
</button>

<!-- 动态事件处理器 -->
<button @[eventName]="handleClick">
  Click me
</button>
```

上面的模板会被编译成：

```typescript
// 示例1：静态处理器
const events1 = {
  click: {
    value: 'handleClick'
  }
}
console.log(genHandlers(events1, false))
// 输出: on:{"click":handleClick}

// 示例2：动态处理器
const events2 = {
  click: {
    value: 'handleClick',
    dynamic: true  // 注意这个标记
  }
}
console.log(genHandlers(events2, false))
// 输出: on:_d({},[click,handleClick])

// 示例3：混合使用
const events3 = {
  click: {
    value: 'handleClick'  // 静态
  },
  [eventName]: {
    value: 'handleDynamic',
    dynamic: true  // 动态
  }
}
console.log(genHandlers(events3, false))
// 输出: on:_d({"click":handleClick},[eventName,handleDynamic])
```

在代码实现中的关键区别：
```typescript:src/compiler/codegen/events.ts
export function genHandlers(events: ASTElementHandlers, isNative: boolean): string {
  // ...
  for (const name in events) {
    const handlerCode = genHandler(events[name])
    if (events[name] && events[name].dynamic) {
      // 动态处理器：使用数组形式
      dynamicHandlers += `${name},${handlerCode},`
    } else {
      // 静态处理器：使用对象属性形式
      staticHandlers += `"${name}":${handlerCode},`
    }
  }
  // ...
  
  if (dynamicHandlers) {
    // 如果有动态处理器，使用_d函数包装
    return prefix + `_d(${staticHandlers},[${dynamicHandlers.slice(0, -1)}])`
  } else {
    // 如果只有静态处理器，直接返回对象
    return prefix + staticHandlers
  }
}
```

这种区分的主要目的是：
1. 性能优化：静态处理器可以直接编译为普通对象，而动态处理器需要在运行时处理
2. 灵活性：动态处理器允许在运行时改变事件名，提供更大的灵活性
3. 代码生成：生成不同的代码结构以支持这两种场景

例如，在实际应用中：
```vue
<template>
  <!-- 静态事件 -->
  <button @click="onClick">Static</button>
  
  <!-- 动态事件 -->
  <button @[someEvent]="onEvent">Dynamic</button>
  
  <!-- 混合使用 -->
  <button 
    @click="onClick"
    @[dynamicEvent]="onDynamicEvent">
    Mixed
  </button>
</template>

<script>
export default {
  data() {
    return {
      someEvent: 'mouseover',
      dynamicEvent: 'focus'
    }
  },
  methods: {
    onClick() { /* ... */ },
    onEvent() { /* ... */ },
    onDynamicEvent() { /* ... */ }
  }
}
</script>
```

在这个例子中：
- `@click` 是静态事件，会被编译为静态处理器
- `@[someEvent]` 是动态事件，因为事件名可以改变，所以会被编译为动态处理器
- 当两种类型混合使用时，会生成包含两种处理器的代码
