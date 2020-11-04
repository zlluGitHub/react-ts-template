const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    console.log(app);
    // app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }));
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://xxxx',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );

}

