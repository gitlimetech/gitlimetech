"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
;// CONCATENATED MODULE: ./components/Error/error-style.js

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(20, 0, 10)
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 320
    },
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 220,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(-1),
      left: 0
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
    '& p': {
      fontSize: 22,
      color: theme.palette.text.secondary
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));
/* harmony default export */ const error_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Error/Error.js










function Error(props) {
  const classes = error_style();
  const {
    errCode,
    text,
    t
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.errorWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      maxWidth: "md",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 5,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.flex,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.deco,
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h3",
                children: errCode
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 7,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              variant: "h4",
              children: text
            }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              children: t('common:404_subtitle')
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              variant: "outlined",
              color: "primary",
              href: "/",
              size: "large",
              className: classes.button,
              children: t('common:back')
            })]
          })
        })]
      })
    })
  });
}

Error.defaultProps = {
  errCode: '404',
  text: ''
};
/* harmony default export */ const Error_Error = ((0,i18n.withTranslation)(['common'])(Error));
;// CONCATENATED MODULE: ./components/Error/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 2 modules
var Footer = __webpack_require__(277);
// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__(4093);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
;// CONCATENATED MODULE: ./pages/_error.js










const _error_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  dedicatedPage: {
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  }
}));

function ErrorPage(props) {
  const classes = _error_useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const {
    errorCode,
    stars,
    t
  } = props;

  if (errorCode) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: [(brand_default()).agency.name, "\xA0 -\xA0", errorCode]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.dedicatedPage,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
          onToggleDark: onToggleDark,
          onToggleDir: onToggleDir,
          invert: true
        }), /*#__PURE__*/jsx_runtime_.jsx(Error_Error, {
          errorCode: errorCode,
          text: t('common:404')
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.dedicatedPage,
    children: [t('description'), "Next stars:\xA0", stars]
  });
}

ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ const _error = ((0,i18n.withTranslation)(['common'])(ErrorPage));

/***/ }),

/***/ 1976:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 5887:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 1103:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ 5339:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3805:
/***/ ((module) => {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6400:
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ 5181:
/***/ ((module) => {

module.exports = require("react-scrollspy");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [543,865,853,870,778], () => (__webpack_exec__(6178)));
module.exports = __webpack_exports__;

})();