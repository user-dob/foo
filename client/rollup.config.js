import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer'
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'public/dist/index.js',
            format: 'iife',
            sourcemap: true
        }
    ],
    external: [
        'react',
        'react-dom',
    ],
    treeshake: false,
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve(),
        external(),
        postcss({
            extract: true,
            plugins: [autoprefixer()]
        }),
        url(),
        svgr(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs(),
        serve({
            contentBase: ['public'],
            host: '0.0.0.0',
            port: process.env.CLIENT_PORT
        }),
        livereload({
            watch: 'public/dist',
            port: 35729
        }),
        sizeSnapshot()
    ]
}
