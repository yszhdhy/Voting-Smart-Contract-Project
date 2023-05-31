<script setup>
import {ref} from "vue";

const active = ref('')

</script>

<template>

  <div>
    <nav class="header">去中心化投票APP</nav>
    <main>
      <RouterView/>
    </main>
    <van-tabbar route v-model="active" active-color="#ee742f">
      <van-tabbar-item to="/" icon="search">分发票券</van-tabbar-item>
      <van-tabbar-item to="/account" icon="setting-o">账户信息</van-tabbar-item>
      <van-tabbar-item to="/board" icon="setting-o">投票看板</van-tabbar-item>
    </van-tabbar>
  </div>

</template>


<style lang="less" scoped>
.header {
  height: 44px;
  background-color: #ee742f;
  color: #fff;
  text-align: center;
  line-height: 44px;
}

</style>

<style  lang="less">
html,
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
