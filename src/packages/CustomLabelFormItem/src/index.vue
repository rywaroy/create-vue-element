<template>
  <div class="ve-custom-form-item">
    <div class="ve-custom-form-item__label">
      <el-select
        :value="label"
        placeholder="请选择"
        size="small"
        @change="changeLabel">
        <el-option
          v-for="item in labelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="ve-custom-form-item__content">
      <!-- Input 输入框 -->
      <el-input
        :value="value"
        size="small"
        @input="changeValue"
        v-if="type === 'input'"
        placeholder="请输入" />

      <!-- Select 选择框 -->
      <!-- <el-select
        v-if="type === 'select'"
        v-model="valueText"
        placeholder="请选择"
        size="small"
        @change="changeValue">
        <el-option
          v-for="item in valueOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> -->

      <!-- Range Number 数字区间 -->
      <ve-range-number
        v-if="type === 'range-number'"
        :unit="unit"
        :value="value"
        @change-range-number="changeValue"/>

      <!-- Range Time 时间区间 -->
      <el-date-picker
        v-if="type === 'range-time'"
        :value="value"
        size="small"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @input="changeValue"/>
    </div>
  </div>
</template>
<script>
import VeRangeNumber from '../../RangeNumber/src/index.vue';

export default {
  name: 'VeCustomLabelFormItem',
  props: {
    id: String,
    label: String,
    labelOptions: Array,
    value: [String, Array],
    type: String,
    valueOptions: Array,
    unit: String,
  },
  data() {
    return {
      labelText: this.label,
      valueText: this.value,
    };
  },
  components: {
    VeRangeNumber,
  },
  methods: {
    changeValue(text) {
      console.log(text);
      this.valueText = text;
      this.$emit('change-value', { label: this.labelText, value: text });
    },

    changeLabel(text) {
      this.$emit('change-label', {
        label: text,
        labels: this.labelOptions.map((item) => item.value),
        value: this.value,
        id: this.id,
      });
    },
  },
};
</script>
<style lang="scss">
.ve-custom-form-item {
  display: flex;
  padding-right: 20px;
  margin-bottom: 13px;
  margin-top: 5px;

  .ve-custom-form-item__label {
    width: 120px;

    .el-select {
      width: 100%;
    }
  }

  .ve-custom-form-item__content {
    flex: 1;
    padding-left: 10px;

    .el-select {
      width: 100%;
    }

    & > div {
      width: 100%;
    }
  }
}

</style>
