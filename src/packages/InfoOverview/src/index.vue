<template>
  <ve-flex-box class="ve-info-overview">
    <slot></slot>
  </ve-flex-box>
</template>
<script>
import FlexBox from '../../FlexBox/src/index.vue';

export default {
  components: {
    VeFlexBox: FlexBox,
  },
  name: 'VeInfoOverview',
};
</script>
