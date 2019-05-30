<template>
  <div class="container">
    <div class="content">
      <zButton text="主要按钮" type="primary"></zButton>
      <zButton text="成功按钮" type="success"></zButton>
      <zButton text="信息按钮" type="info"></zButton>
      <zButton text="警告按钮" type="warn"></zButton>
      <zButton text="危险按钮" type="danger"></zButton>
    </div>
  </div>
</template>
<script>
import zButton from './z-button'
export default {
  name: 'Example',
  components: {
    zButton
  }
}
</script>
<style scoped>
.content{
  display: flex;
  justify-content: space-around;
}
</style>
