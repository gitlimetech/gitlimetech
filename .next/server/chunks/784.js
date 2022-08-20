"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 3784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Notification_Notification)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(3560);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(2829);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__(2285);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = (0,makeStyles/* default */.Z)(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: theme.palette.primary.dark,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    background: theme.palette.common.white,
    color: theme.palette.primary.dark,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ const notification_style = (notificationStyles);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Notification/Notification.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function TransitionUp(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(Slide/* default */.Z, _objectSpread(_objectSpread({}, props), {}, {
    direction: "up"
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = notification_style();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(true);

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Snackbar/* default */.Z, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/jsx_runtime_.jsx(SnackbarContent/* default */.Z, {
      message: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        id: "message-id",
        children: t('common:notif_msg')
      }),
      classes: {
        action: classes.action
      },
      action: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        variant: "contained",
        className: classes.button,
        onClick: handleClose,
        children: t('common:accept')
      }, "undo")
    })
  });
}

/* harmony default export */ const Notification_Notification = ((0,i18n.withTranslation)(['common'])(Notification));
;// CONCATENATED MODULE: ./components/Notification/index.js


/***/ })

};
;