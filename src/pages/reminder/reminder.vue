<template>
  <div>
        <HeaderConter />
        <div class="headerTop"></div> 
        <div class="headerIpunt">
           <div class="iptSeach">
              <input type="text" placeholder="奥特曼专打怪兽?">
           </div>
           <span class="cancel" @click="goHome">取消</span>
           <img src="./iii.png" alt="">
        </div>
        <div class="hot_Search"><h2>热门搜索</h2></div> 
        <div class="navList">
             <span>洗手液</span>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goHome(){
        this.$router.push('/home')
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .headerTop
     height 100px
   .headerIpunt
     margin 10px 20px
     display flex
     padding 0 20px
     height 84px
     line-height 74px
     
     .iptSeach
      margin-top 10px 
      height 60px
      width 580px
      line-height 45px
      background #f4f4f4
      text-align center
      position relative
      input
       
       width 100%
       height 100% 
       line-height 45px
       background #f4f4f4
       border 0 
       outline: none
       background-color: transparent
       font-size 26px
       padding-left 80px
     .cancel
      z-index 99 
      background white
      font-size 28px
      text-align center
      margin-left 30px
     img
      position absolute
      left 70px
      top 128px
      width 45px
      height 45px 
      background #f4f4f4;
      border-radius 50%
   .hot_Search
     height 60px
     padding 0 40px
     line-height 60px
     font-size 28px
     color #BEBEBE
     font-family '宋体'
   .navList
    height 323px
    padding 40px 40px
    box-sizing border-box
    font-size 24px 
    span 
     border 2px solid #999999
     padding 10px
</style>
