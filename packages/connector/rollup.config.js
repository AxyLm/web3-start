import { defineConfig } from 'rollup';

export default defineConfig({
  input: `src/index.ts`,
  output: [{ file: 'dist', format: 'esm' }],
  plugins: [],
  watch: {
    include: 'src/**',
  },
  external: ['ethers'],
});
