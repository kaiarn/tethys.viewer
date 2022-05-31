/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require("webpack");
// const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    publicPath: "/",
    // chainWebpack: config => {
    //     config
    //       .plugin('define')
    //       .tap(args => {
    //           args[0] = {
    //              ...args[0],
    //              VUE_APP_PORTAL: JSON.stringify(process.env.PORTAL),
    //              // other stuff
    //           }
    //           return args
    //        })
    //   },
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
        plugins: [
            new webpack.DefinePlugin({
                VUE_APP_PORTAL: JSON.stringify(process.env.VUE_APP_PORTAL),
                SOLR_HOST: JSON.stringify(process.env.SOLR_HOST),
                SOLR_CORE: JSON.stringify(process.env.SOLR_CORE),
            }),
            new NodePolyfillPlugin(),
        ],
    },
};
