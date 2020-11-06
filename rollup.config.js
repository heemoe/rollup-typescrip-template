import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
export default {
    input: 'src/index.ts',
    output: [
        {
            entryFileNames: 'lib/tptjs.js',
            name: 'JSLib',
            // 挂载在window上的名字
            format: 'iife',
            dir: './',
        },
        {
            entryFileNames: 'lib/tptjs.min.js',
            name: 'JSLib',
            format: 'iife',
            dir: './',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    plugins: [
        typescript(
            {
                declaration: true,
                declarationDir: 'types/',
                rootDir: 'src/',
                sourceMap: true,
                inlineSources: true
            }
        )
    ]
};