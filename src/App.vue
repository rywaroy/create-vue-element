<template>
  <div class="content">
    <div class="menu">
      <el-menu default-active="数据展示">
        <el-menu-item index="数据展示">
          数据展示
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
@import './assets/reset.css';
.content {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
.menu {
  width: 200px;
  height: 100%;
}

.menu .el-menu {
  height: 100%;
}
</style>
