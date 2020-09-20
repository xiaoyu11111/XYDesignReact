import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'XY Design React',
  favicon: '/assets/xiaoyu.svg',
  logo: '/images/xiaoyu.svg',
  outputPath: 'docs-dist',
  base: '/XYDesignReact',
  publicPath: '/XYDesignReact/',
  exportStatic: {},
  mode: 'site',
  resolve: {
    previewLangs: ['jsx', 'tsx'],
  },
  // more config: https://d.umijs.org/config
});
