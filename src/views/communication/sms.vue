<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='sms'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple Sms</text>
        </div>
        <text class='code'>
          Nat.sms('415-736-0000')
        </text>
      </div>
      <div class='case' @click='mutilSms'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Multiple recipient</text>
        </div>
        <text class='code'>
          Nat.sms(['10000', '10086'])
        </text>
      </div>
      <div class='case' @click='mutilSmsWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Sms with content and callback</text>
        </div>
        <text class='code'>
          Nat.sms(['10000', '10086'],'hello world',()=>{
            Nat.toast('sms popup')
          })
        </text>
      </div>
    </scroller>
  </div>
</template>
<script>
import StatusBar from '@/layout/statusBar'
import NavBar from '@/layout/navBar'
import titleBar from '@/layout/titleBar'
import Nat from 'natjs'
export default {
  components: {
    StatusBar,
    NavBar,
    titleBar
  },
  data() {
    return {
      name: 'sms'
    }
  },
  methods: {
    sms() {
      Nat.sms('415-736-0000')
    },
    mutilSms() {
      Nat.sms(['10000', '10086'])
    },

    mutilSmsWithCb() {
      Nat.sms(['10000', '10086'],'hello world',()=>{
        Nat.toast('sms popup')
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/case.less';
</style>
