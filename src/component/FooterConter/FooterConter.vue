<template>
  <div class="footerConter">
           <div class="footer" @click="goRouter('/home')" :class="{active:$route.path=='/home'}">
               <i class="iconfont icon-home"></i>
               <span>首页</span>
          </div>  
          <div class="footer"  @click="goRouter('/list')" :class="{active:$route.path=='/list'}">
               <i class="iconfont icon-fenlei"></i>
               <span>分类</span>
          </div>  
          <div class="footer"  @click="goRouter('/deserve')" :class="{active:$route.path=='/deserve'}">
               <i class="iconfont icon-icon_A"></i>
               <span>值得买</span>
          </div>  
          <div class="footer"  @click="goRouter('/shopcar')" :class="{active:$route.path=='/shopcar'}">
               <i class="iconfont icon-gouwuchekong"></i>
               <span>购物车</span>
          </div> 
          <div class="footer"  @click="goRouter('/person')" :class="{active:$route.path=='/person'}">
               <i class="iconfont icon-geren"></i>
               <span>个人</span>
          </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goRouter(path){
              if(this.$route.path!==path){
                   this.$router.push(path)
              }
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.footerConter
 position fixed
 font-size 28px
 left 0
 bottom 0
 width 100%
 height 150px
 background white
 z-index 200
 box-sizing border-box
 display flex
 .footer
  box-sizing border-box
  display flex
  flex-direction column
  width 25%
  height 150px
  text-align center
  &.active
    color red
  .iconfont
   margin-bottom 20px
   margin-top 20px
   font-size 40px
   
</style>
