import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      /*
       * Shikiの組み込みテーマから選択（または独自のテーマを追加）
       * https://github.com/shikijs/shiki/blob/main/docs/themes.md
       */
      theme: 'dracula',
      /*
       * カスタム言語の追加
       * 注：Shikiには.astroを含む無数の言語が内蔵されています。
       * https://github.com/shikijs/shiki/blob/main/docs/languages.md
       */
      langs: [],
      // 水平スクロールを防ぐために文字の折り返しを有効にする
      wrap: true
    }
  }
})
