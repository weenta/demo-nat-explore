<template>
  <!-- 导航条 -->
  <div class='nav-bar'>
    <div class='back' @click='pop'>
      <image :src='cdnUri + "back_arrow.png"' class='arrow'/>
      <text class='back-txt'>Back</text>
    </div>
  </div>
</template>

<script>
import env from '@/utils/env'
// eslint-disable-next-line no-undef
const navigator = weex.requireModule('navigator')
export default {
  name: 'NavBar',
  data() {
    return {
      cdnUri: env.cdnUri
    }
  },
  methods: {
    pop() {
      navigator.pop()
    }
  }
}
</script>

<style lang="less" scoped>
  .nav-bar {
    width: 750px;
    height: 88px;
    background-color: #ffffff;
  }
  .back {
    width: 186px;
    height: 88px;
    flex-direction: row;
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: row;
    align-items: center;
  }

  .arrow {
    width: 40px;
    height: 40px;
    margin-right: 2px;
  }
  .back-txt {
    color: #3D83FB;
    font-size: 34px;
    line-height: 34px;
    padding-top: 3px;
    padding-bottom: 3px;
    height: 40px;
  }
</style>
