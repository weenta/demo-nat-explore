<template>
  <div>
    <status-bar background-color='#999'/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <div class='case' @click='mail'>
        <title-bar :title='name'/>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple Mail</text>
        </div>
        <text class='code'>
          Nat.mail('demonat@qq.com')
        </text>
      </div>
    </scroller>
  </div>
</template>

<script>
import NavBar from '@/layout/navBar'
import StatusBar from '@/layout/statusBar'
import TitleBar from '@/layout/titleBar'
import Nat from 'natjs'
export default {
  components: {
    NavBar,
    StatusBar
  },
  data() {
    return {
      name: 'mail'
    }
  },
  methods: {
    mail() {
      Nat.confirm('send mail?')
    }
  }
}
</script>
