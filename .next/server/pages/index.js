(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__(4093);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
;// CONCATENATED MODULE: external "@material-ui/icons/PlayArrow"
const PlayArrow_namespaceObject = require("@material-ui/icons/PlayArrow");
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Pause"
const Pause_namespaceObject = require("@material-ui/icons/Pause");
var Pause_default = /*#__PURE__*/__webpack_require__.n(Pause_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Send"
var Send_ = __webpack_require__(2736);
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(6899);
;// CONCATENATED MODULE: ./public/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  agency: ['https://via.placeholder.com/964x723/1071ef/FFFFFF', 'https://via.placeholder.com/1280x825/99d8ff/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/331x690/fdcc0c/FFFFFF', 'https://via.placeholder.com/521x309/4a0cfd/FFFFFF', 'https://via.placeholder.com/521x309/ffe55b/FFFFFF', 'https://via.placeholder.com/713x309/79c0ff/FFFFFF', 'https://via.placeholder.com/711x693/52596b/FFFFFF']
};
/* harmony default export */ const images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(7523);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
;// CONCATENATED MODULE: ./components/VideoBanner/banner-style.js

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    '& > div': {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      marginBottom: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      paddingBottom: theme.spacing(15)
    }
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    color: theme.palette.text.primary,
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      color: theme.palette.common.white
    }
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(15)
    },
    '& h3': {
      fontFamily: 'Roboto Condensed'
    }
  },
  textHelper: {
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(10)
    }
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5)
    }
  },
  button: {
    minWidth: 200,
    height: 48,
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light
    }
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'transform: rotate(180deg)' : 'none'
  },
  mobileCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    height: '100%',
    background: theme.palette.common.black,
    '& img': {
      minWidth: '100%',
      height: '100%',
      opacity: 0.5
    }
  },
  videoWrap: {
    position: 'relative'
  },
  videoFigure: {
    borderRadius: 80,
    background: theme.palette.primary.main,
    overflow: 'hidden',
    position: 'absolute',
    width: 1040,
    height: 840,
    top: 0,
    left: 0,
    boxShadow: `-30px 20px 0px 0px ${theme.palette.primary.main}`,
    [theme.breakpoints.up('sm')]: {
      top: -920,
      left: -110,
      transform: 'rotate(-75deg)'
    },
    [theme.breakpoints.up('md')]: {
      transform: 'rotate(-45deg)',
      width: 1200,
      top: -660,
      left: -200
    }
  },
  video: {},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.palette.common.black,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  innerFigure: {
    background: theme.palette.common.black,
    width: '100%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      top: -140,
      left: 400,
      transform: 'rotate(75deg)',
      transformOrigin: 'top left'
    },
    [theme.breakpoints.up('md')]: {
      transform: 'rotate(45deg)',
      left: 130
    },
    '& img': {
      display: 'block',
      width: '100%',
      zIndex: 2,
      position: 'relative'
    },
    '& $video': {
      display: 'block',
      width: '100%',
      top: 98,
      position: 'fixed',
      left: 30,
      '& iframe': {
        width: '100%'
      }
    },
    '&:hover': {
      '& $btnPlay': {
        opacity: 1
      }
    }
  },
  btnPlay: {
    position: 'absolute',
    top: '46%',
    left: '46%',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    background: '#FFF !important',
    boxShadow: theme.shadows[3],
    '& svg': {
      width: 50,
      height: 50,
      fill: theme.palette.primary.main
    }
  }
}));
/* harmony default export */ const banner_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.js






















function VideoBanner(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const text = (0,common/* useText */.XK)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg'));
  const isTablet = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('sm'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('md')); // Translation function

  const {
    t
  } = props; // Youtube player

  const {
    0: play,
    1: setPlayed
  } = (0,external_react_.useState)(false);
  const {
    0: playCtrl,
    1: setPlayedCtrl
  } = (0,external_react_.useState)(true);
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const classes = banner_style();
  (0,external_react_.useEffect)(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();

    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);

    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3001'
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.heroContent,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      smUp: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
        className: classes.mobileCover,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: images_imgAPI.agency[0],
          alt: "cover"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.bannerText,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.title,
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h3",
                className: external_clsx_default()(classes.textHelper, text.title),
                children: t('common:agency-landing.banner_title')
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              className: external_clsx_default()(classes.subtitle, text.subtitle),
              variant: "h5",
              children: t('common:agency-landing.banner_subtitle')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
              variant: "outlined",
              size: "large",
              color: "secondary",
              className: classes.button,
              children: [t('common:agency-landing.banner_button'), /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
                className: classes.icon
              })]
            })]
          })
        }), isTablet && /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.videoWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.videoFigure,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.innerFigure,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
                  mdDown: true,
                  children: play && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
                    className: classes.btnPlay,
                    onClick: _onTogglePause,
                    children: playCtrl ? /*#__PURE__*/jsx_runtime_.jsx((Pause_default()), {}) : /*#__PURE__*/jsx_runtime_.jsx((PlayArrow_default()), {})
                  })
                }), !play || isMobile ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: images_imgAPI.agency[0],
                  alt: "cover"
                }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.overlay
                }), (youtube_default()).use && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.video,
                  children: /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
                    mdDown: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
                      videoId: "rX2T9jH0OxA",
                      opts: opts,
                      onReady: _onReady,
                      onEnd: _onEnd,
                      onPlay: _onPlay
                    })
                  })
                })]
              })
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const VideoBanner_VideoBanner = ((0,i18n.withTranslation)(['agency-landing'])(VideoBanner));
;// CONCATENATED MODULE: ./components/VideoBanner/index.js

;// CONCATENATED MODULE: external "react-scroll-parallax"
const external_react_scroll_parallax_namespaceObject = require("react-scroll-parallax");
;// CONCATENATED MODULE: ./components/Parallax/parallax-style.js

