<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='prompt'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple prompt</text>
        </div>
        <text class='code'>
          Nat.prompt('this is a simple prompt dialog')
        </text>
      </div>
      <div class='case' @click='promptCustom'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Custom prompt</text>
        </div>
        <text class='code'>
          Nat.prompt({
              title: 'Title',
              message: 'Are you feeling lucky?',
              text: 'sure',
              okButton: 'Yep',
              cancelButton: 'Ignore'
          })
        </text>
      </div>
      <div class='case' @click='promptWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Prompt with callback</text>
        </div>
        <text class='code'>
          Nat.prompt({
              title: 'Title',
              message: 'Are you feeling lucky?',
              text: 'sure',
              okButton: 'Yep',
              cancelButton: 'Ignore'
          }, (err, ret) => {
              Nat.toast((ret.result) ? ret.data : 'canceled')
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
      name: 'prompt'
    }
  },
  methods: {
    prompt() {
      Nat.prompt('this is a simple prompt dialog')
    },

    promptCustom() {
      Nat.prompt({
        title: 'Title',
        message: 'Are you feeling lucky?',
        text: 'sure',
        okButton: 'Yep',
        cancelButton: 'Ignore'
      })
    },

    promptWithCb() {
      Nat.prompt('this is a prompt dialog with callback', (err, ret) => {
        Nat.toast((ret.result) ? ret.data : 'canceled')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';
</style>

