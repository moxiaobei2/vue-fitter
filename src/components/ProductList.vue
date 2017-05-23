<template>
<ul class="m-tabs-list">
              <li>
                <div>
                  <img src="http://img.weiye.me/zcimgdir/album/file_58db50eeb3f48.png">
                  <p>知性女人款</p>
                  <p class="f-cp f-tar">100.00</p>
                </div>
                <div>
                  <img src="http://img.weiye.me/zcimgdir/thumb/t_149076821058db5152aa659.png">
                  <p>知性女人款</p>
                  <p class="f-cp f-tar">100.00</p>
                </div>
              </li>
  
              <li>
                <div>
                  <img src="http://img.weiye.me/zcimgdir/thumb/t_149076826358db51874066a.png">
                  <p>知性女人款</p>
                  <p class="f-cp f-tar">100.00</p>
                </div>
                <div>
                  <img src="http://img.weiye.me/zcimgdir/thumb/t_149069544858da351810d27.png">
                  <p>知性女人款</p>
                  <p class="f-cp f-tar">100.00</p>
                </div>
              </li>
            </ul>
</template>
<script>
export default {
  name: "project-list",
  data () {
    return {
    };
  }
}
</script>
<style lang="css" scoped>
.m-tabs-list {
    display: flex;
  }
  
  .m-tabs-list li {
    width: 48%;
    flex: 1;
  }
  
  .m-tabs-list li div {
    width: 100%;
    text-align: center;
  }
  
  .m-tabs-list li div img {
    width: 90%;
    margin: 0 auto;
    display: block;
  }
</style>