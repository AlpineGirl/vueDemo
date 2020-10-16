module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，baseUrl从 Vue CLI 3.3 起已弃用使用publicPath来替代。
    publicPath: '/',　

    // 将构建好的文件输出到哪里（或者说将编译的文件）
    outputDir: 'dist',

    // 放置静态资源的地方 (js/css/img/font/...)
    assetsDir: '',

    // 是否为生产环境构建生成 source map？
    productionSourceMap: true,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},

    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {},
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },
    // 配置 webpack-dev-server 行为。
    devServer: {
        //host: '0.0.0.0',
        port: 3333,
        open: true //启动后自动打开浏览器

    },

    // 三方插件的选项
    pluginOptions: {
        // ...
    }
}