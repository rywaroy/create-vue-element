<template>
  <div class="component-container">
    <h3>{{title}}</h3>
    <p v-if="intro">{{intro}}</p>
    <div class="component-container__wrap">
      <div class="component-container__component">
        <slot></slot>
      </div>
      <el-collapse-transition>
      <div class="component-container__code" v-show="!isHide">
        <div v-highlight>
          <pre>
            <code class="html xml hljs">
              {{code}}
            </code>
          </pre>
        </div>
      </div>
      </el-collapse-transition>
      <div class="component-container__btn" @click.self="isHide = !isHide">
        <i class="el-icon-caret-bottom" v-if="isHide"></i>
        <i class="el-icon-caret-top" v-else></i>
        <el-tooltip effect="dark" content="复制" placement="top" open-delay="800">
          <i
            class="el-icon-document-copy component-container__copy"
            :id="name"
            :data-clipboard-text="code">
          </i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard';

export default {
  props: {
    name: String,
    title: String,
    intro: String,
    code: String,
  },
  data() {
    return {
      isHide: true,
    };
  },
  mounted() {
    this.clipboard = new ClipboardJS(`#${this.name}`);

    this.clipboard.on('success', () => {
      this.$message.success('复制成功');
    });

    this.clipboard.on('error', () => {
      this.$message.success('复制失败');
    });
  },
  beforeDestroy() {
    this.clipboard.destroy();
  },
};
</script>
<style lang="scss">
.component-container {
  padding: 20px;

  & > h3 {
    font-size: 22px;
    color: #1f2f3d;
    font-weight: 400;
    margin: 22px 0;
  }

  & > p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin-bottom: 20px;
  }

  &__wrap {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
  }

  &__component {
    padding: 10px;
  }

  &__code {
    padding: 10px;
    overflow: hidden;
    transition: height .3s;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    border-top: 1px solid #ebebeb;
    cursor: pointer;
    position: relative;
  }

  &__copy {
    position: absolute;
    right: 16px;
    top: 12px;
    font-size: 20px;
    cursor: pointer;
    z-index: 2;

    &:hover {
      color: #409EFF;
    }
  }
}
</style>
