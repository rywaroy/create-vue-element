<template>
  <div class="list-page-wrap">
    <div class="list-page">
      <base-container name="base-header">
        <base-header></base-header>
      </base-container>
      <div class="list-page-main">
        <div class="list-page-menu">
          <base-container name="nav-menu">
            <nav-menu></nav-menu>
          </base-container>
        </div>
        <div class="list-page-content">
          <base-container name="page-layout">
            <ve-page-layout title="标题">

            </ve-page-layout>
          </base-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHeader from './components/BaseHeader';
import NavMenu from './components/NavMenu';

export default {
  components: {
    BaseHeader,
    NavMenu,
  },
};
</script>
<style lang="scss">
.list-page {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #000;
  height: 900px;
  position: relative;
  display: flex;
  flex-direction: column;

  &-wrap {
    width: 100%;
    padding-top: 30px;
  }

  &-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  &-menu {
    width: 180px;
    height: 100%;
    overflow-y: auto;

    & > div {
      height: 100%;
    }
  }

  &-content {
    flex: 1;
    overflow-y: auto;

    & > div {
      display: flex;
      flex-direction: column;
      background: #f1f2f5;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
