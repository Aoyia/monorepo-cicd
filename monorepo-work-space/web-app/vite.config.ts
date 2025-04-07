import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/monorepo-cicd/', // 添加 base 配置，指向您的 GitHub 仓库名
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      // 确保能正确解析本地包
      'ui-components': path.resolve(__dirname, '../ui-components/src')
    }
  },
  optimizeDeps: {
    // 确保开发时能够正确处理工作区依赖
    include: ['react', 'react-dom']
  }
});