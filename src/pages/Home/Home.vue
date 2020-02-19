<template>
  <div class="homeContoer">
     <HeaderConter />
     <div class="headerTop"></div>
    <div class="header">
       <div class="left">
         <h1><img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt=""></h1>
       </div>

         <div class="mid" @click="goReminder">
         <!-- <span class="iconfont icon-sousuo4">111</span> -->
         <input type="text" placeholder="搜索商品">
       </div>

       <div class="right">
         <span>登录</span>
       </div>
    </div>
    <div class="navlist">
         <ul class="list">
           <li v-for="(item,index) in demo" :key="index">
             <a href="##">{{item.name}}</a>
           </li>
          
         </ul>
        <div class="iconfont  icon-jiantou-copy-copy"></div>
    </div>
    <!-- 轮播图 -->
   <div class="swiper-container">
     <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/b3782def13e1fbba9f08bf8545be15d0.png?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/100b633b1b237e0102458bbf4d851cb9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/6b1ebd19470cea9a7b8e81a52485f414.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/6b1ebd19470cea9a7b8e81a52485f414.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/fbdf6fb0eedb27d0adc33c5bc105b5f5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/3d4fbbc11172e79e3842671c447daea9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/c6a5af1034122a96a38fafd4b1ef2e7d.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
   </div>
    <div class="swiper-pagination"></div>
  </div>
   <div class="after">
     <div class="afterList">
  
         <span>网易自营品牌</span>
     </div>
     <div class="afterList">
         <span>30天无忧退货</span>
     </div>
     <div class="afterList">
         <span>48小时快速退款</span>
     </div>

   </div>
   <!-- 商品 -->
   <div class="shop">
         <ul>
           <li v-for="(shop,index) in shopdatas" :key="index">
              <img :src='shop.picUrl' alt="">
              <span>{{shop.text}}</span>
           </li>
         </ul>
   </div>
   <div class="logo">
           <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
   </div>
   <div class="imgList">
       <!-- <div class="imgTop">
         <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
       </div> -->
       <div class="imgmid"></div>
   </div>
   <div class="newPerson">
     <span>— 新人专享礼 —</span>
   </div>
   <div class="gift">
     <div class="left">
       <span>新人专享礼包</span>
       <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""></div>
     <div class="right">
         <div class="top">
            <span>福利社</span>
            <span>今日特价</span>
           <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></div>
         <div class="bottom">
           <span>新人拼团</span>
           <span>1元起包邮</span>
         </div>
     </div>
   </div>
   <div class="borderNo"></div>
   <div class="hostRoom">
       <span>类目热销榜</span>
   </div>
   <div class="hostList">
      <div class="host-left">
        <div class="host-T">
           <div class="more"></div>
          <img src="https://yanxuan-item.nosdn.127.net/487de4b51822cf85b859bb94cd65e9a6.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="host-b">
            <ul>
                 <li><img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/5ad3990d8d1ca731b56ee11d151facfd.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/5ad3990d8d1ca731b56ee11d151facfd.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
            </ul>
        </div>
      </div>
      <div class="host-right">
        <div class="host-Tl">
          <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="host-bb">
            <ul>
                 <li><img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/28748d12b532138f1a0b7f5ffca006f4.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
                 <li><img src="https://yanxuan-item.nosdn.127.net/a9d6de39ab17ab82d5424205dafc4136.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></li>
            </ul>
        </div>
      </div>
   </div>
   <div class="footer">
      <div class="footerTop">
        <span>下载App</span>
        <span>电脑版</span>
      </div>
      <div class="footerBottom">
         <span>网易公司版权所有 © 1997-</span>
         <span>食品经营许可证：JY13301080111719</span>
     </div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll  from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        // shopdatas:[]
      }
    }, 
      methods:{
         goReminder(){
           this.$router.push('/reminder')
         }
      },
      
      mounted(){
       new BScroll('.navlist', {
            scrollX: true,   
            click : true
       })
      //   new BScroll('.homeContoer', {
      //       scrollY: true,   
      //       click : true
      //  })
      
        new Swiper('.swiper-container',{
                pagination:{
                  el: '.swiper-pagination'
                },
                loop: true
                  
              }) 
      this.$store.dispatch('getdemo')
      this.$store.dispatch('getShopdata')
      
    },
      computed:{
        // ...mapState(['demo','shopdatas'])
        ...mapState({
          demo:state=> state.demo,
          shopdatas: state=> {
            if(state.shopdatas.kingKongModule){
               return state.shopdatas.kingKongModule.kingKongList
            }
              
          }       
        })
      },
      watch:{
       
      }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.homeContoer
  width 100%
  height 100%
  padding 100px 0 0 0
 .header
  
  height 80px
  padding  12px 15px
  display flex
  box-sizing border-box
  .left 
   width 140px
   height 40px
   text-align center
   margin-top 10px
   img 
    width 100%
    height 100%
    display block
  .mid 
   width 442px
   height 52px
   margin-left 40px
   margin-top 5px
   input
    width 100%
    height 100%
    border-radius 10px 
    padding 0 60px
    background #ededed
    box-sizing border-box
  .right
   float right
   margin-left 40px
   width 74px
   height 40px
   border 1px solid  red
   text-align center
   line-height 40px   
   color red
   margin-top 8px
 .navlist
   position relative
   width 100%
   font-size 26px
   height 60px
   font-weight 700
   overflow hidden
  .iconfont
    width 100px
    height 60px
    background white 
    position absolute
    right 0
    bottom 0
    text-align center
    line-height 60px 
    z-index 99
  .list
    display flex
    position absolute
    left 0
    top 0
   
   // overflow hidden
   li 
    margin 0 5px
    width 140px
    height 60px
    text-align center
    line-height 60px
    text-align center
    display inline-block
    a
     display block 
     width 120px
     height 60px    
 .swiper-container
   width 100%
   height 370px
   .swiper-wrapper
    width 100%
    height 100%
    display flex
    img 
     width 100%
     height 100%
     .swiper-pagination
       >span.swiper-pagination-bullet-active
        background #02a774

 .after
   padding 0 30px
   height 72px
   display flex  
   line-height 72px
   text-align center
   .afterList
     flex 1       
 
 .shop
  width 100%
  height 340px 
  ul
   width 100%
   padding 5px
   li
    width 100px
    height 100px
    margin 0 20px
    margin-top 20px
    background #DCDCDC
    border-radius 10%
    img
     width 100%
     height 100%
     display block
 .logo
  height 240px
  background yellow
  width 100%
  img 
   width 100%
   height 100%
   display block
 .newPerson
   span
    height 100px
    background pink 
    display block
    text-align center
    line-height 100px
    font-size 32px 
 .gift
    padding 0  40px 40px 40px
    box-sizing border-box
    height 420px
    width 100%
    display flex
    .left 
      padding-top 60px
      width 50%
      background #FFCCCC 
      text-align center
      font-size 30px
      img 
       margin-top 20px
       width 250px
       height 250px   
      
    .right 
      width 50%  
      background red
      .top
        padding-top 20px
        font-size 28px
        box-sizing border-box
        height 50%
        background #FFCCFF
        img 
         margin-left 140px
         
         width 200px
         height 200px
      .bottom 
        height 50%  
        background #FFFFCC
        display flex
        flex-direction column
        font-size 24px
        span
         margin-top 10px
         margin-left 10px
 .borderNo 
  width 100%
  height 20px
  background #CCCCFF   
 .hostRoom  
   height 100px
   padding 0 40px
   font-size 32px
   line-height 100px
 .hostList
   height 550px  
   position relative
   padding  0 40px
   display flex
   
   .host-left
    height 100%
    width 50%
    .host-T
     padding-right 10px
     box-sizing border-box
     width 100%
     height 224px
     background #FFFFCC
     .more
       content ""
       width 10px
       height 224px
       background white
       position absolute
       left 370px
       top 0
      
     img
      display block
      padding-top 20px
      padding-left 140px
      width 200px
      height 200px
    .host-b
     width 100%
     ul 
      width 100%
      height 224px
      
      li 
       width 47%
       height 140px
       background #CCFFCC  
       float left
       margin-top 20px
       img 
        width 120px
        height 120px
   .host-right
    height 100%
    width 50%
     
    .host-Tl
     padding-right 10px
     box-sizing border-box
     width 100%
     height 224px
     background #99CCFF
     img
      display block
      padding-top 20px
      padding-left 140px
      width 200px
      height 200px
    .host-bb
     width 100%
     ul 
      width 100%
      height 224px
      
      li 
       width 47%
       height 140px
       background #CCCCFF  
       float left
       margin-top 20px
       img 
        width 120px
        height 120px 
 .footer 
  height 360px
  width 100% 
  background #333333
  margin-top 40px
  color white
  .footerTop
   font-size 24px
   display flex
   margin-left 100px
   span 
    display block
    width 200px
    height 80px
    margin 40px 65px 
    width 150px
    height 40px
    text-align center
    border 1px solid white
    line-height 40px
  .footerBottom
   display flex
   padding 0 160px
   flex-direction column
   span
    display block
    margin 4px
    color #999999
  
</style>
