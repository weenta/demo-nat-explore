<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='alert'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple alert</text>
        </div>
        <text class='code'>
          Nat.alert('What\'s up')
        </text>
      </div>
      <div class='case' @click='alertCustom'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Alert with title,message and button</text>
        </div>
        <text class='code'>
          Nat.alert({
              title: 'Title',
              message: 'This is an alert dialog',
              okButton: 'I know'
          })
        </text>
      </div>
      <div class='case' @click='alertWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Alert with callback </text>
        </div>
        <text class='code'>
          Nat.alert('this is an alert with callback',()=>{
            Nat.toast('alerted')
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
      name: 'alert'
    }
  },
  methods: {
    alert() {
      Nat.alert('what\'s up')
    },
    alertCustom() {
      Nat.alert({
        title: 'Title',
        message: 'This is an alert dialog',
        okButton: 'I know'
      })
    },
    alertWithCb() {
      Nat.alert('this is an alert with callback',()=>{
        Nat.toast('alerted.')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>

