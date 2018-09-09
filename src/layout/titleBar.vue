<template>
  <div>
    <text class='title-bar'>{{ title }}</text>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.title-bar {
  font-size: 72px;
  font-weight: bold;
  line-height: 72px;
  height: 100px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 8px;
  margin-bottom: 32px;
}
</style>

