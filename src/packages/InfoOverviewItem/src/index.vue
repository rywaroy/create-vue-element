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
