<template>
  <div class="nav-menu">
    <el-menu
      background-color="#2d4464"
      text-color="#fff">
      <el-menu-item index="/page1">
        <span slot="title">页面1</span>
      </el-menu-item>
      <el-menu-item index="/page2">
        <span slot="title">页面2</span>
      </el-menu-item>
      <el-menu-item index="/page3">
        <span slot="title">页面3</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.nav-menu {
  height: 100%;
}
.nav-menu .el-menu {
  height: 100%;
}
</style>
