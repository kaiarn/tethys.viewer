/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require("webpack");
// const { defineConfig } = require("@vue/cli-service");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    publicPath: "/",
    chainWebpack: (config) => {
        const vueRule = config.module.rule("vue");
        vueRule.uses.clear();
        // const tsRule = config.module.rule("ts");
        // tsRule.uses.clear();
        //       .plugin('define')
        //       .tap(args => {
        //           args[0] = {
        //              ...args[0],
        //              VUE_APP_PORTAL: JSON.stringify(process.env.PORTAL),
        //              // other stuff
        //           }
        //           return args
        //        })
    },
    pages: {
        index: {
            // entry for the page
            entry: "src/main.ts",
            title: "TETHYS - Research Data Repository",
        },
    },
    // devServer: {
    //     disableHostCheck: true,
    // },
    configureWebpack: {
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        // loaders: {
                        // 	ts: 'ts-loader',
                        // },
                        cacheDirectory: "C:\\Users\\kaiarn\\Documents\\Software\\tethys.viewer\\node_modules\\.cache\\vue-loader",
                        cacheIdentifier: "39baf1b4",
                        babelParserPlugins: ["jsx", "classProperties", "decorators-legacy"],
                    },
                },
                // {
                //     test: /\.(js|jsx|ts|tsx)$/,
                //     // exclude: /(node_modules|bower_components)/,
                //     exclude: file => (
                //       /node_modules/.test(file) &&
                //       !/\.vue\.js/.test(file)
                //     ),
                //     exclude: /node_modules/,
                //     use: {
                //         loader: "babel-loader",
                //         options: {
                //             presets: [
                //                 ["@babel/preset-env", {}],
                //                 "babel-preset-typescript-vue3", //because of new vue setup method
                //                 // "@babel/preset-typescript"
                //             ],
                //             plugins: [
                //                 // "@babel/plugin-transform-runtime",
                //                 ["@babel/plugin-proposal-decorators", { legacy: true }],

                //                 "@babel/proposal-class-properties",
                //             ],
                //         },
                //     },
                // },
            ],
        },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.runtime.esm-bundler.js",
            },
            extensions: [".tsx", ".ts", ".mjs", ".js", ".jsx", ".vue", ".json", ".wasm"],
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: "true",
                __VUE_PROD_DEVTOOLS__: "false",
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
                APP_URL: JSON.stringify(process.env.APP_URL),
                VUE_APP_PORTAL: JSON.stringify(process.env.VUE_APP_PORTAL),
                SOLR_HOST: JSON.stringify(process.env.SOLR_HOST),
                SOLR_CORE: JSON.stringify(process.env.SOLR_CORE),
            }),
            // new NodePolyfillPlugin(),
        ],
    },
};
