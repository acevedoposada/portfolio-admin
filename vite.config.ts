import macrosPlugin from 'vite-plugin-babel-macros';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
  },
  plugins: [
    react(),
    macrosPlugin(),
    tsconfigPaths(),
    [
      {
        name: '@emotion/babel-plugin-jsx-pragmatic',
      },
      {
        export: 'jsx',
        import: '__cssprop',
        module: '@emotion/react',
      },
    ],
    [
      { name: '@babel/plugin-transform-react-jsx' },
      { pragma: '__cssprop' },
      { name: 'twin.macro' },
    ],
  ],
});
