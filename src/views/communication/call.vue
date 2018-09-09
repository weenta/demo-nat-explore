<template>
  <div>
    <status-bar background-color='#67C23A'/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <title-bar :title='name' @click='showModal'/>
      <div class='case' @click='call'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple Call</text>
        </div>
        <text class='code'>
          Nat.call('10010')
        </text>
      </div>
      <div class='case' @click='callWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Call with callback</text>
        </div>
        <text class='code'>
          Nat.call('10010',()=>{
            Nat.toast('called')
          })
        </text>
      </div>
      <div class='case' @click='showModal'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>isX?</text>
        </div>
        <text class='code'>
          check is iphoneX
        </text>
      </div>
    </scroller>
  </div>
</template>

<script>
import TitleBar from '@/layout/titleBar'
import NavBar from '@/layout/navBar'
import StatusBar from '@/layout/statusBar'
import env from '@/utils/env'
import Nat from 'natjs'
export default {
  components: {
    TitleBar,
    NavBar,
    StatusBar
  },
  data() {
    return {
      name: 'call'
    }
  },
  methods: {
    call() {
      Nat.call('10010')
    },
    callWithCb() {
      Nat.call('10086',()=>{
        console.log('called')
      })
    },
    showModal() {
      let isX = env.platform === 'ios' && env.deviceWidth === 1125 && env.deviceHeight === 2436
      console.log('------>isX',isX)
      Nat.confirm('isX: ' + isX )
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
