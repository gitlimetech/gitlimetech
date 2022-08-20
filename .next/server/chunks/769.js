"use strict";
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hidden_Hidden)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4229);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/utils"
var utils_ = __webpack_require__(2958);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: external "hoist-non-react-statics"
var external_hoist_non_react_statics_ = __webpack_require__(9638);
var external_hoist_non_react_statics_default = /*#__PURE__*/__webpack_require__.n(external_hoist_non_react_statics_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js
var createBreakpoints = __webpack_require__(157);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/withWidth/withWidth.js









 // By default, returns true if screen width is the same or greater than the given breakpoint.

var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return createBreakpoints/* keys.indexOf */.X.indexOf(breakpoint) <= createBreakpoints/* keys.indexOf */.X.indexOf(width);
  }

  return createBreakpoints/* keys.indexOf */.X.indexOf(breakpoint) < createBreakpoints/* keys.indexOf */.X.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return createBreakpoints/* keys.indexOf */.X.indexOf(width) <= createBreakpoints/* keys.indexOf */.X.indexOf(breakpoint);
  }

  return createBreakpoints/* keys.indexOf */.X.indexOf(width) < createBreakpoints/* keys.indexOf */.X.indexOf(breakpoint);
};
var useEnhancedEffect = typeof window === 'undefined' ? external_react_.useEffect : external_react_.useLayoutEffect;

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$noSSR = options.noSSR,
        noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
        initialWidthOption = options.initialWidth;

    function WithWidth(props) {
      var contextTheme = (0,useTheme/* default */.Z)();
      var theme = props.theme || contextTheme;

      var _getThemeProps = (0,styles_.getThemeProps)({
        theme: theme,
        name: 'MuiWithWidth',
        props: (0,esm_extends/* default */.Z)({}, props)
      }),
          initialWidth = _getThemeProps.initialWidth,
          width = _getThemeProps.width,
          other = (0,objectWithoutProperties/* default */.Z)(_getThemeProps, ["initialWidth", "width"]);

      var _React$useState = external_react_.useState(false),
          mountedState = _React$useState[0],
          setMountedState = _React$useState[1];

      useEnhancedEffect(function () {
        setMountedState(true);
      }, []);
      /**
       * innerWidth |xs      sm      md      lg      xl
       *            |-------|-------|-------|-------|------>
       * width      |  xs   |  sm   |  md   |  lg   |  xl
       */

      var keys = theme.breakpoints.keys.slice().reverse();
      var widthComputed = keys.reduce(function (output, key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var matches = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null);

      var more = (0,esm_extends/* default */.Z)({
        width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
      }, withThemeOption ? {
        theme: theme
      } : {}, other); // When rendering the component on the server,
      // we have no idea about the client browser screen width.
      // In order to prevent blinks and help the reconciliation of the React tree
      // we are not rendering the child component.
      //
      // An alternative is to use the `initialWidth` property.


      if (more.width === undefined) {
        return null;
      }

      return /*#__PURE__*/external_react_.createElement(Component, more);
    }

     false ? 0 : void 0;

    if (false) {}

    external_hoist_non_react_statics_default()(WithWidth, Component);
    return WithWidth;
  };
};

/* harmony default export */ const withWidth_withWidth = (withWidth);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Hidden/HiddenJs.js




/**
 * @ignore - internal component.
 */

