import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ray-Doc",
  description: "Some docs for Ray's tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API 接口示例', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'API 接口示例',
        items: [
          { text: 'Openai库 api', link: '/api-examples' },
          { text: '自建 xinference REST API', link: '/xinference-rest-api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  outDir: './dist',
  base: '/'
})
