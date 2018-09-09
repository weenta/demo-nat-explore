<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='captureImage'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Capture image</text>
        </div>
        <text class='code'>
          // 需真机测试

          Nat.camera.captureImage({}, (err, ret) => {
              console.log(ret.path)
          })
        </text>
      </div>
      <div class='button preview' @click='preview'>
        <text class='button-txt'>preview</text>
      </div>
    </scroller>
  </div>
</template>

<script>
import StatusBar from '@/layout/statusBar'
import NavBar from '@/layout/navBar'
import TitleBar from '@/layout/titleBar'
import Nat from 'natjs'
export default {
  components: {
    StatusBar,
    NavBar,
    TitleBar
  },
  data() {
    return {
      name: 'capture image',
      path: null
    }
  },
  methods: {
    captureImage() {
      Nat.camera.captureImage({}, (err, ret) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast(JSON.stringify(ret, null, 2))
        this.path = ret.path
      })
    },
    preview() {
      if (!this.path) {
        Nat.toast('please take photo first')
        return
      }

      Nat.image.preview(this.path)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';
.preview {
  width: 256px;
}
</style>
