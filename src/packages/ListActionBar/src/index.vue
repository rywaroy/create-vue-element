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
