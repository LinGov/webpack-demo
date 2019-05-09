# webpack-demo

## 代码风格

## library

- webpack-merge：合并 webpack 配置，抽取 development/production 公共配置。
- ora
- chalk
- happypack
- semver
- eventsource-polyfill
- portfinder：在默认端口被占用的情况下，往后查找空闲端口并返回空闲的端口号。
- http-proxy-middleware
- require-nocache
- uglify-es
- opn
- connect-history-api-fallback
- cross-env：屏蔽开发所处操作系统差异，提供一致的设置 Node 环境变量的命令。
- lint-staged

## loader

- url-loader
- css-loader
- vue-loader
- vue-style-loader
- sass-loader
- scss-loader
- babel-loader
- file-loader
- vg-sprite-loader
- eslint-loader

## webpack plugin

### 内置插件

- webpack.DefinePlugin
- webpack.HotModuleReplacementPlugin
- webpack.NoEmitOnErrorsPlugin
- webpack.optimize.ModuleConcatenationPlugin
- webpack.DllPlugin
- webpack.DllReferencePlugin
- webpack.LoaderOptionsPlugin

### 社区插件

- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)：webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。
- webpack-hot-middleware
- webpack-build-notifier
- [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)：webpack 构建过程添加友好的错误提示。
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)：在指定的 template 中动态插入 js 变量、通过内置变量动态生成/插入标签、压缩 html 格式。
- progress-bar-webpack-plugin
- mini-css-extract-plugin
- hard-source-webpack-plugin
- optimize-css-assets-webpack-plugin
- uglifyjs-webpack-plugin
- add-asset-html-webpack-plugin
- sw-precache-webpack-plugin
- webpack-parallel-uglify-plugin
- webpack-bundle-analyzer
