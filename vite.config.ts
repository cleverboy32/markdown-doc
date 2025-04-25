import { defineConfig } from 'vite'; 
 
export default defineConfig({ 
  build: { 
    rollupOptions: { 
      input: { 
        // 这里指定你的 TypeScript 入口文件，假设是 main.ts  
        index: './src/index.ts',  
      }, 
      output: { 
        format: 'esm', // 或者 'esm'，根据你的需求选择输出格式 
        entryFileNames: '[name].mjs', 
        assetFileNames: '[name].[ext]',
      }, 
    }, 
  },  
}); 