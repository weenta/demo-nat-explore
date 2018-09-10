<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='toast'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple toast</text>
        </div>
        <text class='code'>
          Nat.toast('what\'s up')
        </text>
      </div>
      <div class='case' @click='toastCustom'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Toast with custom position and duration</text>
        </div>
        <text class='code'>
          Nat.toast({
            message:'what\'s up',
            duration: 3000,
            position: 'middle'
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
      name: 'toast',
    }
  },
  methods: {
    toast() {
      Nat.toast('what\'s up')
    },

    toastCustom() {
      Nat.toast({
        message: 'what\'s up',
        duration: 3000,
        position: 'middle'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
