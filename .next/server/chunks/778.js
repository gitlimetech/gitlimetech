exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(2014);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanel.js + 2 modules
var ExpansionPanel = __webpack_require__(4794);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ExpansionPanelSummary/ExpansionPanelSummary.js
var ExpansionPanelSummary = __webpack_require__(8479);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ExpansionPanelDetails/ExpansionPanelDetails.js
var ExpansionPanelDetails = __webpack_require__(4965);
// EXTERNAL MODULE: external "@material-ui/icons/Language"
var Language_ = __webpack_require__(1103);
var Language_default = /*#__PURE__*/__webpack_require__.n(Language_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(7397);
// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(5887);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 9 modules
var Select = __webpack_require__(9537);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(6718);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(5639);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(9659);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./public/images/agency-logo.svg
var agency_logo = __webpack_require__(1630);
var agency_logo_default = /*#__PURE__*/__webpack_require__.n(agency_logo);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(6899);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/Footer/footer-style.js

const footerStyles = (0,makeStyles/* default */.Z)(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    position: 'relative',
    paddingBottom: theme.spacing(8),
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 3)
      }
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 48,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.text.disabled
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.divider,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)'
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& $icon': {
      top: 21,
      position: 'relative'
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  }
}));
/* harmony default export */ const footer_style = (footerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer/Footer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























function Copyright() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
    variant: "body2",
    display: "block",
    color: "textSecondary",
    children: ["\xA9\xA0", (brand_default()).agency.footerText]
  });
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,external_react_.useState)(null); // Theme breakpoints

  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm')); // Translation Function

  const {
    t
  } = props;
  const classes = footer_style();
  const align = (0,common/* useTextAlign */.Lr)();
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    lang: 'eng'
  });
  (0,external_react_.useEffect)(() => {
    setValues({
      lang: i18n.i18n.language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      i18n.i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n.i18n.changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    maxWidth: "lg",
    component: "footer",
    className: classes.footer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
      container: true,
      spacing: 4,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.logo,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (agency_logo_default()),
            alt: "logo"
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h6",
            color: "textPrimary",
            children: (brand_default()).agency.projectName
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          color: "textPrimary",
          className: classes.footerDesc,
          gutterBottom: true,
          children: t('common:agency-landing.footer_paragraph')
        }), isDesktop && /*#__PURE__*/jsx_runtime_.jsx(Copyright, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        xs: 12,
        md: 6,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          spacing: 4,
          "justify-content": "space-evenly",
          children: footers.map(footer => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            xs: 12,
            md: 3,
            className: classes.siteMapItem,
            children: [isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h6",
                className: classes.title,
                color: "textPrimary",
                gutterBottom: true,
                children: footer.title
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: footer.description.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                    href: footer.link[index],
                    variant: "subtitle1",
                    color: "textSecondary",
                    children: item
                  })
                }, item))
              })]
            }), isMobile && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExpansionPanel/* default */.Z, {
              square: true,
              classes: {
                root: classes.accordionRoot
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(ExpansionPanelSummary/* default */.Z, {
                expandIcon: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
                  className: classes.accordionIcon
                }),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                classes: {
                  content: classes.accordionContent
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  children: footer.title
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(ExpansionPanelDetails/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: footer.description.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                      href: footer.link[index],
                      variant: "subtitle1",
                      color: "textSecondary",
                      children: item
                    })
                  }, item))
                })
              })]
            })]
          }, footer.title))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.socmed,
          children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            "aria-label": "FB",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "ion-logo-twitter"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            "aria-label": "TW",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "ion-logo-facebook"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            "aria-label": "IG",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "ion-logo-instagram"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            "aria-label": "LI",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "ion-logo-linkedin"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
          value: values.lang,
          onChange: handleChange,
          MenuProps: {
            container: ctn
          },
          startAdornment: /*#__PURE__*/jsx_runtime_.jsx(InputAdornment/* default */.Z, {
            className: classes.icon,
            position: "start",
            children: /*#__PURE__*/jsx_runtime_.jsx((Language_default()), {})
          }),
          className: classes.selectLang,
          input: /*#__PURE__*/jsx_runtime_.jsx(OutlinedInput/* default */.Z, {
            labelWidth: 200,
            name: "lang",
            id: "outlined-lang-simple"
          }),
          children: [/*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "eng",
            children: "English"
          }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "deu",
            children: "Deutsch"
          }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "ara",
            children: "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "ind",
            children: "Bahasa Indonesia"
          }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "prt",
            children: "Portugu\xEAs"
          }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
            value: "zho",
            children: "\u7B80\u4F53\u4E2D\u6587"
          })]
        })]
      })]
    }), isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: align.textCenter,
      children: /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
        p: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(Copyright, {})
      })
    })]
  });
}

Footer.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ const Footer_Footer = ((0,i18n.withTranslation)(['agency-landing'])(Footer));
;// CONCATENATED MODULE: ./components/Footer/index.js


/***/ }),

