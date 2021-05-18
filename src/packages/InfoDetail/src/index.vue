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
