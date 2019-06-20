import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/lib/index.js',
  output: {
    file: 'dist/lib/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js'],
      ignoreGlobal: true,
      sourceMap: false
    })
  ],
}; 