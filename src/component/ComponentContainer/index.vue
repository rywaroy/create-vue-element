<template>
  <div class="component-container">
    <h3>{{title}}</h3>
    <p>{{intro}}</p>
    <div class="component-container__wrap">
      <div class="component-container__component">
        <slot></slot>
      </div>
      <div class="component-container__code">
        <div v-highlight>
          <pre>
            <code class="html xml hljs">
              {{code}}
            </code>
          </pre>
        </div>
      </div>
      <div class="component-container__btn">
        <i class="el-icon-caret-bottom"></i>
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
