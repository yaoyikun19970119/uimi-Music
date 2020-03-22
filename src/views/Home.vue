<template>
  <div class="home">
    <div class="login-title">专属于你的音乐</div>
    <SearchBar @sing='searchSing' />
    <Results :singList='singList' @itemId='getSongId' />
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop ,Watch} from "vue-property-decorator";
import SearchBar from '../components/header.vue'
import {search} from '../api/sing'
import  Results from '../components/result.vue'
@Component({
    components:{
     SearchBar,
     Results
    }
})
export default class Home extends Vue {
    private singObj:Object=[];
    private singList:any[]=[];


    private async searchSing(arg:any){
        this.singObj= await search(arg);
        this.singList=this.singObj.data.result.songs;
    }

    private getSongId(arg:number){
        console.log(arg);  //组件传值歌曲id
    }
}
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
