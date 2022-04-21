<template  style="height: 100%">
  <div style="height: 100%; position: relative" id="capriAside">
    <el-menu :default-active="defaultActiveIndex"
             style="height: 100%"
             rounter="rounter" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <a :href=item.href v-for="(item, t) in guides[path]" >
        <el-menu-item v-bind:index="t+''" v-bind:key="item.href">

          <i v-bind:class=item.icon></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

      </a>
    </el-menu>

    <div @click="switchAsideStatue" id="clsSwitcher">
      <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      <i class="el-icon-s-fold" v-show="!isCollapse"></i>
    </div>
  </div>
</template>

<script>
import config from "~/config/config";
export default {
  name: "Aside",

  data() {
    return {
      defaultActiveIndex: null,
      rounter: true,
      isCollapse: false,
      path: null,
      guides: config.guides,
    };
  },
  created() {
    let v = this;
    let arr = location.href.split('/');
    if(arr.length >= 4) {
      v.path = arr[3];
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    switchAsideStatue() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical {
  text-align: center;
  line-height: 200px;
}
.el-menu-vertical{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
a {
  color: inherit;
}
#clsSwitcher {
  width: 100%;
  font-size: x-large;
  cursor: pointer;
  line-height: 65px;
  text-align: center;

  position: absolute;
  bottom: 0;
}
#clsSwitcher:hover {
  color: #ef4f0f;
}

ul {
  height: 100%;
}

.el-menu-item i {
  color: #FFFFFF !important;
}
</style>