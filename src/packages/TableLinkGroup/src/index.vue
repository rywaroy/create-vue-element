<template>
  <div class="ve-table-link-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VeTableLinkGroup',
};
</script>
<style>
.ve-table-link-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.ve-table-link-group .ve-table-link:last-child {
  margin-right: 0;
  padding-right: 0;
}

.ve-table-link-group .ve-table-link:last-child::after {
  display: none;
}
</style>