/***/ 4093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Header_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Popover/Popover.js
var Popover = __webpack_require__(2387);
// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(5339);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(1976);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(6837);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js + 1 modules
var ListItem = __webpack_require__(8867);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(6869);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var ListItemSecondaryAction = __webpack_require__(1860);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(5757);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./public/images/flag-logo.png
var flag_logo = __webpack_require__(6785);
var flag_logo_default = /*#__PURE__*/__webpack_require__.n(flag_logo);
;// CONCATENATED MODULE: ./components/Header/header-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${(flag_logo_default())}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = (0,makeStyles/* default */.Z)(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    color: theme.palette.text.primary,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    position: 'fixed',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    },
    '& nav': {
      transition: 'all 0.5s ease-out'
    },
    '&$fixed': {
      position: 'fixed',
      top: 0,
      boxShadow: theme.shadows[4],
      background: theme.palette.background.paper,
      zIndex: 1000,
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        },
        '& img': {
          height: 32,
          width: 115
        }
      },
      '& $bar': {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        '& ul': {
          '& li': {
            '& a': {
              color: theme.palette.text.primary
            }
          }
        }
      },
      '& $vDivider': {
        minHeight: theme.spacing(3)
      },
      '& $icon': {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0)
      }
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      fontSize: 22,
      color: theme.palette.text.primary,
      alignItems: 'center',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.common.white
      }
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      width: 140,
      height: 48,
      marginRight: theme.spacing(),
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(2)
      }
    }
  },
  active: {},
  invert: {},
  navLogo: {
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            }
          }
        }
      }
    }
  },
  navMenu: {
    '& > *': {
      margin: 0,
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(0, 1)
      }
    },
    '&$invert': {
      '& ul': {
        '& li': {
          '& a': {
            transition: 'all 0.3s ease-out',
            color: theme.palette.text.primary
          }
        }
      }
    },
    '& ul': {
      listStyle: 'none',
      '& li': {
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(0, 2)
        },
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          color: theme.palette.common.white,
          marginTop: theme.spacing(0.5),
          textTransform: 'capitalize',
          fontSize: 18,
          fontWeight: theme.typography.fontWeightMedium,
          background: 'none !important',
          boxShadow: 'none',
          position: 'relative',
          padding: '6px',
          margin: theme.spacing(0, 1),
          minWidth: 0,
          '&:after': {
            content: '""',
            borderBottom: '3px solid #fff',
            width: '0%',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            '&:after': {
              width: '60%',
              left: 8,
              borderBottomColor: theme.palette.primary.light
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.light,
            '&:after': {
              borderBottomColor: theme.palette.primary.light,
              width: '60%',
              left: 8
            }
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  vDivider: {
    margin: theme.spacing(0, 1),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    transition: 'all 0.5s ease-out',
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    '& $icon': {
      fontSize: 32,
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      '&$invert': {
        color: theme.palette.text.primary
      }
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: theme.spacing(15),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));
/* harmony default export */ const header_style = (headerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header/Settings.js




















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,external_react_.useState)(null);
  const classes = header_style();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,external_react_.useState)(null);
  const {
    0: isDark,
    1: setDark
  } = (0,external_react_.useState)(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      i18n.i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n.i18n.changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  (0,external_react_.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert,
    t
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.setting,
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
      "aria-describedby": id,
      "aria-label": "Settings",
      onClick: handleClick,
      className: external_clsx_default()(classes.icon, open && classes.active, invert && classes.invert),
      children: /*#__PURE__*/jsx_runtime_.jsx((Settings_default()), {
        fontSize: "inherit"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Popover/* default */.ZP, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      container: ctn,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        component: "nav",
        className: classes.titleMenu,
        "aria-label": "Mode-menu",
        subheader: /*#__PURE__*/jsx_runtime_.jsx(ListSubheader/* default */.Z, {
          component: "div",
          children: t('common:agency-landing.header_theme')
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            component: "div",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              component: "label",
              container: true,
              alignItems: "center",
              spacing: 1,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: t('common:agency-landing.header_light')
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(Switch/* default */.Z, {
                  checked: isDark,
                  onChange: handleChangeMode,
                  value: isDark,
                  inputProps: {
                    'aria-label': 'checkbox'
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: t('common:agency-landing.header_dark')
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        component: "nav",
        className: external_clsx_default()(classes.titleMenu, classes.langMenu),
        "aria-label": "Language-menu",
        subheader: /*#__PURE__*/jsx_runtime_.jsx(ListSubheader/* default */.Z, {
          component: "div",
          children: t('common:agency-landing.header_language')
        }),
        children: i18n.i18n.options.allLanguages && i18n.i18n.options.allLanguages.map(val => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
          role: undefined,
          dense: true,
          button: true,
          onClick: () => handleChangeLang(val),
          children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: val
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:' + val)
          }), i18n.i18n.language === val && /*#__PURE__*/jsx_runtime_.jsx(ListItemSecondaryAction/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Check_default()), {
              color: "primary"
            })
          })]
        }, val))
      })]
    })]
  });
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ const Header_Settings = ((0,i18n.withTranslation)(['agency-landing', 'common'])(Settings));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js + 5 modules
var SwipeableDrawer = __webpack_require__(2399);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(671);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(6995);
;// CONCATENATED MODULE: ./components/Header/MobileMenu.js













