<template>
  <div class="ve-range-number">
    <el-input-number
      controls-position="right"
      class="ve-range-number__input"
      v-model="min"
      size="small"
      @change="changeMinNumber" />
    <span class="ve-range-number__unit" v-if="unit">{{unit}}</span>
    <span class="ve-range-number__text">至</span>
    <el-input-number
      controls-position="right"
      class="ve-range-number__input"
      v-model="max"
      size="small"
      @change="changeMaxNumber" />
    <span class="ve-range-number__unit" v-if="unit">{{unit}}</span>
  </div>
</template>
<script>
export default {
  name: 'VeRangeNumber',
  props: {
    unit: String,
    value: Array,
  },
  data() {
    return {
      min: this.value[0] ? this.value[0] : '',
      max: this.value[1] ? this.value[1] : '',
    };
  },
  watch: {
    value() {
      this.min = this.value[0] ? this.value[0] : '';
      this.max = this.value[1] ? this.value[1] : '';
    },
  },
  methods: {
    changeMinNumber(text) {
      this.$emit('change-range-number', [text, this.max]);
    },
    changeMaxNumber(text) {
      this.$emit('change-range-number', [this.min, text]);
    },
  },
};
</script>
<style lang="scss">
.ve-range-number {
  display: flex;
  align-items: center;

  &__text {
    padding: 0 10px;
  }

  .el-input-number.is-controls-right .el-input__inner {
    padding-left: 4px;
    padding-right: 20px;
  }

  &__unit {
    margin-left: 5px;
    font-size: 14px;
  }

  .ve-range-number__input {
    width: 50px;

    .el-input-number__increase, .el-input-number__decrease {
      width: 16px;
    }
  }
}
</style>
