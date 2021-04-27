<template>
  <div>
    <h3 v-if="title" class="info-detail__title">{{title}}</h3>
    <div class="info-detail__view">
      <table>
        <slot></slot>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VeInfoDetail',
  props: {
    title: String,
  },
};
</script>
<style lang="scss">
.info-detail {
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5715;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, .85);
  }

  &__view {
    table {
      width: 100%;
    }
  }
}
</style>
