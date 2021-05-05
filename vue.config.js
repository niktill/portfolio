// vue.config.js
module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                // modify the options...
                const newOptions = {
                    ...options,
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                        'b-avatar': 'src',
                        'b-img': 'src',
                        'b-img-lazy': ['src', 'blank-src'],
                        'b-card': 'img-src',
                        'b-card-img': 'src',
                        'b-card-img-lazy': ['src', 'blank-src'],
                        'b-carousel-slide': 'img-src',
                        'b-embed': 'src',
                    },
                };
                return newOptions;
            });
    },
};