const parallaxStyles = (0,makeStyles/* default */.Z)(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: 0
    }
  },
  innerParallaxSingle: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute'
    }
  },
  parallaxSquare: {
    transform: 'rotate(45deg)',
    position: 'absolute',
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  parallaxPrimary: {
    background: theme.palette.primary.main,
    width: 405,
    height: 405,
    opacity: 0.08,
    borderRadius: 80
  },
  parallaxSecondary: {
    background: theme.palette.secondary.main,
    width: 205,
    height: 205,
    opacity: 0.1,
    borderRadius: 40
  },
  parallaxSecondarySingle: {
    background: theme.palette.secondary.main,
    width: 305,
    height: 305,
    opacity: 0.08,
    borderRadius: 40
  },
  banner: {
    top: 400,
    '& $parallaxPrimary': {
      right: 340
    },
    '& $parallaxSecondary': {
      right: 100,
      top: 100
    }
  },
  about: {
    top: 800,
    '& $parallaxPrimary': {
      left: 40,
      top: 90
    },
    '& $parallaxSecondary': {
      left: -30
    }
  },
  dotsWrap: {
    top: -100
  },
  testi: {
    top: -100
  },
  parallaxDot: {
    fill: theme.palette.text.hint,
    width: 845,
    height: 1099,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute'
  }
}));
/* harmony default export */ const parallax_style = (parallaxStyles);
;// CONCATENATED MODULE: ./components/Parallax/Square.js






function Square() {
  const classes = parallax_style();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.parallaxWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.banner, classes.innerParallax),
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          y: [-40, -40],
          tagOuter: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_clsx_default()(classes.parallaxSquare, classes.parallaxPrimary)
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()(classes.about, classes.innerParallax),
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          y: [-50, 10],
          tagOuter: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_clsx_default()(classes.parallaxSquare, classes.parallaxSecondary)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          y: [-40, 10],
          tagOuter: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_clsx_default()(classes.parallaxSquare, classes.parallaxPrimary)
          })
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Title/title-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const titleBase = {
  fontFamily: 'Roboto Condensed',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginBottom: 64,
  position: 'relative'
};
const titleStyles = (0,makeStyles/* default */.Z)(theme => ({
  default: {
    padding: theme.spacing(0, 4)
  },
  primary: _objectSpread({
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  secondary: _objectSpread({
    color: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  deco: {
    position: 'relative',
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      width: 120,
      position: 'relative',
      textTransform: 'capitalize',
      paddingLeft: 20,
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '62px',
      [theme.breakpoints.up('lg')]: {
        height: 160,
        marginLeft: theme.spacing(3)
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 40,
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(7)
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        width: 'auto',
        textAlign: 'center'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px'
      }
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 210,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('md')]: {
        left: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  extend: {},
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      right: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&$extend': {
      '&:before': {
        boxShadow: `-30px 20px 0px 0px ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`
      }
    },
    '& h3': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: 700,
      textTransform: 'capitalize',
      width: 200,
      fontFamily: 'Roboto Condensed',
      fontSize: 48,
      lineHeight: '62px',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px'
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '100px !important',
    color: theme.palette.secondary.light,
    display: 'block',
    margin: theme.spacing(20, 0, 3),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));
/* harmony default export */ const title_style = (titleStyles);
;// CONCATENATED MODULE: ./components/Title/WithDecoration.js





function WithDecoration(props) {
  const classes = title_style();
  const {
    text
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.deco,
      children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        variant: "h3",
        children: text
      })
    })
  });
}

/* harmony default export */ const Title_WithDecoration = (WithDecoration);
;// CONCATENATED MODULE: ./components/About/about-style.js


const about_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    '& blockquote': {
      fontSize: 28,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.38)' : '#D8D8D8',
      paddingLeft: theme.spacing(5),
      margin: theme.spacing(5, 0, 0),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        margin: 0,
        fontSize: 20,
        lineHeight: '32px'
      }
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    }
  },
  puzzle: {
    position: 'relative',
    left: 60,
    top: -40,
    '& > div': {
      transform: 'rotate(45deg)',
      overflow: 'hidden',
      position: 'absolute',
      background: '#dedede'
    },
    '& span': {
      background: `url(${images_imgAPI.agency[1]}) no-repeat fixed`,
      backgroundSize: 'auto 800px',
      transform: 'rotate(-45deg)',
      width: 560,
      height: 1000,
      display: 'block',
      position: 'relative',
      top: -110,
      left: 0
    }
  },
  pieceBig: {
    width: 300,
    height: 150,
    top: -175,
    left: 100,
    borderRadius: 32
  },
  pieceSmallTop: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 12,
    left: 170
  },
  pieceSmallBottom: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 90,
    left: 90
  }
}));
/* harmony default export */ const about_style = (about_style_useStyles);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,makeStyles/* default */.Z)(theme => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  text: {},
  counterItem: {
    '& p': {
      fontSize: 22,
      textTransform: 'capitalize'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& $text': {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        fontWeight: 'bold',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          width: 50,
          height: 8,
          borderRadius: 5,
          background: theme.palette.primary.main,
          position: 'absolute',
          bottom: theme.spacing(-2),
          left: 'calc(50% - 25px)'
        }
      }
    }
  }
}));
/* harmony default export */ const counter_style = (counterStyles);
;// CONCATENATED MODULE: ./components/Counter/Counter.js










function Counter(props) {
  const {
    t
  } = props;
  const classes = counter_style();
  const text = (0,common/* useText */.XK)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.counterWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        "justify-content": "center",
        alignItems: "center",
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h3",
                className: text.title,
                children: "+200"
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                component: "p",
                className: text.subtitle,
                children: t('common:agency-landing.about_employee')
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h3",
                className: text.title,
                children: "+500"
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                component: "p",
                className: text.subtitle,
                children: t('common:agency-landing.about_projects')
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h3",
                className: text.title,
                children: "+300"
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                component: "p",
                className: text.subtitle,
                children: t('common:agency-landing.about_client')
              })]
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Counter_Counter = ((0,i18n.withTranslation)(['agency-landing'])(Counter));
;// CONCATENATED MODULE: ./components/Counter/index.js

;// CONCATENATED MODULE: ./components/About/About.js
















