import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VUI',
  description: 'A Vue UI Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'VuiAlert', link: '/components/vui-alert' },
          { text: 'VuiIcon', link: '/components/vui-icon' },
          { text: 'VuiIconButton', link: '/components/vui-icon-button' },
          { text: 'VuiAlertTitle', link: '/components/vui-alert-title' },
        ],
      },
    ],

    socialLinks: [],
  },
})
