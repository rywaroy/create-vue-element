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
      <div class="component-container__btn" @click="isHide = !isHide">
        <i class="el-icon-caret-bottom" v-if="isHide"></i>
        <i class="el-icon-caret-top" v-else></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    intro: String,
    code: String,
  },
  data() {
    return {
      isHide: true,
    };
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
  }
}
</style>
