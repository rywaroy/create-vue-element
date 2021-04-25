<template>
  <div class="ve-info-overview__item">
    <span>{{title}}</span>
    <p>{{content}}</p>
  </div>
</template>
<script>
export default {
  name: 'VeInfoOverviewItem',
  props: {
    title: String,
    content: String,
  },
};
</script>
<style lang="scss">
.ve-info-overview__item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #f0f0f0;
  & > span {
    display: inline-block;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
    line-height: 22px;
  }
  & > p {
    margin: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
