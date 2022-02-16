const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());
module.exports += {

    images: {
        domains: ['nico-ismaili.netlify.app'],
        basepath: '/images',
    },
}