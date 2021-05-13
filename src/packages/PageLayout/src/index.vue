<template>
  <div class="ve-page-layout">
    <div class="ve-page-layout-title">{{title}}</div>
    <div class="ve-page-layout-con">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VePageLayout',
  props: {
    title: String,
  },
};
</script>
<style>
.ve-page-layout {
  display: flex;
  flex-direction: column;
  background: #f1f2f5;
  width: 100%;
  height: 100%;
}

.ve-page-layout-title {
  height: 54px;
  padding-left: 30px;
  background: #fff;
  line-height: 54px;
  font-size: 20px;
  color: rgba(0,0,0,.85);
}

.ve-page-layout-con {
  flex: 1;
  padding: 12px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
