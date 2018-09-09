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
          Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3')
        </text>
      </div>
      <div class='case' @click='playWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Play with callback</text>
        </div>
        <text class='code'>
          // not invoke the callback in ios11
          
          Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3', (err) => {
            if (err) {
              Nat.toast('[ERROR] ' + JSON.stringify(err))
              return
            }

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
          Nat.audio.pause(() => {
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
          Nat.audio.stop(() => {
              console.log('stopped')
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
      name: 'audio',
    }
  },
  methods: {
    play() {
      Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3')
    },
    playWithCb() {
      Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3', (err) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast('started')
      })
    },

    pause() {
      Nat.audio.pause(() => {
        Nat.toast('paused')
      })
    },

    stop() {
      Nat.audio.stop(() => {
        Nat.toast('stoped')
      })
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