function About(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const text = (0,common/* useText */.XK)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg')); // Translation function

  const {
    t
  } = props;
  const classes = about_style();
  const title = title_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 5,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Title_WithDecoration, {
              text: t('common:agency-landing.about_title')
            }), isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.puzzle,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pieceBig,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pieceSmallTop,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pieceSmallBottom,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          md: 7,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            className: external_clsx_default()(title.default, text.subtitle),
            variant: "h4",
            children: t('common:agency-landing.about_subtitle')
          }), /*#__PURE__*/jsx_runtime_.jsx(Counter_Counter, {}), /*#__PURE__*/jsx_runtime_.jsx("blockquote", {
            children: t('common:agency-landing.about_quote')
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const About_About = ((0,i18n.withTranslation)(['agency-landing'])(About));
;// CONCATENATED MODULE: ./components/About/index.js

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__(3758);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowBack"
const ArrowBack_namespaceObject = require("@material-ui/icons/ArrowBack");
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowForward"
const ArrowForward_namespaceObject = require("@material-ui/icons/ArrowForward");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(9693);
;// CONCATENATED MODULE: ./components/Services/services-style.js

const services_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    background: theme.palette.type === 'dark' ? (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.dark, 0.4) : (0,colorManipulator/* lighten */.$n)(theme.palette.primary.light, 0.8),
    padding: theme.spacing(10, 0),
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(15, 0, 10)
    }
  },
  title: {},
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& div': {
      width: theme.direction === 'rtl' ? 500 : 300
    }
  },
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10)
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10)
    },
    '& $title': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right'
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  arrow: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    marginTop: theme.direction === 'rtl' ? 160 : 140,
    right: theme.direction === 'rtl' ? 160 : 0,
    position: 'relative',
    zIndex: 10,
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      marginTop: 560
    }
  }
}));
/* harmony default export */ const services_style = (services_style_useStyles);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Icon/Icon.js
var Icon = __webpack_require__(2863);
;// CONCATENATED MODULE: ./components/Title/WithIcon.js








function WithIcon_WithDecoration(props) {
  const classes = title_style();
  const {
    text,
    extended,
    icon
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()(classes.iconDeco, extended && classes.extend),
    children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
      className: classes.icon,
      children: icon
    }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
      variant: "h3",
      children: text
    })]
  });
}

WithIcon_WithDecoration.defaultProps = {
  extended: false,
  icon: 'apps'
};
/* harmony default export */ const WithIcon = (WithIcon_WithDecoration);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./public/images/decoration/frame-deco.png
var frame_deco = __webpack_require__(2806);
var frame_deco_default = /*#__PURE__*/__webpack_require__.n(frame_deco);
;// CONCATENATED MODULE: ./components/Cards/cards-style.js


const cards_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  text: {},
  title: {},

  /* Default Card */
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    width: 240,
    height: 350,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 1),
    '& figure': {
      borderRadius: 12,
      boxShadow: '0 1.5px 12px 6px rgba(0, 0, 0, 0.12)',
      overflow: 'hidden',
      height: 125,
      margin: theme.spacing(-5, 0, 2),
      '& img': {
        height: '100%',
        minWidth: '100%'
      }
    },
    '& h6': {
      marginBottom: theme.spacing(2)
    },
    '& p': {
      height: 90,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  button: {
    boxShadow: 'none'
  },

  /* Testimonial Card */
  testiCard: {
    direction: 'ltr',
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(3),
    width: 240,
    height: 240,
    borderRadius: '50px 50px 50px 0',
    '& p': {
      height: 130,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '4px solid #FFF',
    boxShadow: theme.shadows[1]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    '& $avatar': {
      width: 55,
      height: 55
    },
    '& $title': {
      fontStyle: 'italic',
      fontWeight: 300
    }
  },
  name: {
    marginLeft: theme.spacing(2)
  },

  /* Case Studies Card */
  logo: {},
  small: {},
  big: {},
  fullHide: {},
  figure: {},
  caseCard: {
    maxHeight: 360,
    borderRadius: 24,
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.secondary.light,
    [theme.breakpoints.up('lg')]: {
      minHeight: 170
    },
    '& $figure': {
      margin: 0,
      display: 'block',
      '& img': {
        width: '100%'
      }
    },
    '& $title': {
      lineHeight: '22px',
      marginBottom: theme.spacing(2),
      fontSize: '1.25rem',
      fontWeight: '500'
    },
    '& $logo': {
      display: 'block',
      position: 'relative',
      '& img': {
        width: '100%'
      }
    },
    '&$small': {
      '& $title': {
        display: 'block'
      },
      '& $logo': {
        margin: '0 auto 16px'
      },
      '& $property': {
        textAlign: 'center',
        bottom: 0
      },
      '& $figure': {
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    },
    '&$big': {
      '& $property': {
        [theme.breakpoints.down('md')]: {
          textAlign: 'center',
          bottom: 0
        }
      }
    },
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        '& $property': {
          background: theme.palette.primary.main,
          height: '100%',
          bottom: 0,
          opacity: 1,
          '& p': {
            opacity: 1,
            bottom: 0
          }
        }
      }
    }
  },
  desc: {},
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '110%',
    padding: theme.spacing(3),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: -60,
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%)',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      textAlign: 'center',
      bottom: 0,
      '& $desc': {
        display: 'none'
      }
    },
    '& $title': {
      [theme.breakpoints.up('lg')]: {
        display: 'flex'
      }
    },
    '& $logo': {
      width: 64,
      height: 64,
      background: `url(${(frame_deco_default())}) no-repeat`,
      padding: theme.spacing(2),
      textAlign: 'center',
      marginRight: theme.spacing(2),
      backgroundSize: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
      '& img': {
        display: 'block'
      }
    },
    '& h6': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      lineHeight: '22px'
    },
    '&$fullHide': {
      background: 'none',
      opacity: 0
    },
    '& p': {
      opacity: 0,
      transition: 'bottom 0.5s ease-out',
      position: 'relative',
      bottom: -20
    }
  }
}));
/* harmony default export */ const cards_style = (cards_style_useStyles);
;// CONCATENATED MODULE: ./components/Cards/Default.js








function Services(props) {
  const classes = cards_style();
  const {
    img,
    title,
    desc,
    button
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
    className: classes.defaultCard,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: img,
        alt: "img"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.text,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        display: "block",
        variant: "h6",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        component: "p",
        children: desc
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      variant: "outlined",
      fullWidth: true,
      color: "primary",
      className: classes.button,
      children: button
    })]
  });
}

/* harmony default export */ const Default = (Services);
;// CONCATENATED MODULE: ./components/Parallax/Dots.js





