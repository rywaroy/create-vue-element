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
          <base-container name="page-layout" @click="openComponentDetail">
            <ve-page-layout title="标题">
              <section class="app-section">
                <!-- 搜索表单 -->
                <base-container name="search-form">
                  <ve-search-form :form.sync="form" :fieldList.sync="fieldList"></ve-search-form>
                </base-container>
                <!-- 搜索表单 -->

                <!-- 操作按钮 -->
                <base-container name="list-action-bar">
                  <ve-list-action-bar>
                    <template #left>
                      <el-select v-model="form.sort" size="small">
                        <el-option value="条件1">条件1</el-option>
                        <el-option value="条件2">条件2</el-option>
                      </el-select>
                    </template>
                    <template #right>
                      <el-button size="small" type="primary">按钮1</el-button>
                      <el-button size="small" type="primary">按钮2</el-button>
                      <el-button size="small" type="primary">按钮3</el-button>
                    </template>
                  </ve-list-action-bar>
                </base-container>
                <!-- 操作按钮 -->

                <!-- 表格 -->
                <base-container name="list-action-bar">
                  <el-table
                    :data="tableData">
                    <el-table-column
                      prop="date"
                      label="日期"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址">
                    </el-table-column>
                    <el-table-column
                      label="操作">
                      <template>
                        <base-container name="table-link-group">
                          <ve-table-link-group>
                            <ve-table-link>加减积分</ve-table-link>
                            <ve-table-link>查看表决记录</ve-table-link>
                            <ve-table-link>查看日志</ve-table-link>
                            <ve-table-link>删除</ve-table-link>
                          </ve-table-link-group>
                        </base-container>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    style="margin-top: 20px"
                    background
                    layout="prev, pager, next"
                    :total="1000">
                  </el-pagination>
                </base-container>
                <!-- 表格 -->
              </section>
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
import PageLayoutContainer from './components/PageLayoutContainer';

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
        married: false,
        sort: '条件1',
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
          label: '已婚',
          value: 'married',
          type: 'checkbox',
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    };
  },
  components: {
    BaseHeader,
    NavMenu,
  },
  methods: {
    openComponentDetail(name) {
      switch (name) {
        case 'page-layout':
          this.$openDialog(PageLayoutContainer)();
          break;
        default:
          break;
      }
    },
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

.app-section {
  background: #fff;
  padding: 20px;
}
</style>
