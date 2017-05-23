<template>
  <div class="m-discount">
    <x-header> </x-header>
    <div class="m-discount-info">
      <p>新人专用券</p>
      <p>（本店通用哦）</p>
    </div>
    <div class="m-discount-ct">
      <a href="javascript:void(0)" @click="showDiscount"> <img src="http://img.weiye.me/zcimgdir/album/file_58ef5104cc3ee.png"></a>
      <router-link to=""> <img src="http://img.weiye.me/zcimgdir/album/file_58ef5104b95b1.png"></router-link>
    </div>
  
  
  
    <popup v-model="showPopup" height="100%">
      <div class="m-discount-popup">
        <a href="javascript:void(0)" @click="hideDiscount">
          <icon type="cancel"></icon>
        </a>
        <div class="m-discount-panel">
          <header>
            <p>美容 造型 塑形 </p>
            <h1>10元新人券</h1>
          </header>
          <article>
            <p>使用条件：满50.00元减10.00元</p>
            <p>可用时间：2017-04-14-2017-04-21 00:00-23:59</p>
            <p style="border-top:.1rem dashed #E4E4E4;">地址 : 深圳市南山区软件产业基地芒果网大厦1505</p>
            <p style="border-top:.1rem dashed #E4E4E4;">电话 : <a href="tel:0755-8888888">0755-8888888</a></p>
            <p>
              <div class="m-btn">领取</div>
            </p>
          </article>
        </div>
  
      </div>
    </popup>
  
  
  </div>
</template>

<script>
  import {
    XHeader,
    Popup,
    Icon
    //TransferDom,
  } from 'vux';
  export default {
    name: "discount",
    // directives: {
    //   TransferDom
    // },
    components: {
      XHeader,
      Popup,
      Icon
    },
    data() {
      return {
        showPopup: false
      };
    },
    methods: {
      showDiscount() {
        this.showPopup = true;
      },
      hideDiscount() {
        this.showPopup = false;
      }
    }
  }
</script>

<style lang="css" scoped>
  .m-discount {
    position: relative;
  }
  
  .m-discount-info {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgb(34, 34, 34);
    border-style: none;
    border-width: 2px;
    color: rgb(128, 68, 37);
    font-size: 16px;
    height: 19px;
    line-height: 19px;
    margin-left: 0px;
    margin-top: 0px;
    opacity: 1;
    text-align: left;
    position: absolute;
    left: 80px;
    top: 150px;
    margin-right: 0px;
    z-index: 2;
  }
  
  .m-discount-ct {
    background: url(/static/img/discount-bg.4593438.png) no-repeat;
    background-size: contain;
    background-color: #FEE26D;
    position: fixed;
    left: 0;
    top: calc(100%-50);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .m-discount-ct a {
    text-align: center;
  }
  
  .m-discount img {
    width: 80%;
  }
  
  .m-discount-popup {
    background: #5ADCDE;
    width: 100%;
    height: 100%
  }
  
  .m-discount-panel {
    background: #fff;
    border-radius: .6rem;
    margin-left: 5%;
    margin-right: 5%;
    padding: .5rem;
    text-align: left;
    margin-top: 30%;
  }
  
  .m-discount-panel header {
    text-align: center;
    margin-bottom: 5%;
  }
  
  .m-discount-panel p {
    line-height: 1.8;
  }
  
  .m-discount-panel .m-btn {
    height: 45px;
    width: 60%;
    background: #ffd63c;
    border-radius: 10px;
    text-align: center;
    line-height: 45px;
    font-size: 18px;
    color: #fff;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>