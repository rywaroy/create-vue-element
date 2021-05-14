<template>
  <div class="list-page-wrap">
    <div class="list-page">
      <base-container name="base-header">
        <base-header></base-header>
      </base-container>
      <div class="list-page-main">
        <div class="list-page-menu">
          <base-container name="nav-menu">
            <nav-menu></nav-menu>
          </base-container>
        </div>
        <div class="list-page-content">
          <base-container name="page-layout">
            <ve-page-layout title="标题">
              <base-container name="search-form">
                <ve-search-form :form.sync="form" :fieldList.sync="fieldList"></ve-search-form>
              </base-container>
            </ve-page-layout>
          </base-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHeader from './components/BaseHeader';
import NavMenu from './components/NavMenu';

export default {
  data() {
    return {
      form: {
        name: '',
        sex: '',
        age: [10, 18],
        time: [],
        姓名1: '',
        姓名2: '',
        年龄1: [1, 2],
        年龄2: [3, 4],
        时间1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        时间2: [],
      },
      fieldList: [
        {
          label: '姓名',
          value: 'name',
          type: 'input',
        },
        {
          label: '性别',
          value: 'sex',
          type: 'select',
          options: [{ label: '男', value: '男' }, { label: '女', value: '女' }],
        },
        {
          label: '时间',
          value: 'time',
          type: 'range-time',
          span: 12,
        },
        {
          label: '年龄',
          value: 'age',
          type: 'range-number',
        },
        {
          type: 'custom-label',
          labelOptions: [{ label: '姓名1', value: '姓名1' }, { label: '姓名2', value: '姓名2' }],
          id: '姓名',
          value: '姓名1',
          valueType: 'input',
        },
        {
          type: 'custom-label',
          labelOptions: [{ label: '年龄1', value: '年龄1' }, { label: '年龄2', value: '年龄2' }],
          id: '年龄',
          value: '年龄1',
          valueType: 'range-number',
        },
        {
          type: 'custom-label',
          labelOptions: [{ label: '时间1', value: '时间1' }, { label: '时间2', value: '时间2' }],
          id: '时间',
          value: '时间1',
          valueType: 'range-time',
          span: 12,
        },
      ],
    };
  },
  components: {
    BaseHeader,
    NavMenu,
  },
};
</script>
<style lang="scss">
.list-page {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #000;
  height: 900px;
  position: relative;
  display: flex;
  flex-direction: column;

  &-wrap {
    width: 100%;
    padding-top: 30px;
  }

  &-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  &-menu {
    width: 180px;
    height: 100%;
    overflow-y: auto;

    & > div {
      height: 100%;
    }
  }

  &-content {
    flex: 1;
    overflow-y: auto;

    & > div {
      display: flex;
      flex-direction: column;
      background: #f1f2f5;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
