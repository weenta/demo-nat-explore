<template>
  <div class='wrapper'>
    <status-bar :show='false'/>
    <list class='list'>
      <cell>
        <image :src='cdnUri + "logo.png"' class='app-logo'/>
        <div class='app-name'>
          <text class='bold'>Demo nat</text>
          <text class='light'>Explorer2</text>
        </div>
      </cell>
      <cell v-for='(item,i) in modules' :key='i'>
        <module :name='item.name' :functions='item.functions'/>
      </cell>
    </list>
  </div>
</template>

<script>
import env from '@/utils/env'
import modules from '@/ini/modules'
import Module from '@/components/Module'
import stutusBar from '@/layout/statusBar'
export default {
  name: 'App',
  components: {
    Module,
    stutusBar
  },
  data () {
    return {
      cdnUri: env.cdnUri,
      modules,
    }
  },
  created() {
  }
}
</script>

<style lang='less' scoped>
  @import './assets/css/base.less';
  .app-logo {
    width: 82px;
    height: 82px;
    margin-top: 32px;
    margin-left: 48px;
    margin-bottom: 18px;
  }
  .app-name {
    height: 100px;
    margin-left: 48px;
    margin-right: 48px;
    margin-bottom: 48px;
    flex-direction: row;
    align-items: center;
  }
  .bold {
    color: @ink;
    font-size: @font-size-xl;
    font-weight: 700;
  }
  .light {
    color: @ink;
    font-size: @font-size-xl;
    font-weight: 200;
    margin-left: 24px;
  }
</style>
