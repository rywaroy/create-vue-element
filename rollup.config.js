import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
// import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import replace from 'rollup-plugin-replace';
// import clear from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import postcssurl from 'postcss-url';

const cssPlugins = [postcssurl({ url: 'inline' })];

export default () => {
  const config = [];
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
      postcss({ plugins: cssPlugins }),
      terser(),
    ],
    external: ['vue'],
  };
  config.push(vueConfig);
  return config;
};
