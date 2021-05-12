<template>
  <div class="base-container">
    <div class="base-container-mask" @click="handleClick()"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
  },
  methods: {
    handleClick() {
      this.$emit('click', this.name);
    },
  },
};
</script>
<style lang="scss">
.base-container {
  position: relative;
  &-mask {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    transition: background-color .3s;
    cursor: pointer;
    &:hover {
      background-color: #A7E8BD;
    }
  }
}
</style>
