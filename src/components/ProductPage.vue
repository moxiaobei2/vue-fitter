<template>
  <div>
    <x-header> </x-header>
    <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-submit="onSubmit" ref="search"></search>
    <product-list></product-list>
  </div>
</template>

<script>
  import {
    XHeader,
    Search
  } from 'vux';
 import ProductList from '../components/ProductList.vue';
  
  function getResult(val) {
    let rs = []
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
  
  export default {
    name: "product-page",
    components: {
      XHeader,
      Search,
      ProductList
    },
    data() {
      return {
        value: "现在什么都不是",
        results: []
      };
    },
    methods: {
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
        this.results = val ? getResult(this.value) : []
      },
      onSubmit() {
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      }
    },
    computed: function() {
      //完成加载之后
      console.log(this); //怎么拿到参数
    }
  }
</script>

<style lang="css" scoped>
  
</style>