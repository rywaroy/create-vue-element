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
<style lang="scss">
.info-detail {
  &__td {
    padding-bottom: 16px;
  }

  &__label {
    display: inline-flex;
    align-items: baseline;
    color: rgba(0,0,0,.85);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5715;
    text-align: start;
  }

  &__value {
    display: inline-flex;
    align-items: baseline;
    flex: 1 1;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    word-break: break-word;
    overflow-wrap: break-word;
  }
}
</style>
