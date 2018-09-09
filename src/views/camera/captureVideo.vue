<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='captureVideo'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Capture video</text>
        </div>
        <text class='code'>
          Nat.camera.captureVideo({}, (err, ret) => {
              if (err) {
                Nat.toast('[error]' + JSON.stringify(err))
                return
              }
              this.path = ret.path
              Nat.toast(JSON.stringify(ret))
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
import Nat from 'natjs'
import StatusBar from '@/layout/statusBar'
import NavBar from '@/layout/navBar'
import TitleBar from '@/layout/titleBar'
export default {
  components: {
    StatusBar,
    NavBar,
    TitleBar
  },
  data() {
    return {
      name: 'capture video',
      path: null,
    }
  },
  methods: {
    captureVideo() {
      Nat.camera.captureVideo({}, (err, ret) => {
        if (err) {
          Nat.toast('[error]' + JSON.stringify(err))
          return
        }
        this.path = ret.path
        Nat.toast(JSON.stringify(ret))
      })
    },
    preview() {
      if (!this.path) {
        Nat.toast('please take your video first')
        return
      }
      Nat.video.play(this.path)
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

