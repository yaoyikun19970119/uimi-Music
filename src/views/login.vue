<template>
  <div class="login">
    <div class="login-title ">专属于你的音乐</div>
    <img class="login-img" src="../assets/login.jpeg" alt />
    <loginTip />
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import loginTip from "../components/login-tip.vue";
@Component({
  components: {
    loginTip
  }
})
export default class Login extends Vue {}
</script>


<style lang="less" scoped>
.login {
  min-width: 1000px;
  height: 950px;
  position: relative;
  background:linear-gradient(45deg,#8cdaf3,#d3f5fa);
  .login-img {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 800px;
    height: 500px;
  }
  .login-title {
    text-align: center;
    font-size: 50px;
    padding-top: 50px;
    font-family:Arial, Helvetica, sans-serif; 
  }
}
</style>
