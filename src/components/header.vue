<template>
  <div id="SearchBar">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="song" @keyup.enter="search" class="searchInput">
        <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component({})
export default class SearchBar extends Vue {
  private song: any = "";

  @Emit("sing") private search() {
    if (this.song == "") {
      alert("请输入歌名");
      return;
    }
    return this.song;
  }
}
</script>


<style lang="less" scoped>
#SearchBar {
  height: 50px;
  .search {
    height: 100%;
    width: 20%;
    margin: 0 auto;
    margin-top: 50px;
  }
}
</style>
