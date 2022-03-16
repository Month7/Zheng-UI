module.exports = {
  title: 'zheng-ui',
  description: '基于vue2.0的UI组件库',

  base: '',
  markdown: {
    
  },
  themeConfig: {
    sidebarDepth: 0, 
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Month7' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install.md',
          'views/guide/get-start.md'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/button/',
          'views/components/carousel/',
          'views/components/datetimepicker/',
          'views/components/cascader/',
          'views/components/infinitescroll/',
          'views/components/tabs/',
          'views/components/modal/',
          'views/components/toast/',
          'views/components/rate/',
          'views/components/backtop/',
          'views/components/steps/',
          'views/components/progress/',
          'views/components/magnifying/',
          'views/components/select/',
          'views/components/layout/'
        ]
      }
    ]
    
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],
  chainWebpack: (config) => {
    config.resolve.extensions.add(".tsx");

    config.module
      .rule("tsx")
      .test(/\.tsx$/)
      .use("cache-loader")
      .loader(require.resolve("cache-loader"))
      .end()
      .use("ts-loader")
      .loader(require.resolve("ts-loader"))
      .options({
        appendTsxSuffixTo: [/\.vue$/, /\.md$/],
        compilerOptions: {},
      })
      .end();
  },
};