function ParallaxDots() {
  const classes = parallax_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_clsx_default()(classes.parallaxWrap, classes.dotsWrap),
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.innerParallax,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          y: [-50, 50],
          tagOuter: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "#cccccc",
            width: 902,
            height: 1042,
            className: classes.parallaxDot,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/dot-deco.svg#dot"
            })
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Services/Services.js
function Services_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Services_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Services_ownKeys(Object(source), true).forEach(function (key) { Services_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Services_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Services_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const servicesList = [{
  title: 'Lorem Ipsum',
  desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
  img: images_imgAPI.agency[2]
}, {
  title: 'Etiam rhoncus',
  desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
  img: images_imgAPI.agency[3]
}, {
  title: 'Duis fermentum',
  desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
  img: images_imgAPI.agency[4]
}, {
  title: 'Lorem Ipsum',
  desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
  img: images_imgAPI.agency[2]
}, {
  title: 'Etiam rhoncus',
  desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
  img: images_imgAPI.agency[3]
}, {
  title: 'Duis fermentum',
  desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
  img: images_imgAPI.agency[4]
}];

function Services_Services(props) {
  const {
    t
  } = props;
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg'));
  const classes = services_style();
  const slider = (0,external_react_.useRef)(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  (0,external_react_.useEffect)(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(servicesList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ParallaxDots, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carouselHandle,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.carouselWrap,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), Services_objectSpread(Services_objectSpread({
          ref: slider
        }, settings), {}, {
          children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.carouselProp,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
            })
          }), servicesList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Default, {
              title: item.title,
              desc: item.desc,
              img: item.img,
              button: t('common:agency-landing.services_button')
            })
          }, index.toString())), isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.carouselProp,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
            })
          })]
        }))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.floatingTitle,
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        fixed: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.title,
          children: [/*#__PURE__*/jsx_runtime_.jsx(WithIcon, {
            text: t('common:agency-landing.services_title'),
            icon: "apps",
            extended: true
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: classes.arrow,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Fab/* default */.Z, {
              size: "small",
              onClick: () => slider.current.slickNext(),
              "aria-label": "prev",
              className: classes.margin,
              children: /*#__PURE__*/jsx_runtime_.jsx((ArrowBack_default()), {})
            }), /*#__PURE__*/jsx_runtime_.jsx(Fab/* default */.Z, {
              size: "small",
              onClick: () => slider.current.slickPrev(),
              "aria-label": "next",
              className: classes.margin,
              children: /*#__PURE__*/jsx_runtime_.jsx((ArrowForward_default()), {})
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const components_Services_Services = ((0,i18n.withTranslation)(['agency-landing'])(Services_Services));
;// CONCATENATED MODULE: ./components/Services/index.js

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(3901);
;// CONCATENATED MODULE: external "@material-ui/icons/Star"
const Star_namespaceObject = require("@material-ui/icons/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
;// CONCATENATED MODULE: ./components/Cards/Testimonial.js









function Testimonial(props) {
  const classes = cards_style();
  const {
    avatar,
    title,
    name,
    text,
    star
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.testiCard,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
      className: classes.paper,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        display: "block",
        component: "p",
        children: text
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.rating,
        children: [[...Array(star)].map((e, index) => /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
          className: classes.starIcon
        }, index.toString())), [...Array(5 - star)].map((e, index) => /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
          className: classes.starIconDisable
        }, index.toString()))]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.person,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.Z, {
        alt: name,
        src: avatar,
        className: classes.avatar
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.name,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          display: "block",
          variant: "h6",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "caption",
          className: classes.title,
          children: title
        })]
      })]
    })]
  });
}

/* harmony default export */ const Cards_Testimonial = (Testimonial);
;// CONCATENATED MODULE: ./components/CompanyLogo/logo-style.js

const logo_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    width: '100%',
    overflow: 'auto'
  },
  logo: {
    display: 'flex',
    position: 'relative',
    zIndex: 5,
    margin: theme.spacing(20, 0, 0),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(0, 4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)'
    }
  }
}));
/* harmony default export */ const logo_style = (logo_style_useStyles);
;// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.js



const logos = ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png'];

function CompanyLogo() {
  const classes = logo_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.logo,
      children: logos.map((logo, index) => /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logo,
        alt: 'logo' + index.toString()
      }, index.toString()))
    })
  });
}

/* harmony default export */ const CompanyLogo_CompanyLogo = (CompanyLogo);
;// CONCATENATED MODULE: ./components/CompanyLogo/index.js

;// CONCATENATED MODULE: ./components/Parallax/SingleSquare.js





function SingleSquare() {
  const classes = parallax_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.testi, classes.innerParallax),
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.Parallax, {
          y: [10, 30],
          tagOuter: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_clsx_default()(classes.parallaxSquare, classes.parallaxSecondarySingle)
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: external "@material-ui/core/styles/colorManipulator"
const colorManipulator_namespaceObject = require("@material-ui/core/styles/colorManipulator");
;// CONCATENATED MODULE: ./components/Testimonials/testi-style.js


const testiStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    width: '100%',
    background: theme.palette.type === 'dark' ? (0,colorManipulator_namespaceObject.darken)(theme.palette.primary.light, 0.8) : (0,colorManipulator_namespaceObject.lighten)(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(15)
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-10)
    },
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.secondary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
      }
    }
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {},
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10)
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10)
    },
    '& $title': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right'
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  itemPropsFirst: {
    width: theme.direction === 'rtl' ? 450 : 160
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 350
  }
}));
/* harmony default export */ const testi_style = (testiStyles);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
function Testimonials_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Testimonials_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Testimonials_ownKeys(Object(source), true).forEach(function (key) { Testimonials_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Testimonials_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Testimonials_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const testiContent = [{
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: images_imgAPI.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  rating: 4
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[2],
  name: 'Jena Doe',
  title: 'Graphic Designer',
  rating: 4
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: images_imgAPI.avatar[3],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  rating: 3
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[4],
  name: 'Jihan Doe',
  title: 'CEO Software House',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[7],
  name: 'John Doe',
  title: 'Senior Graphic Designer',
  rating: 4
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: images_imgAPI.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  rating: 4
}];

function Testimonials(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg'));
  const classes = testi_style(); // Carousel Setting

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  }; // Translation function

  const {
    t
  } = props; // Carousel

  const slider = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1279) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(testiContent.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(SingleSquare, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carousel,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), Testimonials_objectSpread(Testimonials_objectSpread({
        ref: slider
      }, settings), {}, {
        children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.itemPropsFirst
          })
        }), testiContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx(Cards_Testimonial, {
            avatar: item.avatar,
            title: item.title,
            name: item.name,
            text: item.text,
            star: item.rating
          })
        }, index.toString())), isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.itemPropsLast
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.floatingTitle,
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        fixed: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.title,
          children: /*#__PURE__*/jsx_runtime_.jsx(WithIcon, {
            text: t('common:agency-landing.testimonial_title'),
            icon: "format_quote"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CompanyLogo_CompanyLogo, {})]
  });
}

