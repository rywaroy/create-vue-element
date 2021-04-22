<template>
  <div class="wrap">
    <div class="menu">
      <el-menu default-active="数据展示">
        <el-menu-item index="数据展示">
          数据展示
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
};
</script>

<style lang="scss">
@import './assets/reset.css';
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
