<template>
  <el-dialog
    title="page layout"
    width="1200px"
    :visible.sync="visible">
    <component-container
      :code="code">
      <ve-page-layout title="标题">
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </ve-page-layout>
    </component-container>
  </el-dialog>
</template>
<script>
import dialogMixin from '@/mixins/dialog';

export default {
  mixins: [dialogMixin],
  data() {
    return {
      code: '<ve-page-layout title="标题"></ve-page-layout>',
    };
  },
};
</script>
