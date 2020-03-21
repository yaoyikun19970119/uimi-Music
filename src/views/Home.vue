<template>
  <div class="home">
    <div class="login-title">专属于你的音乐</div>
    <loginTip />
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {}
</script>


<style lang="less" scoped>
.home {
    min-width: 1000px;
  height: 950px;
  position: relative;
  background:linear-gradient(45deg,#8cdaf3,#d3f5fa);

  .login-title {
    text-align: center;
    font-size: 50px;
    padding-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
