const webpack = require('webpack');

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
      configureWebpack: {
        plugins: [
          new webpack.DefinePlugin({           
            VUE_APP_PORTAL: JSON.stringify(process.env.VUE_APP_PORTAL),
          }),
        ],
      },
 }