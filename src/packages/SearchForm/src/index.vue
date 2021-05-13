<template>
  <div class="ve-search-form">
    <el-form ref="form" :model="form" label-suffix=":">
      <el-row>
        <el-col :lg="item.span ? item.span : 6" :sm="8" v-for="item in fieldList" :key="item.value">

          <!-- Select 选择框 -->
          <el-form-item v-if="item.type === 'select'" :label="item.label" :prop="item.value">
            <el-select
              v-model="form[item.value]"
              size="small"
              :placeholder="item.placeholder ? item.placeholder : '请选择'">
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value">
              </el-option>
            </el-select>
          </el-form-item>

          <!-- Input 输入框 -->
          <el-form-item v-if="item.type === 'input'" :label="item.label" :prop="item.value">
            <el-input
              v-model="form[item.value]"
              size="small"
              :placeholder="item.placeholder ? item.placeholder : '请输入'" />
          </el-form-item>

          <!-- Range Number 数字区间 -->
          <el-form-item v-if="item.type === 'range-number'" :label="item.label" :prop="item.value">
            <ve-range-number
              :unit="unit"
              :value="form[item.value]"
              @change-range-number="changeValue"/>
          </el-form-item>

          <!-- Range Time 时间区间 -->
          <el-form-item v-if="item.type === 'range-time'" :label="item.label" :prop="item.value">
            <el-date-picker
              v-model="form[item.value]"
              size="small"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </el-form-item>

          <!-- 自定义label -->
          <ve-custom-label-form-item
            v-if="item.type === 'custom-label'"
            :id="item.id"
            :label="item.value"
            :value="form[item.value]"
            :labelOptions="item.labelOptions"
            :valueOptions="item.valueOptions"
            :type="item.valueType"
            :unit="item.unit"
            @change-value="changeValue"
            @change-label="changeLabel" />

        </el-col>
        <!-- 搜索/重置 -->
        <el-col :span="6" :lg="6" :sm="8" style="margin-top: 5px;">
          <el-button type="primary" @click="search()" size="small">搜索</el-button>
          <el-button size="small" @click="reset()">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import deepClone from '../../../utils/deepClone';
import VeCustomLabelFormItem from '../../CustomLabelFormItem/src/index.vue';
import VeRangeNumber from '../../RangeNumber/src/index.vue';

export default {
  name: 'VeSearchForm',
  props: {
    form: Object,
    fieldList: Array,
    unit: String,
  },
  data() {
    return {
      initialForm: {},
    };
  },
  components: {
    VeCustomLabelFormItem,
    VeRangeNumber,
  },
  mounted() {
    this.initialForm = deepClone(this.form);
  },
  methods: {
    changeValue({ label, value }) {
      const form = { ...this.form };
      form[label] = value;
      this.$emit('update:form', form);
    },

    changeLabel({
      label, labels, value, id,
    }) {
      const form = { ...this.form };
      Object.keys(form).forEach((key) => {
        if (labels.includes(key)) {
          if (key === label) {
            form[label] = value;
          } else {
            form[key] = null;
          }
        }
      });

      this.$emit('update:form', form);
      const fieldList = [...this.fieldList];
      fieldList.forEach((field) => {
        if (field.id === id) {
          field.value = label;
        }
      });
      this.$emit('update:fieldList', fieldList);
    },

    search() {
      this.$emit('search');
    },

    reset() {
      this.$emit('update:form', this.initialForm);
    },
  },
};
</script>
<style lang="scss">
.ve-search-form {
  background: #fff;
  padding: 10px;

  .el-form-item {
    display: flex;
    height: 40px;
    margin-bottom: 10px;
  }

  .el-form-item__content {
    flex: 1;
    padding-right: 20px;

    & > div {
      width: 100%;
    }
  }
}
</style>
