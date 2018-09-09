<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :sohw-scrollerbar='false' class='content' >
      <title-bar :title='name'/>
      <div class='case' @click='start'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>start</text>
        </div>
        <text class='code'>
          Nat.recorder.start({}, (err) => {
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
          <text class='title'>pause</text>
        </div>
        <text class='code'>
          Nat.recorder.pause({}, (err) => {
              if (err) {
                Nat.toast('[ERROR] ' + JSON.stringify(err))
                return
              }

              Nat.toast('paused')
          })
        </text>
      </div>
      <div class='case' @click='stop'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>stop</text>
        </div>
        <text class='code'>
          Nat.recorder.stop({}, (err) => {
              if (err) {
                Nat.toast('[ERROR] ' + JSON.stringify(err))
                return
              }

              Nat.toast('stoped')
          })
        </text>
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
      name: 'recorder'
    }
  },
  methods: {
    start() {
      Nat.recorder.start({}, (err) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast('started')
      })
    },

    pause() {
      Nat.toast('click pause')
      Nat.recorder.pause({}, (err) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast('paused')
      })
    },

    stop() {
      Nat.toast('click stop')
      Nat.recorder.stop({}, (err) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast('stoped')
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
