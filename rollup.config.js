import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const INPUT_FILE = 'src/index.ts'

const UMD_GLOBALS = {
  '@nastyox/rando.js': 'randoJs',
  'big-integer': 'bigInt',
  'fast-copy': 'fastCopy',
  fs: 'fs',
  'lodash.set': 'setItemByPath',
}

const SHARED_EXTERNALS = Object.keys(UMD_GLOBALS)

const SHARED_PLUGINS = [
  typescript(),
  // commonjs({ extensions: ['ts', 'js'] }),
  terser(),
]

const config = [
  {
    input: INPUT_FILE,
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named',
    },
    external: SHARED_EXTERNALS,
    plugins: SHARED_PLUGINS,
  },
  {
    // EcmaScript
    input: INPUT_FILE,
    output: {
      file: 'dist/es/index.js',
      format: 'es',
      exports: 'named',
    },
    external: SHARED_EXTERNALS,
    plugins: SHARED_PLUGINS,
  },
]

export default config
