<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='play'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Play</text>
        </div>
        <text class='code'>
          // not invoke callback in ios11

          Nat.video.play('http://cdn.instapp.io/nat/samples/video.mp4', () => {
              Nat.toast('started')
          })
        </text>
      </div>
      <div class='case' @click='pause'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Pause</text>
        </div>
        <text class='code'>
          Nat.video.pause(() => {
              Nat.toast('paused')
          })
        </text>
      </div>
      <div class='case' @click='stop'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Stop</text>
        </div>
        <text class='code'>
          Nat.video.stop(() => {
              Nat.toast('stoped')
          })
        </text>
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
      name: 'video'
    }
  },
  methods: {
    play() {
      Nat.video.play('http://cdn.instapp.io/nat/samples/video.mp4', () => {
        Nat.toast('started')
        console.log('----->started')
      })
    },
    pause() {
      Nat.video.pause(() => {
        Nat.toast('paused')
      })
    },
    stop() {
      Nat.video.stop(() => {
        Nat.toast('stoped')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';
</style>
