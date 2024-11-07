`parser` 将 `template` 转换为 `ast` 后，利用 `codegen` 替换其中指令、过滤器等，转化为以下代码：

`with(this){return (isShow)?_c('div',_b({directives:[{name:"model",rawName:"v-model",value:(value),expression:"value"}],attrs:{"class":"container","style":"color: red","class":class,"style":style},on:_d({"click":handleClick},[event,handleEvent])},"div",_d({},[dynamic,dynamic])),[_c('span',[_v("static")]),_v(" "),_c('span',[_v(_s(name))]),_v(" "),_c('span',[_v(_s(_f("convert")(msg)))])],1):_e()}`

`AST` 结构：

```js
const parseResult = {
  type: 1,
  tag: 'div',
  attrsList: [
    { name: 'class', value: 'container' },
    { name: 'style', value: 'color: red' },
    { name: 'v-if', value: 'isShow' },
    { name: ':class', value: 'class' },
    { name: ':style', value: 'style' },
    { name: ':[dynamic]', value: 'dynamic' },
    { name: '@click', value: 'handleClick' },
    { name: '@confirm.stop.prevent', value: 'handleConfirm' },
    { name: '@[event]', value: 'handleEvent' },
    { name: 'v-model', value: 'value' }
  ],
  attrsMap: {
    'class': 'container',
    'style': 'color: red',
    'v-if': 'isShow',
    ':class': 'class',
    ':style': 'style',
    ':[dynamic]': 'dynamic',
    '@click': 'handleClick',
    '@confirm.stop.prevent': 'handleConfirm',
    '@[event]': 'handleEvent',
    'v-model': 'value'
  },
  staticClass: 'container',
  staticStyle: { "color": "red" },
  classBinding: 'class',
  styleBinding: 'style',
  hasBindings: true,
  if: 'isShow',
  ifConditions: [
    {
      exp: 'isShow',
      block: /* 循环引用，指向当前节点 */
    }
  ],
  directives: [
    {
      name: 'model',
      rawName: 'v-model',
      value: 'value',
      arg: null,
      modifiers: undefined
    }
  ],
  events: {
    click: {
      value: 'handleClick'
    },
    confirm: {
      value: 'handleConfirm',
      modifiers: {
        stop: true,
        prevent: true
      }
    }
  },
  children: [
    {
      type: 1,
      tag: 'span',
      attrsList: [],
      attrsMap: {},
      children: [
        {
          type: 3,
          text: 'static'
        }
      ],
      plain: true,
      static: true,
      staticInFor: false
    },
    {
      type: 1,
      tag: 'span',
      attrsList: [],
      attrsMap: {},
      children: [
        {
          type: 2,
          expression: '_s(name)',
          text: '{{ name }}',
          tokens: [
            { '@binding': 'name' }
          ]
        }
      ],
      plain: true
    },
    {
      type: 1,
      tag: 'span',
      attrsList: [],
      attrsMap: {},
      children: [
        {
          type: 2,
          expression: '_s(_f("convert")(msg))',
          text: '{{ msg | convert }}',
          tokens: [
            { '@binding': '_f("convert")(msg)' }
          ]
        }
      ],
      plain: true
    }
  ],
  plain: false
}
```

`prettier` 之后，如下：

```js
with (this) {
  return isShow
    ? _c(
        'div',
        _b(
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: (value),
                expression: "value"
              }
            ],
            attrs: {
              "class": "container",
              "style": "color: red",
              "class": class,
              "style": style
            },
            on: _d(
              {
                "click": handleClick,
                "confirm": function($event) {
                  $event.stopPropagation();
                  $event.preventDefault();
                  return handleConfirm.apply(null, arguments);
                }
              },
              [event, handleEvent]
            )
          },
          "div",
          _d({}, [dynamic, dynamic])
        ),
        [
          _c('span', [_v("static")]),
          _v(" "),
          _c('span', [_v(_s(name))]),
          _v(" "),
          _c('span', [_v(_s(_f("convert")(msg)))])
        ],
        1
      )
    : _e()
}
```