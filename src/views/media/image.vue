<template>
  <div>
    <status-bar/>
    <nav-bar/>
    <scroller :show-scrollerbar='false' class='content'>
      <title-bar :title='name'/>
      <div class='case' @click='pick'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Pick image from gallery</text>
        </div>
        <text class='code'>
          Nat.image.pick({
              limit: 3,
              showCamera: false
          }, (err, ret) => {
              console.log(ret.paths)
          })
        </text>
      </div>
      <div class='case' @click='preview'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Preview</text>
        </div>
        <text class='code'>
          Nat.image.preview([
              'http://cdn.instapp.io/nat/samples/yellow-metal.jpg',
              'http://cdn.instapp.io/nat/samples/bnw.jpeg',
              'http://cdn.instapp.io/nat/samples/fibonacci.jpeg'
          ], {
              current: 1,
              style: 'none'
          })
        </text>
      </div>
      <div class='case' @click='info'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Get image info</text>
        </div>
        <text class='code'>
          Nat.image.info('http://cdn.instapp.io/nat/samples/yellow-metal.jpg', (err, ret) => {
            Nat.toast(JSON.stringify(ret))
          })
        </text>
      </div>
      <div class='case' @click='exif'>
        <div class='header'>
          <text class='dot'/>
          <text class='title'>Get image EXIF-info</text>
        </div>
        <text class='code'>
          Nat.image.exif('http://cdn.instapp.io/nat/samples/yellow-metal.jpg', (err, ret) => {
            if (err) {
              Nat.toast('error' + JSON.stringify(err))
            } else {
              Nat.toast(JSON.stringify(ret))
            }
          })
        </text>
      </div>
    </scroller>
  </div>
</template>

<script>
import StatusBar from '@/layout/statusBar'
import NavBar from '@/layout/navBar'
import TitleBar from '@/layout/titleBar'
import Nat from 'natjs'
export default {
  components: {
    StatusBar,
    NavBar,
    TitleBar
  },
  data() {
    return {
      name: 'image'
    }
  },
  methods: {
    pick() {
      Nat.image.pick({
        limit: 3,
        showCamera: false
      }, (err, ret) => {
        Nat.toast('选择相片')
        console.log(ret.paths)
      })
    },

    preview() {
      Nat.image.preview([
        'http://cdn.instapp.io/nat/samples/yellow-metal.jpg',
        'http://cdn.instapp.io/nat/samples/bnw.jpeg',
        'http://cdn.instapp.io/nat/samples/fibonacci.jpeg'
      ], {
        current: 1,
        style: 'none'
      })
    },

    info() {
      Nat.image.info('http://cdn.instapp.io/nat/samples/yellow-metal.jpg', (err, ret) => {
        Nat.toast(JSON.stringify(ret))
      })
    },

    exif() {
      Nat.image.exif('http://cdn.instapp.io/nat/samples/yellow-metal.jpg', (err, ret) => {
        if (err) {
          Nat.toast('error' + JSON.stringify(err))
        } else {
          Nat.toast(JSON.stringify(ret))
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/case.less';
</style>

