<template>
  <div class="ve-list-action-bar">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VeListActionBar',
};
</script>
<style>
.ve-list-action-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
}
</style>
