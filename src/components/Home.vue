<template>
  <scroller>
    <div class="g-doc">
  
      <swiper auto loop dots-position="center">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in swiper_list" :key="index">
          <img :src="item">
        </swiper-item>
      </swiper>
  
      <div class="m-element">
        <ul>
          <li>
            <router-link to="/list/0">
              <img src="../assets/facial_icon.png" /> 美甲
            </router-link>
          </li>
  
          <li>
            <router-link to="/list/1">
              <img src="../assets/bf_icon.png" /> 美容</router-link>
          </li>
          <li>
            <router-link to="/list/2"><img src="../assets/style_icon.png" /> 造型</router-link>
          </li>
        </ul>
  
        <ul>
          <li>
            <router-link to="/list/3"> <img src="../assets/nail_icon.png" /> 按摩</router-link>
          </li>
          <li>
            <router-link to="/list/4"> <img src="../assets/bell_icon.png" /> 塑型</router-link>
          </li>
          <li>
            <router-link to="/discount"> <img src="../assets/cheapper_icon.png" /> 优惠</router-link>
          </li>
        </ul>
  
  
      </div>
  
      <div class="m-all-like f-bb2">
        <p class="m-title"><span>大家都在买</span><em></em></p>
        <ul class="m-all-like-list">
          <li>
            <img src="../assets/all-like-0.png" />
            <div class="m-counts">4折</div>
            <div class="m-info">
              <div class="m-title">【产后修复】盆底肌&骨盆&瘦腰腹</div>
              <div class="m-title-sub f-cs">也可以变成“辣”妈 ！</div>
              <div class="m-price"><span class="f-cp">¥280</span><span class="f-cs">原价¥300</span></div>
            </div>
          </li>
          <li>
            <img src="../assets/all-like-1.png" />
            <div class="m-counts">6.5折</div>
            <div class="m-info">
              <div class="m-title">【面部保湿】+背部舒缓+颈部提升腹</div>
              <div class="m-title-sub f-cs">让自己松弛舒缓一下</div>
              <div class="m-price"><span class="f-cp">¥680</span><span class="f-cs">原价¥800</span></div>
            </div>
          </li>
  
        </ul>
      </div>
  
      <!-- tabs start-->
      <div class="m-comment">
        <tab active-color="pink">
          <tab-item selected @on-item-click="onTabItemClick">推荐</tab-item>
          <tab-item @on-item-click="onTabItemClick"> 美甲</tab-item>
          <tab-item @on-item-click="onTabItemClick">美容</tab-item>
          <tab-item @on-item-click="onTabItemClick">造型</tab-item>
          <tab-item @on-item-click="onTabItemClick"> 按摩</tab-item>
          <tab-item @on-item-click="onTabItemClick">塑型</tab-item>
          <tab-item @on-item-click="onTabItemClick">优惠</tab-item>
        </tab>
  
        <swiper :show-dots="false" :value="currentTab" height="30rem">
          <swiper-item>
           <product-list></product-list>
          </swiper-item>
  
  
        </swiper>
      </div>
      <!-- tabs end-->
  
    </div>
  
  </scroller>
</template>

<script>
  import {
    Scroller,
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Loading
  } from 'vux';
  import ProductList from '../components/ProductList.vue';
  export default {
    name: "Home",
    components: {
      Scroller,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      Loading,
      ProductList
    },
  
    data() {
      return {
        "swiper_list": ['http://placeholder.qiniudn.com/640x300/FF3B3B/ffffff',
          'http://placeholder.qiniudn.com/640x300/FFEF7D/ffffff',
          'http://placeholder.qiniudn.com/640x300/8AEEB1/ffffff'
        ],
        currentTab: 0
      };
    },
    methods: {
      onTabItemClick: function(index) {
        this.$vux.loading.show({
          text: 'Loading'
        });
  
        setTimeout(() => {
          this.currentTab = index;
          this.$vux.loading.hide()
        }, 2000)
      }
    }
  }
</script>

<style lang="css" scoped>
  .g-doc {
    padding-bottom: 3rem;
  }
 
  .swiper-demo-img .swiper-demo-img img {
    width: 100%;
  }
  
  .m-element {
    padding: 10px;
    border-bottom: .2rem solid #F4F4F4;
  }
  
  .f-bb2 {
    border-bottom: .2rem solid #F4F4F4;
  }
  
  .m-element ul {
    display: flex;
  }
  
  .m-element ul li {
    flex: 1;
    text-align: center;
  }
  
  .m-element ul li img {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  
  .m-all-like .m-title,
  .m-all-like .m-title-sub,
  .m-all-like .m-price {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .m-all-like .m-title span {
    width: 30%;
    padding: .5rem;
    text-align: center;
    position: relative;
    background: #fbf9fe;
  }
  
  .m-all-like .m-title span:before {
    position: absolute;
    content: ".";
    left: .6rem;
    top: 0;
  }
  
  .m-all-like .m-title span:after {
    position: absolute;
    content: ".";
    right: .6rem;
    top: 0;
  }
  
  .m-all-like .m-title em {
    width: 50%;
    position: absolute;
    z-index: -1;
    border: 1px solid silver;
  }
  
  .m-all-like-list li {
    position: relative;
    display: block;
    width: 100%;
    height: 9.5rem;
  }
  
  .m-all-like-list img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  
  .m-all-like-list .m-counts {
    background: url("../assets/all-like-count.png") no-repeat;
    background-position: 35% 0;
    color: #fff;
    padding-left: 33%;
    font-size: .8rem;
  }
  
  .m-all-like-list .m-info {
    width: 70%;
    float: right;
    margin-top: 5%;
  }
  
  .m-all-like-list .m-price span {
    margin-right: 2rem;
  }
  
</style>