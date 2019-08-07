module.exports = {
  title: 'zheng-ui',
  description: '基于vue2.0的UI组件库',
  // 注入到当前页面的 HTML <head> 中的标签
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  base: '', // 这是部署到github相关的配置 下面会讲
  markdown: {
    
  },
  themeConfig: {
    sidebarDepth: 0, 
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
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
          
        ]
      }
    ]
   
  }
};
