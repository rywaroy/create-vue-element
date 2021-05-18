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
<style>
.ve-table-link {
  color: #2b82d8;
  cursor: pointer;
  margin-right: 8px;
  padding-right: 8px;
  font-size: 14px;
  line-height: 1;
  position: relative;
}

.ve-table-link:hover {
  color: rgba(43, 130, 216, 0.7);
}

.ve-table-link::after {
  content: ' ';
  position: absolute;
  width: 1px;
  background-color: #e8e8e8;
  height: 13px;
  right: 0;
  top: 3px;
}

.el-popconfirm__main {
  margin: 10px 0;
}
</style>