/* harmony default export */ const Testimonials_Testimonials = ((0,i18n.withTranslation)(['agency-landing'])(Testimonials));
;// CONCATENATED MODULE: ./components/Testimonials/index.js

;// CONCATENATED MODULE: external "react-scroll-animation-wrapper"
const external_react_scroll_animation_wrapper_namespaceObject = require("react-scroll-animation-wrapper");
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_namespaceObject);
;// CONCATENATED MODULE: external "react-spring"
const external_react_spring_namespaceObject = require("react-spring");
// EXTERNAL MODULE: ./public/images/agency/green_buble.png
var green_buble = __webpack_require__(4848);
var green_buble_default = /*#__PURE__*/__webpack_require__.n(green_buble);
// EXTERNAL MODULE: ./public/images/agency/blue_buble.png
var blue_buble = __webpack_require__(7692);
var blue_buble_default = /*#__PURE__*/__webpack_require__.n(blue_buble);
// EXTERNAL MODULE: ./public/images/agency/violet_buble.png
var violet_buble = __webpack_require__(3725);
var violet_buble_default = /*#__PURE__*/__webpack_require__.n(violet_buble);
;// CONCATENATED MODULE: ./components/Expertise/expertise-style.js





const expertise_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-3)
      }
    }
  },
  background: {
    fill: theme.palette.type === 'dark' ? (0,colorManipulator_namespaceObject.darken)(theme.palette.primary.light, 0.8) : (0,colorManipulator_namespaceObject.lighten)(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(100),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)',
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(80)
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  decoration: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    stroke: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    height: 600,
    width: 600,
    position: 'absolute',
    top: -200,
    left: -240,
    backgroundSize: '100%'
  },
  titleDeco: {
    position: 'relative'
  },
  desc: {
    lineHeight: '32px',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4)
    }
  },
  parallaxWrap: {
    position: 'absolute',
    top: -200,
    left: 50,
    '& span': {
      backgroundSize: '100%',
      position: 'absolute'
    },
    '& > div > div': {
      position: 'absolute'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  iconGreen: {
    top: -230,
    left: -130,
    width: 320,
    height: 600,
    background: `url(${(green_buble_default())}) no-repeat`
  },
  iconViolet: {
    width: 560,
    height: 560,
    top: 120,
    left: -250,
    background: `url(${(violet_buble_default())}) no-repeat`
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: -10,
    top: 50,
    background: `url(${(blue_buble_default())}) no-repeat`
  },
  runningTag: {
    position: 'relative',
    height: 130,
    padding: theme.spacing(0, 4),
    '& div[class*="slick-active"]': {
      '& $tagItem': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main
      }
    },
    '& div[class*="slick-current"]': {
      '& $tagItem': {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`
      }
    }
  },
  tagItem: {
    display: 'inline-block',
    borderRadius: 4,
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 4)
    }
  },
  tagGroup: {
    display: 'block',
    '&:focus': {
      outline: 'none'
    }
  }
}));
/* harmony default export */ const expertise_style = (expertise_style_useStyles);
;// CONCATENATED MODULE: ./components/Expertise/Expertise.js
function Expertise_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Expertise_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Expertise_ownKeys(Object(source), true).forEach(function (key) { Expertise_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Expertise_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Expertise_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const expertiseList = [['social media', 'marketing', 'SEO'], ['Web Development', 'UI Designs', 'Mobile Apps'], ['Photography', 'Company Profile', 'Visual Editing'], ['social media', 'marketing', 'SEO'], ['Web Development', 'UI Designs', 'Mobile Apps'], ['Photography', 'Company Profile', 'Visual Editing'], ['social media', 'marketing', 'SEO'], ['Web Development', 'UI Designs', 'Mobile Apps'], ['Photography', 'Company Profile', 'Visual Editing']];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;

const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

function Expertise(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const text = (0,common/* useText */.XK)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg')); // Translate Function

  const {
    t
  } = props;
  const classes = expertise_style();
  const title = title_style();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true
  };
  const [position, setPosition] = (0,external_react_spring_namespaceObject.useSpring)(() => ({
    xy: [0, 0],
    config: {
      mass: 50,
      tension: 550,
      friction: 140
    }
  }));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "#cccccc",
      width: 845,
      height: 1099,
      className: classes.background,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/decoration/square-deco-primary.svg#square"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        onMouseMove: ({
          clientX: x,
          clientY: y
        }) => setPosition({
          xy: calc(x, y)
        }),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          spacing: 6,
          children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            lg: 1
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 4,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.titleDeco,
              children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("svg", {
                fill: "#cccccc",
                width: 845,
                height: 1099,
                className: classes.decoration,
                children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                  xlinkHref: "/images/agency/wave_decoration.svg#main"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Title_WithDecoration, {
                text: t('common:agency-landing.expertise_title')
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "zoomInShort",
                offset: -100,
                delay: 100,
                duration: 0.6,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.parallaxWrap,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans1)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconGreen
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans2)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconViolet
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans3)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconBlue
                    })
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            lg: 7,
            md: 8,
            xs: 12,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              className: external_clsx_default()(title.default, text.subtitle),
              variant: "h4",
              children: t('common:agency-landing.expertise_subtitle')
            }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              className: external_clsx_default()(classes.desc, text.paragraph),
              children: t('common:agency-landing.expertise_paragraph')
            }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
              xsDown: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.runningTag,
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), Expertise_objectSpread(Expertise_objectSpread({}, settings), {}, {
                  children: expertiseList.map((group, indexGroup) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: classes.tagGroup,
                    children: group.map((item, indexChild) => /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.tagItem,
                      children: item
                    }, indexChild.toString()))
                  }, indexGroup.toString()))
                }))
              })
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const Expertise_Expertise = ((0,i18n.withTranslation)(['agency-landing'])(Expertise));
;// CONCATENATED MODULE: ./components/Expertise/index.js

;// CONCATENATED MODULE: external "react-image-lightbox"
const external_react_image_lightbox_namespaceObject = require("react-image-lightbox");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js + 1 modules
var ListItem = __webpack_require__(8867);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(5757);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 2 modules
var ButtonBase = __webpack_require__(2467);
;// CONCATENATED MODULE: ./components/Cards/Case.js








function Case(props) {
  const classes = cards_style();
  const {
    bg,
    logo,
    title,
    desc,
    size,
    simple,
    openPopup
  } = props;

  const setSize = sizeProp => {
    switch (sizeProp) {
      case 'small':
        return classes.small;

      case 'big':
        return classes.big;

      default:
        return classes.medium;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonBase/* default */.Z, {
    className: external_clsx_default()(classes.caseCard, setSize(size)),
    focusRipple: true,
    onClick: openPopup,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: classes.figure,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: simple ? logo : bg,
        alt: "img"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: external_clsx_default()(classes.property, simple && classes.fullHide),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: classes.title,
        children: [!simple && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: classes.logo,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: logo,
            alt: "logo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          component: "span",
          className: classes.title,
          children: title
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        component: "span",
        className: classes.desc,
        children: desc
      })]
    })]
  });
}

Case.defaultProps = {
  bg: '',
  size: 'medium',
  simple: false,
  openPopup: () => {}
};
/* harmony default export */ const Cards_Case = (Case);
;// CONCATENATED MODULE: ./components/CaseStudies/case-study-style.js


const case_study_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    background: theme.palette.type === 'dark' ? (0,colorManipulator_namespaceObject.darken)(theme.palette.primary.light, 0.8) : (0,colorManipulator_namespaceObject.lighten)(theme.palette.primary.light, 0.8),
    '& nav': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        overflow: 'auto'
      }
    }
  },
  filter: {
    borderRadius: theme.rounded.small,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark
  },
  massonry: {
    '& button': {
      width: '100%'
    }
  }
}));
/* harmony default export */ const case_study_style = (case_study_style_useStyles);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseStudies.js



















const categories = ['corporate', 'advertising', 'marketing', 'government', 'creative'];
const caseData = [{
  bg: images_imgAPI.agency[5],
  logo: '/images/logos/mobile.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'small'
}, {
  logo: '/images/logos/coin.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'small',
  simple: true
}, {
  logo: '/images/logos/starter.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'medium',
  simple: true
}, {
  bg: images_imgAPI.agency[6],
  logo: '/images/logos/profile.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'medium'
}, {
  bg: images_imgAPI.agency[7],
  logo: '/images/logos/architect.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'medium'
}, {
  bg: images_imgAPI.agency[8],
  logo: '/images/logos/fashion.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'big'
}, {
  bg: images_imgAPI.agency[9],
  logo: '/images/logos/cloud.png',
  title: 'Donec commodo convallis ligula',
  desc: 'Vestibulum consequat hendrerit',
  size: 'big'
}];

function CaseStudies(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md')); // Translation Function

  const {
    t
  } = props; // Image Gallery

  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,external_react_.useState)(0);
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const classes = case_study_style();
  const title = title_style();
  const {
    0: selectedIndex,
    1: setSelectedIndex
  } = (0,external_react_.useState)('corporate');

  function handleListItemClick(event, index) {
    console.log(index);
    setSelectedIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + caseData.length - 1) % caseData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + caseData.length + 1) % caseData.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  const renderCard = (item, index) => /*#__PURE__*/jsx_runtime_.jsx(Cards_Case, {
    bg: item.bg || '',
    logo: item.logo,
    title: item.title,
    desc: item.desc,
    size: item.size,
    simple: item.simple || false,
    openPopup: () => showPopup(index)
  }, index.toString());

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [open && /*#__PURE__*/jsx_runtime_.jsx((external_react_image_lightbox_default()), {
      mainSrc: caseData[photoIndex].bg || caseData[photoIndex].logo,
      nextSrc: caseData[(photoIndex + 1) % caseData.length].bg || caseData[(photoIndex + 1) % caseData.length].logo,
      prevSrc: caseData[(photoIndex + 1) % caseData.length].logo || null,
      onCloseRequest: () => setOpen(false),
      onMovePrevRequest: onMovePrevRequest,
      onMoveNextRequest: onMoveNextRequest
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 3,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
            animateOnce: true,
            animateIn: "fadeInRightShort",
            offset: -100,
            delay: 200,
            duration: 0.3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h4",
                className: title.primary,
                children: t('common:agency-landing.case_title')
              }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
                component: "nav",
                children: categories.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
                  button: true,
                  className: external_clsx_default()(classes.filter, selectedIndex === item && classes.active),
                  onClick: event => handleListItemClick(event, item),
                  children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
                    primary: item
                  })
                }, index.toString()))
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 9,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.massonry,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              container: true,
              spacing: 3,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                sm: 3,
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                  animateOnce: true,
                  animateIn: "fadeInUpShort",
                  offset: -100,
                  delay: 200,
                  duration: 0.4,
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: caseData.map((item, index) => {
                      if (item.size === 'small') {
                        return renderCard(item, index);
                      }

                      return false;
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                sm: 4,
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                  animateOnce: true,
                  animateIn: "fadeInUpShort",
                  offset: -100,
                  delay: 400,
                  duration: 0.4,
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: caseData.map((item, index) => {
                      if (item.size === 'medium') {
                        return renderCard(item, index);
                      }

                      return false;
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                sm: 5,
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                  animateOnce: true,
                  animateIn: "fadeInUpShort",
                  offset: -100,
                  delay: 600,
                  duration: 0.4,
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: caseData.map((item, index) => {
                      if (item.size === 'big') {
                        return renderCard(item, index);
                      }

                      return false;
                    })
                  })
                })
              })]
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const CaseStudies_CaseStudies = ((0,i18n.withTranslation)(['agency-landing'])(CaseStudies));
;// CONCATENATED MODULE: ./components/CaseStudies/index.js

;// CONCATENATED MODULE: ./components/CallAction/action-style.js


const action_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative'
  },
  background: {
    fill: theme.palette.type === 'dark' ? (0,colorManipulator_namespaceObject.darken)(theme.palette.primary.light, 0.8) : (0,colorManipulator_namespaceObject.lighten)(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(-50),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)'
  },
  button: {
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 64,
      fontSize: 18
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto'
    }
  },
  paper: {
    padding: theme.spacing(4),
    border: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 1),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      fontFamily: 'Roboto Condensed',
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      }
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      }
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));
/* harmony default export */ const action_style = (action_style_useStyles);
;// CONCATENATED MODULE: ./components/CallAction/CallAction.js














function CallAction(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md')); // Translation Function

  const {
    t
  } = props;
  const classes = action_style();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "#cccccc",
      width: 845,
      height: 1099,
      className: classes.background,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/decoration/square-deco-primary.svg#square"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: isDesktop,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.root,
        children: /*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
          className: classes.paper,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            container: true,
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              item: true,
              md: 9,
              xs: 12,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h4",
                gutterBottom: true,
                display: "block",
                children: t('common:agency-landing.cta_title')
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                display: "block",
                component: "div",
                children: t('common:agency-landing.cta_subtitle')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              md: 3,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                container: true,
                alignItems: "center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                  size: "large",
                  variant: "outlined",
                  color: "secondary",
                  href: "/contact",
                  className: classes.button,
                  children: [t('common:agency-landing.cta_btn'), /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
                    className: classes.rightIcon
                  })]
                })
              })
            })]
          })
        })
      })
    })]
  });
}

/* harmony default export */ const CallAction_CallAction = ((0,i18n.withTranslation)(['agency-landing'])(CallAction));
;// CONCATENATED MODULE: ./components/CallAction/index.js

;// CONCATENATED MODULE: external "@material-ui/icons/Email"
const Email_namespaceObject = require("@material-ui/icons/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/LocalPhone"
const LocalPhone_namespaceObject = require("@material-ui/icons/LocalPhone");
var LocalPhone_default = /*#__PURE__*/__webpack_require__.n(LocalPhone_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/LocationOn"
const LocationOn_namespaceObject = require("@material-ui/icons/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
;// CONCATENATED MODULE: external "google-maps-react"
const external_google_maps_react_namespaceObject = require("google-maps-react");
;// CONCATENATED MODULE: ./components/MapAddress/map-address-style.js

const map_address_style_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative'
  },
  block: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20)
    }
  },
  paper: {
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2)
    }
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: theme.spacing(),
    position: 'relative'
  },
  map: {
    background: '#dedede',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 700,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-6)
    }
  }
}));
/* harmony default export */ const map_address_style = (map_address_style_useStyles);
;// CONCATENATED MODULE: ./components/MapAddress/MapAddress.js


















function MapContainer(props) {
  const {
    google
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Map, {
    google: google,
    style: {
      width: '100%',
      height: '700px',
      position: 'relative'
    },
    initialCenter: {
      lat: 37.759703,
      lng: -122.428093
    },
    zoom: 14,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Marker, {
      position: {
        lat: 37.759703,
        lng: -122.428093
      }
    })
  });
}

const MapWithAMarker = (0,external_google_maps_react_namespaceObject.GoogleApiWrapper)({
  apiKey: null
})(MapContainer);

function MapAdress(props) {
  // Theme breakpoints
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg')); // Translation Function

  const {
    t
  } = props;
  const classes = map_address_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 1
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          md: 5,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title_WithDecoration, {
            text: t('common:agency-landing.office_title')
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.block,
            children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInLeftShort",
              offset: -100,
              delay: 200,
              duration: 0.3,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  variant: "h6",
                  display: "block",
                  children: t('common:agency-landing.office_head')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                  container: true,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    sm: 6,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((LocalPhone_default()), {
                      className: classes.icon
                    }), "+91 821 030 9433"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    sm: 6,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Email_default()), {
                      className: classes.icon
                    }), "hello@gitlime.com"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((LocationOn_default()), {
                      className: classes.icon
                    }), "DLF Phase 3 , Udyog vihar, Gurugram , India"]
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInLeftShort",
              offset: -100,
              delay: 500,
              duration: 0.3,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  variant: "h6",
                  display: "block",
                  children: t('common:agency-landing.office_branch')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                  container: true,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    sm: 6,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((LocalPhone_default()), {
                      className: classes.icon
                    }), "+98 765 432 10"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    sm: 6,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Email_default()), {
                      className: classes.icon
                    }), "hello@gitlime.com"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                    item: true,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((LocationOn_default()), {
                      className: classes.icon
                    }), "Lorem ipsum street Block C - Vestibullum Building"]
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
            className: classes.map,
            elevation: 10,
            children: /*#__PURE__*/jsx_runtime_.jsx(MapWithAMarker, {
              googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
              loadingElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '100%'
                }
              }),
              containerElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '700px'
                }
              }),
              mapElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '100%'
                }
              })
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const MapAddress = ((0,i18n.withTranslation)(['agency-landing'])(MapAdress));
;// CONCATENATED MODULE: ./components/MapAddress/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 2 modules
var Footer = __webpack_require__(277);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowUpward"
const ArrowUpward_namespaceObject = require("@material-ui/icons/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js + 2 modules
var Tooltip = __webpack_require__(9413);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(6995);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = (0,makeStyles/* default */.Z)(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      padding: theme.spacing(1, 1, 7),
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 14px 16px 0',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: (0,colorManipulator/* alpha */.Fq)(theme.palette.common.white, 0.3),
        border: `1px solid ${theme.palette.primary.dark}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: 3,
        transform: 'rotate(45deg)'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ const pagenav_style = (pagenav);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function PageNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PageNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PageNav_ownKeys(Object(source), true).forEach(function (key) { PageNav_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PageNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PageNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), PageNav_objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx(Tooltip/* default */.ZP, {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Fab/* default */.Z, {
        color: "primary",
        "aria-label": "To top",
        component: LinkBtn,
        href: "#home",
        className: classes.fab,
        children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx(Tooltip/* default */.ZP, {
            title: t('common:agency-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
              href: item.url
            })
          })
        }, item.id.toString()))
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = ((0,i18n.withTranslation)(['agency-landing'])(PageNav));
;// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 2 modules
var Notification = __webpack_require__(3784);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
;// CONCATENATED MODULE: ./pages/index.js
























const sectionMargin = margin => margin * 20;

const pages_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = pages_useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const isTablet = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('md'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [(brand_default()).agency.name, "\xA0 - Home Page"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Square, {}), /*#__PURE__*/jsx_runtime_.jsx("section", {
          children: /*#__PURE__*/jsx_runtime_.jsx(VideoBanner_VideoBanner, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: isTablet ? classes.spaceTopShort : classes.spaceTop,
          id: "about",
          children: /*#__PURE__*/jsx_runtime_.jsx(About_About, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: classes.spaceTop,
          id: "services",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Services_Services, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: isTablet ? classes.spaceTopShort : classes.spaceTop,
          id: "our-expertise",
          children: /*#__PURE__*/jsx_runtime_.jsx(Expertise_Expertise, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: isMobile ? classes.spaceTopShort : classes.spaceTop,
          id: "testimonials",
          children: /*#__PURE__*/jsx_runtime_.jsx(Testimonials_Testimonials, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          id: "case-studies",
          children: /*#__PURE__*/jsx_runtime_.jsx(CaseStudies_CaseStudies, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: classes.spaceTopShort,
          id: "call-to-action",
          children: /*#__PURE__*/jsx_runtime_.jsx(CallAction_CallAction, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: classes.spaceTopShort,
          id: "address",
          children: /*#__PURE__*/jsx_runtime_.jsx(MapAddress, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        mdDown: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(PageNav_PageNav, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: classes.spaceTopShort,
        children: /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
          toggleDir: onToggleDir
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        mdDown: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Notification/* default */.Z, {})
      })]
    })]
  });
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing']
});

/* harmony default export */ const pages = ((0,i18n.withTranslation)(['common', 'agency-landing'])(Landing));

/***/ }),

/***/ 7523:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 7692:
/***/ ((module) => {

module.exports = "/_next/static/images/blue_buble-22a2a254d8b8c6da01600b56ef418636.png";

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = "/_next/static/images/green_buble-eea66101f56c8ff5eabd38e27c2e8b43.png";

/***/ }),

/***/ 3725:
/***/ ((module) => {

module.exports = "/_next/static/images/violet_buble-e40721a98b4166ee5b59dd5f92e722e4.png";

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAAGWvHq+AAAABGdBTUEAALGPC/xhBQAABY1JREFUaAXdmluoFlUUx885HQWt7CJ2k4xjihXZVQh6CCTyqStRPthzBJEv0kOvQRco8KWHCIyi61sERhg9nYrU0KgoK9G0SEuJrPOSkufr95++PayZ2TOz5/Z93/kWrLP3Xnv913+t+WZmz+wzExMp6fV6b1jTpB0w2XPjSUT9KWewk7Ix3ql2ko485zXwyAVRmDTaOjqKt6zR9V0e0VhRjLzqnBJt32FJwmgHOGy34/gYCOkmHG9u9nJQ7THCIV3rynLjRFsc1rna8C4hNxe11kGGuJSEF4OMI+HSPpmEBZKkHf+39v6y9gjMxPL+ZAZknekv6/s9KLuO4zHayzWoKlOUcgWgu6oCM0eULH536ee0v5aSeIAbS0FpB4IcQjM/UdovHuO8IcW8Ip7M6wB4MQWKhnn+kR2Pgz6Qs1lwnD+Tuj/EY+tk++4niRwV0U6W9QUuvCKLAmRO/iJnO1cbWKtGmK+Mj2LoAUocVZd7GdiB5B8zloEtSL6+g7PMBXFtGuTsmZaUr1XaSN5qk8GUGgh2WRQy++emUnBVBzi2ZHm8lumqsTP+hN3lDV1sPJsJZAyZM8HNEfNv+ue7cc32B06Ga9LYxFkE0bQroAVCca3rx3vGErvLcz3Gr+1ER/0bqPwb3b7ehWBzRyTesDq8c96ZDo3u8K6G41CHPDb0THQicZwP92852+xsy/0l4kCOeC8Zfud9EN7SAuk/kOQ/7PoIID/TP+WrNp/74gXbYIsW6EDWJ4IDhzhCuraAeCYkRiMfyNeje9Cv0HsaBQsBQ/IlmpYTIdhaPjCdSLOZ8Y+1ghaBCB5yJn9YFCN4DrIqZ68Kfz44uM+RAOcpSg152Bev1AbR6hpkFnJjKYl1AHmnRTfoL7dxc/sQbG1A4oMWP6iBeM2HampLVxivMgTezeRtaYeWxvOsNue4WG4R11uxXsG7lFMQXySCKSrcQ9s1obguhOs7dWq/VwpcUzYMg3Rf4mG7ZuZVYdMifa8qqqH/U+7s/Y1AlzYMFgI/xhm80l6nZ0AtCkHW9PkWwuuFjX9TDItrBguBve8IE6R9ZJxESKRAn6chvL/Qlwu47hoKNCMPFJLZSaBrMvDqBr1+VhM4NlXniRFh66gvJUI8GYcJ7xSvnz6itA2udwL5Cjc30nFLx5D6HrBtLolN8tKAoQ4wnLQspt/+Q7ZNCqIvDJm6L9v5keqT3FJ0h7IskN3MrR2pxEOTIXHdY/SvgipyHOeZUI6h+pGo7mVzVarz+O7Fdu5QC8kjJ7Ft6Lwn6Sam1/P4BmqngkXom00qCcRuHWhhjozkVqDpO2JgzrXdToPc6HKo0sYPn6EgiG7GV/sng3hCzkvrOBO386h3JM8hbQ9+1qTAzehpAuxHh1mkatA/wH8iHy1JS2VoLAR6Dh118X/KUVY9VWmB/2DUq/Pk93hebYlrFOBVOO5C1+UBFoBdl9cmrt9Zm2tUKAWuwfgZeomdXOB9bYjphvWz6tCGlV5SD6LjVKRqW4kepb63NdB+1fe0C/lUVR1l8pKWl3/LvMZg/m4V+ugYFFJWwqy7GWmHeS+qm9K4ySfckO7QLzpB509UL723onOyjYH8Qg3XqUjVEhXqisK4H9WnR1vQSp+VuRgj0H5KDhdTxyr0QFA+3JFfQBeKvEKi8X+Xggq0ToD1vvnRiFZ7lrwes/nm9ROPgHlOshNQbyx6erpa4yHLKfjv49Sc7SwPCtZnrk33gwhRSw6AWtVZcb7AED6Ctr0/lFf9Tibaee/0FRNiI4Htedm1YH82JIeB+VDQYvTjFgpTCO0L1fvwY1AVk6A+tj2M1hFtXLf/UW6XxZOwblh/BFarjery7/YbJhy8vNThoQA9ed2LPoTq35faeT+JapnawfIQfVBBv3P5DyZMDs7ecFq6AAAAAElFTkSuQmCC"

/***/ }),

/***/ 1976:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 5887:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 1103:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ 2736:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ 5339:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 9638:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 921:
/***/ ((module) => {

"use strict";
module.exports = require("popper.js");

/***/ }),

/***/ 4229:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3805:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6400:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 5181:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [543,865,853,560,834,769,700,870,778,784], () => (__webpack_exec__(7347)));
module.exports = __webpack_exports__;

})();