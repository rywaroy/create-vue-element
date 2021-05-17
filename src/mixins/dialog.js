export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    close(isDone = false, outData = {}) {
      this.$emit(isDone ? 'done' : 'cancel', outData);
    },
  },
};
