<template>
  <div class="base-container">
    <slot class="base-container-slot"></slot>
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
  z-index: 2;
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    z-index: 1;
    content: "";
    cursor: pointer;

  }

  &:hover::after {
    outline: 3px solid #e6a23c;
    outline-offset: -3px;
  }
}
</style>
