<template>
  <el-header id="capriHeader">
    <a href="/">
      <div id="logo" class="logo" :style="logo"></div>
    </a>
    <div id="nav">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal" @select="handleSelect">
        <el-menu-item v-bind:index="item.index" v-for="(item, index) in headerNav" :key="index">
          <a :href="item.href" class="ha">
            {{ item.name }}
          </a>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="profile">
      <!--        <div id="profile" style="display: none">-->
      <!--      <a href="/self">-->
      <a>
        <span style="font-size: 20px">{{ username || '没登录的陌生银' }}</span>
      </a>
      <el-link type="warning" @click="logout" style="color: red">
        <i class="el-icon-switch-button"></i>
      </el-link>
    </div>
  </el-header>
</template>

<script>

import utils from "~/utils/utils";
import config from "~/config/config";
import cookie_utils from "../utils/cookie_utils";

export default {
  data() {
    return {
      activeIndex: 'x',
      logo: {
        backgroundImage: "url(" + require("../assets/logo.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      headerNav: config.headerNav,
    };
  },
  created() {
    let v = this;
    this.activeIndex = 'x';
    for (let i = 0; i < this.headerNav.length; i++) {
      if (RegExp('^' + this.headerNav[i].href + '/').test(location.pathname) || RegExp('^' + this.headerNav[i].href + '$').test(location.pathname)) {
        this.activeIndex = this.headerNav[i].index + '';
        break;
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
  },
}
</script>

<style scoped>
#capriHeader {
  box-shadow: 0 0 5px rgba(228, 228, 228, .8);
  background-color: transparent;
  text-align: center;
  line-height: 60px;
}
#logo, .el-menu-demo {
  cursor: pointer;
}

#capriHeader:hover {
  box-shadow: 0 0 10px rgba(228, 228, 228, 1)
}

#logo {
  width: 124px;
  height: 52px;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  cursor: pointer;
}

#nav {
  float: left;
}

#profile {
  float: right;
  width: 200px;
  height: 100%;
  border: #ef4f0f 1px;
}

.ha {
  display: block;
  height: 59px;
  width: 100%;
}
</style>