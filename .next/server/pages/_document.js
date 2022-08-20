(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 8334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./theme/palette.js
var palette = __webpack_require__(4947);
var palette_default = /*#__PURE__*/__webpack_require__.n(palette);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/head.js







const HeadComponent = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "description",
    content: (brand_default()).agency.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    href: "/favicons/favicon.ico"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicons/apple-icon-57x57.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicons/apple-icon-60x60.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicons/apple-icon-72x72.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicons/apple-icon-76x76.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicons/apple-icon-114x114.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicons/apple-icon-120x120.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicons/apple-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicons/apple-icon-152x152.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-icon-180x180.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicons/android-icon-192x192.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicons/favicon-32x32.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicons/favicon-96x96.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicons/favicon-16x16.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "manifest",
    href: "/favicons/manifest.json"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileImage",
    content: "/favicons/ms-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "theme-color",
    content: (palette_default()).oceanBlue.palette.primary.main
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    href: "https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css",
    rel: "stylesheet"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "author",
    content: "abhisheksingh"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:site_name",
    content: "gitlime.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:locale",
    content: "en_US"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:site",
    content: "gitlime.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:domain",
    content: "gitlime.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:creator",
    content: "gitlime"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:image:src",
    content: "/images/logos/logo.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:url",
    content: (brand_default()).agency.url
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:title",
    content: (brand_default()).agency.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:description",
    content: (brand_default()).agency.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:site",
    content: (brand_default()).agency.url
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:image",
    content: (brand_default()).agency.img
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image",
    content: (brand_default()).agency.img
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image:width",
    content: "1200"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image:height",
    content: "630"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "p:domain_verify",
    content: "c9bf9d2222443896321abc74817a5d72"
  })]
});

/* harmony default export */ const head = (HeadComponent);
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyDocument extends next_document.default {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      dir: "ltr",
      children: [/*#__PURE__*/jsx_runtime_.jsx(head, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "preloader",
          style: {
            position: 'fixed',
            zIndex: 10000,
            background: '#fafafa',
            width: '100%',
            height: '100%'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            style: {
              opacity: 0.5,
              position: 'fixed',
              top: 'calc(50% - 50px)',
              left: 'calc(50% - 50px)'
            },
            src: "/images/loading.gif",
            alt: "loading"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new styles_.ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    // eslint-disable-line
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({}, props))) // eslint-disable-line

  });

  const initialProps = await next_document.default.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    namespacesRequired: ['agency-landing', 'common'],
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...external_react_default().Children.toArray(initialProps.styles),  false && 0]
  });
};

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 9477:
/***/ ((module) => {

module.exports = {
  agency: {
    name: 'Gitlime',
    desc: 'One-stop solutions at GitLime',
    prefix: 'gitlime',
    footerText: 'gitlime - All Rights Reserved 2022',
    logoText: 'Gitlime technologies',
    projectName: 'Gitlime',
    url: 'gitlime.com',
    img: '/static/images/logos/logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 2538:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 2208:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 6098:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1168:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,947], () => (__webpack_exec__(8334)));
module.exports = __webpack_exports__;

})();