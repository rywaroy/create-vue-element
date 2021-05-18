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
