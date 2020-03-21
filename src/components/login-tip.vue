<template>
  <div class="loginTip">
    <div class="loginTip-Model">
      <div class="Title">UIMI Music</div>
      <el-input placeholder="请输入账号" class="input" v-model="inputUser"></el-input>
      <el-input placeholder="请输入密码" class="input" v-model="inputPassword" type="password"></el-input>
      <el-row >
        <el-button  type="primary" class="loginClick" @click='loginClick' plain>点击登录</el-button>
      </el-row>
    </div>
  </div>
</template> 


<script lang="ts">
import { Component, Vue, Emit, Prop, Model } from "vue-property-decorator";

@Component
export default class LoginTip extends Vue {
  private inputUser: any = "";
  private inputPassword: any = "";
  private loginClick(){
      if(this.inputUser.trim() && this.inputPassword.trim()){
          this.$router.push("/Home");
      }else{
          this.$message.error('空的');
          
      }
  }
  
}
</script>


<style lang="less" scoped>
.loginTip {
  position: absolute;
  right: 50px;
  top: 20%;
  width: 400px;
  height: 500px;
  background-color: #fff;
  background:linear-gradient(45deg,#d3f5fa,#8cdaf3);
  box-shadow: 0 0 20px 10px #8cdaf3;
  .loginTip-Model {
    position: absolute;
    left: 0px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 320px;
    height: 400px;
    .input {
      padding-top: 50px;
    }
    .Title {
      width: 100%;
      height: 50px;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
      color: #000;
    }
    .loginClick{
        position: absolute;
        left: 50%;
        margin-left: -50px;
        margin-top: 40px;
    }
  }
}
</style>
