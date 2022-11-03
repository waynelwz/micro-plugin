import resolve from '@rollup/plugin-node-resolve'
import path from 'path'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { externals } from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'

const pkg = require('./package.json')

console.log(process.env.PROJECT_CWD)

process.env.PROJECT_CWD = '../../'

export default [
    {
        input: 'src/index.ts',
        // externals({ deps: true, packagePath: './package.json' }),
        plugins: [externals({ deps: false, packagePath: './package.json' }), resolve(), esbuild(), commonjs()],
        output: [
            {
                format: 'cjs',
                sourcemap: true,
                dir: path.dirname(pkg.publishConfig.main),
            },
            {
                format: 'esm',
                sourcemap: true,
                dir: path.dirname(pkg.publishConfig.module),
                // preserveModules: true,
                minifyInternalExports: false,
                // @ts-expect-error (TS cannot assure that `process.env.PROJECT_CWD` is a string)
                preserveModulesRoot: path.join(process.env.PROJECT_CWD, `packages/starwhale-runtime/src`),
                manualChunks: {
                    lodash: ['lodash'],
                },
            },
        ],
    },
    {
        input: './compiled/index.d.ts',
        plugins: [dts()],
        output: {
            file: pkg.publishConfig.types,
            format: 'es',
        },
    },
]