function MobileMenu(props) {
  const classes = header_style();
  const {
    toggleDrawer,
    open,
    t
  } = props;

  const SideList = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()(classes.menu, open && classes.menuOpen),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
        component: "nav",
        children: [menu/* default.map */.Z.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          button: true,
          component: "a",
          href: `#${item}`,
          style: {
            animationDuration: index * 0.15 + 's'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:agency-landing.header_' + item),
            className: classes.menuList
          })
        }, index.toString())), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          button: true,
          component: "a",
          href: text_link/* default.agency.contact */.Z.agency.contact,
          style: {
            animationDuration: menu/* default.length */.Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:agency-landing.header_contact'),
            className: classes.menuList
          })
        })]
      })
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(SwipeableDrawer/* default */.Z, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(SideList, {})
  });
}

/* harmony default export */ const Header_MobileMenu = ((0,i18n.withTranslation)(['agency-landing'])(MobileMenu));
// EXTERNAL MODULE: ./public/images/logos/logo.png
var logo = __webpack_require__(1609);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
;// CONCATENATED MODULE: ./components/Header/Header.js
function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/_jsx(AnchorLink, Header_objectSpread(Header_objectSpread({
    to: props.to
  }, props), {}, {
    innerRef: ref
  })); // eslint-disable-line
})));

function Header(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md'));
  const {
    0: fixed,
    1: setFixed
  } = (0,external_react_.useState)(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = header_style();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(menu/* default.0 */.Z[0], '#' + menu/* default.0 */.Z[0], 200), createData(menu/* default.1 */.Z[1], '#' + menu/* default.1 */.Z[1], 200), createData(menu/* default.2 */.Z[2], '#' + menu/* default.2 */.Z[2], 200), createData(menu/* default.3 */.Z[3], '#' + menu/* default.3 */.Z[3], 200)]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,external_react_.useState)(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [isMobile && /*#__PURE__*/jsx_runtime_.jsx(Header_MobileMenu, {
      open: openDrawer,
      toggleDrawer: handleOpenDrawer
    }), /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
      component: "div",
      position: "relative",
      id: "header",
      className: external_clsx_default()(classes.header, fixed && classes.fixed, openDrawer && classes.openDrawer),
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        fixed: isDesktop,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.headerContent,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: external_clsx_default()(classes.navLogo, invert && classes.invert),
            children: [isMobile && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              onClick: handleOpenDrawer,
              className: external_clsx_default()('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "hamburger-box",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: external_clsx_default()(classes.bar, 'hamburger-inner')
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.logo,
              children: invert ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: text_link/* default.agency.home */.Z.agency.home,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: (logo_default()),
                    alt: "logo"
                  })
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
                href: "#home",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: (logo_default()),
                  alt: "logo"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: external_clsx_default()(classes.navMenu, invert && classes.invert),
            children: [isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_scrollspy_default()), {
              items: menu/* default */.Z,
              currentClassName: "active",
              children: [menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: invert ?
                /*#__PURE__*/
                // eslint-disable-next-line
                jsx_runtime_.jsx(Button/* default */.Z, {
                  href: '/' + item.url,
                  children: t('common:agency-landing.header_' + item.name)
                }) :
                /*#__PURE__*/
                // eslint-disable-next-line
                jsx_runtime_.jsx(Button/* default */.Z, {
                  component: (external_react_anchor_link_smooth_scroll_default()),
                  offset: item.offset || 0,
                  href: item.url,
                  children: t('common:agency-landing.header_' + item.name)
                })
              }, item.id.toString())), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  href: text_link/* default.agency.contact */.Z.agency.contact,
                  children: t('common:agency-landing.header_contact')
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Header_Settings, {
              toggleDark: onToggleDark,
              toggleDir: onToggleDir,
              invert: invert
            })]
          })]
        })
      })
    })]
  });
}

Header.defaultProps = {
  invert: false
};
/* harmony default export */ const Header_Header = ((0,i18n.withTranslation)(['agency-landing'])(Header));
;// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ 6995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = ['about', 'services', 'our-expertise', 'case-studies'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ 6785:
/***/ ((module) => {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ 1609:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;