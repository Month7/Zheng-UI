---
title: 'Layout 布局'
---
## Layout 布局
<ClientOnly>
<Layout/>
</ClientOnly>

<font size=5>Row Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| gutter | 栅格间隔 | number,单位px |- | 0 |

<font size=5>Col Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| span | 栅格占据的列数 | number |- | 12 |
| offset | 栅格占据的列数 | number |- | 0 |
| xs | 小于576px 响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) |- | - |
| sm | 介于576px和768px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) |- | - |
| md | 介于768x和992px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) |- | - |
| lg | 介于992px和1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) |- | - |
| xl | 大于1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) |- | - |