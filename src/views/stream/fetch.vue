<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='fetch'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Simple fetch</text>
        </div>
        <text class='code'>
          Nat.fetch(this.url, (err, res) => {
              if (err) {
                Nat.toast('[ERROR] ' + JSON.stringify(err))
                return
              }

              Nat.toast(JSON.stringify(res))
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
      name: 'fetch',
      url: 'https://suggest.taobao.com/sug?q=htc'
    }
  },
  methods: {
    fetch() {
      Nat.fetch(this.url, (err, res) => {
        if (err) {
          console.log('--------->err',err)
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }

        Nat.toast(JSON.stringify(res))
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/case.less';
</style>
