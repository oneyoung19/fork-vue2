---
title: parser
---

## 1.html-parser

```js
const html = '<div class="example">Hello World</div>';

parseHTML(html, {
  // 处理开始标签
  start(tag, attrs, unary, start, end) {
    console.log('开始标签:', {
      tag,        // 标签名: 'div'
      attrs,      // 属性数组: [{name: 'class', value: 'example'}]
      unary,      // 是否是自闭合标签: false
      start,      // 开始位置: 0
      end         // 结束位置: 20
    });
  },

  // 处理结束标签
  end(tag, start, end) {
    console.log('结束标签:', {
      tag,        // 标签名: 'div'
      start,      // 开始位置
      end         // 结束位置
    });
  },

  // 处理文本内容
  chars(text, start, end) {
    console.log('文本内容:', {
      text,       // 文本: 'Hello World'
      start,      // 开始位置
      end         // 结束位置
    });
  },

  // 处理注释
  comment(content, start, end) {
    console.log('注释:', {
      content,    // 注释内容
      start,      // 开始位置
      end         // 结束位置
    });
  }
});
```

## 2.filter-parser

```html
<!-- 输入 -->
{{ price | currency('$') | round }}
```

```js
// 解析后的JavaScript代码
_f("round")(_f("currency")(price, '$'))
```

## 3.text-parser

```html
<!-- 输入文本 -->
Hello {{ name }}!
```

```js
// 解析结果
{
  expression: '"Hello " + _s(name) + "!"',
  tokens: [
    "Hello ",
    { "@binding": "name" },
    "!"
  ]
}
```
