<template>
  <div class="wrap">
    <div class="menu">
      <el-menu
        router
        :default-active="activePath"
        background-color="#2d4464"
        text-color="#fff">
        <el-menu-item index="/">
          <span slot="title">数据展示</span>
        </el-menu-item>
        <el-menu-item index="/listpage">
          <span slot="title">列表页面</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activePath: '/',
    };
  },
  mounted() {
    this.activePath = window.location.hash.slice(1);
  },
};
</script>

<style lang="scss">
.wrap {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  position: relative;
}
.menu {
  width: 200px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.menu .el-menu {
  height: 100%;
}

.content {
  margin-left: 200px;
}
</style>
