function dialogHelper(Vue, component) {
  const div = document.createElement('div');
  const el = document.createElement('div');
  div.appendChild(el);
  document.body.appendChild(div);

  const ComponentConstructor = Vue.extend(component);
  return (propsData = {}, parent = undefined) => {
    let instance = new ComponentConstructor({
      propsData,
      parent,
    }).$mount(el);

    const destroyDialog = () => {
      if (instance && div.parentNode) {
        setTimeout(() => {
          instance.$destroy();
          instance = null;
          div.parentNode.removeChild(div);
        }, 500);
      }
    };

    // visible控制
    if (instance.visible !== undefined) {
      // 支持sync/v-model
      instance.$watch('visible', (val) => {
        if (!val) {
          destroyDialog();
        }
      });
      Vue.nextTick(() => {
        instance.visible = true;
      });
    }

    return new Promise((resolve, reject) => {
      instance.$once('done', (data) => {
        destroyDialog();
        resolve(data);
      });
      instance.$once('cancel', (data) => {
        destroyDialog();
        reject(data);
      });
    });
  };
}

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$openDialog = (comp) => dialogHelper(Vue, comp);

  Vue.mixin({
    methods: {
      $closeDialog(isDone = false, ...args) {
        this.$emit(isDone ? 'done' : 'cancel', ...args);
      },
    },
  });
}

// auto plugin install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use({
    install,
  });
}

// export default
export default {
  install,
};
