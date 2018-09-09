<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='mail'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple Mail</text>
        </div>
        <text class='code'>
          Nat.mail('demonat@qq.com')
        </text>
      </div>
      <div class='case' @click='mailMuti'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Mutiple recipients</text>
        </div>
        <text class='code'>
          Nat.mail(['hi@natjs.com', 'dev@natjs.com'])
        </text>
      </div>
      <div class='case' @click='mailMutiWithCb'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Mutiple recipients and callback</text>
        </div>
        <text class='code'>
          Nat.mail(['hi@natjs.com', 'dev@natjs.com'], {
              subject: 'Subject',
              body: 'content goes here'
          }, () => {
              console.log('email popup')
          })
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
  name: 'Mail',
  components: {
    NavBar,
    StatusBar,
    TitleBar
  },
  data() {
    return {
      name: 'mail'
    }
  },
  methods: {
    mail() {
      // Nat.confirm('send mail?')
      Nat.mail('demonat@qq.com')
    },

    mailMuti() {
      Nat.mail(['hi@natjs.com', 'dev@natjs.com'])
    },

    mailMutiWithCb() {
      Nat.mail(['hi@natjs.com', 'dev@natjs.com'], {
        subject: 'Subject',
        body: 'content goes here'
      }, () => {
        Nat.toast('email popup')
      })
    }

  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/case.less';

</style>
