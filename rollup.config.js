import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
// import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import replace from 'rollup-plugin-replace';
// import clear from 'rollup-plugin-delete';
import postcssurl from 'postcss-url';
import postcss from 'rollup-plugin-postcss';
// import cssnano from 'cssnano';
import glob from 'glob';

const cssPlugins = [postcssurl({ url: 'inline' })];

const path = require('path');

function transCamel(_str) {
  const str = _str[0].toLowerCase() + _str.substr(1);
  return str.replace(/([A-Z])/g, ($1) => `-${$1.toLowerCase()}`);
}

export default () => {
  const config = [];

  const plugins = [
    // clear({ targets: 'lib/*' }),
    // nodeResolve({
    //   browser: true,
    //   preferBuiltins: true,
    // }),

    // replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    vue({ css: false, compileTemplate: true, style: { postcssPlugins: cssPlugins } }),
    commonjs(),
    babel({
      exclude: ['node_modules/@babel/runtime/**'],
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }]],
      runtimeHelpers: true,
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.es6', 'es7', '.es', '.mjs', '.vue', '.svg'],
      plugins: ['transform-vue-jsx'],
    }),
    terser(),
  ];

  // 打包
  const vueConfig = {
    input: './src/packages/index.js',
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'veui',
      globals: {
        vue: 'Vue',
      },
      exports: 'default',
    },
    plugins: [
      ...plugins,
      postcss({
        plugins: cssPlugins,
        extract: 'style/index.css',
      }),
    ],
    external: ['vue'],
  };
  config.push(vueConfig);

  // 单个组件打包
  const files = glob.sync('./src/packages/*/*.js');
  files.forEach((file) => {
    const name = file.split('/')[3];
    config.push({
      input: file,
      output: {
        file: `lib/${transCamel(name)}/index.js`,
        format: 'cjs',
        exports: 'default',
      },
      plugins,
      external: ['vue'],
    });
  });

  // 单个组件css打包
  const styleFiles = glob.sync('./src/packages/*/src/style/index.js');
  styleFiles.forEach((file) => {
    const name = file.split('/')[3];
    config.push({
      input: file,
      output: {
        file: `lib/${transCamel(name)}/style.js`,
        format: 'cjs',
      },
      plugins: [
        postcss({
          plugins: cssPlugins,
          extract: 'style.css',
        }),
      ],
    });
  });

  return config;
};
