---
title: 'Toast 消息'
---
## Toast 消息
<ClientOnly>
<Toast/>
</ClientOnly>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| content| 消息提示文本 | String /html片段(需要设置enableContentHtml是true) |- | - |
| enableContentHtml| 允许插入html |boolean |- | false |
| type| 消息类型 |string |info, success, error, warn | success |
| delay| 显示时间, 毫秒。设为 0 则不会自动关闭	 | number |- | 2s(2000) |
| showClose| 是否显示关闭按钮	 | boolean |- | true |
| onClose| 关闭时的回调函数, 参数为被关闭的 message 实例	 | function |- | - |