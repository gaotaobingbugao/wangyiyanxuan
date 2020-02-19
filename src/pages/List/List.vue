<template>
  <div class="listConter">
    <HeaderConter />
     <div class="headerTop"></div>
     <div class="gosearch">
       <input type="text" placeholder="搜索商品">
       <span class="iconfont icon-sousuo4"></span>
     </div>
     <div class="navList">
         <div class="navListTop">
          <ul>
              <li v-for="(item, index) in navList" :key="index">{{item.name}}</li>
          </ul>
       </div>
          <div class="shopList">
          <ul>
              <li  v-for="(i,index) in 60" :key="index"    :class="{active: navIndx===index}"    @click="goNavlist(index)">{{i}}</li>    
        
          </ul>

          </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll  from 'better-scroll'
  import {mapState}from 'vuex'
  export default {
         data() {
           return {
             navIndx:0
           }
         },
         mounted(){
            new BScroll('.navListTop', {
            scrollY: true,   
            click : true,
            
          })
           new BScroll('.shopList', {
            scrollY: true,   
            click : true,
            
          })
          this.$store.dispatch('getNavlist')
         },
         methods: {
           goNavlist(index){
             this.navIndx = index
           }
         },
         computed:{
           ...mapState({
               navList:state=> state.navList.categoryL1List
           })
         }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 .headerTop
  height 102px
  background red
  
 .gosearch
  margin-top 20px
  margin-bottom 20px
  height 52px
  padding 0 50px
  position relative
  font-size 28px
  
  input
   
   width 100%
   height 100%
   background  #e6e4e1
   text-align center 
  .iconfont
   position absolute
   left 240px
   top 8px
   font-size 32px  
     
  .shopList
   height 500px
   ul 
    li 
     &.active
        color greenyellow
</style>
