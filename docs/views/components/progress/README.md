---
title: 'Progress 进度条'
---
## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

<ClientOnly>
<Progress/>
</ClientOnly>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------- | ------ |
| percentage | 百分比（必填） | number | 0-100 | 0 |
| strokeWidth | 进度条的宽度，单位 px | number |- | 220 |
| color | 进度条的背景颜色 | string | - | #409EFF |