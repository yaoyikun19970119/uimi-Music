<template>
  <div class="result" v-if="singList.length!=0">
    我是results组件
    <div class="song" v-for="(item,index) in singList" :key="index">
      <div class="name">
        <span class="iconfont icon-play" @click="itemId(item.id)"></span>
        {{item.name}}
        <span
          class="iconfont icon-editmedia"
          v-if="item.mvid!=0"
          @click="$router.push(`/mv/${item.mvid}`)"
        ></span>
        <span class="singer">{{item.artists[0].name}}</span>
        <span class="album">《{{item.album.name}}》</span>
        <span class="time">{{item.duration | formatDate}}</span>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from "vue-property-decorator";
import { formatDate } from "@/utils/filterDate.js";

@Component({
  filters: {
    setDuration(arg: number) {
      return formatDate(arg);
    }
  }
})
export default class Results extends Vue {
  private list: Array<any> = [];

  @Prop() private singList!: Array<any>;

  created() {}

  @Watch("singList")
  private singChanged(val: [], oldVal: []): void {
    this.list = val;
  }

  @Emit("itemId")
  private itemId(val: number) {}
}
</script>


<style lang="less" scoped>
.result {
    height: 700px;
    overflow: hidden;
  .song {
    height: 30px;
    width: 800px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
  }
}
</style>
