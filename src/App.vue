<template>
  <div>
      <FooterConter/>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterConter from './component/FooterConter/FooterConter'
  export default {
    components:{
      FooterConter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 .homeContoer
  width 100%
  height 100%
  
</style>
