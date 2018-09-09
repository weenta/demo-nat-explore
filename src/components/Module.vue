<template>
  <div class='module'>
    <text class='title bottom-line'>{{ name }}</text>
    <div v-for='(func,idx) in functions' :key='idx' class='cell bottom-line' @click='push(func.path)'>
      <text class='name'>{{ func.name }}</text>
      <image :src='cdnUri+"arrow.png"' class='arrow'/>
    </div>
  </div>
</template>

<script>
import env from '@/utils/env'
// eslint-disable-next-line no-undef
const navigator = weex.requireModule('navigator')

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    functions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cdnUri: env.cdnUri,
      baseUrl: env.baseUrl,
    }
  },
  methods: {
    push(path) {
      navigator.push({
        url: this.baseUrl + path
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
.module {
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 48px;
}

.title {
	color: @ink;
	font-size: @font-size-base;
	font-weight: 200;
	padding-top: 8px;
	padding-bottom: 20px;
}
.cell {
	height: 84px;
	padding-left: 24px;
	padding-right: 12px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.arrow {
  width: 15px;
  height: 27px;
}
.name {
  color: @ink;
  font-size: @font-size-base;
  font-weight: 700;
}
</style>

