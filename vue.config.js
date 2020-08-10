module.exports = {
  devServer: {
    public: 'localhost:8080',
    host: '127.0.0.1',
    port: 8080,
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          '~@/assets/style/main.styl',
        ],
      },
    },
  },
};
