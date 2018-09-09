<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='confirm'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple confirm</text>
        </div>
        <text class='code'>
          Nat.confirm('this is a confirm dialog')
        </text>
      </div>
      <div class='case' @click='confirmCustom'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Confirm with title, message and buttons</text>
        </div>
        <text class='code'>
          Nat.alert({
              title: 'Title',
              message: 'This is an alert dialog',
              okButton: 'I know'
          })
        </text>
      </div>
      <div class='case' @click='confirmWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Confirm with callback</text>
        </div>
        <text class='code'>
          Nat.confirm('This is a confirm dialog with callback', (err, ret) => {
              Nat.toast((ret) ? 'confirmed' : 'canceled')
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
      name: 'confirm'
    }
  },
  methods: {
    confirm() {
      Nat.confirm('this is a confirm dialog')
    },

    confirmCustom() {
      Nat.confirm({
        title: 'Title',
        message: 'This is a confirm dialog',
        okButton: 'I know',
        cancelButton: 'Ignore'
      })
    },

    confirmWithCb() {
      Nat.confirm('This is a confirm dialog with callback', (err, ret) => {
        Nat.toast((ret) ? 'confirmed' : 'canceled')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
