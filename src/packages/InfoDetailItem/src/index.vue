<template>
  <td :colspan="colspan" class="info-detail__td">
    <slot v-if="$slots.default"></slot>
    <div class="info-detail__content" v-else>
      <span class="info-detail__label">{{label}}：</span>
      <span class="info-detail__value">{{value}}</span>
    </div>
  </td>
</template>
<script>
export default {
  name: 'VeInfoDetailItem',
  props: {
    colspan: {
      type: Number,
      default: 1,
    },
    label: String,
    value: String,
  },
};
</script>
