<template>
  <div class="ve-table-link">
    <el-popconfirm
      v-if="type === 'confirm'"
      v-bind="$attrs"
      v-on="$listeners">
      <span slot="reference">
        <slot></slot>
      </span>
    </el-popconfirm>
    <span v-else @click="handleClick"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'VeTableLink',
  props: {
    type: String,
    url: String,
  },
  methods: {
    handleClick(evt) {
      if (this.type === 'link') {
        this.$router.push(this.url);
      } else {
        this.$emit('click', evt);
      }
    },
  },
};
</script>
