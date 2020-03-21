<template>
   <div class="login">
       <div class="login-title">UIMI 音乐</div>
       <img class="login-img" src="../assets/login.jpeg" alt="">
       
   </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component
export default class Login extends Vue {

   
}
</script>


<style lang="less" scoped>
.login{
    min-width: 1000px;
    height: 950px;
    position: relative;
    background-color: aqua;
    .login-img{
        position: absolute;
        top: 20%;
        left: 10%;
        width: 800px;
        height: 500px;
    }
    .login-title{
        text-align: center;
        font-size: 50px;
        padding-top: 50px;
    }
}
</style>
