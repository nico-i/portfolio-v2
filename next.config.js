const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
    "plugins": [
        "postcss-flexbugs-fixes", [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009"
                },
                "stage": 3,
                "features": {
                    "custom-properties": false
                }
            }
        ],
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './pages/**/*.{js,jsx,ts,tsx}',
                    './components/**/*.{js,jsx,ts,tsx}'
                ],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                safelist: ["html", "body"]
            }
        ],
    ],
    images: {
        domains: ['nico-ismaili.netlify.app'],
        basepath: '/images',
    },
    i18n: {
        // Supported Locales
        locales: ["en-US", "de"],
        // Default Locale
        defaultLocale: "en-US",
    },
});