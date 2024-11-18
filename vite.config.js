
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import autoprefixer from 'autoprefixer';
import { assetFileNames } from './assetFileName';



export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true
    }),
  ],
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html', // Входная точка для основного файла
      },
      output: {
        entryFileNames: 'js/[name].js', // Файлы js будут сохраняться в dist/js
        chunkFileNames: 'js/[name].js', // Чанки тоже будут сохраняться в dist/js
        assetFileNames: assetFileNames
      },
    },
    assetsInlineLimit: 0,
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    },
    preprocessorOptions : {
      scss: {
        api: "modern",
      }        
    } 
  }
});
