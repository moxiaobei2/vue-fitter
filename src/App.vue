<template>
  <div id="app">
    <router-view></router-view>
    <!-- 是否要显示nav-->
    <tabbar v-show="showNav">
      <tabbar-item selected :link="{path:'/'}">
        <img slot="icon" src="./assets/bf_icon.png">
        <img slot="icon-active" src="./assets/bf_icon_active.png">
        <span slot="label">美丽</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/shops'}">
        <img slot="icon" src="./assets/shop_icon.png">
        <img slot="icon-active" src="./assets/shop_icon_active.png">
        <span slot="label">店铺</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/test'}">
        <img slot="icon" src="./assets/shesay_icon.png">
        <img slot="icon-active" src="./assets/shop_icon_active.png">
        <span slot="label">她说</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="{path:'/mine'}">
        <img slot="icon" src="./assets/mine_icon.png">
        <img slot="icon-active" src="./assets/mine_icon_active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  //<router-view></router-view> 如果是单个router
  import {
    Tabbar,
    TabbarItem
  } from 'vux';
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    },
    watch: {
      // 如果路由有变化，会执行该方法
      '$route': function() {
        this.routeChange()
      }
    },
    data:function(){
      return {
        showNav:true
      }
    },
    methods: {
      routeChange() {
        let path = this.$route.path;
        
        if (path === '/' || path === '/cinema' || path === '/me') {
          this.showNav = true
        } else {
          this.showNav = false
        }
        
      }
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        isLoading: state => state.vux.isLoading,
        direction: state => state.vux.direction
      }),
      // isShowBar() {
      //   if (/component/.test(this.path)) {
      //     return true
      //   }
      //   return false
      // },
    }
  }
</script>

<style lang="less">
//公共部分css
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }

   .f-cp {
    color: pink;
  }
  
  .f-tar {
    text-align: right;
    margin-right: 1rem;
  }
  
  .f-cs {
    color: #E4E4E4;
    font-size: 12px;
  }

   
  ul li {
    list-style: none;
  }
  
  
</style>
