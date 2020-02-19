<template>
  <div class="HeaderConter">
       
       <div class="header"  >
         <div class="left">严选</div>
         <div class="mid">
           <span>前往app查看更多特惠商品</span>
           <span class="span">网易自营 品议生活</span>
         </div>
         <div class="right">打开app</div>
       </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShow:false
      }
    },
    methods: {
   
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.HeaderConter
 z-index 100
 background #333431 
 color #ccccca
 position fixed
 left 0
 top 0
 height 104px
 font-family '宋体'
 width 100%
 z-index 100
 
  height 0px 
 .header
  display flex
  padding 0 20px
  .left
   width 80px
   height 80px
   line-height 80px
   background #cf1d1d
   border-radius 20%
   margin-top 10px
   text-align center
   font-size 16px
  .mid
   margin-left 10px
   display flex
   flex-direction column 
   margin-top 20px
   font-size 16px
   .span
    margin-top 10px
    font-size 8px
  .right
   font-size 16px
   margin-left 180px
   width 150px
   height 50px
   background #cf1d1d
   text-align center
   margin-top 20px 
   text-align center
   line-height 50px
   
   
</style>
