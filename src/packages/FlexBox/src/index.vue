<template>
  <div class="ve-flex-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VeFlexBox',
};
</script>
<style lang="scss">
.ve-flex-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