function HiddenJs(props) {
  var children = props.children,
      only = props.only,
      width = props.width;
  var theme = (0,useTheme/* default */.Z)();
  var visible = true; // `only` check is faster to get out sooner if used.

  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];

        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  } // Allow `only` to be combined with other props. If already hidden, no need to check others.


  if (visible) {
    // determine visibility based on the smallest size up
    for (var _i = 0; _i < theme.breakpoints.keys.length; _i += 1) {
      var _breakpoint = theme.breakpoints.keys[_i];
      var breakpointUp = props["".concat(_breakpoint, "Up")];
      var breakpointDown = props["".concat(_breakpoint, "Down")];

      if (breakpointUp && isWidthUp(_breakpoint, width) || breakpointDown && isWidthDown(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: (external_prop_types_default()).node,

  /**
   * @ignore
   */
  className: (external_prop_types_default()).string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: external_prop_types_default().oneOf(['js', 'css']),

  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: external_prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If `true`, screens this size and down will be hidden.
   */
  lgDown: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  lgUp: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  mdDown: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  mdUp: (external_prop_types_default()).bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: external_prop_types_default().oneOfType([external_prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']), external_prop_types_default().arrayOf(external_prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If `true`, screens this size and down will be hidden.
   */
  smDown: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  smUp: (external_prop_types_default()).bool,

  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: (external_prop_types_default()).string.isRequired,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  xlDown: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  xlUp: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  xsDown: (external_prop_types_default()).bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  xsUp: (external_prop_types_default()).bool
};

if (false) {}

/* harmony default export */ const Hidden_HiddenJs = (withWidth_withWidth()(HiddenJs));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(3871);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Hidden/HiddenCss.js








var styles = function styles(theme) {
  var hidden = {
    display: 'none'
  };
  return theme.breakpoints.keys.reduce(function (acc, key) {
    acc["only".concat((0,capitalize/* default */.Z)(key))] = (0,defineProperty/* default */.Z)({}, theme.breakpoints.only(key), hidden);
    acc["".concat(key, "Up")] = (0,defineProperty/* default */.Z)({}, theme.breakpoints.up(key), hidden);
    acc["".concat(key, "Down")] = (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(key), hidden);
    return acc;
  }, {});
};
/**
 * @ignore - internal component.
 */


function HiddenCss(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      only = props.only,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "only"]);

  var theme = (0,useTheme/* default */.Z)();

  if (false) { var unknownProps; }

  var clsx = [];

  if (className) {
    clsx.push(className);
  }

  for (var i = 0; i < theme.breakpoints.keys.length; i += 1) {
    var breakpoint = theme.breakpoints.keys[i];
    var breakpointUp = props["".concat(breakpoint, "Up")];
    var breakpointDown = props["".concat(breakpoint, "Down")];

    if (breakpointUp) {
      clsx.push(classes["".concat(breakpoint, "Up")]);
    }

    if (breakpointDown) {
      clsx.push(classes["".concat(breakpoint, "Down")]);
    }
  }

  if (only) {
    var onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(function (breakpoint) {
      clsx.push(classes["only".concat((0,capitalize/* default */.Z)(breakpoint))]);
    });
  }

  return /*#__PURE__*/external_react_.createElement("div", {
    className: clsx.join(' ')
  }, children);
}

 false ? 0 : void 0;
/* harmony default export */ const Hidden_HiddenCss = ((0,withStyles/* default */.Z)(styles, {
  name: 'PrivateHiddenCss'
})(HiddenCss));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js






/**
 * Responsively hides children based on the selected implementation.
 */

function Hidden(props) {
  var _props$implementation = props.implementation,
      implementation = _props$implementation === void 0 ? 'js' : _props$implementation,
      _props$lgDown = props.lgDown,
      lgDown = _props$lgDown === void 0 ? false : _props$lgDown,
      _props$lgUp = props.lgUp,
      lgUp = _props$lgUp === void 0 ? false : _props$lgUp,
      _props$mdDown = props.mdDown,
      mdDown = _props$mdDown === void 0 ? false : _props$mdDown,
      _props$mdUp = props.mdUp,
      mdUp = _props$mdUp === void 0 ? false : _props$mdUp,
      _props$smDown = props.smDown,
      smDown = _props$smDown === void 0 ? false : _props$smDown,
      _props$smUp = props.smUp,
      smUp = _props$smUp === void 0 ? false : _props$smUp,
      _props$xlDown = props.xlDown,
      xlDown = _props$xlDown === void 0 ? false : _props$xlDown,
      _props$xlUp = props.xlUp,
      xlUp = _props$xlUp === void 0 ? false : _props$xlUp,
      _props$xsDown = props.xsDown,
      xsDown = _props$xsDown === void 0 ? false : _props$xsDown,
      _props$xsUp = props.xsUp,
      xsUp = _props$xsUp === void 0 ? false : _props$xsUp,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["implementation", "lgDown", "lgUp", "mdDown", "mdUp", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);

  if (implementation === 'js') {
    return /*#__PURE__*/external_react_.createElement(Hidden_HiddenJs, (0,esm_extends/* default */.Z)({
      lgDown: lgDown,
      lgUp: lgUp,
      mdDown: mdDown,
      mdUp: mdUp,
      smDown: smDown,
      smUp: smUp,
      xlDown: xlDown,
      xlUp: xlUp,
      xsDown: xsDown,
      xsUp: xsUp
    }, other));
  }

  return /*#__PURE__*/external_react_.createElement(Hidden_HiddenCss, (0,esm_extends/* default */.Z)({
    lgDown: lgDown,
    lgUp: lgUp,
    mdDown: mdDown,
    mdUp: mdUp,
    smDown: smDown,
    smUp: smUp,
    xlDown: xlDown,
    xlUp: xlUp,
    xsDown: xsDown,
    xsUp: xsUp
  }, other));
}

 false ? 0 : void 0;
/* harmony default export */ const Hidden_Hidden = (Hidden);

/***/ })

};
;