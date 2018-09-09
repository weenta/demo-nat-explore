<template>
  <div v-if='show && platform === "ios"' class='status-bar'>
    <div v-if='isX' :style='style' class='bar-x'/>
    <div :style='style' class='bar'/>
  </div>
</template>

<script>
import env from '@/utils/env'

export default {
  name: 'StatusBar',
  props: {
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      platform: env.platform,
      style: {
        backgroundColor: this.backgroundColor
      }
    }
  },
  computed: {
    isX() {
      return env.platform === 'ios' && env.deviceWidth === 1125 && env.deviceHeight === 2436
    }
  },
  
}
</script>

<style lang="less" scoped>
.bar {
	width: 750px;
	height: 40px;
	background-color: #fff;
}
.bar-x {
	width: 750px;
	height: 40px;
	background-color: #fff;
}
</style>
