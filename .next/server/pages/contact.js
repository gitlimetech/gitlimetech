"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 9705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(553);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: external "@material-ui/icons/Send"
var Send_ = __webpack_require__(2736);
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(3560);
;// CONCATENATED MODULE: external "react-material-ui-form-validator"
const external_react_material_ui_form_validator_namespaceObject = require("react-material-ui-form-validator");
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(671);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(6899);
// EXTERNAL MODULE: ./public/images/agency-logo.svg
var agency_logo = __webpack_require__(1630);
var agency_logo_default = /*#__PURE__*/__webpack_require__.n(agency_logo);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
;// CONCATENATED MODULE: external "@material-ui/core/colors/red"
const red_namespaceObject = require("@material-ui/core/colors/red");
var red_default = /*#__PURE__*/__webpack_require__.n(red_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(3258);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Forms/Checkbox.js
const _excluded = ["classes", "errorMessages", "validatorListener", "requiredError", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const red300 = (red_default())[500];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends external_react_material_ui_form_validator_namespaceObject.ValidatorComponent {
  renderValidatorComponent() {
    const _this$props = this.props,
          {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox/* default */.Z, _objectSpread(_objectSpread({}, rest), {}, {
        ref: r => {
          this.input = r;
        }
      })), this.errorText()]
    });
  }

  errorText() {
    const {
      classes
    } = this.props;
    const {
      isValid
    } = this.state;

    if (isValid) {
      return null;
    }

    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.checkbox,
      children: this.getErrorMessage()
    });
  }

}

/* harmony default export */ const Forms_Checkbox = ((0,withStyles/* default */.Z)(styles)(CheckboxValidatorElement));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/Forms/form-style.js

const contactStyles = (0,makeStyles/* default */.Z)(theme => ({
  formWrap: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& h3': {
      fontFamily: 'Roboto Condensed',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('md')]: {
        fontSize: 36
      }
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  desc: {
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      padding: theme.spacing(0, 10)
    }
  },
  input: {
    width: '100%'
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 15, 10)
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    '& label': {
      position: 'relative',
      textAlign: 'left'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      '& button': {
        marginTop: theme.spacing(5)
      }
    },
    '& span': {
      '& a': {
        color: theme.palette.primary.main
      }
    }
  },
  decoration: {
    position: 'fixed',
    width: '100%',
    height: '120%',
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)'
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)'
  },
  decoTop: {
    '& $primary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      top: -200,
      right: -50
    },
    '& $secondary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      top: 24,
      right: -100
    }
  },
  decoBottom: {
    '& $primary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      bottom: 180,
      left: -110
    },
    '& $secondary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      bottom: -100,
      left: -100
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 60,
    top: -60,
    [theme.breakpoints.down('sm')]: {
      left: 'calc(50% - 40px)',
      top: -120
    },
    '& i': {
      fontSize: 36,
      color: theme.palette.text.disabled
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 28,
        opacity: 1
      }
    }
  }
}));
/* harmony default export */ const form_style = (contactStyles);
;// CONCATENATED MODULE: ./components/Forms/Contact.js
function Contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Contact_ownKeys(Object(source), true).forEach(function (key) { Contact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Contact(props) {
  const {
    t
  } = props;
  const classes = form_style();
  const text = (0,common/* useText */.XK)();
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  (0,external_react_.useEffect)(() => {
    external_react_material_ui_form_validator_namespaceObject.ValidatorForm.addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = (0,external_react_.useState)(false);
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(false);

  const handleChange = name => event => {
    setValues(Contact_objectSpread(Contact_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.formWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Snackbar/* default */.Z, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openNotif,
      autoHideDuration: 4000,
      onClose: handleClose,
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      message: /*#__PURE__*/jsx_runtime_.jsx("span", {
        id: "message-id",
        children: "Message Sent"
      })
    }, "top right"), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      mdUp: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.logo, classes.logoHeader),
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: text_link/* default.agency.home */.Z.agency.home,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (agency_logo_default()),
            alt: "logo"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      smDown: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconButton/* default */.Z, {
        href: text_link/* default.agency.home */.Z.agency.home,
        className: classes.backtohome,
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ion-ios-home-outline"
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ion-ios-arrow-round-back"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      maxWidth: "md",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        variant: "h3",
        gutterBottom: true,
        className: text.title,
        children: t('common:contact_title')
      }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        className: external_clsx_default()(classes.desc, text.subtitle2),
        children: t('common:contact_subtitle')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.form,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_namespaceObject.ValidatorForm, {
          onSubmit: handleSubmit,
          onError: errors => console.log(errors),
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            container: true,
            spacing: 6,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('common:form_name'),
                onChange: handleChange('name'),
                name: "Name",
                value: values.name,
                validators: ['required'],
                errorMessages: ['This field is required']
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('common:form_email'),
                onChange: handleChange('email'),
                name: "Email",
                value: values.email,
                validators: ['required', 'isEmail'],
                errorMessages: ['This field is required', 'email is not valid']
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('common:form_phone'),
                onChange: handleChange('phone'),
                name: "Phone",
                value: values.phone
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                className: classes.input,
                label: t('common:form_company'),
                onChange: handleChange('company'),
                name: "Company",
                value: values.company
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                multiline: true,
                rows: "6",
                className: classes.input,
                label: t('common:form_message'),
                onChange: handleChange('message'),
                name: "Message",
                value: values.message
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.btnArea,
            children: [/*#__PURE__*/jsx_runtime_.jsx(FormControlLabel/* default */.Z, {
              control: /*#__PURE__*/jsx_runtime_.jsx(Forms_Checkbox, {
                validators: ['isTruthy'],
                errorMessages: "This field is required",
                checked: check,
                value: check,
                onChange: e => handleCheck(e),
                color: "primary"
              }),
              label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [t('common:form_terms'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: t('common:form_privacy')
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
              variant: "outlined",
              type: "submit",
              color: "primary",
              size: "large",
              children: [t('common:form_send'), /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
                className: classes.rightIcon
              })]
            })]
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const Forms_Contact = ((0,i18n.withTranslation)(['common'])(Contact));
;// CONCATENATED MODULE: ./components/Forms/Decoration.js




function Decoration() {
  const classes = form_style();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.decoration,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.decoTop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.primary
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.secondary
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.decoBottom,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.primary
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.secondary
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/contact.js









function contact_Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [(brand_default()).agency.name, "\xA0 - Contact"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Decoration, {}), /*#__PURE__*/jsx_runtime_.jsx(Forms_Contact, {})]
    })]
  });
}

contact_Contact.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ const contact = ((0,i18n.withTranslation)('common')(contact_Contact));

/***/ }),

/***/ 2736:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Send");

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

/***/ 9638:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

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

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [543,865,560,769,50,870], () => (__webpack_exec__(9705)));
module.exports = __webpack_exports__;

})();