import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yoimachido.github.io',
  // base: ユーザーサイト形式のため指定しない
  output: 'static',
  build: {
    format: 'directory',
  },
});
