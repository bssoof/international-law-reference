;
(function () {
  var _excluded2 = ["children", "styleType", "stylePosition", "spacing"],
    _excluded3 = ["as"],
    _excluded4 = ["as"],
    _excluded5 = ["unmountOnExit", "in", "reverse", "className", "offsetX", "offsetY", "transition", "transitionEnd", "delay", "animatePresenceProps"],
    _excluded6 = ["unmountOnExit", "in", "reverse", "initialScale", "className", "transition", "transitionEnd", "delay", "animatePresenceProps"],
    _excluded7 = ["preset", "motionProps"],
    _excluded8 = ["className", "children", "containerProps", "motionProps"];
  function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
  function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof2(e) + " is not iterable"); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty2(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof2(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties2(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose2(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose2(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function _slicedToArray2(r, e) { return _arrayWithHoles2(r) || _iterableToArrayLimit2(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest2(); }
  function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray2(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray2(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0; } }
  function _arrayLikeToArray2(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles2(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BeS_q25p.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, forwardRef, useMultiStyleConfig, omitThemingProps, getValidChildren, jsxRuntimeExports, createContext, chakra, Icon, withDelay, TRANSITION_DEFAULTS, reactExports, AnimatePresence, motion, cx, useModalContext, useModalStyles, defineStyle, ModalFocusScope, React, useColorModeValue, Box, VStack, Heading, Text, HStack, Badge, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, Stat, StatLabel, StatNumber, Button;
    return {
      setters: [function (module) {
        getDefaultExportFromCjs = module.g;
        forwardRef = module.f;
        useMultiStyleConfig = module.u;
        omitThemingProps = module.o;
        getValidChildren = module.a;
        jsxRuntimeExports = module.j;
        createContext = module.c;
        chakra = module.b;
        Icon = module.I;
        withDelay = module.w;
        TRANSITION_DEFAULTS = module.T;
        reactExports = module.r;
        AnimatePresence = module.A;
        motion = module.m;
        cx = module.d;
        useModalContext = module.e;
        useModalStyles = module.h;
        defineStyle = module.i;
        ModalFocusScope = module.M;
        React = module.R;
        useColorModeValue = module.k;
        Box = module.B;
        VStack = module.V;
        Heading = module.H;
        Text = module.l;
        HStack = module.n;
        Badge = module.p;
        Modal = module.q;
        ModalOverlay = module.s;
        ModalHeader = module.t;
        ModalCloseButton = module.v;
        ModalBody = module.x;
        Stat = module.S;
        StatLabel = module.y;
        StatNumber = module.z;
        Button = module.C;
      }],
      execute: function execute() {
        var _marked = /*#__PURE__*/_regenerator().m(flatten),
          _marked2 = /*#__PURE__*/_regenerator().m(selection_iterator);
        var propTypes = {
          exports: {}
        };

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret = ReactPropTypesSecret_1;
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        var factoryWithThrowingShims = function factoryWithThrowingShims() {
          function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          }
          shim.isRequired = shim;
          function getShim() {
            return shim;
          } // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
          };
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
        {
          propTypes.exports = factoryWithThrowingShims();
        }
        var propTypesExports = propTypes.exports;
        var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);
        var _createContext = createContext({
            name: "ListStylesContext",
            errorMessage: "useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "
          }),
          _createContext2 = _slicedToArray2(_createContext, 2),
          ListStylesProvider = _createContext2[0],
          useListStyles = _createContext2[1];
        var List = forwardRef(function List2(props, ref) {
          var styles = useMultiStyleConfig("List", props);
          var _omitThemingProps = omitThemingProps(props),
            children = _omitThemingProps.children,
            _omitThemingProps$sty = _omitThemingProps.styleType,
            styleType = _omitThemingProps$sty === void 0 ? "none" : _omitThemingProps$sty,
            stylePosition = _omitThemingProps.stylePosition,
            spacing = _omitThemingProps.spacing,
            rest = _objectWithoutProperties2(_omitThemingProps, _excluded2);
          var validChildren = getValidChildren(children);
          var selector = "& > *:not(style) ~ *:not(style)";
          var spacingStyle = spacing ? _defineProperty2({}, selector, {
            mt: spacing
          }) : {};
          return /* @__PURE__ */jsxRuntimeExports.jsx(ListStylesProvider, {
            value: styles,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(chakra.ul, _objectSpread(_objectSpread({
              ref: ref,
              listStyleType: styleType,
              listStylePosition: stylePosition,
              role: "list",
              __css: _objectSpread(_objectSpread({}, styles.container), spacingStyle)
            }, rest), {}, {
              children: validChildren
            }))
          });
        });
        List.displayName = "List";
        var OrderedList = forwardRef(function (props, ref) {
          var as = props.as,
            rest = _objectWithoutProperties2(props, _excluded3);
          return /* @__PURE__ */jsxRuntimeExports.jsx(List, _objectSpread({
            ref: ref,
            as: "ol",
            styleType: "decimal",
            marginStart: "1em"
          }, rest));
        });
        OrderedList.displayName = "OrderedList";
        var UnorderedList = forwardRef(function UnorderedList2(props, ref) {
          var as = props.as,
            rest = _objectWithoutProperties2(props, _excluded4);
          return /* @__PURE__ */jsxRuntimeExports.jsx(List, _objectSpread({
            ref: ref,
            as: "ul",
            styleType: "initial",
            marginStart: "1em"
          }, rest));
        });
        UnorderedList.displayName = "UnorderedList";
        var ListItem = forwardRef(function ListItem2(props, ref) {
          var styles = useListStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.li, _objectSpread(_objectSpread({
            ref: ref
          }, props), {}, {
            __css: styles.item
          }));
        });
        ListItem.displayName = "ListItem";
        var ListIcon = forwardRef(function ListIcon2(props, ref) {
          var styles = useListStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(Icon, _objectSpread(_objectSpread({
            ref: ref,
            role: "presentation"
          }, props), {}, {
            __css: styles.icon
          }));
        });
        ListIcon.displayName = "ListIcon";
        var variants$1 = {
          initial: function initial(_ref0) {
            var _transition$exit;
            var offsetX = _ref0.offsetX,
              offsetY = _ref0.offsetY,
              transition = _ref0.transition,
              transitionEnd = _ref0.transitionEnd,
              delay = _ref0.delay;
            return {
              opacity: 0,
              x: offsetX,
              y: offsetY,
              transition: (_transition$exit = transition === null || transition === void 0 ? void 0 : transition.exit) !== null && _transition$exit !== void 0 ? _transition$exit : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
              transitionEnd: transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.exit
            };
          },
          enter: function enter(_ref1) {
            var _transition$enter;
            var transition = _ref1.transition,
              transitionEnd = _ref1.transitionEnd,
              delay = _ref1.delay;
            return {
              opacity: 1,
              x: 0,
              y: 0,
              transition: (_transition$enter = transition === null || transition === void 0 ? void 0 : transition.enter) !== null && _transition$enter !== void 0 ? _transition$enter : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
              transitionEnd: transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.enter
            };
          },
          exit: function exit(_ref10) {
            var _transition$exit2;
            var offsetY = _ref10.offsetY,
              offsetX = _ref10.offsetX,
              transition = _ref10.transition,
              transitionEnd = _ref10.transitionEnd,
              reverse = _ref10.reverse,
              delay = _ref10.delay;
            var offset = {
              x: offsetX,
              y: offsetY
            };
            return _objectSpread({
              opacity: 0,
              transition: (_transition$exit2 = transition === null || transition === void 0 ? void 0 : transition.exit) !== null && _transition$exit2 !== void 0 ? _transition$exit2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
            }, reverse ? _objectSpread(_objectSpread({}, offset), {}, {
              transitionEnd: transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.exit
            }) : {
              transitionEnd: _objectSpread(_objectSpread({}, offset), transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.exit)
            });
          }
        };
        var slideFadeConfig = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: variants$1
        };
        var SlideFade = reactExports.forwardRef(function SlideFade2(props, ref) {
          var unmountOnExit = props.unmountOnExit,
            isOpen = props.in,
            _props$reverse = props.reverse,
            reverse = _props$reverse === void 0 ? true : _props$reverse,
            className = props.className,
            _props$offsetX = props.offsetX,
            offsetX = _props$offsetX === void 0 ? 0 : _props$offsetX,
            _props$offsetY = props.offsetY,
            offsetY = _props$offsetY === void 0 ? 8 : _props$offsetY,
            transition = props.transition,
            transitionEnd = props.transitionEnd,
            delay = props.delay,
            animatePresenceProps = props.animatePresenceProps,
            rest = _objectWithoutProperties2(props, _excluded5);
          var show = unmountOnExit ? isOpen && unmountOnExit : true;
          var animate = isOpen || unmountOnExit ? "enter" : "exit";
          var custom = {
            offsetX: offsetX,
            offsetY: offsetY,
            reverse: reverse,
            transition: transition,
            transitionEnd: transitionEnd,
            delay: delay
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, _objectSpread(_objectSpread({}, animatePresenceProps), {}, {
            custom: custom,
            children: show && /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, _objectSpread(_objectSpread({
              ref: ref,
              className: cx("chakra-offset-slide", className),
              custom: custom
            }, slideFadeConfig), {}, {
              animate: animate
            }, rest))
          }));
        });
        SlideFade.displayName = "SlideFade";
        var variants = {
          exit: function exit(_ref11) {
            var _transition$exit3;
            var reverse = _ref11.reverse,
              initialScale = _ref11.initialScale,
              transition = _ref11.transition,
              transitionEnd = _ref11.transitionEnd,
              delay = _ref11.delay;
            return _objectSpread(_objectSpread({
              opacity: 0
            }, reverse ? {
              scale: initialScale,
              transitionEnd: transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.exit
            } : {
              transitionEnd: _objectSpread({
                scale: initialScale
              }, transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.exit)
            }), {}, {
              transition: (_transition$exit3 = transition === null || transition === void 0 ? void 0 : transition.exit) !== null && _transition$exit3 !== void 0 ? _transition$exit3 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
            });
          },
          enter: function enter(_ref12) {
            var _transition$enter2;
            var transitionEnd = _ref12.transitionEnd,
              transition = _ref12.transition,
              delay = _ref12.delay;
            return {
              opacity: 1,
              scale: 1,
              transition: (_transition$enter2 = transition === null || transition === void 0 ? void 0 : transition.enter) !== null && _transition$enter2 !== void 0 ? _transition$enter2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
              transitionEnd: transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd.enter
            };
          }
        };
        var scaleFadeConfig = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: variants
        };
        var ScaleFade = reactExports.forwardRef(function ScaleFade2(props, ref) {
          var unmountOnExit = props.unmountOnExit,
            isOpen = props.in,
            _props$reverse2 = props.reverse,
            reverse = _props$reverse2 === void 0 ? true : _props$reverse2,
            _props$initialScale = props.initialScale,
            initialScale = _props$initialScale === void 0 ? 0.95 : _props$initialScale,
            className = props.className,
            transition = props.transition,
            transitionEnd = props.transitionEnd,
            delay = props.delay,
            animatePresenceProps = props.animatePresenceProps,
            rest = _objectWithoutProperties2(props, _excluded6);
          var show = unmountOnExit ? isOpen && unmountOnExit : true;
          var animate = isOpen || unmountOnExit ? "enter" : "exit";
          var custom = {
            initialScale: initialScale,
            reverse: reverse,
            transition: transition,
            transitionEnd: transitionEnd,
            delay: delay
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AnimatePresence, _objectSpread(_objectSpread({}, animatePresenceProps), {}, {
            custom: custom,
            children: show && /* @__PURE__ */jsxRuntimeExports.jsx(motion.div, _objectSpread(_objectSpread({
              ref: ref,
              className: cx("chakra-offset-slide", className)
            }, scaleFadeConfig), {}, {
              animate: animate,
              custom: custom
            }, rest))
          }));
        });
        ScaleFade.displayName = "ScaleFade";
        var transitions = {
          slideInBottom: _objectSpread(_objectSpread({}, slideFadeConfig), {}, {
            custom: {
              offsetY: 16,
              reverse: true
            }
          }),
          slideInRight: _objectSpread(_objectSpread({}, slideFadeConfig), {}, {
            custom: {
              offsetX: 16,
              reverse: true
            }
          }),
          slideInTop: _objectSpread(_objectSpread({}, slideFadeConfig), {}, {
            custom: {
              offsetY: -16,
              reverse: true
            }
          }),
          slideInLeft: _objectSpread(_objectSpread({}, slideFadeConfig), {}, {
            custom: {
              offsetX: -16,
              reverse: true
            }
          }),
          scale: _objectSpread(_objectSpread({}, scaleFadeConfig), {}, {
            custom: {
              initialScale: 0.95,
              reverse: true
            }
          }),
          none: {}
        };
        var MotionSection = chakra(motion.section);
        var getMotionProps = function getMotionProps(preset) {
          return transitions[preset || "none"];
        };
        var ModalTransition = reactExports.forwardRef(function (props, ref) {
          var preset = props.preset,
            _props$motionProps = props.motionProps,
            motionProps = _props$motionProps === void 0 ? getMotionProps(preset) : _props$motionProps,
            rest = _objectWithoutProperties2(props, _excluded7);
          return /* @__PURE__ */jsxRuntimeExports.jsx(MotionSection, _objectSpread(_objectSpread({
            ref: ref
          }, motionProps), rest));
        });
        ModalTransition.displayName = "ModalTransition";
        var ModalContent = forwardRef(function (props, ref) {
          var className = props.className,
            children = props.children,
            rootProps = props.containerProps,
            motionProps = props.motionProps,
            rest = _objectWithoutProperties2(props, _excluded8);
          var _useModalContext = useModalContext(),
            getDialogProps = _useModalContext.getDialogProps,
            getDialogContainerProps = _useModalContext.getDialogContainerProps;
          var dialogProps = getDialogProps(rest, ref);
          var containerProps = getDialogContainerProps(rootProps);
          var _className = cx("chakra-modal__content", className);
          var styles = useModalStyles();
          var dialogStyles = defineStyle(_objectSpread({
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            outline: 0
          }, styles.dialog));
          var dialogContainerStyles = defineStyle(_objectSpread({
            display: "flex",
            width: "100vw",
            height: "$100vh",
            position: "fixed",
            left: 0,
            top: 0
          }, styles.dialogContainer));
          var _useModalContext2 = useModalContext(),
            motionPreset = _useModalContext2.motionPreset;
          return /* @__PURE__ */jsxRuntimeExports.jsx(ModalFocusScope, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread(_objectSpread({}, containerProps), {}, {
              className: "chakra-modal__content-container",
              tabIndex: -1,
              __css: dialogContainerStyles,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ModalTransition, _objectSpread(_objectSpread({
                preset: motionPreset,
                motionProps: motionProps,
                className: _className
              }, dialogProps), {}, {
                __css: dialogStyles,
                children: children
              }))
            }))
          });
        });
        ModalContent.displayName = "ModalContent";

        // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
        var Adder = /*#__PURE__*/function () {
          function Adder() {
            _classCallCheck(this, Adder);
            this._partials = new Float64Array(32);
            this._n = 0;
          }
          return _createClass(Adder, [{
            key: "add",
            value: function add(x) {
              var p = this._partials;
              var i = 0;
              for (var j = 0; j < this._n && j < 32; j++) {
                var y = p[j],
                  hi = x + y,
                  lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
                if (lo) p[i++] = lo;
                x = hi;
              }
              p[i] = x;
              this._n = i + 1;
              return this;
            }
          }, {
            key: "valueOf",
            value: function valueOf() {
              var p = this._partials;
              var n = this._n,
                x,
                y,
                lo,
                hi = 0;
              if (n > 0) {
                hi = p[--n];
                while (n > 0) {
                  x = hi;
                  y = p[--n];
                  hi = x + y;
                  lo = y - (hi - x);
                  if (lo) break;
                }
                if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                  y = lo * 2;
                  x = hi + y;
                  if (y == x - hi) hi = x;
                }
              }
              return hi;
            }
          }]);
        }();
        function flatten(arrays) {
          var _iterator, _step, _array, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                _iterator = _createForOfIteratorHelper(arrays);
                _context.p = 1;
                _iterator.s();
              case 2:
                if ((_step = _iterator.n()).done) {
                  _context.n = 4;
                  break;
                }
                _array = _step.value;
                return _context.d(_regeneratorValues(_array), 3);
              case 3:
                _context.n = 2;
                break;
              case 4:
                _context.n = 6;
                break;
              case 5:
                _context.p = 5;
                _t = _context.v;
                _iterator.e(_t);
              case 6:
                _context.p = 6;
                _iterator.f();
                return _context.f(6);
              case 7:
                return _context.a(2);
            }
          }, _marked, null, [[1, 5, 6, 7]]);
        }
        function merge(arrays) {
          return Array.from(flatten(arrays));
        }
        function range$1(start, stop, step) {
          start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
          var i = -1,
            n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
            range = new Array(n);
          while (++i < n) {
            range[i] = start + i * step;
          }
          return range;
        }
        var epsilon = 1e-6;
        var epsilon2$1 = 1e-12;
        var pi = Math.PI;
        var halfPi = pi / 2;
        var quarterPi = pi / 4;
        var tau = pi * 2;
        var degrees$1 = 180 / pi;
        var radians = pi / 180;
        var abs = Math.abs;
        var atan = Math.atan;
        var atan2 = Math.atan2;
        var cos = Math.cos;
        var ceil = Math.ceil;
        var exp = Math.exp;
        var hypot = Math.hypot;
        var log = Math.log;
        var pow = Math.pow;
        var sin = Math.sin;
        var sign = Math.sign || function (x) {
          return x > 0 ? 1 : x < 0 ? -1 : 0;
        };
        var sqrt = Math.sqrt;
        var tan = Math.tan;
        function acos(x) {
          return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
        }
        function asin(x) {
          return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
        }
        function haversin(x) {
          return (x = sin(x / 2)) * x;
        }
        function noop$1() {}
        function streamGeometry(geometry, stream) {
          if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
            streamGeometryType[geometry.type](geometry, stream);
          }
        }
        var streamObjectType = {
          Feature: function Feature(object, stream) {
            streamGeometry(object.geometry, stream);
          },
          FeatureCollection: function FeatureCollection(object, stream) {
            var features = object.features,
              i = -1,
              n = features.length;
            while (++i < n) streamGeometry(features[i].geometry, stream);
          }
        };
        var streamGeometryType = {
          Sphere: function Sphere(object, stream) {
            stream.sphere();
          },
          Point: function Point(object, stream) {
            object = object.coordinates;
            stream.point(object[0], object[1], object[2]);
          },
          MultiPoint: function MultiPoint(object, stream) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
          },
          LineString: function LineString(object, stream) {
            streamLine(object.coordinates, stream, 0);
          },
          MultiLineString: function MultiLineString(object, stream) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) streamLine(coordinates[i], stream, 0);
          },
          Polygon: function Polygon(object, stream) {
            streamPolygon(object.coordinates, stream);
          },
          MultiPolygon: function MultiPolygon(object, stream) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) streamPolygon(coordinates[i], stream);
          },
          GeometryCollection: function GeometryCollection(object, stream) {
            var geometries = object.geometries,
              i = -1,
              n = geometries.length;
            while (++i < n) streamGeometry(geometries[i], stream);
          }
        };
        function streamLine(coordinates, stream, closed) {
          var i = -1,
            n = coordinates.length - closed,
            coordinate;
          stream.lineStart();
          while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
          stream.lineEnd();
        }
        function streamPolygon(coordinates, stream) {
          var i = -1,
            n = coordinates.length;
          stream.polygonStart();
          while (++i < n) streamLine(coordinates[i], stream, 1);
          stream.polygonEnd();
        }
        function geoStream(object, stream) {
          if (object && streamObjectType.hasOwnProperty(object.type)) {
            streamObjectType[object.type](object, stream);
          } else {
            streamGeometry(object, stream);
          }
        }
        var areaRingSum$1 = new Adder();

        // hello?

        var areaSum$1 = new Adder(),
          lambda00$2,
          phi00$2,
          lambda0$2,
          cosPhi0$1,
          sinPhi0$1;
        var areaStream$1 = {
          point: noop$1,
          lineStart: noop$1,
          lineEnd: noop$1,
          polygonStart: function polygonStart() {
            areaRingSum$1 = new Adder();
            areaStream$1.lineStart = areaRingStart$1;
            areaStream$1.lineEnd = areaRingEnd$1;
          },
          polygonEnd: function polygonEnd() {
            var areaRing = +areaRingSum$1;
            areaSum$1.add(areaRing < 0 ? tau + areaRing : areaRing);
            this.lineStart = this.lineEnd = this.point = noop$1;
          },
          sphere: function sphere() {
            areaSum$1.add(tau);
          }
        };
        function areaRingStart$1() {
          areaStream$1.point = areaPointFirst$1;
        }
        function areaRingEnd$1() {
          areaPoint$1(lambda00$2, phi00$2);
        }
        function areaPointFirst$1(lambda, phi) {
          areaStream$1.point = areaPoint$1;
          lambda00$2 = lambda, phi00$2 = phi;
          lambda *= radians, phi *= radians;
          lambda0$2 = lambda, cosPhi0$1 = cos(phi = phi / 2 + quarterPi), sinPhi0$1 = sin(phi);
        }
        function areaPoint$1(lambda, phi) {
          lambda *= radians, phi *= radians;
          phi = phi / 2 + quarterPi; // half the angular distance from south pole

          // Spherical excess E for a spherical triangle with vertices: south pole,
          // previous point, current point.  Uses a formula derived from Cagnoli’s
          // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
          var dLambda = lambda - lambda0$2,
            sdLambda = dLambda >= 0 ? 1 : -1,
            adLambda = sdLambda * dLambda,
            cosPhi = cos(phi),
            sinPhi = sin(phi),
            k = sinPhi0$1 * sinPhi,
            u = cosPhi0$1 * cosPhi + k * cos(adLambda),
            v = k * sdLambda * sin(adLambda);
          areaRingSum$1.add(atan2(v, u));

          // Advance the previous points.
          lambda0$2 = lambda, cosPhi0$1 = cosPhi, sinPhi0$1 = sinPhi;
        }
        function area(object) {
          areaSum$1 = new Adder();
          geoStream(object, areaStream$1);
          return areaSum$1 * 2;
        }
        function spherical(cartesian) {
          return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
        }
        function cartesian(spherical) {
          var lambda = spherical[0],
            phi = spherical[1],
            cosPhi = cos(phi);
          return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
        }
        function cartesianDot(a, b) {
          return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        function cartesianCross(a, b) {
          return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
        }

        // TODO return a
        function cartesianAddInPlace(a, b) {
          a[0] += b[0], a[1] += b[1], a[2] += b[2];
        }
        function cartesianScale(vector, k) {
          return [vector[0] * k, vector[1] * k, vector[2] * k];
        }

        // TODO return d
        function cartesianNormalizeInPlace(d) {
          var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
          d[0] /= l, d[1] /= l, d[2] /= l;
        }
        var lambda0$1, phi0, lambda1, phi1,
          // bounds
          lambda2,
          // previous lambda-coordinate
          lambda00$1, phi00$1,
          // first point
          p0,
          // previous 3D point
          deltaSum, ranges, range;
        var boundsStream$1 = {
          point: boundsPoint$1,
          lineStart: boundsLineStart,
          lineEnd: boundsLineEnd,
          polygonStart: function polygonStart() {
            boundsStream$1.point = boundsRingPoint;
            boundsStream$1.lineStart = boundsRingStart;
            boundsStream$1.lineEnd = boundsRingEnd;
            deltaSum = new Adder();
            areaStream$1.polygonStart();
          },
          polygonEnd: function polygonEnd() {
            areaStream$1.polygonEnd();
            boundsStream$1.point = boundsPoint$1;
            boundsStream$1.lineStart = boundsLineStart;
            boundsStream$1.lineEnd = boundsLineEnd;
            if (areaRingSum$1 < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);else if (deltaSum > epsilon) phi1 = 90;else if (deltaSum < -epsilon) phi0 = -90;
            range[0] = lambda0$1, range[1] = lambda1;
          },
          sphere: function sphere() {
            lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
          }
        };
        function boundsPoint$1(lambda, phi) {
          ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
          if (phi < phi0) phi0 = phi;
          if (phi > phi1) phi1 = phi;
        }
        function linePoint(lambda, phi) {
          var p = cartesian([lambda * radians, phi * radians]);
          if (p0) {
            var normal = cartesianCross(p0, p),
              equatorial = [normal[1], -normal[0], 0],
              inflection = cartesianCross(equatorial, normal);
            cartesianNormalizeInPlace(inflection);
            inflection = spherical(inflection);
            var delta = lambda - lambda2,
              sign = delta > 0 ? 1 : -1,
              lambdai = inflection[0] * degrees$1 * sign,
              phii,
              antimeridian = abs(delta) > 180;
            if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
              phii = inflection[1] * degrees$1;
              if (phii > phi1) phi1 = phii;
            } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
              phii = -inflection[1] * degrees$1;
              if (phii < phi0) phi0 = phii;
            } else {
              if (phi < phi0) phi0 = phi;
              if (phi > phi1) phi1 = phi;
            }
            if (antimeridian) {
              if (lambda < lambda2) {
                if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
              } else {
                if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
              }
            } else {
              if (lambda1 >= lambda0$1) {
                if (lambda < lambda0$1) lambda0$1 = lambda;
                if (lambda > lambda1) lambda1 = lambda;
              } else {
                if (lambda > lambda2) {
                  if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
                } else {
                  if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
                }
              }
            }
          } else {
            ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
          }
          if (phi < phi0) phi0 = phi;
          if (phi > phi1) phi1 = phi;
          p0 = p, lambda2 = lambda;
        }
        function boundsLineStart() {
          boundsStream$1.point = linePoint;
        }
        function boundsLineEnd() {
          range[0] = lambda0$1, range[1] = lambda1;
          boundsStream$1.point = boundsPoint$1;
          p0 = null;
        }
        function boundsRingPoint(lambda, phi) {
          if (p0) {
            var delta = lambda - lambda2;
            deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
          } else {
            lambda00$1 = lambda, phi00$1 = phi;
          }
          areaStream$1.point(lambda, phi);
          linePoint(lambda, phi);
        }
        function boundsRingStart() {
          areaStream$1.lineStart();
        }
        function boundsRingEnd() {
          boundsRingPoint(lambda00$1, phi00$1);
          areaStream$1.lineEnd();
          if (abs(deltaSum) > epsilon) lambda0$1 = -(lambda1 = 180);
          range[0] = lambda0$1, range[1] = lambda1;
          p0 = null;
        }

        // Finds the left-right distance between two longitudes.
        // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
        // the distance between ±180° to be 360°.
        function angle(lambda0, lambda1) {
          return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
        }
        function rangeCompare(a, b) {
          return a[0] - b[0];
        }
        function rangeContains(range, x) {
          return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        function bounds(feature) {
          var i, n, a, b, merged, deltaMax, delta;
          phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
          ranges = [];
          geoStream(feature, boundsStream$1);

          // First, sort ranges by their minimum longitudes.
          if (n = ranges.length) {
            ranges.sort(rangeCompare);

            // Then, merge any ranges that overlap.
            for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
              b = ranges[i];
              if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
                if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
              } else {
                merged.push(a = b);
              }
            }

            // Finally, find the largest gap between the merged ranges.
            // The final bounding box will be the inverse of this gap.
            for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
              b = merged[i];
              if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
            }
          }
          ranges = range = null;
          return lambda0$1 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda0$1, phi0], [lambda1, phi1]];
        }
        var W0, W1, X0$1, Y0$1, Z0$1, X1$1, Y1$1, Z1$1, X2$1, Y2$1, Z2$1, lambda00, phi00,
          // first point
          x0$4, y0$4, z0; // previous point

        var centroidStream$1 = {
          sphere: noop$1,
          point: centroidPoint$1,
          lineStart: centroidLineStart$1,
          lineEnd: centroidLineEnd$1,
          polygonStart: function polygonStart() {
            centroidStream$1.lineStart = centroidRingStart$1;
            centroidStream$1.lineEnd = centroidRingEnd$1;
          },
          polygonEnd: function polygonEnd() {
            centroidStream$1.lineStart = centroidLineStart$1;
            centroidStream$1.lineEnd = centroidLineEnd$1;
          }
        };

        // Arithmetic mean of Cartesian vectors.
        function centroidPoint$1(lambda, phi) {
          lambda *= radians, phi *= radians;
          var cosPhi = cos(phi);
          centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
        }
        function centroidPointCartesian(x, y, z) {
          ++W0;
          X0$1 += (x - X0$1) / W0;
          Y0$1 += (y - Y0$1) / W0;
          Z0$1 += (z - Z0$1) / W0;
        }
        function centroidLineStart$1() {
          centroidStream$1.point = centroidLinePointFirst;
        }
        function centroidLinePointFirst(lambda, phi) {
          lambda *= radians, phi *= radians;
          var cosPhi = cos(phi);
          x0$4 = cosPhi * cos(lambda);
          y0$4 = cosPhi * sin(lambda);
          z0 = sin(phi);
          centroidStream$1.point = centroidLinePoint;
          centroidPointCartesian(x0$4, y0$4, z0);
        }
        function centroidLinePoint(lambda, phi) {
          lambda *= radians, phi *= radians;
          var cosPhi = cos(phi),
            x = cosPhi * cos(lambda),
            y = cosPhi * sin(lambda),
            z = sin(phi),
            w = atan2(sqrt((w = y0$4 * z - z0 * y) * w + (w = z0 * x - x0$4 * z) * w + (w = x0$4 * y - y0$4 * x) * w), x0$4 * x + y0$4 * y + z0 * z);
          W1 += w;
          X1$1 += w * (x0$4 + (x0$4 = x));
          Y1$1 += w * (y0$4 + (y0$4 = y));
          Z1$1 += w * (z0 + (z0 = z));
          centroidPointCartesian(x0$4, y0$4, z0);
        }
        function centroidLineEnd$1() {
          centroidStream$1.point = centroidPoint$1;
        }

        // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
        // J. Applied Mechanics 42, 239 (1975).
        function centroidRingStart$1() {
          centroidStream$1.point = centroidRingPointFirst;
        }
        function centroidRingEnd$1() {
          centroidRingPoint(lambda00, phi00);
          centroidStream$1.point = centroidPoint$1;
        }
        function centroidRingPointFirst(lambda, phi) {
          lambda00 = lambda, phi00 = phi;
          lambda *= radians, phi *= radians;
          centroidStream$1.point = centroidRingPoint;
          var cosPhi = cos(phi);
          x0$4 = cosPhi * cos(lambda);
          y0$4 = cosPhi * sin(lambda);
          z0 = sin(phi);
          centroidPointCartesian(x0$4, y0$4, z0);
        }
        function centroidRingPoint(lambda, phi) {
          lambda *= radians, phi *= radians;
          var cosPhi = cos(phi),
            x = cosPhi * cos(lambda),
            y = cosPhi * sin(lambda),
            z = sin(phi),
            cx = y0$4 * z - z0 * y,
            cy = z0 * x - x0$4 * z,
            cz = x0$4 * y - y0$4 * x,
            m = hypot(cx, cy, cz),
            w = asin(m),
            // line weight = angle
            v = m && -w / m; // area weight multiplier
          X2$1.add(v * cx);
          Y2$1.add(v * cy);
          Z2$1.add(v * cz);
          W1 += w;
          X1$1 += w * (x0$4 + (x0$4 = x));
          Y1$1 += w * (y0$4 + (y0$4 = y));
          Z1$1 += w * (z0 + (z0 = z));
          centroidPointCartesian(x0$4, y0$4, z0);
        }
        function centroid(object) {
          W0 = W1 = X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = 0;
          X2$1 = new Adder();
          Y2$1 = new Adder();
          Z2$1 = new Adder();
          geoStream(object, centroidStream$1);
          var x = +X2$1,
            y = +Y2$1,
            z = +Z2$1,
            m = hypot(x, y, z);

          // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
          if (m < epsilon2$1) {
            x = X1$1, y = Y1$1, z = Z1$1;
            // If the feature has zero length, fall back to arithmetic mean of point vectors.
            if (W1 < epsilon) x = X0$1, y = Y0$1, z = Z0$1;
            m = hypot(x, y, z);
            // If the feature still has an undefined ccentroid, then return.
            if (m < epsilon2$1) return [NaN, NaN];
          }
          return [atan2(y, x) * degrees$1, asin(z / m) * degrees$1];
        }
        function constant$3(x) {
          return function () {
            return x;
          };
        }
        function compose(a, b) {
          function compose(x, y) {
            return x = a(x, y), b(x[0], x[1]);
          }
          if (a.invert && b.invert) compose.invert = function (x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
          };
          return compose;
        }
        function rotationIdentity(lambda, phi) {
          return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
        }
        rotationIdentity.invert = rotationIdentity;
        function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
          return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
        }
        function forwardRotationLambda(deltaLambda) {
          return function (lambda, phi) {
            return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
          };
        }
        function rotationLambda(deltaLambda) {
          var rotation = forwardRotationLambda(deltaLambda);
          rotation.invert = forwardRotationLambda(-deltaLambda);
          return rotation;
        }
        function rotationPhiGamma(deltaPhi, deltaGamma) {
          var cosDeltaPhi = cos(deltaPhi),
            sinDeltaPhi = sin(deltaPhi),
            cosDeltaGamma = cos(deltaGamma),
            sinDeltaGamma = sin(deltaGamma);
          function rotation(lambda, phi) {
            var cosPhi = cos(phi),
              x = cos(lambda) * cosPhi,
              y = sin(lambda) * cosPhi,
              z = sin(phi),
              k = z * cosDeltaPhi + x * sinDeltaPhi;
            return [atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), asin(k * cosDeltaGamma + y * sinDeltaGamma)];
          }
          rotation.invert = function (lambda, phi) {
            var cosPhi = cos(phi),
              x = cos(lambda) * cosPhi,
              y = sin(lambda) * cosPhi,
              z = sin(phi),
              k = z * cosDeltaGamma - y * sinDeltaGamma;
            return [atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), asin(k * cosDeltaPhi - x * sinDeltaPhi)];
          };
          return rotation;
        }
        function rotation(rotate) {
          rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
          function forward(coordinates) {
            coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
            return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
          }
          forward.invert = function (coordinates) {
            coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
            return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
          };
          return forward;
        }

        // Generates a circle centered at [0°, 0°], with a given radius and precision.
        function circleStream(stream, radius, delta, direction, t0, t1) {
          if (!delta) return;
          var cosRadius = cos(radius),
            sinRadius = sin(radius),
            step = direction * delta;
          if (t0 == null) {
            t0 = radius + direction * tau;
            t1 = radius - step / 2;
          } else {
            t0 = circleRadius(cosRadius, t0);
            t1 = circleRadius(cosRadius, t1);
            if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
          }
          for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
            point = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
            stream.point(point[0], point[1]);
          }
        }

        // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
        function circleRadius(cosRadius, point) {
          point = cartesian(point), point[0] -= cosRadius;
          cartesianNormalizeInPlace(point);
          var radius = acos(-point[1]);
          return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
        }
        function circle$1() {
          var center = constant$3([0, 0]),
            radius = constant$3(90),
            precision = constant$3(6),
            ring,
            rotate,
            stream = {
              point: point
            };
          function point(x, y) {
            ring.push(x = rotate(x, y));
            x[0] *= degrees$1, x[1] *= degrees$1;
          }
          function circle() {
            var c = center.apply(this, arguments),
              r = radius.apply(this, arguments) * radians,
              p = precision.apply(this, arguments) * radians;
            ring = [];
            rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
            circleStream(stream, r, p, 1);
            c = {
              type: "Polygon",
              coordinates: [ring]
            };
            ring = rotate = null;
            return c;
          }
          circle.center = function (_) {
            return arguments.length ? (center = typeof _ === "function" ? _ : constant$3([+_[0], +_[1]]), circle) : center;
          };
          circle.radius = function (_) {
            return arguments.length ? (radius = typeof _ === "function" ? _ : constant$3(+_), circle) : radius;
          };
          circle.precision = function (_) {
            return arguments.length ? (precision = typeof _ === "function" ? _ : constant$3(+_), circle) : precision;
          };
          return circle;
        }
        function clipBuffer() {
          var lines = [],
            line;
          return {
            point: function point(x, y, m) {
              line.push([x, y, m]);
            },
            lineStart: function lineStart() {
              lines.push(line = []);
            },
            lineEnd: noop$1,
            rejoin: function rejoin() {
              if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
            },
            result: function result() {
              var result = lines;
              lines = [];
              line = null;
              return result;
            }
          };
        }
        function pointEqual(a, b) {
          return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
        }
        function Intersection(point, points, other, entry) {
          this.x = point;
          this.z = points;
          this.o = other; // another intersection
          this.e = entry; // is an entry?
          this.v = false; // visited
          this.n = this.p = null; // next & previous
        }

        // A generalized polygon clipping algorithm: given a polygon that has been cut
        // into its visible line segments, and rejoins the segments by interpolating
        // along the clip edge.
        function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
          var subject = [],
            clip = [],
            i,
            n;
          segments.forEach(function (segment) {
            if ((n = segment.length - 1) <= 0) return;
            var n,
              p0 = segment[0],
              p1 = segment[n],
              x;
            if (pointEqual(p0, p1)) {
              if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
              }
              // handle degenerate cases by moving the point
              p1[0] += 2 * epsilon;
            }
            subject.push(x = new Intersection(p0, segment, null, true));
            clip.push(x.o = new Intersection(p0, null, x, false));
            subject.push(x = new Intersection(p1, segment, null, false));
            clip.push(x.o = new Intersection(p1, null, x, true));
          });
          if (!subject.length) return;
          clip.sort(compareIntersection);
          link(subject);
          link(clip);
          for (i = 0, n = clip.length; i < n; ++i) {
            clip[i].e = startInside = !startInside;
          }
          var start = subject[0],
            points,
            point;
          while (1) {
            // Find first unvisited intersection.
            var current = start,
              isSubject = true;
            while (current.v) if ((current = current.n) === start) return;
            points = current.z;
            stream.lineStart();
            do {
              current.v = current.o.v = true;
              if (current.e) {
                if (isSubject) {
                  for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
                } else {
                  interpolate(current.x, current.n.x, 1, stream);
                }
                current = current.n;
              } else {
                if (isSubject) {
                  points = current.p.z;
                  for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
                } else {
                  interpolate(current.x, current.p.x, -1, stream);
                }
                current = current.p;
              }
              current = current.o;
              points = current.z;
              isSubject = !isSubject;
            } while (!current.v);
            stream.lineEnd();
          }
        }
        function link(array) {
          if (!(n = array.length)) return;
          var n,
            i = 0,
            a = array[0],
            b;
          while (++i < n) {
            a.n = b = array[i];
            b.p = a;
            a = b;
          }
          a.n = b = array[0];
          b.p = a;
        }
        function longitude(point) {
          if (abs(point[0]) <= pi) return point[0];else return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
        }
        function polygonContains(polygon, point) {
          var lambda = longitude(point),
            phi = point[1],
            sinPhi = sin(phi),
            normal = [sin(lambda), -cos(lambda), 0],
            angle = 0,
            winding = 0;
          var sum = new Adder();
          if (sinPhi === 1) phi = halfPi + epsilon;else if (sinPhi === -1) phi = -halfPi - epsilon;
          for (var i = 0, n = polygon.length; i < n; ++i) {
            if (!(m = (ring = polygon[i]).length)) continue;
            var ring,
              m,
              point0 = ring[m - 1],
              lambda0 = longitude(point0),
              phi0 = point0[1] / 2 + quarterPi,
              sinPhi0 = sin(phi0),
              cosPhi0 = cos(phi0);
            for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
              var point1 = ring[j],
                lambda1 = longitude(point1),
                phi1 = point1[1] / 2 + quarterPi,
                sinPhi1 = sin(phi1),
                cosPhi1 = cos(phi1),
                delta = lambda1 - lambda0,
                sign = delta >= 0 ? 1 : -1,
                absDelta = sign * delta,
                antimeridian = absDelta > pi,
                k = sinPhi0 * sinPhi1;
              sum.add(atan2(k * sign * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
              angle += antimeridian ? delta + sign * tau : delta;

              // Are the longitudes either side of the point’s meridian (lambda),
              // and are the latitudes smaller than the parallel (phi)?
              if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = cartesianCross(cartesian(point0), cartesian(point1));
                cartesianNormalizeInPlace(arc);
                var intersection = cartesianCross(normal, arc);
                cartesianNormalizeInPlace(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
                  winding += antimeridian ^ delta >= 0 ? 1 : -1;
                }
              }
            }
          }

          // First, determine whether the South pole is inside or outside:
          //
          // It is inside if:
          // * the polygon winds around it in a clockwise direction.
          // * the polygon does not (cumulatively) wind around it, but has a negative
          //   (counter-clockwise) area.
          //
          // Second, count the (signed) number of times a segment crosses a lambda
          // from the point to the South pole.  If it is zero, then the point is the
          // same side as the South pole.

          return (angle < -epsilon || angle < epsilon && sum < -epsilon2$1) ^ winding & 1;
        }
        function clip(pointVisible, clipLine, interpolate, start) {
          return function (sink) {
            var line = clipLine(sink),
              ringBuffer = clipBuffer(),
              ringSink = clipLine(ringBuffer),
              polygonStarted = false,
              polygon,
              segments,
              ring;
            var clip = {
              point: point,
              lineStart: lineStart,
              lineEnd: lineEnd,
              polygonStart: function polygonStart() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
              },
              polygonEnd: function polygonEnd() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = merge(segments);
                var startInside = polygonContains(polygon, start);
                if (segments.length) {
                  if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                  clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                  if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                  sink.lineStart();
                  interpolate(null, null, 1, sink);
                  sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
              },
              sphere: function sphere() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
              }
            };
            function point(lambda, phi) {
              if (pointVisible(lambda, phi)) sink.point(lambda, phi);
            }
            function pointLine(lambda, phi) {
              line.point(lambda, phi);
            }
            function lineStart() {
              clip.point = pointLine;
              line.lineStart();
            }
            function lineEnd() {
              clip.point = point;
              line.lineEnd();
            }
            function pointRing(lambda, phi) {
              ring.push([lambda, phi]);
              ringSink.point(lambda, phi);
            }
            function ringStart() {
              ringSink.lineStart();
              ring = [];
            }
            function ringEnd() {
              pointRing(ring[0][0], ring[0][1]);
              ringSink.lineEnd();
              var clean = ringSink.clean(),
                ringSegments = ringBuffer.result(),
                i,
                n = ringSegments.length,
                m,
                segment,
                point;
              ring.pop();
              polygon.push(ring);
              ring = null;
              if (!n) return;

              // No intersections.
              if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                  if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                  sink.lineStart();
                  for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
                  sink.lineEnd();
                }
                return;
              }

              // Rejoin connected segments.
              // TODO reuse ringBuffer.rejoin()?
              if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
              segments.push(ringSegments.filter(validSegment));
            }
            return clip;
          };
        }
        function validSegment(segment) {
          return segment.length > 1;
        }

        // Intersections are sorted along the clip edge. For both antimeridian cutting
        // and circle clipping, the same comparison is used.
        function compareIntersection(a, b) {
          return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
        }
        var clipAntimeridian = clip(function () {
          return true;
        }, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi, -halfPi]);

        // Takes a line and cuts into visible segments. Return values: 0 - there were
        // intersections or the line was empty; 1 - no intersections; 2 - there were
        // intersections, and the first and last segments should be rejoined.
        function clipAntimeridianLine(stream) {
          var lambda0 = NaN,
            phi0 = NaN,
            sign0 = NaN,
            _clean; // no intersections

          return {
            lineStart: function lineStart() {
              stream.lineStart();
              _clean = 1;
            },
            point: function point(lambda1, phi1) {
              var sign1 = lambda1 > 0 ? pi : -pi,
                delta = abs(lambda1 - lambda0);
              if (abs(delta - pi) < epsilon) {
                // line crosses a pole
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                _clean = 0;
              } else if (sign0 !== sign1 && delta >= pi) {
                // line crosses antimeridian
                if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon; // handle degeneracies
                if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                _clean = 0;
              }
              stream.point(lambda0 = lambda1, phi0 = phi1);
              sign0 = sign1;
            },
            lineEnd: function lineEnd() {
              stream.lineEnd();
              lambda0 = phi0 = NaN;
            },
            clean: function clean() {
              return 2 - _clean; // if intersections, rejoin first and last segments
            }
          };
        }
        function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
          var cosPhi0,
            cosPhi1,
            sinLambda0Lambda1 = sin(lambda0 - lambda1);
          return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1) - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
        }
        function clipAntimeridianInterpolate(from, to, direction, stream) {
          var phi;
          if (from == null) {
            phi = direction * halfPi;
            stream.point(-pi, phi);
            stream.point(0, phi);
            stream.point(pi, phi);
            stream.point(pi, 0);
            stream.point(pi, -phi);
            stream.point(0, -phi);
            stream.point(-pi, -phi);
            stream.point(-pi, 0);
            stream.point(-pi, phi);
          } else if (abs(from[0] - to[0]) > epsilon) {
            var lambda = from[0] < to[0] ? pi : -pi;
            phi = direction * lambda / 2;
            stream.point(-lambda, phi);
            stream.point(0, phi);
            stream.point(lambda, phi);
          } else {
            stream.point(to[0], to[1]);
          }
        }
        function clipCircle(radius) {
          var cr = cos(radius),
            delta = 6 * radians,
            smallRadius = cr > 0,
            notHemisphere = abs(cr) > epsilon; // TODO optimise for this common case

          function interpolate(from, to, direction, stream) {
            circleStream(stream, radius, delta, direction, from, to);
          }
          function visible(lambda, phi) {
            return cos(lambda) * cos(phi) > cr;
          }

          // Takes a line and cuts into visible segments. Return values used for polygon
          // clipping: 0 - there were intersections or the line was empty; 1 - no
          // intersections 2 - there were intersections, and the first and last segments
          // should be rejoined.
          function clipLine(stream) {
            var point0,
              // previous point
              c0,
              // code for previous point
              v0,
              // visibility of previous point
              v00,
              // visibility of first point
              _clean2; // no intersections
            return {
              lineStart: function lineStart() {
                v00 = v0 = false;
                _clean2 = 1;
              },
              point: function point(lambda, phi) {
                var point1 = [lambda, phi],
                  point2,
                  v = visible(lambda, phi),
                  c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                  point2 = intersect(point0, point1);
                  if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                  _clean2 = 0;
                  if (v) {
                    // outside going in
                    stream.lineStart();
                    point2 = intersect(point1, point0);
                    stream.point(point2[0], point2[1]);
                  } else {
                    // inside going out
                    point2 = intersect(point0, point1);
                    stream.point(point2[0], point2[1], 2);
                    stream.lineEnd();
                  }
                  point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                  var t;
                  // If the codes for two points are different, or are both zero,
                  // and there this segment intersects with the small circle.
                  if (!(c & c0) && (t = intersect(point1, point0, true))) {
                    _clean2 = 0;
                    if (smallRadius) {
                      stream.lineStart();
                      stream.point(t[0][0], t[0][1]);
                      stream.point(t[1][0], t[1][1]);
                      stream.lineEnd();
                    } else {
                      stream.point(t[1][0], t[1][1]);
                      stream.lineEnd();
                      stream.lineStart();
                      stream.point(t[0][0], t[0][1], 3);
                    }
                  }
                }
                if (v && (!point0 || !pointEqual(point0, point1))) {
                  stream.point(point1[0], point1[1]);
                }
                point0 = point1, v0 = v, c0 = c;
              },
              lineEnd: function lineEnd() {
                if (v0) stream.lineEnd();
                point0 = null;
              },
              // Rejoin first and last segments if there were intersections and the first
              // and last points were visible.
              clean: function clean() {
                return _clean2 | (v00 && v0) << 1;
              }
            };
          }

          // Intersects the great circle between a and b with the clip circle.
          function intersect(a, b, two) {
            var pa = cartesian(a),
              pb = cartesian(b);

            // We have two planes, n1.p = d1 and n2.p = d2.
            // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
            var n1 = [1, 0, 0],
              // normal
              n2 = cartesianCross(pa, pb),
              n2n2 = cartesianDot(n2, n2),
              n1n2 = n2[0],
              // cartesianDot(n1, n2),
              determinant = n2n2 - n1n2 * n1n2;

            // Two polar points.
            if (!determinant) return !two && a;
            var c1 = cr * n2n2 / determinant,
              c2 = -cr * n1n2 / determinant,
              n1xn2 = cartesianCross(n1, n2),
              A = cartesianScale(n1, c1),
              B = cartesianScale(n2, c2);
            cartesianAddInPlace(A, B);

            // Solve |p(t)|^2 = 1.
            var u = n1xn2,
              w = cartesianDot(A, u),
              uu = cartesianDot(u, u),
              t2 = w * w - uu * (cartesianDot(A, A) - 1);
            if (t2 < 0) return;
            var t = sqrt(t2),
              q = cartesianScale(u, (-w - t) / uu);
            cartesianAddInPlace(q, A);
            q = spherical(q);
            if (!two) return q;

            // Two intersection points.
            var lambda0 = a[0],
              lambda1 = b[0],
              phi0 = a[1],
              phi1 = b[1],
              z;
            if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
            var delta = lambda1 - lambda0,
              polar = abs(delta - pi) < epsilon,
              meridian = polar || delta < epsilon;
            if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

            // Check that the first point is between a and b.
            if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
              var q1 = cartesianScale(u, (-w + t) / uu);
              cartesianAddInPlace(q1, A);
              return [q, spherical(q1)];
            }
          }

          // Generates a 4-bit vector representing the location of a point relative to
          // the small circle's bounding box.
          function code(lambda, phi) {
            var r = smallRadius ? radius : pi - radius,
              code = 0;
            if (lambda < -r) code |= 1; // left
            else if (lambda > r) code |= 2; // right
            if (phi < -r) code |= 4; // below
            else if (phi > r) code |= 8; // above
            return code;
          }
          return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
        }
        function clipLine(a, b, x0, y0, x1, y1) {
          var ax = a[0],
            ay = a[1],
            bx = b[0],
            by = b[1],
            t0 = 0,
            t1 = 1,
            dx = bx - ax,
            dy = by - ay,
            r;
          r = x0 - ax;
          if (!dx && r > 0) return;
          r /= dx;
          if (dx < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          } else if (dx > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          }
          r = x1 - ax;
          if (!dx && r < 0) return;
          r /= dx;
          if (dx < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          } else if (dx > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          }
          r = y0 - ay;
          if (!dy && r > 0) return;
          r /= dy;
          if (dy < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          } else if (dy > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          }
          r = y1 - ay;
          if (!dy && r < 0) return;
          r /= dy;
          if (dy < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          } else if (dy > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          }
          if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
          if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
          return true;
        }
        var clipMax = 1e9,
          clipMin = -clipMax;

        // TODO Use d3-polygon’s polygonContains here for the ring check?
        // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

        function clipRectangle(x0, y0, x1, y1) {
          function visible(x, y) {
            return x0 <= x && x <= x1 && y0 <= y && y <= y1;
          }
          function interpolate(from, to, direction, stream) {
            var a = 0,
              a1 = 0;
            if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
              do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
            } else {
              stream.point(to[0], to[1]);
            }
          }
          function corner(p, direction) {
            return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
          }
          function compareIntersection(a, b) {
            return comparePoint(a.x, b.x);
          }
          function comparePoint(a, b) {
            var ca = corner(a, 1),
              cb = corner(b, 1);
            return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
          }
          return function (stream) {
            var activeStream = stream,
              bufferStream = clipBuffer(),
              segments,
              polygon,
              ring,
              x__,
              y__,
              v__,
              // first point
              x_,
              y_,
              v_,
              // previous point
              first,
              clean;
            var clipStream = {
              point: point,
              lineStart: lineStart,
              lineEnd: lineEnd,
              polygonStart: polygonStart,
              polygonEnd: polygonEnd
            };
            function point(x, y) {
              if (visible(x, y)) activeStream.point(x, y);
            }
            function polygonInside() {
              var winding = 0;
              for (var i = 0, n = polygon.length; i < n; ++i) {
                for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
                  a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                  if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                  } else {
                    if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
                  }
                }
              }
              return winding;
            }

            // Buffer geometry within a polygon and then clip it en masse.
            function polygonStart() {
              activeStream = bufferStream, segments = [], polygon = [], clean = true;
            }
            function polygonEnd() {
              var startInside = polygonInside(),
                cleanInside = clean && startInside,
                visible = (segments = merge(segments)).length;
              if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                  stream.lineStart();
                  interpolate(null, null, 1, stream);
                  stream.lineEnd();
                }
                if (visible) {
                  clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
                }
                stream.polygonEnd();
              }
              activeStream = stream, segments = polygon = ring = null;
            }
            function lineStart() {
              clipStream.point = linePoint;
              if (polygon) polygon.push(ring = []);
              first = true;
              v_ = false;
              x_ = y_ = NaN;
            }

            // TODO rather than special-case polygons, simply handle them separately.
            // Ideally, coincident intersection points should be jittered to avoid
            // clipping issues.
            function lineEnd() {
              if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
              }
              clipStream.point = point;
              if (v_) activeStream.lineEnd();
            }
            function linePoint(x, y) {
              var v = visible(x, y);
              if (polygon) ring.push([x, y]);
              if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                  activeStream.lineStart();
                  activeStream.point(x, y);
                }
              } else {
                if (v && v_) activeStream.point(x, y);else {
                  var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
                    b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
                  if (clipLine(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                      activeStream.lineStart();
                      activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                  } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                  }
                }
              }
              x_ = x, y_ = y, v_ = v;
            }
            return clipStream;
          };
        }
        function extent() {
          var x0 = 0,
            y0 = 0,
            x1 = 960,
            y1 = 500,
            cache,
            cacheStream,
            clip;
          return clip = {
            stream: function stream(_stream) {
              return cache && cacheStream === _stream ? cache : cache = clipRectangle(x0, y0, x1, y1)(cacheStream = _stream);
            },
            extent: function extent(_) {
              return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
            }
          };
        }
        var lengthSum$1, lambda0, sinPhi0, cosPhi0;
        var lengthStream$1 = {
          sphere: noop$1,
          point: noop$1,
          lineStart: lengthLineStart,
          lineEnd: noop$1,
          polygonStart: noop$1,
          polygonEnd: noop$1
        };
        function lengthLineStart() {
          lengthStream$1.point = lengthPointFirst$1;
          lengthStream$1.lineEnd = lengthLineEnd;
        }
        function lengthLineEnd() {
          lengthStream$1.point = lengthStream$1.lineEnd = noop$1;
        }
        function lengthPointFirst$1(lambda, phi) {
          lambda *= radians, phi *= radians;
          lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
          lengthStream$1.point = lengthPoint$1;
        }
        function lengthPoint$1(lambda, phi) {
          lambda *= radians, phi *= radians;
          var sinPhi = sin(phi),
            cosPhi = cos(phi),
            delta = abs(lambda - lambda0),
            cosDelta = cos(delta),
            sinDelta = sin(delta),
            x = cosPhi * sinDelta,
            y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
            z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
          lengthSum$1.add(atan2(sqrt(x * x + y * y), z));
          lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
        }
        function length(object) {
          lengthSum$1 = new Adder();
          geoStream(object, lengthStream$1);
          return +lengthSum$1;
        }
        var coordinates = [null, null],
          object$1 = {
            type: "LineString",
            coordinates: coordinates
          };
        function distance(a, b) {
          coordinates[0] = a;
          coordinates[1] = b;
          return length(object$1);
        }
        var containsObjectType = {
          Feature: function Feature(object, point) {
            return containsGeometry(object.geometry, point);
          },
          FeatureCollection: function FeatureCollection(object, point) {
            var features = object.features,
              i = -1,
              n = features.length;
            while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
            return false;
          }
        };
        var containsGeometryType = {
          Sphere: function Sphere() {
            return true;
          },
          Point: function Point(object, point) {
            return containsPoint(object.coordinates, point);
          },
          MultiPoint: function MultiPoint(object, point) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) if (containsPoint(coordinates[i], point)) return true;
            return false;
          },
          LineString: function LineString(object, point) {
            return containsLine(object.coordinates, point);
          },
          MultiLineString: function MultiLineString(object, point) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) if (containsLine(coordinates[i], point)) return true;
            return false;
          },
          Polygon: function Polygon(object, point) {
            return containsPolygon(object.coordinates, point);
          },
          MultiPolygon: function MultiPolygon(object, point) {
            var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
            while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
            return false;
          },
          GeometryCollection: function GeometryCollection(object, point) {
            var geometries = object.geometries,
              i = -1,
              n = geometries.length;
            while (++i < n) if (containsGeometry(geometries[i], point)) return true;
            return false;
          }
        };
        function containsGeometry(geometry, point) {
          return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
        }
        function containsPoint(coordinates, point) {
          return distance(coordinates, point) === 0;
        }
        function containsLine(coordinates, point) {
          var ao, bo, ab;
          for (var i = 0, n = coordinates.length; i < n; i++) {
            bo = distance(coordinates[i], point);
            if (bo === 0) return true;
            if (i > 0) {
              ab = distance(coordinates[i], coordinates[i - 1]);
              if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2$1 * ab) return true;
            }
            ao = bo;
          }
          return false;
        }
        function containsPolygon(coordinates, point) {
          return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
        }
        function ringRadians(ring) {
          return ring = ring.map(pointRadians), ring.pop(), ring;
        }
        function pointRadians(point) {
          return [point[0] * radians, point[1] * radians];
        }
        function contains(object, point) {
          return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
        }
        function graticuleX(y0, y1, dy) {
          var y = range$1(y0, y1 - epsilon, dy).concat(y1);
          return function (x) {
            return y.map(function (y) {
              return [x, y];
            });
          };
        }
        function graticuleY(x0, x1, dx) {
          var x = range$1(x0, x1 - epsilon, dx).concat(x1);
          return function (y) {
            return x.map(function (x) {
              return [x, y];
            });
          };
        }
        function graticule() {
          var x1,
            x0,
            X1,
            X0,
            y1,
            y0,
            Y1,
            Y0,
            dx = 10,
            dy = dx,
            DX = 90,
            DY = 360,
            x,
            y,
            X,
            Y,
            precision = 2.5;
          function graticule() {
            return {
              type: "MultiLineString",
              coordinates: lines()
            };
          }
          function lines() {
            return range$1(ceil(X0 / DX) * DX, X1, DX).map(X).concat(range$1(ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(range$1(ceil(x0 / dx) * dx, x1, dx).filter(function (x) {
              return abs(x % DX) > epsilon;
            }).map(x)).concat(range$1(ceil(y0 / dy) * dy, y1, dy).filter(function (y) {
              return abs(y % DY) > epsilon;
            }).map(y));
          }
          graticule.lines = function () {
            return lines().map(function (coordinates) {
              return {
                type: "LineString",
                coordinates: coordinates
              };
            });
          };
          graticule.outline = function () {
            return {
              type: "Polygon",
              coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
            };
          };
          graticule.extent = function (_) {
            if (!arguments.length) return graticule.extentMinor();
            return graticule.extentMajor(_).extentMinor(_);
          };
          graticule.extentMajor = function (_) {
            if (!arguments.length) return [[X0, Y0], [X1, Y1]];
            X0 = +_[0][0], X1 = +_[1][0];
            Y0 = +_[0][1], Y1 = +_[1][1];
            if (X0 > X1) _ = X0, X0 = X1, X1 = _;
            if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
            return graticule.precision(precision);
          };
          graticule.extentMinor = function (_) {
            if (!arguments.length) return [[x0, y0], [x1, y1]];
            x0 = +_[0][0], x1 = +_[1][0];
            y0 = +_[0][1], y1 = +_[1][1];
            if (x0 > x1) _ = x0, x0 = x1, x1 = _;
            if (y0 > y1) _ = y0, y0 = y1, y1 = _;
            return graticule.precision(precision);
          };
          graticule.step = function (_) {
            if (!arguments.length) return graticule.stepMinor();
            return graticule.stepMajor(_).stepMinor(_);
          };
          graticule.stepMajor = function (_) {
            if (!arguments.length) return [DX, DY];
            DX = +_[0], DY = +_[1];
            return graticule;
          };
          graticule.stepMinor = function (_) {
            if (!arguments.length) return [dx, dy];
            dx = +_[0], dy = +_[1];
            return graticule;
          };
          graticule.precision = function (_) {
            if (!arguments.length) return precision;
            precision = +_;
            x = graticuleX(y0, y1, 90);
            y = graticuleY(x0, x1, precision);
            X = graticuleX(Y0, Y1, 90);
            Y = graticuleY(X0, X1, precision);
            return graticule;
          };
          return graticule.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
        }
        function graticule10() {
          return graticule()();
        }
        function interpolate$1(a, b) {
          var x0 = a[0] * radians,
            y0 = a[1] * radians,
            x1 = b[0] * radians,
            y1 = b[1] * radians,
            cy0 = cos(y0),
            sy0 = sin(y0),
            cy1 = cos(y1),
            sy1 = sin(y1),
            kx0 = cy0 * cos(x0),
            ky0 = cy0 * sin(x0),
            kx1 = cy1 * cos(x1),
            ky1 = cy1 * sin(x1),
            d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
            k = sin(d);
          var interpolate = d ? function (t) {
            var B = sin(t *= d) / k,
              A = sin(d - t) / k,
              x = A * kx0 + B * kx1,
              y = A * ky0 + B * ky1,
              z = A * sy0 + B * sy1;
            return [atan2(y, x) * degrees$1, atan2(z, sqrt(x * x + y * y)) * degrees$1];
          } : function () {
            return [x0 * degrees$1, y0 * degrees$1];
          };
          interpolate.distance = d;
          return interpolate;
        }
        var identity$4 = function identity$4(x) {
          return x;
        };
        var areaSum = new Adder(),
          areaRingSum = new Adder(),
          x00$2,
          y00$2,
          x0$3,
          y0$3;
        var areaStream = {
          point: noop$1,
          lineStart: noop$1,
          lineEnd: noop$1,
          polygonStart: function polygonStart() {
            areaStream.lineStart = areaRingStart;
            areaStream.lineEnd = areaRingEnd;
          },
          polygonEnd: function polygonEnd() {
            areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop$1;
            areaSum.add(abs(areaRingSum));
            areaRingSum = new Adder();
          },
          result: function result() {
            var area = areaSum / 2;
            areaSum = new Adder();
            return area;
          }
        };
        function areaRingStart() {
          areaStream.point = areaPointFirst;
        }
        function areaPointFirst(x, y) {
          areaStream.point = areaPoint;
          x00$2 = x0$3 = x, y00$2 = y0$3 = y;
        }
        function areaPoint(x, y) {
          areaRingSum.add(y0$3 * x - x0$3 * y);
          x0$3 = x, y0$3 = y;
        }
        function areaRingEnd() {
          areaPoint(x00$2, y00$2);
        }
        var x0$2 = Infinity,
          y0$2 = x0$2,
          x1 = -x0$2,
          y1 = x1;
        var boundsStream = {
          point: boundsPoint,
          lineStart: noop$1,
          lineEnd: noop$1,
          polygonStart: noop$1,
          polygonEnd: noop$1,
          result: function result() {
            var bounds = [[x0$2, y0$2], [x1, y1]];
            x1 = y1 = -(y0$2 = x0$2 = Infinity);
            return bounds;
          }
        };
        function boundsPoint(x, y) {
          if (x < x0$2) x0$2 = x;
          if (x > x1) x1 = x;
          if (y < y0$2) y0$2 = y;
          if (y > y1) y1 = y;
        }

        // TODO Enforce positive area for exterior, negative area for interior?

        var X0 = 0,
          Y0 = 0,
          Z0 = 0,
          X1 = 0,
          Y1 = 0,
          Z1 = 0,
          X2 = 0,
          Y2 = 0,
          Z2 = 0,
          x00$1,
          y00$1,
          x0$1,
          y0$1;
        var centroidStream = {
          point: centroidPoint,
          lineStart: centroidLineStart,
          lineEnd: centroidLineEnd,
          polygonStart: function polygonStart() {
            centroidStream.lineStart = centroidRingStart;
            centroidStream.lineEnd = centroidRingEnd;
          },
          polygonEnd: function polygonEnd() {
            centroidStream.point = centroidPoint;
            centroidStream.lineStart = centroidLineStart;
            centroidStream.lineEnd = centroidLineEnd;
          },
          result: function result() {
            var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
            X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
            return centroid;
          }
        };
        function centroidPoint(x, y) {
          X0 += x;
          Y0 += y;
          ++Z0;
        }
        function centroidLineStart() {
          centroidStream.point = centroidPointFirstLine;
        }
        function centroidPointFirstLine(x, y) {
          centroidStream.point = centroidPointLine;
          centroidPoint(x0$1 = x, y0$1 = y);
        }
        function centroidPointLine(x, y) {
          var dx = x - x0$1,
            dy = y - y0$1,
            z = sqrt(dx * dx + dy * dy);
          X1 += z * (x0$1 + x) / 2;
          Y1 += z * (y0$1 + y) / 2;
          Z1 += z;
          centroidPoint(x0$1 = x, y0$1 = y);
        }
        function centroidLineEnd() {
          centroidStream.point = centroidPoint;
        }
        function centroidRingStart() {
          centroidStream.point = centroidPointFirstRing;
        }
        function centroidRingEnd() {
          centroidPointRing(x00$1, y00$1);
        }
        function centroidPointFirstRing(x, y) {
          centroidStream.point = centroidPointRing;
          centroidPoint(x00$1 = x0$1 = x, y00$1 = y0$1 = y);
        }
        function centroidPointRing(x, y) {
          var dx = x - x0$1,
            dy = y - y0$1,
            z = sqrt(dx * dx + dy * dy);
          X1 += z * (x0$1 + x) / 2;
          Y1 += z * (y0$1 + y) / 2;
          Z1 += z;
          z = y0$1 * x - x0$1 * y;
          X2 += z * (x0$1 + x);
          Y2 += z * (y0$1 + y);
          Z2 += z * 3;
          centroidPoint(x0$1 = x, y0$1 = y);
        }
        function PathContext(context) {
          this._context = context;
        }
        PathContext.prototype = {
          _radius: 4.5,
          pointRadius: function pointRadius(_) {
            return this._radius = _, this;
          },
          polygonStart: function polygonStart() {
            this._line = 0;
          },
          polygonEnd: function polygonEnd() {
            this._line = NaN;
          },
          lineStart: function lineStart() {
            this._point = 0;
          },
          lineEnd: function lineEnd() {
            if (this._line === 0) this._context.closePath();
            this._point = NaN;
          },
          point: function point(x, y) {
            switch (this._point) {
              case 0:
                {
                  this._context.moveTo(x, y);
                  this._point = 1;
                  break;
                }
              case 1:
                {
                  this._context.lineTo(x, y);
                  break;
                }
              default:
                {
                  this._context.moveTo(x + this._radius, y);
                  this._context.arc(x, y, this._radius, 0, tau);
                  break;
                }
            }
          },
          result: noop$1
        };
        var lengthSum = new Adder(),
          lengthRing,
          x00,
          y00,
          x0,
          y0;
        var lengthStream = {
          point: noop$1,
          lineStart: function lineStart() {
            lengthStream.point = lengthPointFirst;
          },
          lineEnd: function lineEnd() {
            if (lengthRing) lengthPoint(x00, y00);
            lengthStream.point = noop$1;
          },
          polygonStart: function polygonStart() {
            lengthRing = true;
          },
          polygonEnd: function polygonEnd() {
            lengthRing = null;
          },
          result: function result() {
            var length = +lengthSum;
            lengthSum = new Adder();
            return length;
          }
        };
        function lengthPointFirst(x, y) {
          lengthStream.point = lengthPoint;
          x00 = x0 = x, y00 = y0 = y;
        }
        function lengthPoint(x, y) {
          x0 -= x, y0 -= y;
          lengthSum.add(sqrt(x0 * x0 + y0 * y0));
          x0 = x, y0 = y;
        }
        function PathString() {
          this._string = [];
        }
        PathString.prototype = {
          _radius: 4.5,
          _circle: circle(4.5),
          pointRadius: function pointRadius(_) {
            if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
            return this;
          },
          polygonStart: function polygonStart() {
            this._line = 0;
          },
          polygonEnd: function polygonEnd() {
            this._line = NaN;
          },
          lineStart: function lineStart() {
            this._point = 0;
          },
          lineEnd: function lineEnd() {
            if (this._line === 0) this._string.push("Z");
            this._point = NaN;
          },
          point: function point(x, y) {
            switch (this._point) {
              case 0:
                {
                  this._string.push("M", x, ",", y);
                  this._point = 1;
                  break;
                }
              case 1:
                {
                  this._string.push("L", x, ",", y);
                  break;
                }
              default:
                {
                  if (this._circle == null) this._circle = circle(this._radius);
                  this._string.push("M", x, ",", y, this._circle);
                  break;
                }
            }
          },
          result: function result() {
            if (this._string.length) {
              var result = this._string.join("");
              this._string = [];
              return result;
            } else {
              return null;
            }
          }
        };
        function circle(radius) {
          return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
        }
        function index(projection, context) {
          var pointRadius = 4.5,
            projectionStream,
            contextStream;
          function path(object) {
            if (object) {
              if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
              geoStream(object, projectionStream(contextStream));
            }
            return contextStream.result();
          }
          path.area = function (object) {
            geoStream(object, projectionStream(areaStream));
            return areaStream.result();
          };
          path.measure = function (object) {
            geoStream(object, projectionStream(lengthStream));
            return lengthStream.result();
          };
          path.bounds = function (object) {
            geoStream(object, projectionStream(boundsStream));
            return boundsStream.result();
          };
          path.centroid = function (object) {
            geoStream(object, projectionStream(centroidStream));
            return centroidStream.result();
          };
          path.projection = function (_) {
            return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$4) : (projection = _).stream, path) : projection;
          };
          path.context = function (_) {
            if (!arguments.length) return context;
            contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
            if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
            return path;
          };
          path.pointRadius = function (_) {
            if (!arguments.length) return pointRadius;
            pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
            return path;
          };
          return path.projection(projection).context(context);
        }
        function transform$1(methods) {
          return {
            stream: transformer(methods)
          };
        }
        function transformer(methods) {
          return function (stream) {
            var s = new TransformStream();
            for (var key in methods) s[key] = methods[key];
            s.stream = stream;
            return s;
          };
        }
        function TransformStream() {}
        TransformStream.prototype = {
          constructor: TransformStream,
          point: function point(x, y) {
            this.stream.point(x, y);
          },
          sphere: function sphere() {
            this.stream.sphere();
          },
          lineStart: function lineStart() {
            this.stream.lineStart();
          },
          lineEnd: function lineEnd() {
            this.stream.lineEnd();
          },
          polygonStart: function polygonStart() {
            this.stream.polygonStart();
          },
          polygonEnd: function polygonEnd() {
            this.stream.polygonEnd();
          }
        };
        function fit(projection, fitBounds, object) {
          var clip = projection.clipExtent && projection.clipExtent();
          projection.scale(150).translate([0, 0]);
          if (clip != null) projection.clipExtent(null);
          geoStream(object, projection.stream(boundsStream));
          fitBounds(boundsStream.result());
          if (clip != null) projection.clipExtent(clip);
          return projection;
        }
        function fitExtent(projection, extent, object) {
          return fit(projection, function (b) {
            var w = extent[1][0] - extent[0][0],
              h = extent[1][1] - extent[0][1],
              k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
              x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
              y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
            projection.scale(150 * k).translate([x, y]);
          }, object);
        }
        function fitSize(projection, size, object) {
          return fitExtent(projection, [[0, 0], size], object);
        }
        function fitWidth(projection, width, object) {
          return fit(projection, function (b) {
            var w = +width,
              k = w / (b[1][0] - b[0][0]),
              x = (w - k * (b[1][0] + b[0][0])) / 2,
              y = -k * b[0][1];
            projection.scale(150 * k).translate([x, y]);
          }, object);
        }
        function fitHeight(projection, height, object) {
          return fit(projection, function (b) {
            var h = +height,
              k = h / (b[1][1] - b[0][1]),
              x = -k * b[0][0],
              y = (h - k * (b[1][1] + b[0][1])) / 2;
            projection.scale(150 * k).translate([x, y]);
          }, object);
        }
        var maxDepth = 16,
          // maximum depth of subdivision
          cosMinDistance = cos(30 * radians); // cos(minimum angular distance)

        function resample(project, delta2) {
          return +delta2 ? resample$1(project, delta2) : resampleNone(project);
        }
        function resampleNone(project) {
          return transformer({
            point: function point(x, y) {
              x = project(x, y);
              this.stream.point(x[0], x[1]);
            }
          });
        }
        function resample$1(project, delta2) {
          function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
            var dx = x1 - x0,
              dy = y1 - y0,
              d2 = dx * dx + dy * dy;
            if (d2 > 4 * delta2 && depth--) {
              var a = a0 + a1,
                b = b0 + b1,
                c = c0 + c1,
                m = sqrt(a * a + b * b + c * c),
                phi2 = asin(c /= m),
                lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2(b, a),
                p = project(lambda2, phi2),
                x2 = p[0],
                y2 = p[1],
                dx2 = x2 - x0,
                dy2 = y2 - y0,
                dz = dy * dx2 - dx * dy2;
              if (dz * dz / d2 > delta2 // perpendicular projected distance
              || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
              || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                // angular distance
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
              }
            }
          }
          return function (stream) {
            var lambda00, x00, y00, a00, b00, c00,
              // first point
              lambda0, x0, y0, a0, b0, c0; // previous point

            var resampleStream = {
              point: point,
              lineStart: lineStart,
              lineEnd: lineEnd,
              polygonStart: function polygonStart() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
              },
              polygonEnd: function polygonEnd() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
              }
            };
            function point(x, y) {
              x = project(x, y);
              stream.point(x[0], x[1]);
            }
            function lineStart() {
              x0 = NaN;
              resampleStream.point = linePoint;
              stream.lineStart();
            }
            function linePoint(lambda, phi) {
              var c = cartesian([lambda, phi]),
                p = project(lambda, phi);
              resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
              stream.point(x0, y0);
            }
            function lineEnd() {
              resampleStream.point = point;
              stream.lineEnd();
            }
            function ringStart() {
              lineStart();
              resampleStream.point = ringPoint;
              resampleStream.lineEnd = ringEnd;
            }
            function ringPoint(lambda, phi) {
              linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
              resampleStream.point = linePoint;
            }
            function ringEnd() {
              resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
              resampleStream.lineEnd = lineEnd;
              lineEnd();
            }
            return resampleStream;
          };
        }
        var transformRadians = transformer({
          point: function point(x, y) {
            this.stream.point(x * radians, y * radians);
          }
        });
        function transformRotate(rotate) {
          return transformer({
            point: function point(x, y) {
              var r = rotate(x, y);
              return this.stream.point(r[0], r[1]);
            }
          });
        }
        function scaleTranslate(k, dx, dy, sx, sy) {
          function transform(x, y) {
            x *= sx;
            y *= sy;
            return [dx + k * x, dy - k * y];
          }
          transform.invert = function (x, y) {
            return [(x - dx) / k * sx, (dy - y) / k * sy];
          };
          return transform;
        }
        function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
          if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
          var cosAlpha = cos(alpha),
            sinAlpha = sin(alpha),
            a = cosAlpha * k,
            b = sinAlpha * k,
            ai = cosAlpha / k,
            bi = sinAlpha / k,
            ci = (sinAlpha * dy - cosAlpha * dx) / k,
            fi = (sinAlpha * dx + cosAlpha * dy) / k;
          function transform(x, y) {
            x *= sx;
            y *= sy;
            return [a * x - b * y + dx, dy - b * x - a * y];
          }
          transform.invert = function (x, y) {
            return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
          };
          return transform;
        }
        function projection(project) {
          return projectionMutator(function () {
            return project;
          })();
        }
        function projectionMutator(projectAt) {
          var project,
            k = 150,
            // scale
            x = 480,
            y = 250,
            // translate
            lambda = 0,
            phi = 0,
            // center
            deltaLambda = 0,
            deltaPhi = 0,
            deltaGamma = 0,
            rotate,
            // pre-rotate
            alpha = 0,
            // post-rotate angle
            sx = 1,
            // reflectX
            sy = 1,
            // reflectX
            theta = null,
            preclip = clipAntimeridian,
            // pre-clip angle
            x0 = null,
            y0,
            x1,
            y1,
            postclip = identity$4,
            // post-clip extent
            delta2 = 0.5,
            // precision
            projectResample,
            projectTransform,
            projectRotateTransform,
            cache,
            cacheStream;
          function projection(point) {
            return projectRotateTransform(point[0] * radians, point[1] * radians);
          }
          function invert(point) {
            point = projectRotateTransform.invert(point[0], point[1]);
            return point && [point[0] * degrees$1, point[1] * degrees$1];
          }
          projection.stream = function (stream) {
            return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
          };
          projection.preclip = function (_) {
            return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
          };
          projection.postclip = function (_) {
            return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
          };
          projection.clipAngle = function (_) {
            return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
          };
          projection.clipExtent = function (_) {
            return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
          };
          projection.scale = function (_) {
            return arguments.length ? (k = +_, recenter()) : k;
          };
          projection.translate = function (_) {
            return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
          };
          projection.center = function (_) {
            return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
          };
          projection.rotate = function (_) {
            return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
          };
          projection.angle = function (_) {
            return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees$1;
          };
          projection.reflectX = function (_) {
            return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
          };
          projection.reflectY = function (_) {
            return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
          };
          projection.precision = function (_) {
            return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
          };
          projection.fitExtent = function (extent, object) {
            return fitExtent(projection, extent, object);
          };
          projection.fitSize = function (size, object) {
            return fitSize(projection, size, object);
          };
          projection.fitWidth = function (width, object) {
            return fitWidth(projection, width, object);
          };
          projection.fitHeight = function (height, object) {
            return fitHeight(projection, height, object);
          };
          function recenter() {
            var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
              transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
            rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
            projectTransform = compose(project, transform);
            projectRotateTransform = compose(rotate, projectTransform);
            projectResample = resample(projectTransform, delta2);
            return reset();
          }
          function reset() {
            cache = cacheStream = null;
            return projection;
          }
          return function () {
            project = projectAt.apply(this, arguments);
            projection.invert = project.invert && invert;
            return recenter();
          };
        }
        function conicProjection(projectAt) {
          var phi0 = 0,
            phi1 = pi / 3,
            m = projectionMutator(projectAt),
            p = m(phi0, phi1);
          p.parallels = function (_) {
            return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
          };
          return p;
        }
        function cylindricalEqualAreaRaw(phi0) {
          var cosPhi0 = cos(phi0);
          function forward(lambda, phi) {
            return [lambda * cosPhi0, sin(phi) / cosPhi0];
          }
          forward.invert = function (x, y) {
            return [x / cosPhi0, asin(y * cosPhi0)];
          };
          return forward;
        }
        function conicEqualAreaRaw(y0, y1) {
          var sy0 = sin(y0),
            n = (sy0 + sin(y1)) / 2;

          // Are the parallels symmetrical around the Equator?
          if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y0);
          var c = 1 + sy0 * (2 * n - sy0),
            r0 = sqrt(c) / n;
          function project(x, y) {
            var r = sqrt(c - 2 * n * sin(y)) / n;
            return [r * sin(x *= n), r0 - r * cos(x)];
          }
          project.invert = function (x, y) {
            var r0y = r0 - y,
              l = atan2(x, abs(r0y)) * sign(r0y);
            if (r0y * n < 0) l -= pi * sign(x) * sign(r0y);
            return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
          };
          return project;
        }
        function conicEqualArea() {
          return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
        }
        function albers() {
          return conicEqualArea().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
        }

        // The projections must have mutually exclusive clip regions on the sphere,
        // as this will avoid emitting interleaving lines and polygons.
        function multiplex(streams) {
          var n = streams.length;
          return {
            point: function point(x, y) {
              var i = -1;
              while (++i < n) streams[i].point(x, y);
            },
            sphere: function sphere() {
              var i = -1;
              while (++i < n) streams[i].sphere();
            },
            lineStart: function lineStart() {
              var i = -1;
              while (++i < n) streams[i].lineStart();
            },
            lineEnd: function lineEnd() {
              var i = -1;
              while (++i < n) streams[i].lineEnd();
            },
            polygonStart: function polygonStart() {
              var i = -1;
              while (++i < n) streams[i].polygonStart();
            },
            polygonEnd: function polygonEnd() {
              var i = -1;
              while (++i < n) streams[i].polygonEnd();
            }
          };
        }

        // A composite projection for the United States, configured by default for
        // 960×500. The projection also works quite well at 960×600 if you change the
        // scale to 1285 and adjust the translate accordingly. The set of standard
        // parallels for each region comes from USGS, which is published here:
        // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
        function albersUsa() {
          var cache,
            cacheStream,
            lower48 = albers(),
            lower48Point,
            alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            alaskaPoint,
            // EPSG:3338
            hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            hawaiiPoint,
            // ESRI:102007
            _point,
            pointStream = {
              point: function point(x, y) {
                _point = [x, y];
              }
            };
          function albersUsa(coordinates) {
            var x = coordinates[0],
              y = coordinates[1];
            return _point = null, (lower48Point.point(x, y), _point) || (alaskaPoint.point(x, y), _point) || (hawaiiPoint.point(x, y), _point);
          }
          albersUsa.invert = function (coordinates) {
            var k = lower48.scale(),
              t = lower48.translate(),
              x = (coordinates[0] - t[0]) / k,
              y = (coordinates[1] - t[1]) / k;
            return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
          };
          albersUsa.stream = function (stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
          };
          albersUsa.precision = function (_) {
            if (!arguments.length) return lower48.precision();
            lower48.precision(_), alaska.precision(_), hawaii.precision(_);
            return reset();
          };
          albersUsa.scale = function (_) {
            if (!arguments.length) return lower48.scale();
            lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
            return albersUsa.translate(lower48.translate());
          };
          albersUsa.translate = function (_) {
            if (!arguments.length) return lower48.translate();
            var k = lower48.scale(),
              x = +_[0],
              y = +_[1];
            lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
            alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
            hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
            return reset();
          };
          albersUsa.fitExtent = function (extent, object) {
            return fitExtent(albersUsa, extent, object);
          };
          albersUsa.fitSize = function (size, object) {
            return fitSize(albersUsa, size, object);
          };
          albersUsa.fitWidth = function (width, object) {
            return fitWidth(albersUsa, width, object);
          };
          albersUsa.fitHeight = function (height, object) {
            return fitHeight(albersUsa, height, object);
          };
          function reset() {
            cache = cacheStream = null;
            return albersUsa;
          }
          return albersUsa.scale(1070);
        }
        function azimuthalRaw(scale) {
          return function (x, y) {
            var cx = cos(x),
              cy = cos(y),
              k = scale(cx * cy);
            if (k === Infinity) return [2, 0];
            return [k * cy * sin(x), k * sin(y)];
          };
        }
        function azimuthalInvert(angle) {
          return function (x, y) {
            var z = sqrt(x * x + y * y),
              c = angle(z),
              sc = sin(c),
              cc = cos(c);
            return [atan2(x * sc, z * cc), asin(z && y * sc / z)];
          };
        }
        var azimuthalEqualAreaRaw = azimuthalRaw(function (cxcy) {
          return sqrt(2 / (1 + cxcy));
        });
        azimuthalEqualAreaRaw.invert = azimuthalInvert(function (z) {
          return 2 * asin(z / 2);
        });
        function azimuthalEqualArea() {
          return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
        }
        var azimuthalEquidistantRaw = azimuthalRaw(function (c) {
          return (c = acos(c)) && c / sin(c);
        });
        azimuthalEquidistantRaw.invert = azimuthalInvert(function (z) {
          return z;
        });
        function azimuthalEquidistant() {
          return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
        }
        function mercatorRaw(lambda, phi) {
          return [lambda, log(tan((halfPi + phi) / 2))];
        }
        mercatorRaw.invert = function (x, y) {
          return [x, 2 * atan(exp(y)) - halfPi];
        };
        function mercator() {
          return mercatorProjection(mercatorRaw).scale(961 / tau);
        }
        function mercatorProjection(project) {
          var m = projection(project),
            center = m.center,
            scale = m.scale,
            translate = m.translate,
            clipExtent = m.clipExtent,
            x0 = null,
            y0,
            x1,
            y1; // clip extent

          m.scale = function (_) {
            return arguments.length ? (scale(_), reclip()) : scale();
          };
          m.translate = function (_) {
            return arguments.length ? (translate(_), reclip()) : translate();
          };
          m.center = function (_) {
            return arguments.length ? (center(_), reclip()) : center();
          };
          m.clipExtent = function (_) {
            return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
          };
          function reclip() {
            var k = pi * scale(),
              t = m(rotation(m.rotate()).invert([0, 0]));
            return clipExtent(x0 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]] : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
          }
          return reclip();
        }
        function tany(y) {
          return tan((halfPi + y) / 2);
        }
        function conicConformalRaw(y0, y1) {
          var cy0 = cos(y0),
            n = y0 === y1 ? sin(y0) : log(cy0 / cos(y1)) / log(tany(y1) / tany(y0)),
            f = cy0 * pow(tany(y0), n) / n;
          if (!n) return mercatorRaw;
          function project(x, y) {
            if (f > 0) {
              if (y < -halfPi + epsilon) y = -halfPi + epsilon;
            } else {
              if (y > halfPi - epsilon) y = halfPi - epsilon;
            }
            var r = f / pow(tany(y), n);
            return [r * sin(n * x), f - r * cos(n * x)];
          }
          project.invert = function (x, y) {
            var fy = f - y,
              r = sign(n) * sqrt(x * x + fy * fy),
              l = atan2(x, abs(fy)) * sign(fy);
            if (fy * n < 0) l -= pi * sign(x) * sign(fy);
            return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
          };
          return project;
        }
        function conicConformal() {
          return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
        }
        function equirectangularRaw(lambda, phi) {
          return [lambda, phi];
        }
        equirectangularRaw.invert = equirectangularRaw;
        function equirectangular() {
          return projection(equirectangularRaw).scale(152.63);
        }
        function conicEquidistantRaw(y0, y1) {
          var cy0 = cos(y0),
            n = y0 === y1 ? sin(y0) : (cy0 - cos(y1)) / (y1 - y0),
            g = cy0 / n + y0;
          if (abs(n) < epsilon) return equirectangularRaw;
          function project(x, y) {
            var gy = g - y,
              nx = n * x;
            return [gy * sin(nx), g - gy * cos(nx)];
          }
          project.invert = function (x, y) {
            var gy = g - y,
              l = atan2(x, abs(gy)) * sign(gy);
            if (gy * n < 0) l -= pi * sign(x) * sign(gy);
            return [l / n, g - sign(n) * sqrt(x * x + gy * gy)];
          };
          return project;
        }
        function conicEquidistant() {
          return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
        }
        var A1 = 1.340264,
          A2 = -0.081106,
          A3 = 0.000893,
          A4 = 0.003796,
          M = sqrt(3) / 2,
          iterations = 12;
        function equalEarthRaw(lambda, phi) {
          var l = asin(M * sin(phi)),
            l2 = l * l,
            l6 = l2 * l2 * l2;
          return [lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))), l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))];
        }
        equalEarthRaw.invert = function (x, y) {
          var l = y,
            l2 = l * l,
            l6 = l2 * l2 * l2;
          for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
            fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
            fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
            l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
            if (abs(delta) < epsilon2$1) break;
          }
          return [M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l), asin(sin(l) / M)];
        };
        function equalEarth() {
          return projection(equalEarthRaw).scale(177.158);
        }
        function gnomonicRaw(x, y) {
          var cy = cos(y),
            k = cos(x) * cy;
          return [cy * sin(x) / k, sin(y) / k];
        }
        gnomonicRaw.invert = azimuthalInvert(atan);
        function gnomonic() {
          return projection(gnomonicRaw).scale(144.049).clipAngle(60);
        }
        function identity$3() {
          var k = 1,
            tx = 0,
            ty = 0,
            sx = 1,
            sy = 1,
            // scale, translate and reflect
            alpha = 0,
            ca,
            sa,
            // angle
            x0 = null,
            y0,
            x1,
            y1,
            // clip extent
            kx = 1,
            ky = 1,
            transform = transformer({
              point: function point(x, y) {
                var p = projection([x, y]);
                this.stream.point(p[0], p[1]);
              }
            }),
            postclip = identity$4,
            cache,
            cacheStream;
          function reset() {
            kx = k * sx;
            ky = k * sy;
            cache = cacheStream = null;
            return projection;
          }
          function projection(p) {
            var x = p[0] * kx,
              y = p[1] * ky;
            if (alpha) {
              var t = y * ca - x * sa;
              x = x * ca + y * sa;
              y = t;
            }
            return [x + tx, y + ty];
          }
          projection.invert = function (p) {
            var x = p[0] - tx,
              y = p[1] - ty;
            if (alpha) {
              var t = y * ca + x * sa;
              x = x * ca - y * sa;
              y = t;
            }
            return [x / kx, y / ky];
          };
          projection.stream = function (stream) {
            return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
          };
          projection.postclip = function (_) {
            return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
          };
          projection.clipExtent = function (_) {
            return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
          };
          projection.scale = function (_) {
            return arguments.length ? (k = +_, reset()) : k;
          };
          projection.translate = function (_) {
            return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
          };
          projection.angle = function (_) {
            return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees$1;
          };
          projection.reflectX = function (_) {
            return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
          };
          projection.reflectY = function (_) {
            return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
          };
          projection.fitExtent = function (extent, object) {
            return fitExtent(projection, extent, object);
          };
          projection.fitSize = function (size, object) {
            return fitSize(projection, size, object);
          };
          projection.fitWidth = function (width, object) {
            return fitWidth(projection, width, object);
          };
          projection.fitHeight = function (height, object) {
            return fitHeight(projection, height, object);
          };
          return projection;
        }
        function naturalEarth1Raw(lambda, phi) {
          var phi2 = phi * phi,
            phi4 = phi2 * phi2;
          return [lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))), phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))];
        }
        naturalEarth1Raw.invert = function (x, y) {
          var phi = y,
            i = 25,
            delta;
          do {
            var phi2 = phi * phi,
              phi4 = phi2 * phi2;
            phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
          } while (abs(delta) > epsilon && --i > 0);
          return [x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))), phi];
        };
        function naturalEarth1() {
          return projection(naturalEarth1Raw).scale(175.295);
        }
        function orthographicRaw(x, y) {
          return [cos(y) * sin(x), sin(y)];
        }
        orthographicRaw.invert = azimuthalInvert(asin);
        function orthographic() {
          return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon);
        }
        function stereographicRaw(x, y) {
          var cy = cos(y),
            k = 1 + cos(x) * cy;
          return [cy * sin(x) / k, sin(y) / k];
        }
        stereographicRaw.invert = azimuthalInvert(function (z) {
          return 2 * atan(z);
        });
        function stereographic() {
          return projection(stereographicRaw).scale(250).clipAngle(142);
        }
        function transverseMercatorRaw(lambda, phi) {
          return [log(tan((halfPi + phi) / 2)), -lambda];
        }
        transverseMercatorRaw.invert = function (x, y) {
          return [-y, 2 * atan(exp(x)) - halfPi];
        };
        function transverseMercator() {
          var m = mercatorProjection(transverseMercatorRaw),
            center = m.center,
            rotate = m.rotate;
          m.center = function (_) {
            return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
          };
          m.rotate = function (_) {
            return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
          };
          return rotate([0, 0, 90]).scale(159.155);
        }
        var d3Geo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          geoAlbers: albers,
          geoAlbersUsa: albersUsa,
          geoArea: area,
          geoAzimuthalEqualArea: azimuthalEqualArea,
          geoAzimuthalEqualAreaRaw: azimuthalEqualAreaRaw,
          geoAzimuthalEquidistant: azimuthalEquidistant,
          geoAzimuthalEquidistantRaw: azimuthalEquidistantRaw,
          geoBounds: bounds,
          geoCentroid: centroid,
          geoCircle: circle$1,
          geoClipAntimeridian: clipAntimeridian,
          geoClipCircle: clipCircle,
          geoClipExtent: extent,
          geoClipRectangle: clipRectangle,
          geoConicConformal: conicConformal,
          geoConicConformalRaw: conicConformalRaw,
          geoConicEqualArea: conicEqualArea,
          geoConicEqualAreaRaw: conicEqualAreaRaw,
          geoConicEquidistant: conicEquidistant,
          geoConicEquidistantRaw: conicEquidistantRaw,
          geoContains: contains,
          geoDistance: distance,
          geoEqualEarth: equalEarth,
          geoEqualEarthRaw: equalEarthRaw,
          geoEquirectangular: equirectangular,
          geoEquirectangularRaw: equirectangularRaw,
          geoGnomonic: gnomonic,
          geoGnomonicRaw: gnomonicRaw,
          geoGraticule: graticule,
          geoGraticule10: graticule10,
          geoIdentity: identity$3,
          geoInterpolate: interpolate$1,
          geoLength: length,
          geoMercator: mercator,
          geoMercatorRaw: mercatorRaw,
          geoNaturalEarth1: naturalEarth1,
          geoNaturalEarth1Raw: naturalEarth1Raw,
          geoOrthographic: orthographic,
          geoOrthographicRaw: orthographicRaw,
          geoPath: index,
          geoProjection: projection,
          geoProjectionMutator: projectionMutator,
          geoRotation: rotation,
          geoStereographic: stereographic,
          geoStereographicRaw: stereographicRaw,
          geoStream: geoStream,
          geoTransform: transform$1,
          geoTransverseMercator: transverseMercator,
          geoTransverseMercatorRaw: transverseMercatorRaw
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        function identity$2(x) {
          return x;
        }
        function transform(transform) {
          if (transform == null) return identity$2;
          var x0,
            y0,
            kx = transform.scale[0],
            ky = transform.scale[1],
            dx = transform.translate[0],
            dy = transform.translate[1];
          return function (input, i) {
            if (!i) x0 = y0 = 0;
            var j = 2,
              n = input.length,
              output = new Array(n);
            output[0] = (x0 += input[0]) * kx + dx;
            output[1] = (y0 += input[1]) * ky + dy;
            while (j < n) output[j] = input[j], ++j;
            return output;
          };
        }
        function reverse(array, n) {
          var t,
            j = array.length,
            i = j - n;
          while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
        }
        function feature(topology, o) {
          if (typeof o === "string") o = topology.objects[o];
          return o.type === "GeometryCollection" ? {
            type: "FeatureCollection",
            features: o.geometries.map(function (o) {
              return feature$1(topology, o);
            })
          } : feature$1(topology, o);
        }
        function feature$1(topology, o) {
          var id = o.id,
            bbox = o.bbox,
            properties = o.properties == null ? {} : o.properties,
            geometry = object(topology, o);
          return id == null && bbox == null ? {
            type: "Feature",
            properties: properties,
            geometry: geometry
          } : bbox == null ? {
            type: "Feature",
            id: id,
            properties: properties,
            geometry: geometry
          } : {
            type: "Feature",
            id: id,
            bbox: bbox,
            properties: properties,
            geometry: geometry
          };
        }
        function object(topology, o) {
          var transformPoint = transform(topology.transform),
            arcs = topology.arcs;
          function arc(i, points) {
            if (points.length) points.pop();
            for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
              points.push(transformPoint(a[k], k));
            }
            if (i < 0) reverse(points, n);
          }
          function point(p) {
            return transformPoint(p);
          }
          function line(arcs) {
            var points = [];
            for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
            if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
            return points;
          }
          function ring(arcs) {
            var points = line(arcs);
            while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
            return points;
          }
          function polygon(arcs) {
            return arcs.map(ring);
          }
          function geometry(o) {
            var type = o.type,
              coordinates;
            switch (type) {
              case "GeometryCollection":
                return {
                  type: type,
                  geometries: o.geometries.map(geometry)
                };
              case "Point":
                coordinates = point(o.coordinates);
                break;
              case "MultiPoint":
                coordinates = o.coordinates.map(point);
                break;
              case "LineString":
                coordinates = line(o.arcs);
                break;
              case "MultiLineString":
                coordinates = o.arcs.map(line);
                break;
              case "Polygon":
                coordinates = polygon(o.arcs);
                break;
              case "MultiPolygon":
                coordinates = o.arcs.map(polygon);
                break;
              default:
                return null;
            }
            return {
              type: type,
              coordinates: coordinates
            };
          }
          return geometry(o);
        }
        function stitch(topology, arcs) {
          var stitchedArcs = {},
            fragmentByStart = {},
            fragmentByEnd = {},
            fragments = [],
            emptyIndex = -1;

          // Stitch empty arcs first, since they may be subsumed by other arcs.
          arcs.forEach(function (i, j) {
            var arc = topology.arcs[i < 0 ? ~i : i],
              t;
            if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
              t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
            }
          });
          arcs.forEach(function (i) {
            var e = ends(i),
              start = e[0],
              end = e[1],
              f,
              g;
            if (f = fragmentByEnd[start]) {
              delete fragmentByEnd[f.end];
              f.push(i);
              f.end = end;
              if (g = fragmentByStart[end]) {
                delete fragmentByStart[g.start];
                var fg = g === f ? f : f.concat(g);
                fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
              } else {
                fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
              }
            } else if (f = fragmentByStart[end]) {
              delete fragmentByStart[f.start];
              f.unshift(i);
              f.start = start;
              if (g = fragmentByEnd[start]) {
                delete fragmentByEnd[g.end];
                var gf = g === f ? f : g.concat(f);
                fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
              } else {
                fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
              }
            } else {
              f = [i];
              fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
            }
          });
          function ends(i) {
            var arc = topology.arcs[i < 0 ? ~i : i],
              p0 = arc[0],
              p1;
            if (topology.transform) p1 = [0, 0], arc.forEach(function (dp) {
              p1[0] += dp[0], p1[1] += dp[1];
            });else p1 = arc[arc.length - 1];
            return i < 0 ? [p1, p0] : [p0, p1];
          }
          function flush(fragmentByEnd, fragmentByStart) {
            for (var k in fragmentByEnd) {
              var f = fragmentByEnd[k];
              delete fragmentByStart[f.start];
              delete f.start;
              delete f.end;
              f.forEach(function (i) {
                stitchedArcs[i < 0 ? ~i : i] = 1;
              });
              fragments.push(f);
            }
          }
          flush(fragmentByEnd, fragmentByStart);
          flush(fragmentByStart, fragmentByEnd);
          arcs.forEach(function (i) {
            if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]);
          });
          return fragments;
        }
        function mesh(topology) {
          return object(topology, meshArcs.apply(this, arguments));
        }
        function meshArcs(topology, object, filter) {
          var arcs, i, n;
          if (arguments.length > 1) arcs = extractArcs(topology, object, filter);else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
          return {
            type: "MultiLineString",
            arcs: stitch(topology, arcs)
          };
        }
        function extractArcs(topology, object, filter) {
          var arcs = [],
            geomsByArc = [],
            geom;
          function extract0(i) {
            var j = i < 0 ? ~i : i;
            (geomsByArc[j] || (geomsByArc[j] = [])).push({
              i: i,
              g: geom
            });
          }
          function extract1(arcs) {
            arcs.forEach(extract0);
          }
          function extract2(arcs) {
            arcs.forEach(extract1);
          }
          function extract3(arcs) {
            arcs.forEach(extract2);
          }
          function geometry(o) {
            switch (geom = o, o.type) {
              case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
              case "LineString":
                extract1(o.arcs);
                break;
              case "MultiLineString":
              case "Polygon":
                extract2(o.arcs);
                break;
              case "MultiPolygon":
                extract3(o.arcs);
                break;
            }
          }
          geometry(object);
          geomsByArc.forEach(filter == null ? function (geoms) {
            arcs.push(geoms[0].i);
          } : function (geoms) {
            if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
          });
          return arcs;
        }
        var noop = {
          value: function value() {}
        };
        function dispatch() {
          for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
            if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            _[t] = [];
          }
          return new Dispatch(_);
        }
        function Dispatch(_) {
          this._ = _;
        }
        function parseTypenames$1(typenames, types) {
          return typenames.trim().split(/^|\s+/).map(function (t) {
            var name = "",
              i = t.indexOf(".");
            if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
            if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
              type: t,
              name: name
            };
          });
        }
        Dispatch.prototype = dispatch.prototype = {
          constructor: Dispatch,
          on: function on(typename, callback) {
            var _ = this._,
              T = parseTypenames$1(typename + "", _),
              t,
              i = -1,
              n = T.length;

            // If no callback was specified, return the callback of the given type and name.
            if (arguments.length < 2) {
              while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
              return;
            }

            // If a type was specified, set the callback for the given type and name.
            // Otherwise, if a null callback was specified, remove callbacks of the given name.
            if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
            while (++i < n) {
              if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
            }
            return this;
          },
          copy: function copy() {
            var copy = {},
              _ = this._;
            for (var t in _) copy[t] = _[t].slice();
            return new Dispatch(copy);
          },
          call: function call(type, that) {
            if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          },
          apply: function apply(type, that, args) {
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          }
        };
        function get$1(type, name) {
          for (var i = 0, n = type.length, c; i < n; ++i) {
            if ((c = type[i]).name === name) {
              return c.value;
            }
          }
        }
        function set$1(type, name, callback) {
          for (var i = 0, n = type.length; i < n; ++i) {
            if (type[i].name === name) {
              type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
              break;
            }
          }
          if (callback != null) type.push({
            name: name,
            value: callback
          });
          return type;
        }
        var xhtml = "http://www.w3.org/1999/xhtml";
        var namespaces = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: xhtml,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };
        function namespace(name) {
          var prefix = name += "",
            i = prefix.indexOf(":");
          if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
          return namespaces.hasOwnProperty(prefix) ? {
            space: namespaces[prefix],
            local: name
          } : name; // eslint-disable-line no-prototype-builtins
        }
        function creatorInherit(name) {
          return function () {
            var document = this.ownerDocument,
              uri = this.namespaceURI;
            return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
          };
        }
        function creatorFixed(fullname) {
          return function () {
            return this.ownerDocument.createElementNS(fullname.space, fullname.local);
          };
        }
        function creator(name) {
          var fullname = namespace(name);
          return (fullname.local ? creatorFixed : creatorInherit)(fullname);
        }
        function none() {}
        function selector(selector) {
          return selector == null ? none : function () {
            return this.querySelector(selector);
          };
        }
        function selection_select(select) {
          if (typeof select !== "function") select = selector(select);
          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
              if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
              }
            }
          }
          return new Selection$1(subgroups, this._parents);
        }
        function array(x) {
          return _typeof2(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
          : Array.from(x); // Map, Set, iterable, string, or anything else
        }
        function empty() {
          return [];
        }
        function selectorAll(selector) {
          return selector == null ? empty : function () {
            return this.querySelectorAll(selector);
          };
        }
        function arrayAll(select) {
          return function () {
            var group = select.apply(this, arguments);
            return group == null ? [] : array(group);
          };
        }
        function selection_selectAll(select) {
          if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
          for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
              }
            }
          }
          return new Selection$1(subgroups, parents);
        }
        function matcher(selector) {
          return function () {
            return this.matches(selector);
          };
        }
        function childMatcher(selector) {
          return function (node) {
            return node.matches(selector);
          };
        }
        var find = Array.prototype.find;
        function childFind(match) {
          return function () {
            return find.call(this.children, match);
          };
        }
        function childFirst() {
          return this.firstElementChild;
        }
        function selection_selectChild(match) {
          return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
        }
        var filter = Array.prototype.filter;
        function children() {
          return this.children;
        }
        function childrenFilter(match) {
          return function () {
            return filter.call(this.children, match);
          };
        }
        function selection_selectChildren(match) {
          return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
        }
        function selection_filter(match) {
          if (typeof match !== "function") match = matcher(match);
          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
              if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
              }
            }
          }
          return new Selection$1(subgroups, this._parents);
        }
        function sparse(update) {
          return new Array(update.length);
        }
        function selection_enter() {
          return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
        }
        function EnterNode(parent, datum) {
          this.ownerDocument = parent.ownerDocument;
          this.namespaceURI = parent.namespaceURI;
          this._next = null;
          this._parent = parent;
          this.__data__ = datum;
        }
        EnterNode.prototype = {
          constructor: EnterNode,
          appendChild: function appendChild(child) {
            return this._parent.insertBefore(child, this._next);
          },
          insertBefore: function insertBefore(child, next) {
            return this._parent.insertBefore(child, next);
          },
          querySelector: function querySelector(selector) {
            return this._parent.querySelector(selector);
          },
          querySelectorAll: function querySelectorAll(selector) {
            return this._parent.querySelectorAll(selector);
          }
        };
        function constant$2(x) {
          return function () {
            return x;
          };
        }
        function bindIndex(parent, group, enter, update, exit, data) {
          var i = 0,
            node,
            groupLength = group.length,
            dataLength = data.length;

          // Put any non-null nodes that fit into update.
          // Put any null nodes into enter.
          // Put any remaining data into enter.
          for (; i < dataLength; ++i) {
            if (node = group[i]) {
              node.__data__ = data[i];
              update[i] = node;
            } else {
              enter[i] = new EnterNode(parent, data[i]);
            }
          }

          // Put any non-null nodes that don’t fit into exit.
          for (; i < groupLength; ++i) {
            if (node = group[i]) {
              exit[i] = node;
            }
          }
        }
        function bindKey(parent, group, enter, update, exit, data, key) {
          var i,
            node,
            nodeByKeyValue = new Map(),
            groupLength = group.length,
            dataLength = data.length,
            keyValues = new Array(groupLength),
            keyValue;

          // Compute the key for each node.
          // If multiple nodes have the same key, the duplicates are added to exit.
          for (i = 0; i < groupLength; ++i) {
            if (node = group[i]) {
              keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
              if (nodeByKeyValue.has(keyValue)) {
                exit[i] = node;
              } else {
                nodeByKeyValue.set(keyValue, node);
              }
            }
          }

          // Compute the key for each datum.
          // If there a node associated with this key, join and add it to update.
          // If there is not (or the key is a duplicate), add it to enter.
          for (i = 0; i < dataLength; ++i) {
            keyValue = key.call(parent, data[i], i, data) + "";
            if (node = nodeByKeyValue.get(keyValue)) {
              update[i] = node;
              node.__data__ = data[i];
              nodeByKeyValue.delete(keyValue);
            } else {
              enter[i] = new EnterNode(parent, data[i]);
            }
          }

          // Add any remaining nodes that were not bound to data to exit.
          for (i = 0; i < groupLength; ++i) {
            if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
              exit[i] = node;
            }
          }
        }
        function datum(node) {
          return node.__data__;
        }
        function selection_data(value, key) {
          if (!arguments.length) return Array.from(this, datum);
          var bind = key ? bindKey : bindIndex,
            parents = this._parents,
            groups = this._groups;
          if (typeof value !== "function") value = constant$2(value);
          for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
            var parent = parents[j],
              group = groups[j],
              groupLength = group.length,
              data = array(value.call(parent, parent && parent.__data__, j, parents)),
              dataLength = data.length,
              enterGroup = enter[j] = new Array(dataLength),
              updateGroup = update[j] = new Array(dataLength),
              exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
              if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
              }
            }
          }
          update = new Selection$1(update, parents);
          update._enter = enter;
          update._exit = exit;
          return update;
        }
        function selection_exit() {
          return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
        }
        function selection_join(onenter, onupdate, onexit) {
          var enter = this.enter(),
            update = this,
            exit = this.exit();
          enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
          if (onupdate != null) update = onupdate(update);
          if (onexit == null) exit.remove();else onexit(exit);
          return enter && update ? enter.merge(update).order() : update;
        }
        function selection_merge(selection) {
          if (!(selection instanceof Selection$1)) throw new Error("invalid merge");
          for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
            for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
              if (node = group0[i] || group1[i]) {
                merge[i] = node;
              }
            }
          }
          for (; j < m0; ++j) {
            merges[j] = groups0[j];
          }
          return new Selection$1(merges, this._parents);
        }
        function selection_order() {
          for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
            for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
              if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
              }
            }
          }
          return this;
        }
        function selection_sort(compare) {
          if (!compare) compare = ascending;
          function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
          }
          for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                sortgroup[i] = node;
              }
            }
            sortgroup.sort(compareNode);
          }
          return new Selection$1(sortgroups, this._parents).order();
        }
        function ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }
        function selection_call() {
          var callback = arguments[0];
          arguments[0] = this;
          callback.apply(null, arguments);
          return this;
        }
        function selection_nodes() {
          return Array.from(this);
        }
        function selection_node() {
          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
              var node = group[i];
              if (node) return node;
            }
          }
          return null;
        }
        function selection_size() {
          var size = 0;
          var _iterator2 = _createForOfIteratorHelper(this),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var node = _step2.value;
              ++size;
            } // eslint-disable-line no-unused-vars
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return size;
        }
        function selection_empty() {
          return !this.node();
        }
        function selection_each(callback) {
          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
              if (node = group[i]) callback.call(node, node.__data__, i, group);
            }
          }
          return this;
        }
        function attrRemove$1(name) {
          return function () {
            this.removeAttribute(name);
          };
        }
        function attrRemoveNS$1(fullname) {
          return function () {
            this.removeAttributeNS(fullname.space, fullname.local);
          };
        }
        function attrConstant$1(name, value) {
          return function () {
            this.setAttribute(name, value);
          };
        }
        function attrConstantNS$1(fullname, value) {
          return function () {
            this.setAttributeNS(fullname.space, fullname.local, value);
          };
        }
        function attrFunction$1(name, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
          };
        }
        function attrFunctionNS$1(fullname, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
          };
        }
        function selection_attr(name, value) {
          var fullname = namespace(name);
          if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
          }
          return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
        }
        function defaultView(node) {
          return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
          || node.document && node // node is a Window
          || node.defaultView; // node is a Document
        }
        function styleRemove$1(name) {
          return function () {
            this.style.removeProperty(name);
          };
        }
        function styleConstant$1(name, value, priority) {
          return function () {
            this.style.setProperty(name, value, priority);
          };
        }
        function styleFunction$1(name, value, priority) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
          };
        }
        function selection_style(name, value, priority) {
          return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
        }
        function styleValue(node, name) {
          return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
        }
        function propertyRemove(name) {
          return function () {
            delete this[name];
          };
        }
        function propertyConstant(name, value) {
          return function () {
            this[name] = value;
          };
        }
        function propertyFunction(name, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) delete this[name];else this[name] = v;
          };
        }
        function selection_property(name, value) {
          return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
        }
        function classArray(string) {
          return string.trim().split(/^|\s+/);
        }
        function classList(node) {
          return node.classList || new ClassList(node);
        }
        function ClassList(node) {
          this._node = node;
          this._names = classArray(node.getAttribute("class") || "");
        }
        ClassList.prototype = {
          add: function add(name) {
            var i = this._names.indexOf(name);
            if (i < 0) {
              this._names.push(name);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          remove: function remove(name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
              this._names.splice(i, 1);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          contains: function contains(name) {
            return this._names.indexOf(name) >= 0;
          }
        };
        function classedAdd(node, names) {
          var list = classList(node),
            i = -1,
            n = names.length;
          while (++i < n) list.add(names[i]);
        }
        function classedRemove(node, names) {
          var list = classList(node),
            i = -1,
            n = names.length;
          while (++i < n) list.remove(names[i]);
        }
        function classedTrue(names) {
          return function () {
            classedAdd(this, names);
          };
        }
        function classedFalse(names) {
          return function () {
            classedRemove(this, names);
          };
        }
        function classedFunction(names, value) {
          return function () {
            (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
          };
        }
        function selection_classed(name, value) {
          var names = classArray(name + "");
          if (arguments.length < 2) {
            var list = classList(this.node()),
              i = -1,
              n = names.length;
            while (++i < n) if (!list.contains(names[i])) return false;
            return true;
          }
          return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
        }
        function textRemove() {
          this.textContent = "";
        }
        function textConstant$1(value) {
          return function () {
            this.textContent = value;
          };
        }
        function textFunction$1(value) {
          return function () {
            var v = value.apply(this, arguments);
            this.textContent = v == null ? "" : v;
          };
        }
        function selection_text(value) {
          return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
        }
        function htmlRemove() {
          this.innerHTML = "";
        }
        function htmlConstant(value) {
          return function () {
            this.innerHTML = value;
          };
        }
        function htmlFunction(value) {
          return function () {
            var v = value.apply(this, arguments);
            this.innerHTML = v == null ? "" : v;
          };
        }
        function selection_html(value) {
          return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
        }
        function raise() {
          if (this.nextSibling) this.parentNode.appendChild(this);
        }
        function selection_raise() {
          return this.each(raise);
        }
        function lower() {
          if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function selection_lower() {
          return this.each(lower);
        }
        function selection_append(name) {
          var create = typeof name === "function" ? name : creator(name);
          return this.select(function () {
            return this.appendChild(create.apply(this, arguments));
          });
        }
        function constantNull() {
          return null;
        }
        function selection_insert(name, before) {
          var create = typeof name === "function" ? name : creator(name),
            select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
          return this.select(function () {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
          });
        }
        function remove() {
          var parent = this.parentNode;
          if (parent) parent.removeChild(this);
        }
        function selection_remove() {
          return this.each(remove);
        }
        function selection_cloneShallow() {
          var clone = this.cloneNode(false),
            parent = this.parentNode;
          return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
        }
        function selection_cloneDeep() {
          var clone = this.cloneNode(true),
            parent = this.parentNode;
          return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
        }
        function selection_clone(deep) {
          return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
        }
        function selection_datum(value) {
          return arguments.length ? this.property("__data__", value) : this.node().__data__;
        }
        function contextListener(listener) {
          return function (event) {
            listener.call(this, event, this.__data__);
          };
        }
        function parseTypenames(typenames) {
          return typenames.trim().split(/^|\s+/).map(function (t) {
            var name = "",
              i = t.indexOf(".");
            if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
            return {
              type: t,
              name: name
            };
          });
        }
        function onRemove(typename) {
          return function () {
            var on = this.__on;
            if (!on) return;
            for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
              if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
              } else {
                on[++i] = o;
              }
            }
            if (++i) on.length = i;else delete this.__on;
          };
        }
        function onAdd(typename, value, options) {
          return function () {
            var on = this.__on,
              o,
              listener = contextListener(value);
            if (on) for (var j = 0, m = on.length; j < m; ++j) {
              if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
              }
            }
            this.addEventListener(typename.type, listener, options);
            o = {
              type: typename.type,
              name: typename.name,
              value: value,
              listener: listener,
              options: options
            };
            if (!on) this.__on = [o];else on.push(o);
          };
        }
        function selection_on(typename, value, options) {
          var typenames = parseTypenames(typename + ""),
            i,
            n = typenames.length,
            t;
          if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
              for (i = 0, o = on[j]; i < n; ++i) {
                if ((t = typenames[i]).type === o.type && t.name === o.name) {
                  return o.value;
                }
              }
            }
            return;
          }
          on = value ? onAdd : onRemove;
          for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
          return this;
        }
        function dispatchEvent(node, type, params) {
          var window = defaultView(node),
            event = window.CustomEvent;
          if (typeof event === "function") {
            event = new event(type, params);
          } else {
            event = window.document.createEvent("Event");
            if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
          }
          node.dispatchEvent(event);
        }
        function dispatchConstant(type, params) {
          return function () {
            return dispatchEvent(this, type, params);
          };
        }
        function dispatchFunction(type, params) {
          return function () {
            return dispatchEvent(this, type, params.apply(this, arguments));
          };
        }
        function selection_dispatch(type, params) {
          return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
        }
        function selection_iterator() {
          var groups, j, m, group, i, n, node;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                groups = this._groups, j = 0, m = groups.length;
              case 1:
                if (!(j < m)) {
                  _context2.n = 5;
                  break;
                }
                group = groups[j], i = 0, n = group.length;
              case 2:
                if (!(i < n)) {
                  _context2.n = 4;
                  break;
                }
                if (!(node = group[i])) {
                  _context2.n = 3;
                  break;
                }
                _context2.n = 3;
                return node;
              case 3:
                ++i;
                _context2.n = 2;
                break;
              case 4:
                ++j;
                _context2.n = 1;
                break;
              case 5:
                return _context2.a(2);
            }
          }, _marked2, this);
        }
        var root = [null];
        function Selection$1(groups, parents) {
          this._groups = groups;
          this._parents = parents;
        }
        function selection() {
          return new Selection$1([[document.documentElement]], root);
        }
        function selection_selection() {
          return this;
        }
        Selection$1.prototype = selection.prototype = _defineProperty2({
          constructor: Selection$1,
          select: selection_select,
          selectAll: selection_selectAll,
          selectChild: selection_selectChild,
          selectChildren: selection_selectChildren,
          filter: selection_filter,
          data: selection_data,
          enter: selection_enter,
          exit: selection_exit,
          join: selection_join,
          merge: selection_merge,
          selection: selection_selection,
          order: selection_order,
          sort: selection_sort,
          call: selection_call,
          nodes: selection_nodes,
          node: selection_node,
          size: selection_size,
          empty: selection_empty,
          each: selection_each,
          attr: selection_attr,
          style: selection_style,
          property: selection_property,
          classed: selection_classed,
          text: selection_text,
          html: selection_html,
          raise: selection_raise,
          lower: selection_lower,
          append: selection_append,
          insert: selection_insert,
          remove: selection_remove,
          clone: selection_clone,
          datum: selection_datum,
          on: selection_on,
          dispatch: selection_dispatch
        }, Symbol.iterator, selection_iterator);
        function select(selector) {
          return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
        }
        function sourceEvent(event) {
          var sourceEvent;
          while (sourceEvent = event.sourceEvent) event = sourceEvent;
          return event;
        }
        function pointer(event, node) {
          event = sourceEvent(event);
          if (node === undefined) node = event.currentTarget;
          if (node) {
            var svg = node.ownerSVGElement || node;
            if (svg.createSVGPoint) {
              var point = svg.createSVGPoint();
              point.x = event.clientX, point.y = event.clientY;
              point = point.matrixTransform(node.getScreenCTM().inverse());
              return [point.x, point.y];
            }
            if (node.getBoundingClientRect) {
              var rect = node.getBoundingClientRect();
              return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
            }
          }
          return [event.pageX, event.pageY];
        }
        function noevent$1(event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
        function dragDisable(view) {
          var root = view.document.documentElement,
            selection = select(view).on("dragstart.drag", noevent$1, true);
          if ("onselectstart" in root) {
            selection.on("selectstart.drag", noevent$1, true);
          } else {
            root.__noselect = root.style.MozUserSelect;
            root.style.MozUserSelect = "none";
          }
        }
        function yesdrag(view, noclick) {
          var root = view.document.documentElement,
            selection = select(view).on("dragstart.drag", null);
          if (noclick) {
            selection.on("click.drag", noevent$1, true);
            setTimeout(function () {
              selection.on("click.drag", null);
            }, 0);
          }
          if ("onselectstart" in root) {
            selection.on("selectstart.drag", null);
          } else {
            root.style.MozUserSelect = root.__noselect;
            delete root.__noselect;
          }
        }
        function define(constructor, factory, prototype) {
          constructor.prototype = factory.prototype = prototype;
          prototype.constructor = constructor;
        }
        function extend(parent, definition) {
          var prototype = Object.create(parent.prototype);
          for (var key in definition) prototype[key] = definition[key];
          return prototype;
        }
        function Color() {}
        var _darker = 0.7;
        var _brighter = 1 / _darker;
        var reI = "\\s*([+-]?\\d+)\\s*",
          reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          reHex = /^#([0-9a-f]{3,8})$/,
          reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
          reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
          reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
          reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
          reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
          reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
        var named = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 0x00ffff,
          aquamarine: 0x7fffd4,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0x000000,
          blanchedalmond: 0xffebcd,
          blue: 0x0000ff,
          blueviolet: 0x8a2be2,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 0x5f9ea0,
          chartreuse: 0x7fff00,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 0x6495ed,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 0x00ffff,
          darkblue: 0x00008b,
          darkcyan: 0x008b8b,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 0x006400,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 0x8b008b,
          darkolivegreen: 0x556b2f,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 0x8b0000,
          darksalmon: 0xe9967a,
          darkseagreen: 0x8fbc8f,
          darkslateblue: 0x483d8b,
          darkslategray: 0x2f4f4f,
          darkslategrey: 0x2f4f4f,
          darkturquoise: 0x00ced1,
          darkviolet: 0x9400d3,
          deeppink: 0xff1493,
          deepskyblue: 0x00bfff,
          dimgray: 0x696969,
          dimgrey: 0x696969,
          dodgerblue: 0x1e90ff,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 0x228b22,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 0x808080,
          green: 0x008000,
          greenyellow: 0xadff2f,
          grey: 0x808080,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 0x4b0082,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 0x7cfc00,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 0x90ee90,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 0x20b2aa,
          lightskyblue: 0x87cefa,
          lightslategray: 0x778899,
          lightslategrey: 0x778899,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 0x00ff00,
          limegreen: 0x32cd32,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 0x800000,
          mediumaquamarine: 0x66cdaa,
          mediumblue: 0x0000cd,
          mediumorchid: 0xba55d3,
          mediumpurple: 0x9370db,
          mediumseagreen: 0x3cb371,
          mediumslateblue: 0x7b68ee,
          mediumspringgreen: 0x00fa9a,
          mediumturquoise: 0x48d1cc,
          mediumvioletred: 0xc71585,
          midnightblue: 0x191970,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 0x000080,
          oldlace: 0xfdf5e6,
          olive: 0x808000,
          olivedrab: 0x6b8e23,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 0x800080,
          rebeccapurple: 0x663399,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 0x4169e1,
          saddlebrown: 0x8b4513,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 0x2e8b57,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 0x87ceeb,
          slateblue: 0x6a5acd,
          slategray: 0x708090,
          slategrey: 0x708090,
          snow: 0xfffafa,
          springgreen: 0x00ff7f,
          steelblue: 0x4682b4,
          tan: 0xd2b48c,
          teal: 0x008080,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 0x40e0d0,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32
        };
        define(Color, color, {
          copy: function copy(channels) {
            return Object.assign(new this.constructor(), this, channels);
          },
          displayable: function displayable() {
            return this.rgb().displayable();
          },
          hex: color_formatHex,
          // Deprecated! Use color.formatHex.
          formatHex: color_formatHex,
          formatHsl: color_formatHsl,
          formatRgb: color_formatRgb,
          toString: color_formatRgb
        });
        function color_formatHex() {
          return this.rgb().formatHex();
        }
        function color_formatHsl() {
          return hslConvert(this).formatHsl();
        }
        function color_formatRgb() {
          return this.rgb().formatRgb();
        }
        function color(format) {
          var m, l;
          format = (format + "").trim().toLowerCase();
          return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
          : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
          : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
          : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
          : null // invalid hex
          ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
          : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
          : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
          : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
          : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
          : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
          : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
          : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
        }
        function rgbn(n) {
          return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
        }
        function rgba(r, g, b, a) {
          if (a <= 0) r = g = b = NaN;
          return new Rgb(r, g, b, a);
        }
        function rgbConvert(o) {
          if (!(o instanceof Color)) o = color(o);
          if (!o) return new Rgb();
          o = o.rgb();
          return new Rgb(o.r, o.g, o.b, o.opacity);
        }
        function rgb(r, g, b, opacity) {
          return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
        }
        function Rgb(r, g, b, opacity) {
          this.r = +r;
          this.g = +g;
          this.b = +b;
          this.opacity = +opacity;
        }
        define(Rgb, rgb, extend(Color, {
          brighter: function brighter(k) {
            k = k == null ? _brighter : Math.pow(_brighter, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
          },
          darker: function darker(k) {
            k = k == null ? _darker : Math.pow(_darker, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
          },
          rgb: function rgb() {
            return this;
          },
          displayable: function displayable() {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
          },
          hex: rgb_formatHex,
          // Deprecated! Use color.formatHex.
          formatHex: rgb_formatHex,
          formatRgb: rgb_formatRgb,
          toString: rgb_formatRgb
        }));
        function rgb_formatHex() {
          return "#" + hex(this.r) + hex(this.g) + hex(this.b);
        }
        function rgb_formatRgb() {
          var a = this.opacity;
          a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
          return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
        }
        function hex(value) {
          value = Math.max(0, Math.min(255, Math.round(value) || 0));
          return (value < 16 ? "0" : "") + value.toString(16);
        }
        function hsla(h, s, l, a) {
          if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
          return new Hsl(h, s, l, a);
        }
        function hslConvert(o) {
          if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
          if (!(o instanceof Color)) o = color(o);
          if (!o) return new Hsl();
          if (o instanceof Hsl) return o;
          o = o.rgb();
          var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            h = NaN,
            s = max - min,
            l = (max + min) / 2;
          if (s) {
            if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
            s /= l < 0.5 ? max + min : 2 - max - min;
            h *= 60;
          } else {
            s = l > 0 && l < 1 ? 0 : h;
          }
          return new Hsl(h, s, l, o.opacity);
        }
        function hsl(h, s, l, opacity) {
          return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
        }
        function Hsl(h, s, l, opacity) {
          this.h = +h;
          this.s = +s;
          this.l = +l;
          this.opacity = +opacity;
        }
        define(Hsl, hsl, extend(Color, {
          brighter: function brighter(k) {
            k = k == null ? _brighter : Math.pow(_brighter, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
          },
          darker: function darker(k) {
            k = k == null ? _darker : Math.pow(_darker, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
          },
          rgb: function rgb() {
            var h = this.h % 360 + (this.h < 0) * 360,
              s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
              l = this.l,
              m2 = l + (l < 0.5 ? l : 1 - l) * s,
              m1 = 2 * l - m2;
            return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
          },
          displayable: function displayable() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
          },
          formatHsl: function formatHsl() {
            var a = this.opacity;
            a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
            return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
          }
        }));

        /* From FvD 13.37, CSS Color Module Level 3 */
        function hsl2rgb(h, m1, m2) {
          return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
        }
        var constant$1 = function constant$1(x) {
          return function () {
            return x;
          };
        };
        function linear(a, d) {
          return function (t) {
            return a + t * d;
          };
        }
        function exponential(a, b, y) {
          return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
            return Math.pow(a + t * b, y);
          };
        }
        function gamma(y) {
          return (y = +y) === 1 ? nogamma : function (a, b) {
            return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
          };
        }
        function nogamma(a, b) {
          var d = b - a;
          return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
        }
        var interpolateRgb = function rgbGamma(y) {
          var color = gamma(y);
          function rgb$1(start, end) {
            var r = color((start = rgb(start)).r, (end = rgb(end)).r),
              g = color(start.g, end.g),
              b = color(start.b, end.b),
              opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
              start.r = r(t);
              start.g = g(t);
              start.b = b(t);
              start.opacity = opacity(t);
              return start + "";
            };
          }
          rgb$1.gamma = rgbGamma;
          return rgb$1;
        }(1);
        function interpolateNumber(a, b) {
          return a = +a, b = +b, function (t) {
            return a * (1 - t) + b * t;
          };
        }
        var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          reB = new RegExp(reA.source, "g");
        function zero(b) {
          return function () {
            return b;
          };
        }
        function one(b) {
          return function (t) {
            return b(t) + "";
          };
        }
        function interpolateString(a, b) {
          var bi = reA.lastIndex = reB.lastIndex = 0,
            // scan index for next number in b
            am,
            // current match in a
            bm,
            // current match in b
            bs,
            // string preceding current number in b, if any
            i = -1,
            // index in s
            s = [],
            // string constants and placeholders
            q = []; // number interpolators

          // Coerce inputs to strings.
          a = a + "", b = b + "";

          // Interpolate pairs of numbers in a & b.
          while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
            if ((bs = bm.index) > bi) {
              // a string precedes the next number in b
              bs = b.slice(bi, bs);
              if (s[i]) s[i] += bs; // coalesce with previous string
              else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
              // numbers in a & b match
              if (s[i]) s[i] += bm; // coalesce with previous string
              else s[++i] = bm;
            } else {
              // interpolate non-matching numbers
              s[++i] = null;
              q.push({
                i: i,
                x: interpolateNumber(am, bm)
              });
            }
            bi = reB.lastIndex;
          }

          // Add remains of b.
          if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
          }

          // Special optimization for only a single match.
          // Otherwise, interpolate each of the numbers and rejoin the string.
          return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
        }
        var degrees = 180 / Math.PI;
        var identity$1 = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1
        };
        function decompose(a, b, c, d, e, f) {
          var scaleX, scaleY, skewX;
          if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
          if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
          if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
          if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
          return {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX: scaleX,
            scaleY: scaleY
          };
        }
        var svgNode;

        /* eslint-disable no-undef */
        function parseCss(value) {
          var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
          return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
        }
        function parseSvg(value) {
          if (value == null) return identity$1;
          if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
          svgNode.setAttribute("transform", value);
          if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
          value = value.matrix;
          return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
        }
        function interpolateTransform(parse, pxComma, pxParen, degParen) {
          function pop(s) {
            return s.length ? s.pop() + " " : "";
          }
          function translate(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
              var i = s.push("translate(", null, pxComma, null, pxParen);
              q.push({
                i: i - 4,
                x: interpolateNumber(xa, xb)
              }, {
                i: i - 2,
                x: interpolateNumber(ya, yb)
              });
            } else if (xb || yb) {
              s.push("translate(" + xb + pxComma + yb + pxParen);
            }
          }
          function rotate(a, b, s, q) {
            if (a !== b) {
              if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
              q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: interpolateNumber(a, b)
              });
            } else if (b) {
              s.push(pop(s) + "rotate(" + b + degParen);
            }
          }
          function skewX(a, b, s, q) {
            if (a !== b) {
              q.push({
                i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                x: interpolateNumber(a, b)
              });
            } else if (b) {
              s.push(pop(s) + "skewX(" + b + degParen);
            }
          }
          function scale(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
              var i = s.push(pop(s) + "scale(", null, ",", null, ")");
              q.push({
                i: i - 4,
                x: interpolateNumber(xa, xb)
              }, {
                i: i - 2,
                x: interpolateNumber(ya, yb)
              });
            } else if (xb !== 1 || yb !== 1) {
              s.push(pop(s) + "scale(" + xb + "," + yb + ")");
            }
          }
          return function (a, b) {
            var s = [],
              // string constants and placeholders
              q = []; // number interpolators
            a = parse(a), b = parse(b);
            translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
            rotate(a.rotate, b.rotate, s, q);
            skewX(a.skewX, b.skewX, s, q);
            scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
            a = b = null; // gc
            return function (t) {
              var i = -1,
                n = q.length,
                o;
              while (++i < n) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            };
          };
        }
        var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
        var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
        var epsilon2 = 1e-12;
        function cosh(x) {
          return ((x = Math.exp(x)) + 1 / x) / 2;
        }
        function sinh(x) {
          return ((x = Math.exp(x)) - 1 / x) / 2;
        }
        function tanh(x) {
          return ((x = Math.exp(2 * x)) - 1) / (x + 1);
        }
        var interpolateZoom = function zoomRho(rho, rho2, rho4) {
          // p0 = [ux0, uy0, w0]
          // p1 = [ux1, uy1, w1]
          function zoom(p0, p1) {
            var ux0 = p0[0],
              uy0 = p0[1],
              w0 = p0[2],
              ux1 = p1[0],
              uy1 = p1[1],
              w1 = p1[2],
              dx = ux1 - ux0,
              dy = uy1 - uy0,
              d2 = dx * dx + dy * dy,
              i,
              S;

            // Special case for u0 ≅ u1.
            if (d2 < epsilon2) {
              S = Math.log(w1 / w0) / rho;
              i = function i(t) {
                return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
              };
            }

            // General case.
            else {
              var d1 = Math.sqrt(d2),
                b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
                b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
                r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
                r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
              S = (r1 - r0) / rho;
              i = function i(t) {
                var s = t * S,
                  coshr0 = cosh(r0),
                  u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
              };
            }
            i.duration = S * 1000 * rho / Math.SQRT2;
            return i;
          }
          zoom.rho = function (_) {
            var _1 = Math.max(1e-3, +_),
              _2 = _1 * _1,
              _4 = _2 * _2;
            return zoomRho(_1, _2, _4);
          };
          return zoom;
        }(Math.SQRT2, 2, 4);
        var frame = 0,
          // is an animation frame pending?
          timeout$1 = 0,
          // is a timeout pending?
          interval = 0,
          // are any timers active?
          pokeDelay = 1000,
          // how frequently we check for clock skew
          taskHead,
          taskTail,
          clockLast = 0,
          clockNow = 0,
          clockSkew = 0,
          clock = (typeof performance === "undefined" ? "undefined" : _typeof2(performance)) === "object" && performance.now ? performance : Date,
          setFrame = (typeof window === "undefined" ? "undefined" : _typeof2(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
            setTimeout(f, 17);
          };
        function now() {
          return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
        }
        function clearNow() {
          clockNow = 0;
        }
        function Timer() {
          this._call = this._time = this._next = null;
        }
        Timer.prototype = timer.prototype = {
          constructor: Timer,
          restart: function restart(callback, delay, time) {
            if (typeof callback !== "function") throw new TypeError("callback is not a function");
            time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
            if (!this._next && taskTail !== this) {
              if (taskTail) taskTail._next = this;else taskHead = this;
              taskTail = this;
            }
            this._call = callback;
            this._time = time;
            sleep();
          },
          stop: function stop() {
            if (this._call) {
              this._call = null;
              this._time = Infinity;
              sleep();
            }
          }
        };
        function timer(callback, delay, time) {
          var t = new Timer();
          t.restart(callback, delay, time);
          return t;
        }
        function timerFlush() {
          now(); // Get the current time, if not already set.
          ++frame; // Pretend we’ve set an alarm, if we haven’t already.
          var t = taskHead,
            e;
          while (t) {
            if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
            t = t._next;
          }
          --frame;
        }
        function wake() {
          clockNow = (clockLast = clock.now()) + clockSkew;
          frame = timeout$1 = 0;
          try {
            timerFlush();
          } finally {
            frame = 0;
            nap();
            clockNow = 0;
          }
        }
        function poke() {
          var now = clock.now(),
            delay = now - clockLast;
          if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
        }
        function nap() {
          var t0,
            t1 = taskHead,
            t2,
            time = Infinity;
          while (t1) {
            if (t1._call) {
              if (time > t1._time) time = t1._time;
              t0 = t1, t1 = t1._next;
            } else {
              t2 = t1._next, t1._next = null;
              t1 = t0 ? t0._next = t2 : taskHead = t2;
            }
          }
          taskTail = t0;
          sleep(time);
        }
        function sleep(time) {
          if (frame) return; // Soonest alarm already set, or will be.
          if (timeout$1) timeout$1 = clearTimeout(timeout$1);
          var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
          if (delay > 24) {
            if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
            if (interval) interval = clearInterval(interval);
          } else {
            if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
            frame = 1, setFrame(wake);
          }
        }
        function timeout(callback, delay, time) {
          var t = new Timer();
          delay = delay == null ? 0 : +delay;
          t.restart(function (elapsed) {
            t.stop();
            callback(elapsed + delay);
          }, delay, time);
          return t;
        }
        var emptyOn = dispatch("start", "end", "cancel", "interrupt");
        var emptyTween = [];
        var CREATED = 0;
        var SCHEDULED = 1;
        var STARTING = 2;
        var STARTED = 3;
        var RUNNING = 4;
        var ENDING = 5;
        var ENDED = 6;
        function schedule(node, name, id, index, group, timing) {
          var schedules = node.__transition;
          if (!schedules) node.__transition = {};else if (id in schedules) return;
          create(node, id, {
            name: name,
            index: index,
            // For context during callback.
            group: group,
            // For context during callback.
            on: emptyOn,
            tween: emptyTween,
            time: timing.time,
            delay: timing.delay,
            duration: timing.duration,
            ease: timing.ease,
            timer: null,
            state: CREATED
          });
        }
        function init(node, id) {
          var schedule = get(node, id);
          if (schedule.state > CREATED) throw new Error("too late; already scheduled");
          return schedule;
        }
        function set(node, id) {
          var schedule = get(node, id);
          if (schedule.state > STARTED) throw new Error("too late; already running");
          return schedule;
        }
        function get(node, id) {
          var schedule = node.__transition;
          if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
          return schedule;
        }
        function create(node, id, self) {
          var schedules = node.__transition,
            tween;

          // Initialize the self timer when the transition is created.
          // Note the actual delay is not known until the first callback!
          schedules[id] = self;
          self.timer = timer(schedule, 0, self.time);
          function schedule(elapsed) {
            self.state = SCHEDULED;
            self.timer.restart(start, self.delay, self.time);

            // If the elapsed delay is less than our first sleep, start immediately.
            if (self.delay <= elapsed) start(elapsed - self.delay);
          }
          function start(elapsed) {
            var i, j, n, o;

            // If the state is not SCHEDULED, then we previously errored on start.
            if (self.state !== SCHEDULED) return stop();
            for (i in schedules) {
              o = schedules[i];
              if (o.name !== self.name) continue;

              // While this element already has a starting transition during this frame,
              // defer starting an interrupting transition until that transition has a
              // chance to tick (and possibly end); see d3/d3-transition#54!
              if (o.state === STARTED) return timeout(start);

              // Interrupt the active transition, if any.
              if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
              }

              // Cancel any pre-empted transitions.
              else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
              }
            }

            // Defer the first tick to end of the current frame; see d3/d3#1576.
            // Note the transition may be canceled after start and before the first tick!
            // Note this must be scheduled before the start event; see d3/d3-transition#16!
            // Assuming this is successful, subsequent callbacks go straight to tick.
            timeout(function () {
              if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
              }
            });

            // Dispatch the start event.
            // Note this must be done before the tween are initialized.
            self.state = STARTING;
            self.on.call("start", node, node.__data__, self.index, self.group);
            if (self.state !== STARTING) return; // interrupted
            self.state = STARTED;

            // Initialize the tween, deleting null tween.
            tween = new Array(n = self.tween.length);
            for (i = 0, j = -1; i < n; ++i) {
              if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
              }
            }
            tween.length = j + 1;
          }
          function tick(elapsed) {
            var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
              i = -1,
              n = tween.length;
            while (++i < n) {
              tween[i].call(node, t);
            }

            // Dispatch the end event.
            if (self.state === ENDING) {
              self.on.call("end", node, node.__data__, self.index, self.group);
              stop();
            }
          }
          function stop() {
            self.state = ENDED;
            self.timer.stop();
            delete schedules[id];
            for (var i in schedules) return; // eslint-disable-line no-unused-vars
            delete node.__transition;
          }
        }
        function interrupt(node, name) {
          var schedules = node.__transition,
            schedule,
            active,
            empty = true,
            i;
          if (!schedules) return;
          name = name == null ? null : name + "";
          for (i in schedules) {
            if ((schedule = schedules[i]).name !== name) {
              empty = false;
              continue;
            }
            active = schedule.state > STARTING && schedule.state < ENDING;
            schedule.state = ENDED;
            schedule.timer.stop();
            schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
            delete schedules[i];
          }
          if (empty) delete node.__transition;
        }
        function selection_interrupt(name) {
          return this.each(function () {
            interrupt(this, name);
          });
        }
        function tweenRemove(id, name) {
          var tween0, tween1;
          return function () {
            var schedule = set(this, id),
              tween = schedule.tween;

            // If this node shared tween with the previous node,
            // just assign the updated shared tween and we’re done!
            // Otherwise, copy-on-write.
            if (tween !== tween0) {
              tween1 = tween0 = tween;
              for (var i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                  tween1 = tween1.slice();
                  tween1.splice(i, 1);
                  break;
                }
              }
            }
            schedule.tween = tween1;
          };
        }
        function tweenFunction(id, name, value) {
          var tween0, tween1;
          if (typeof value !== "function") throw new Error();
          return function () {
            var schedule = set(this, id),
              tween = schedule.tween;

            // If this node shared tween with the previous node,
            // just assign the updated shared tween and we’re done!
            // Otherwise, copy-on-write.
            if (tween !== tween0) {
              tween1 = (tween0 = tween).slice();
              for (var t = {
                  name: name,
                  value: value
                }, i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                  tween1[i] = t;
                  break;
                }
              }
              if (i === n) tween1.push(t);
            }
            schedule.tween = tween1;
          };
        }
        function transition_tween(name, value) {
          var id = this._id;
          name += "";
          if (arguments.length < 2) {
            var tween = get(this.node(), id).tween;
            for (var i = 0, n = tween.length, t; i < n; ++i) {
              if ((t = tween[i]).name === name) {
                return t.value;
              }
            }
            return null;
          }
          return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
        }
        function tweenValue(transition, name, value) {
          var id = transition._id;
          transition.each(function () {
            var schedule = set(this, id);
            (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
          });
          return function (node) {
            return get(node, id).value[name];
          };
        }
        function interpolate(a, b) {
          var c;
          return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
        }
        function attrRemove(name) {
          return function () {
            this.removeAttribute(name);
          };
        }
        function attrRemoveNS(fullname) {
          return function () {
            this.removeAttributeNS(fullname.space, fullname.local);
          };
        }
        function attrConstant(name, interpolate, value1) {
          var string00,
            string1 = value1 + "",
            interpolate0;
          return function () {
            var string0 = this.getAttribute(name);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
          };
        }
        function attrConstantNS(fullname, interpolate, value1) {
          var string00,
            string1 = value1 + "",
            interpolate0;
          return function () {
            var string0 = this.getAttributeNS(fullname.space, fullname.local);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
          };
        }
        function attrFunction(name, interpolate, value) {
          var string00, string10, interpolate0;
          return function () {
            var string0,
              value1 = value(this),
              string1;
            if (value1 == null) return void this.removeAttribute(name);
            string0 = this.getAttribute(name);
            string1 = value1 + "";
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
          };
        }
        function attrFunctionNS(fullname, interpolate, value) {
          var string00, string10, interpolate0;
          return function () {
            var string0,
              value1 = value(this),
              string1;
            if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
            string0 = this.getAttributeNS(fullname.space, fullname.local);
            string1 = value1 + "";
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
          };
        }
        function transition_attr(name, value) {
          var fullname = namespace(name),
            i = fullname === "transform" ? interpolateTransformSvg : interpolate;
          return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
        }
        function attrInterpolate(name, i) {
          return function (t) {
            this.setAttribute(name, i.call(this, t));
          };
        }
        function attrInterpolateNS(fullname, i) {
          return function (t) {
            this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
          };
        }
        function attrTweenNS(fullname, value) {
          var t0, i0;
          function tween() {
            var i = value.apply(this, arguments);
            if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
            return t0;
          }
          tween._value = value;
          return tween;
        }
        function attrTween(name, value) {
          var t0, i0;
          function tween() {
            var i = value.apply(this, arguments);
            if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
            return t0;
          }
          tween._value = value;
          return tween;
        }
        function transition_attrTween(name, value) {
          var key = "attr." + name;
          if (arguments.length < 2) return (key = this.tween(key)) && key._value;
          if (value == null) return this.tween(key, null);
          if (typeof value !== "function") throw new Error();
          var fullname = namespace(name);
          return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
        }
        function delayFunction(id, value) {
          return function () {
            init(this, id).delay = +value.apply(this, arguments);
          };
        }
        function delayConstant(id, value) {
          return value = +value, function () {
            init(this, id).delay = value;
          };
        }
        function transition_delay(value) {
          var id = this._id;
          return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
        }
        function durationFunction(id, value) {
          return function () {
            set(this, id).duration = +value.apply(this, arguments);
          };
        }
        function durationConstant(id, value) {
          return value = +value, function () {
            set(this, id).duration = value;
          };
        }
        function transition_duration(value) {
          var id = this._id;
          return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
        }
        function easeConstant(id, value) {
          if (typeof value !== "function") throw new Error();
          return function () {
            set(this, id).ease = value;
          };
        }
        function transition_ease(value) {
          var id = this._id;
          return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
        }
        function easeVarying(id, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (typeof v !== "function") throw new Error();
            set(this, id).ease = v;
          };
        }
        function transition_easeVarying(value) {
          if (typeof value !== "function") throw new Error();
          return this.each(easeVarying(this._id, value));
        }
        function transition_filter(match) {
          if (typeof match !== "function") match = matcher(match);
          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
              if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
              }
            }
          }
          return new Transition(subgroups, this._parents, this._name, this._id);
        }
        function transition_merge(transition) {
          if (transition._id !== this._id) throw new Error();
          for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
            for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
              if (node = group0[i] || group1[i]) {
                merge[i] = node;
              }
            }
          }
          for (; j < m0; ++j) {
            merges[j] = groups0[j];
          }
          return new Transition(merges, this._parents, this._name, this._id);
        }
        function start(name) {
          return (name + "").trim().split(/^|\s+/).every(function (t) {
            var i = t.indexOf(".");
            if (i >= 0) t = t.slice(0, i);
            return !t || t === "start";
          });
        }
        function onFunction(id, name, listener) {
          var on0,
            on1,
            sit = start(name) ? init : set;
          return function () {
            var schedule = sit(this, id),
              on = schedule.on;

            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
            schedule.on = on1;
          };
        }
        function transition_on(name, listener) {
          var id = this._id;
          return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
        }
        function removeFunction(id) {
          return function () {
            var parent = this.parentNode;
            for (var i in this.__transition) if (+i !== id) return;
            if (parent) parent.removeChild(this);
          };
        }
        function transition_remove() {
          return this.on("end.remove", removeFunction(this._id));
        }
        function transition_select(select) {
          var name = this._name,
            id = this._id;
          if (typeof select !== "function") select = selector(select);
          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
              if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                schedule(subgroup[i], name, id, i, subgroup, get(node, id));
              }
            }
          }
          return new Transition(subgroups, this._parents, name, id);
        }
        function transition_selectAll(select) {
          var name = this._name,
            id = this._id;
          if (typeof select !== "function") select = selectorAll(select);
          for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
                  if (child = children[k]) {
                    schedule(child, name, id, k, children, inherit);
                  }
                }
                subgroups.push(children);
                parents.push(node);
              }
            }
          }
          return new Transition(subgroups, parents, name, id);
        }
        var Selection = selection.prototype.constructor;
        function transition_selection() {
          return new Selection(this._groups, this._parents);
        }
        function styleNull(name, interpolate) {
          var string00, string10, interpolate0;
          return function () {
            var string0 = styleValue(this, name),
              string1 = (this.style.removeProperty(name), styleValue(this, name));
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
          };
        }
        function styleRemove(name) {
          return function () {
            this.style.removeProperty(name);
          };
        }
        function styleConstant(name, interpolate, value1) {
          var string00,
            string1 = value1 + "",
            interpolate0;
          return function () {
            var string0 = styleValue(this, name);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
          };
        }
        function styleFunction(name, interpolate, value) {
          var string00, string10, interpolate0;
          return function () {
            var string0 = styleValue(this, name),
              value1 = value(this),
              string1 = value1 + "";
            if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
          };
        }
        function styleMaybeRemove(id, name) {
          var on0,
            on1,
            listener0,
            key = "style." + name,
            event = "end." + key,
            remove;
          return function () {
            var schedule = set(this, id),
              on = schedule.on,
              listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
            schedule.on = on1;
          };
        }
        function transition_style(name, value, priority) {
          var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
          return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
        }
        function styleInterpolate(name, i, priority) {
          return function (t) {
            this.style.setProperty(name, i.call(this, t), priority);
          };
        }
        function styleTween(name, value, priority) {
          var t, i0;
          function tween() {
            var i = value.apply(this, arguments);
            if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
            return t;
          }
          tween._value = value;
          return tween;
        }
        function transition_styleTween(name, value, priority) {
          var key = "style." + (name += "");
          if (arguments.length < 2) return (key = this.tween(key)) && key._value;
          if (value == null) return this.tween(key, null);
          if (typeof value !== "function") throw new Error();
          return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
        }
        function textConstant(value) {
          return function () {
            this.textContent = value;
          };
        }
        function textFunction(value) {
          return function () {
            var value1 = value(this);
            this.textContent = value1 == null ? "" : value1;
          };
        }
        function transition_text(value) {
          return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
        }
        function textInterpolate(i) {
          return function (t) {
            this.textContent = i.call(this, t);
          };
        }
        function textTween(value) {
          var t0, i0;
          function tween() {
            var i = value.apply(this, arguments);
            if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
            return t0;
          }
          tween._value = value;
          return tween;
        }
        function transition_textTween(value) {
          var key = "text";
          if (arguments.length < 1) return (key = this.tween(key)) && key._value;
          if (value == null) return this.tween(key, null);
          if (typeof value !== "function") throw new Error();
          return this.tween(key, textTween(value));
        }
        function transition_transition() {
          var name = this._name,
            id0 = this._id,
            id1 = newId();
          for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                var inherit = get(node, id0);
                schedule(node, name, id1, i, group, {
                  time: inherit.time + inherit.delay + inherit.duration,
                  delay: 0,
                  duration: inherit.duration,
                  ease: inherit.ease
                });
              }
            }
          }
          return new Transition(groups, this._parents, name, id1);
        }
        function transition_end() {
          var on0,
            on1,
            that = this,
            id = that._id,
            size = that.size();
          return new Promise(function (resolve, reject) {
            var cancel = {
                value: reject
              },
              end = {
                value: function value() {
                  if (--size === 0) resolve();
                }
              };
            that.each(function () {
              var schedule = set(this, id),
                on = schedule.on;

              // If this node shared a dispatch with the previous node,
              // just assign the updated shared dispatch and we’re done!
              // Otherwise, copy-on-write.
              if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
              }
              schedule.on = on1;
            });

            // The selection was empty, resolve end immediately
            if (size === 0) resolve();
          });
        }
        var id = 0;
        function Transition(groups, parents, name, id) {
          this._groups = groups;
          this._parents = parents;
          this._name = name;
          this._id = id;
        }
        function newId() {
          return ++id;
        }
        var selection_prototype = selection.prototype;
        Transition.prototype = _defineProperty2({
          constructor: Transition,
          select: transition_select,
          selectAll: transition_selectAll,
          filter: transition_filter,
          merge: transition_merge,
          selection: transition_selection,
          transition: transition_transition,
          call: selection_prototype.call,
          nodes: selection_prototype.nodes,
          node: selection_prototype.node,
          size: selection_prototype.size,
          empty: selection_prototype.empty,
          each: selection_prototype.each,
          on: transition_on,
          attr: transition_attr,
          attrTween: transition_attrTween,
          style: transition_style,
          styleTween: transition_styleTween,
          text: transition_text,
          textTween: transition_textTween,
          remove: transition_remove,
          tween: transition_tween,
          delay: transition_delay,
          duration: transition_duration,
          ease: transition_ease,
          easeVarying: transition_easeVarying,
          end: transition_end
        }, Symbol.iterator, selection_prototype[Symbol.iterator]);
        function cubicInOut(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }
        var defaultTiming = {
          time: null,
          // Set on use.
          delay: 0,
          duration: 250,
          ease: cubicInOut
        };
        function inherit(node, id) {
          var timing;
          while (!(timing = node.__transition) || !(timing = timing[id])) {
            if (!(node = node.parentNode)) {
              throw new Error("transition ".concat(id, " not found"));
            }
          }
          return timing;
        }
        function selection_transition(name) {
          var id, timing;
          if (name instanceof Transition) {
            id = name._id, name = name._name;
          } else {
            id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
          }
          for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                schedule(node, name, id, i, group, timing || inherit(node, id));
              }
            }
          }
          return new Transition(groups, this._parents, name, id);
        }
        selection.prototype.interrupt = selection_interrupt;
        selection.prototype.transition = selection_transition;
        var constant = function constant(x) {
          return function () {
            return x;
          };
        };
        function ZoomEvent(type, _ref13) {
          var sourceEvent = _ref13.sourceEvent,
            target = _ref13.target,
            transform = _ref13.transform,
            dispatch = _ref13.dispatch;
          Object.defineProperties(this, {
            type: {
              value: type,
              enumerable: true,
              configurable: true
            },
            sourceEvent: {
              value: sourceEvent,
              enumerable: true,
              configurable: true
            },
            target: {
              value: target,
              enumerable: true,
              configurable: true
            },
            transform: {
              value: transform,
              enumerable: true,
              configurable: true
            },
            _: {
              value: dispatch
            }
          });
        }
        function Transform(k, x, y) {
          this.k = k;
          this.x = x;
          this.y = y;
        }
        Transform.prototype = {
          constructor: Transform,
          scale: function scale(k) {
            return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
          },
          translate: function translate(x, y) {
            return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
          },
          apply: function apply(point) {
            return [point[0] * this.k + this.x, point[1] * this.k + this.y];
          },
          applyX: function applyX(x) {
            return x * this.k + this.x;
          },
          applyY: function applyY(y) {
            return y * this.k + this.y;
          },
          invert: function invert(location) {
            return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
          },
          invertX: function invertX(x) {
            return (x - this.x) / this.k;
          },
          invertY: function invertY(y) {
            return (y - this.y) / this.k;
          },
          rescaleX: function rescaleX(x) {
            return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
          },
          rescaleY: function rescaleY(y) {
            return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
          },
          toString: function toString() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
          }
        };
        var identity = new Transform(1, 0, 0);
        Transform.prototype;
        function nopropagation(event) {
          event.stopImmediatePropagation();
        }
        function noevent(event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        // Ignore right-click, since that should open the context menu.
        // except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
        function defaultFilter(event) {
          return (!event.ctrlKey || event.type === 'wheel') && !event.button;
        }
        function defaultExtent() {
          var e = this;
          if (e instanceof SVGElement) {
            e = e.ownerSVGElement || e;
            if (e.hasAttribute("viewBox")) {
              e = e.viewBox.baseVal;
              return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
            }
            return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
          }
          return [[0, 0], [e.clientWidth, e.clientHeight]];
        }
        function defaultTransform() {
          return this.__zoom || identity;
        }
        function defaultWheelDelta(event) {
          return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
        }
        function defaultTouchable() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function defaultConstrain(transform, extent, translateExtent) {
          var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
            dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
            dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
            dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
          return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
        }
        function zoom() {
          var filter = defaultFilter,
            extent = defaultExtent,
            constrain = defaultConstrain,
            wheelDelta = defaultWheelDelta,
            touchable = defaultTouchable,
            scaleExtent = [0, Infinity],
            translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
            duration = 250,
            interpolate = interpolateZoom,
            listeners = dispatch("start", "zoom", "end"),
            touchstarting,
            touchfirst,
            touchending,
            touchDelay = 500,
            wheelDelay = 150,
            clickDistance2 = 0,
            tapDistance = 10;
          function zoom(selection) {
            selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          zoom.transform = function (collection, transform, point, event) {
            var selection = collection.selection ? collection.selection() : collection;
            selection.property("__zoom", defaultTransform);
            if (collection !== selection) {
              schedule(collection, transform, point, event);
            } else {
              selection.interrupt().each(function () {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
              });
            }
          };
          zoom.scaleBy = function (selection, k, p, event) {
            zoom.scaleTo(selection, function () {
              var k0 = this.__zoom.k,
                k1 = typeof k === "function" ? k.apply(this, arguments) : k;
              return k0 * k1;
            }, p, event);
          };
          zoom.scaleTo = function (selection, k, p, event) {
            zoom.transform(selection, function () {
              var e = extent.apply(this, arguments),
                t0 = this.__zoom,
                p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
                p1 = t0.invert(p0),
                k1 = typeof k === "function" ? k.apply(this, arguments) : k;
              return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
            }, p, event);
          };
          zoom.translateBy = function (selection, x, y, event) {
            zoom.transform(selection, function () {
              return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
            }, null, event);
          };
          zoom.translateTo = function (selection, x, y, p, event) {
            zoom.transform(selection, function () {
              var e = extent.apply(this, arguments),
                t = this.__zoom,
                p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
              return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
            }, p, event);
          };
          function scale(transform, k) {
            k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
            return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
          }
          function translate(transform, p0, p1) {
            var x = p0[0] - p1[0] * transform.k,
              y = p0[1] - p1[1] * transform.k;
            return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
          }
          function centroid(extent) {
            return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
          }
          function schedule(transition, transform, point, event) {
            transition.on("start.zoom", function () {
              gesture(this, arguments).event(event).start();
            }).on("interrupt.zoom end.zoom", function () {
              gesture(this, arguments).event(event).end();
            }).tween("zoom", function () {
              var that = this,
                args = arguments,
                g = gesture(that, args).event(event),
                e = extent.apply(that, args),
                p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                a = that.__zoom,
                b = typeof transform === "function" ? transform.apply(that, args) : transform,
                i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
              return function (t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                  var l = i(t),
                    k = w / l[2];
                  t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
              };
            });
          }
          function gesture(that, args, clean) {
            return !clean && that.__zooming || new Gesture(that, args);
          }
          function Gesture(that, args) {
            this.that = that;
            this.args = args;
            this.active = 0;
            this.sourceEvent = null;
            this.extent = extent.apply(that, args);
            this.taps = 0;
          }
          Gesture.prototype = {
            event: function event(_event) {
              if (_event) this.sourceEvent = _event;
              return this;
            },
            start: function start() {
              if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
              }
              return this;
            },
            zoom: function zoom(key, transform) {
              if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
              if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
              if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
              this.that.__zoom = transform;
              this.emit("zoom");
              return this;
            },
            end: function end() {
              if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
              }
              return this;
            },
            emit: function emit(type) {
              var d = select(this.that).datum();
              listeners.call(type, this.that, new ZoomEvent(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                transform: this.that.__zoom,
                dispatch: listeners
              }), d);
            }
          };
          function wheeled(event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (!filter.apply(this, arguments)) return;
            var g = gesture(this, args).event(event),
              t = this.__zoom,
              k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
              p = pointer(event);

            // If the mouse is in the same location as before, reuse it.
            // If there were recent wheel events, reset the wheel idle timeout.
            if (g.wheel) {
              if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
              }
              clearTimeout(g.wheel);
            }

            // If this wheel event won’t trigger a transform change, ignore it.
            else if (t.k === k) return;

            // Otherwise, capture the mouse point and location at the start.
            else {
              g.mouse = [p, t.invert(p)];
              interrupt(this);
              g.start();
            }
            noevent(event);
            g.wheel = setTimeout(wheelidled, wheelDelay);
            g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
            function wheelidled() {
              g.wheel = null;
              g.end();
            }
          }
          function mousedowned(event) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            if (touchending || !filter.apply(this, arguments)) return;
            var g = gesture(this, args, true).event(event),
              v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
              p = pointer(event, currentTarget),
              currentTarget = event.currentTarget,
              x0 = event.clientX,
              y0 = event.clientY;
            dragDisable(event.view);
            nopropagation(event);
            g.mouse = [p, this.__zoom.invert(p)];
            interrupt(this);
            g.start();
            function mousemoved(event) {
              noevent(event);
              if (!g.moved) {
                var dx = event.clientX - x0,
                  dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
              }
              g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
            }
            function mouseupped(event) {
              v.on("mousemove.zoom mouseup.zoom", null);
              yesdrag(event.view, g.moved);
              noevent(event);
              g.event(event).end();
            }
          }
          function dblclicked(event) {
            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }
            if (!filter.apply(this, arguments)) return;
            var t0 = this.__zoom,
              p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
              p1 = t0.invert(p0),
              k1 = t0.k * (event.shiftKey ? 0.5 : 2),
              t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
            noevent(event);
            if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);else select(this).call(zoom.transform, t1, p0, event);
          }
          function touchstarted(event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }
            if (!filter.apply(this, arguments)) return;
            var touches = event.touches,
              n = touches.length,
              g = gesture(this, args, event.changedTouches.length === n).event(event),
              started,
              i,
              t,
              p;
            nopropagation(event);
            for (i = 0; i < n; ++i) {
              t = touches[i], p = pointer(t, this);
              p = [p, this.__zoom.invert(p), t.identifier];
              if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
            }
            if (touchstarting) touchstarting = clearTimeout(touchstarting);
            if (started) {
              if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function () {
                touchstarting = null;
              }, touchDelay);
              interrupt(this);
              g.start();
            }
          }
          function touchmoved(event) {
            if (!this.__zooming) return;
            for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }
            var g = gesture(this, args).event(event),
              touches = event.changedTouches,
              n = touches.length,
              i,
              t,
              p,
              l;
            noevent(event);
            for (i = 0; i < n; ++i) {
              t = touches[i], p = pointer(t, this);
              if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
            }
            t = g.that.__zoom;
            if (g.touch1) {
              var p0 = g.touch0[0],
                l0 = g.touch0[1],
                p1 = g.touch1[0],
                l1 = g.touch1[1],
                dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
                dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
              t = scale(t, Math.sqrt(dp / dl));
              p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
              l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
            } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;
            g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
          }
          function touchended(event) {
            for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              args[_key6 - 1] = arguments[_key6];
            }
            if (!this.__zooming) return;
            var g = gesture(this, args).event(event),
              touches = event.changedTouches,
              n = touches.length,
              i,
              t;
            nopropagation(event);
            if (touchending) clearTimeout(touchending);
            touchending = setTimeout(function () {
              touchending = null;
            }, touchDelay);
            for (i = 0; i < n; ++i) {
              t = touches[i];
              if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
            }
            if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
            if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
              g.end();
              // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
              if (g.taps === 2) {
                t = pointer(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                  var p = select(this).on("dblclick.zoom");
                  if (p) p.apply(this, arguments);
                }
              }
            }
          }
          zoom.wheelDelta = function (_) {
            return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
          };
          zoom.filter = function (_) {
            return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
          };
          zoom.touchable = function (_) {
            return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
          };
          zoom.extent = function (_) {
            return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
          };
          zoom.scaleExtent = function (_) {
            return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
          };
          zoom.translateExtent = function (_) {
            return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
          };
          zoom.constrain = function (_) {
            return arguments.length ? (constrain = _, zoom) : constrain;
          };
          zoom.duration = function (_) {
            return arguments.length ? (duration = +_, zoom) : duration;
          };
          zoom.interpolate = function (_) {
            return arguments.length ? (interpolate = _, zoom) : interpolate;
          };
          zoom.on = function () {
            var value = listeners.on.apply(listeners, arguments);
            return value === listeners ? zoom : value;
          };
          zoom.clickDistance = function (_) {
            return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
          };
          zoom.tapDistance = function (_) {
            return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
          };
          return zoom;
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _extends() {
          _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var _excluded$a = ["width", "height", "projection", "projectionConfig"];
        var geoPath = index,
          projections = _objectWithoutProperties(d3Geo, ["geoPath"]);
        var MapContext = reactExports.createContext();
        var makeProjection = function makeProjection(_ref) {
          var _ref$projectionConfig = _ref.projectionConfig,
            projectionConfig = _ref$projectionConfig === void 0 ? {} : _ref$projectionConfig,
            _ref$projection = _ref.projection,
            projection = _ref$projection === void 0 ? "geoEqualEarth" : _ref$projection,
            _ref$width = _ref.width,
            width = _ref$width === void 0 ? 800 : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === void 0 ? 600 : _ref$height;
          var isFunc = typeof projection === "function";
          if (isFunc) return projection;
          var proj = projections[projection]().translate([width / 2, height / 2]);
          var supported = [proj.center ? "center" : null, proj.rotate ? "rotate" : null, proj.scale ? "scale" : null, proj.parallels ? "parallels" : null];
          supported.forEach(function (d) {
            if (!d) return;
            proj = proj[d](projectionConfig[d] || proj[d]());
          });
          return proj;
        };
        var MapProvider = function MapProvider(_ref2) {
          var width = _ref2.width,
            height = _ref2.height,
            projection = _ref2.projection,
            projectionConfig = _ref2.projectionConfig,
            restProps = _objectWithoutProperties(_ref2, _excluded$a);
          var _ref3 = projectionConfig.center || [],
            _ref4 = _slicedToArray(_ref3, 2),
            cx = _ref4[0],
            cy = _ref4[1];
          var _ref5 = projectionConfig.rotate || [],
            _ref6 = _slicedToArray(_ref5, 3),
            rx = _ref6[0],
            ry = _ref6[1],
            rz = _ref6[2];
          var _ref7 = projectionConfig.parallels || [],
            _ref8 = _slicedToArray(_ref7, 2),
            p1 = _ref8[0],
            p2 = _ref8[1];
          var s = projectionConfig.scale || null;
          var projMemo = reactExports.useMemo(function () {
            return makeProjection({
              projectionConfig: {
                center: cx || cx === 0 || cy || cy === 0 ? [cx, cy] : null,
                rotate: rx || rx === 0 || ry || ry === 0 ? [rx, ry, rz] : null,
                parallels: p1 || p1 === 0 || p2 || p2 === 0 ? [p1, p2] : null,
                scale: s
              },
              projection: projection,
              width: width,
              height: height
            });
          }, [width, height, projection, cx, cy, rx, ry, rz, p1, p2, s]);
          var proj = reactExports.useCallback(projMemo, [projMemo]);
          var value = reactExports.useMemo(function () {
            return {
              width: width,
              height: height,
              projection: proj,
              path: geoPath().projection(proj)
            };
          }, [width, height, proj]);
          return /*#__PURE__*/React.createElement(MapContext.Provider, _extends({
            value: value
          }, restProps));
        };
        MapProvider.propTypes = {
          width: PropTypes.number,
          height: PropTypes.number,
          projection: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          projectionConfig: PropTypes.object
        };
        var _excluded$9 = ["width", "height", "projection", "projectionConfig", "className"];
        var ComposableMap = reactExports.forwardRef(function (_ref, ref) {
          var _ref$width = _ref.width,
            width = _ref$width === void 0 ? 800 : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === void 0 ? 600 : _ref$height,
            _ref$projection = _ref.projection,
            projection = _ref$projection === void 0 ? "geoEqualEarth" : _ref$projection,
            _ref$projectionConfig = _ref.projectionConfig,
            projectionConfig = _ref$projectionConfig === void 0 ? {} : _ref$projectionConfig,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$9);
          return /*#__PURE__*/React.createElement(MapProvider, {
            width: width,
            height: height,
            projection: projection,
            projectionConfig: projectionConfig
          }, /*#__PURE__*/React.createElement("svg", _extends({
            ref: ref,
            viewBox: "0 0 ".concat(width, " ").concat(height),
            className: "rsm-svg ".concat(className)
          }, restProps)));
        });
        ComposableMap.displayName = "ComposableMap";
        ComposableMap.propTypes = {
          width: PropTypes.number,
          height: PropTypes.number,
          projection: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          projectionConfig: PropTypes.object,
          className: PropTypes.string
        };
        function getCoords(w, h, t) {
          var xOffset = (w * t.k - w) / 2;
          var yOffset = (h * t.k - h) / 2;
          return [w / 2 - (xOffset + t.x) / t.k, h / 2 - (yOffset + t.y) / t.k];
        }
        function fetchGeographies(url) {
          return fetch(url).then(function (res) {
            if (!res.ok) {
              throw Error(res.statusText);
            }
            return res.json();
          })["catch"](function (error) {
            console.log("There was a problem when fetching the data: ", error);
          });
        }
        function getFeatures(geographies, parseGeographies) {
          var isTopojson = geographies.type === "Topology";
          if (!isTopojson) {
            return parseGeographies ? parseGeographies(geographies.features || geographies) : geographies.features || geographies;
          }
          var feats = feature(geographies, geographies.objects[Object.keys(geographies.objects)[0]]).features;
          return parseGeographies ? parseGeographies(feats) : feats;
        }
        function getMesh(geographies) {
          var isTopojson = geographies.type === "Topology";
          if (!isTopojson) return null;
          var outline = mesh(geographies, geographies.objects[Object.keys(geographies.objects)[0]], function (a, b) {
            return a === b;
          });
          var borders = mesh(geographies, geographies.objects[Object.keys(geographies.objects)[0]], function (a, b) {
            return a !== b;
          });
          return {
            outline: outline,
            borders: borders
          };
        }
        function prepareMesh(outline, borders, path) {
          return outline && borders ? {
            outline: _objectSpread2(_objectSpread2({}, outline), {}, {
              rsmKey: "outline",
              svgPath: path(outline)
            }),
            borders: _objectSpread2(_objectSpread2({}, borders), {}, {
              rsmKey: "borders",
              svgPath: path(borders)
            })
          } : {};
        }
        function prepareFeatures(geographies, path) {
          return geographies ? geographies.map(function (d, i) {
            return _objectSpread2(_objectSpread2({}, d), {}, {
              rsmKey: "geo-".concat(i),
              svgPath: path(d)
            });
          }) : [];
        }
        function createConnectorPath() {
          var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
          var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
          var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
          var curvature = Array.isArray(curve) ? curve : [curve, curve];
          var curveX = dx / 2 * curvature[0];
          var curveY = dy / 2 * curvature[1];
          return "M".concat(0, ",", 0, " Q", -dx / 2 - curveX, ",").concat(-dy / 2 + curveY, " ").concat(-dx, ",").concat(-dy);
        }
        function isString(geo) {
          return typeof geo === "string";
        }
        function useGeographies(_ref) {
          var geography = _ref.geography,
            parseGeographies = _ref.parseGeographies;
          var _useContext = reactExports.useContext(MapContext),
            path = _useContext.path;
          var _useState = reactExports.useState({}),
            _useState2 = _slicedToArray(_useState, 2),
            output = _useState2[0],
            setOutput = _useState2[1];
          reactExports.useEffect(function () {
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "undefined") return;
            if (!geography) return;
            if (isString(geography)) {
              fetchGeographies(geography).then(function (geos) {
                if (geos) {
                  setOutput({
                    geographies: getFeatures(geos, parseGeographies),
                    mesh: getMesh(geos)
                  });
                }
              });
            } else {
              setOutput({
                geographies: getFeatures(geography, parseGeographies),
                mesh: getMesh(geography)
              });
            }
          }, [geography, parseGeographies]);
          var _useMemo = reactExports.useMemo(function () {
              var mesh = output.mesh || {};
              var preparedMesh = prepareMesh(mesh.outline, mesh.borders, path);
              return {
                geographies: prepareFeatures(output.geographies, path),
                outline: preparedMesh.outline,
                borders: preparedMesh.borders
              };
            }, [output, path]),
            geographies = _useMemo.geographies,
            outline = _useMemo.outline,
            borders = _useMemo.borders;
          return {
            geographies: geographies,
            outline: outline,
            borders: borders
          };
        }
        var _excluded$8 = ["geography", "children", "parseGeographies", "className"];
        var Geographies = reactExports.forwardRef(function (_ref, ref) {
          var geography = _ref.geography,
            children = _ref.children,
            parseGeographies = _ref.parseGeographies,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$8);
          var _useContext = reactExports.useContext(MapContext),
            path = _useContext.path,
            projection = _useContext.projection;
          var _useGeographies = useGeographies({
              geography: geography,
              parseGeographies: parseGeographies
            }),
            geographies = _useGeographies.geographies,
            outline = _useGeographies.outline,
            borders = _useGeographies.borders;
          return /*#__PURE__*/React.createElement("g", _extends({
            ref: ref,
            className: "rsm-geographies ".concat(className)
          }, restProps), geographies && geographies.length > 0 && children({
            geographies: geographies,
            outline: outline,
            borders: borders,
            path: path,
            projection: projection
          }));
        });
        Geographies.displayName = "Geographies";
        Geographies.propTypes = {
          geography: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
          children: PropTypes.func,
          parseGeographies: PropTypes.func,
          className: PropTypes.string
        };
        var _excluded$7 = ["geography", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"];
        var Geography = reactExports.forwardRef(function (_ref, ref) {
          var geography = _ref.geography,
            onMouseEnter = _ref.onMouseEnter,
            onMouseLeave = _ref.onMouseLeave,
            onMouseDown = _ref.onMouseDown,
            onMouseUp = _ref.onMouseUp,
            onFocus = _ref.onFocus,
            onBlur = _ref.onBlur,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$7);
          var _useState = reactExports.useState(false),
            _useState2 = _slicedToArray(_useState, 2),
            isPressed = _useState2[0],
            setPressed = _useState2[1];
          var _useState3 = reactExports.useState(false),
            _useState4 = _slicedToArray(_useState3, 2),
            isFocused = _useState4[0],
            setFocus = _useState4[1];
          function handleMouseEnter(evt) {
            setFocus(true);
            if (onMouseEnter) onMouseEnter(evt);
          }
          function handleMouseLeave(evt) {
            setFocus(false);
            if (isPressed) setPressed(false);
            if (onMouseLeave) onMouseLeave(evt);
          }
          function handleFocus(evt) {
            setFocus(true);
            if (onFocus) onFocus(evt);
          }
          function handleBlur(evt) {
            setFocus(false);
            if (isPressed) setPressed(false);
            if (onBlur) onBlur(evt);
          }
          function handleMouseDown(evt) {
            setPressed(true);
            if (onMouseDown) onMouseDown(evt);
          }
          function handleMouseUp(evt) {
            setPressed(false);
            if (onMouseUp) onMouseUp(evt);
          }
          return /*#__PURE__*/React.createElement("path", _extends({
            ref: ref,
            tabIndex: "0",
            className: "rsm-geography ".concat(className),
            d: geography.svgPath,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            style: style[isPressed || isFocused ? isPressed ? "pressed" : "hover" : "default"]
          }, restProps));
        });
        Geography.displayName = "Geography";
        Geography.propTypes = {
          geography: PropTypes.object,
          onMouseEnter: PropTypes.func,
          onMouseLeave: PropTypes.func,
          onMouseDown: PropTypes.func,
          onMouseUp: PropTypes.func,
          onFocus: PropTypes.func,
          onBlur: PropTypes.func,
          style: PropTypes.object,
          className: PropTypes.string
        };
        var Geography$1 = reactExports.memo(Geography);
        var _excluded$6 = ["fill", "stroke", "step", "className"];
        var Graticule = reactExports.forwardRef(function (_ref, ref) {
          var _ref$fill = _ref.fill,
            fill = _ref$fill === void 0 ? "transparent" : _ref$fill,
            _ref$stroke = _ref.stroke,
            stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke,
            _ref$step = _ref.step,
            step = _ref$step === void 0 ? [10, 10] : _ref$step,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$6);
          var _useContext = reactExports.useContext(MapContext),
            path = _useContext.path;
          return /*#__PURE__*/React.createElement("path", _extends({
            ref: ref,
            d: path(graticule().step(step)()),
            fill: fill,
            stroke: stroke,
            className: "rsm-graticule ".concat(className)
          }, restProps));
        });
        Graticule.displayName = "Graticule";
        Graticule.propTypes = {
          fill: PropTypes.string,
          stroke: PropTypes.string,
          step: PropTypes.array,
          className: PropTypes.string
        };
        reactExports.memo(Graticule);
        var _excluded$5 = ["value"];
        var ZoomPanContext = reactExports.createContext();
        var defaultValue = {
          x: 0,
          y: 0,
          k: 1,
          transformString: "translate(0 0) scale(1)"
        };
        var ZoomPanProvider = function ZoomPanProvider(_ref) {
          var _ref$value = _ref.value,
            value = _ref$value === void 0 ? defaultValue : _ref$value,
            restProps = _objectWithoutProperties(_ref, _excluded$5);
          return /*#__PURE__*/React.createElement(ZoomPanContext.Provider, _extends({
            value: value
          }, restProps));
        };
        ZoomPanProvider.propTypes = {
          x: PropTypes.number,
          y: PropTypes.number,
          k: PropTypes.number,
          transformString: PropTypes.string
        };
        function useZoomPan(_ref) {
          var center = _ref.center,
            filterZoomEvent = _ref.filterZoomEvent,
            onMoveStart = _ref.onMoveStart,
            onMoveEnd = _ref.onMoveEnd,
            onMove = _ref.onMove,
            _ref$translateExtent = _ref.translateExtent,
            translateExtent = _ref$translateExtent === void 0 ? [[-Infinity, -Infinity], [Infinity, Infinity]] : _ref$translateExtent,
            _ref$scaleExtent = _ref.scaleExtent,
            scaleExtent = _ref$scaleExtent === void 0 ? [1, 8] : _ref$scaleExtent,
            _ref$zoom = _ref.zoom,
            zoom$1 = _ref$zoom === void 0 ? 1 : _ref$zoom;
          var _useContext = reactExports.useContext(MapContext),
            width = _useContext.width,
            height = _useContext.height,
            projection = _useContext.projection;
          var _center = _slicedToArray(center, 2),
            lon = _center[0],
            lat = _center[1];
          var _useState = reactExports.useState({
              x: 0,
              y: 0,
              k: 1
            }),
            _useState2 = _slicedToArray(_useState, 2),
            position = _useState2[0],
            setPosition = _useState2[1];
          var lastPosition = reactExports.useRef({
            x: 0,
            y: 0,
            k: 1
          });
          var mapRef = reactExports.useRef();
          var zoomRef = reactExports.useRef();
          var bypassEvents = reactExports.useRef(false);
          var _translateExtent = _slicedToArray(translateExtent, 2),
            a = _translateExtent[0],
            b = _translateExtent[1];
          var _a = _slicedToArray(a, 2),
            a1 = _a[0],
            a2 = _a[1];
          var _b = _slicedToArray(b, 2),
            b1 = _b[0],
            b2 = _b[1];
          var _scaleExtent = _slicedToArray(scaleExtent, 2),
            minZoom = _scaleExtent[0],
            maxZoom = _scaleExtent[1];
          reactExports.useEffect(function () {
            var svg = select(mapRef.current);
            function handleZoomStart(d3Event) {
              if (!onMoveStart || bypassEvents.current) return;
              onMoveStart({
                coordinates: projection.invert(getCoords(width, height, d3Event.transform)),
                zoom: d3Event.transform.k
              }, d3Event);
            }
            function handleZoom(d3Event) {
              if (bypassEvents.current) return;
              var transform = d3Event.transform,
                sourceEvent = d3Event.sourceEvent;
              setPosition({
                x: transform.x,
                y: transform.y,
                k: transform.k,
                dragging: sourceEvent
              });
              if (!onMove) return;
              onMove({
                x: transform.x,
                y: transform.y,
                zoom: transform.k,
                dragging: sourceEvent
              }, d3Event);
            }
            function handleZoomEnd(d3Event) {
              if (bypassEvents.current) {
                bypassEvents.current = false;
                return;
              }
              var _projection$invert = projection.invert(getCoords(width, height, d3Event.transform)),
                _projection$invert2 = _slicedToArray(_projection$invert, 2),
                x = _projection$invert2[0],
                y = _projection$invert2[1];
              lastPosition.current = {
                x: x,
                y: y,
                k: d3Event.transform.k
              };
              if (!onMoveEnd) return;
              onMoveEnd({
                coordinates: [x, y],
                zoom: d3Event.transform.k
              }, d3Event);
            }
            function filterFunc(d3Event) {
              if (filterZoomEvent) {
                return filterZoomEvent(d3Event);
              }
              return d3Event ? !d3Event.ctrlKey && !d3Event.button : false;
            }
            var zoom$1 = zoom().filter(filterFunc).scaleExtent([minZoom, maxZoom]).translateExtent([[a1, a2], [b1, b2]]).on("start", handleZoomStart).on("zoom", handleZoom).on("end", handleZoomEnd);
            zoomRef.current = zoom$1;
            svg.call(zoom$1);
          }, [width, height, a1, a2, b1, b2, minZoom, maxZoom, projection, onMoveStart, onMove, onMoveEnd, filterZoomEvent]);
          reactExports.useEffect(function () {
            if (lon === lastPosition.current.x && lat === lastPosition.current.y && zoom$1 === lastPosition.current.k) return;
            var coords = projection([lon, lat]);
            var x = coords[0] * zoom$1;
            var y = coords[1] * zoom$1;
            var svg = select(mapRef.current);
            bypassEvents.current = true;
            svg.call(zoomRef.current.transform, identity.translate(width / 2 - x, height / 2 - y).scale(zoom$1));
            setPosition({
              x: width / 2 - x,
              y: height / 2 - y,
              k: zoom$1
            });
            lastPosition.current = {
              x: lon,
              y: lat,
              k: zoom$1
            };
          }, [lon, lat, zoom$1, width, height, projection]);
          return {
            mapRef: mapRef,
            position: position,
            transformString: "translate(".concat(position.x, " ").concat(position.y, ") scale(").concat(position.k, ")")
          };
        }
        var _excluded$4 = ["center", "zoom", "minZoom", "maxZoom", "translateExtent", "filterZoomEvent", "onMoveStart", "onMove", "onMoveEnd", "className"];
        var ZoomableGroup = reactExports.forwardRef(function (_ref, ref) {
          var _ref$center = _ref.center,
            center = _ref$center === void 0 ? [0, 0] : _ref$center,
            _ref$zoom = _ref.zoom,
            zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
            _ref$minZoom = _ref.minZoom,
            minZoom = _ref$minZoom === void 0 ? 1 : _ref$minZoom,
            _ref$maxZoom = _ref.maxZoom,
            maxZoom = _ref$maxZoom === void 0 ? 8 : _ref$maxZoom,
            translateExtent = _ref.translateExtent,
            filterZoomEvent = _ref.filterZoomEvent,
            onMoveStart = _ref.onMoveStart,
            onMove = _ref.onMove,
            onMoveEnd = _ref.onMoveEnd,
            className = _ref.className,
            restProps = _objectWithoutProperties(_ref, _excluded$4);
          var _useContext = reactExports.useContext(MapContext),
            width = _useContext.width,
            height = _useContext.height;
          var _useZoomPan = useZoomPan({
              center: center,
              filterZoomEvent: filterZoomEvent,
              onMoveStart: onMoveStart,
              onMove: onMove,
              onMoveEnd: onMoveEnd,
              scaleExtent: [minZoom, maxZoom],
              translateExtent: translateExtent,
              zoom: zoom
            }),
            mapRef = _useZoomPan.mapRef,
            transformString = _useZoomPan.transformString,
            position = _useZoomPan.position;
          return /*#__PURE__*/React.createElement(ZoomPanProvider, {
            value: {
              x: position.x,
              y: position.y,
              k: position.k,
              transformString: transformString
            }
          }, /*#__PURE__*/React.createElement("g", {
            ref: mapRef
          }, /*#__PURE__*/React.createElement("rect", {
            width: width,
            height: height,
            fill: "transparent"
          }), /*#__PURE__*/React.createElement("g", _extends({
            ref: ref,
            transform: transformString,
            className: "rsm-zoomable-group ".concat(className)
          }, restProps))));
        });
        ZoomableGroup.displayName = "ZoomableGroup";
        ZoomableGroup.propTypes = {
          center: PropTypes.array,
          zoom: PropTypes.number,
          minZoom: PropTypes.number,
          maxZoom: PropTypes.number,
          translateExtent: PropTypes.arrayOf(PropTypes.array),
          onMoveStart: PropTypes.func,
          onMove: PropTypes.func,
          onMoveEnd: PropTypes.func,
          className: PropTypes.string
        };
        var _excluded$3 = ["id", "fill", "stroke", "strokeWidth", "className"];
        var Sphere = reactExports.forwardRef(function (_ref, ref) {
          var _ref$id = _ref.id,
            id = _ref$id === void 0 ? "rsm-sphere" : _ref$id,
            _ref$fill = _ref.fill,
            fill = _ref$fill === void 0 ? "transparent" : _ref$fill,
            _ref$stroke = _ref.stroke,
            stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke,
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === void 0 ? 0.5 : _ref$strokeWidth,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$3);
          var _useContext = reactExports.useContext(MapContext),
            path = _useContext.path;
          var spherePath = reactExports.useMemo(function () {
            return path({
              type: "Sphere"
            });
          }, [path]);
          return /*#__PURE__*/React.createElement(reactExports.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
            id: id
          }, /*#__PURE__*/React.createElement("path", {
            d: spherePath
          }))), /*#__PURE__*/React.createElement("path", _extends({
            ref: ref,
            d: spherePath,
            fill: fill,
            stroke: stroke,
            strokeWidth: strokeWidth,
            style: {
              pointerEvents: "none"
            },
            className: "rsm-sphere ".concat(className)
          }, restProps)));
        });
        Sphere.displayName = "Sphere";
        Sphere.propTypes = {
          id: PropTypes.string,
          fill: PropTypes.string,
          stroke: PropTypes.string,
          strokeWidth: PropTypes.number,
          className: PropTypes.string
        };
        reactExports.memo(Sphere);
        var _excluded$2 = ["coordinates", "children", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"];
        var Marker = reactExports.forwardRef(function (_ref, ref) {
          var coordinates = _ref.coordinates,
            children = _ref.children,
            onMouseEnter = _ref.onMouseEnter,
            onMouseLeave = _ref.onMouseLeave,
            onMouseDown = _ref.onMouseDown,
            onMouseUp = _ref.onMouseUp,
            onFocus = _ref.onFocus,
            onBlur = _ref.onBlur,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$2);
          var _useContext = reactExports.useContext(MapContext),
            projection = _useContext.projection;
          var _useState = reactExports.useState(false),
            _useState2 = _slicedToArray(_useState, 2),
            isPressed = _useState2[0],
            setPressed = _useState2[1];
          var _useState3 = reactExports.useState(false),
            _useState4 = _slicedToArray(_useState3, 2),
            isFocused = _useState4[0],
            setFocus = _useState4[1];
          var _projection = projection(coordinates),
            _projection2 = _slicedToArray(_projection, 2),
            x = _projection2[0],
            y = _projection2[1];
          function handleMouseEnter(evt) {
            setFocus(true);
            if (onMouseEnter) onMouseEnter(evt);
          }
          function handleMouseLeave(evt) {
            setFocus(false);
            if (isPressed) setPressed(false);
            if (onMouseLeave) onMouseLeave(evt);
          }
          function handleFocus(evt) {
            setFocus(true);
            if (onFocus) onFocus(evt);
          }
          function handleBlur(evt) {
            setFocus(false);
            if (isPressed) setPressed(false);
            if (onBlur) onBlur(evt);
          }
          function handleMouseDown(evt) {
            setPressed(true);
            if (onMouseDown) onMouseDown(evt);
          }
          function handleMouseUp(evt) {
            setPressed(false);
            if (onMouseUp) onMouseUp(evt);
          }
          return /*#__PURE__*/React.createElement("g", _extends({
            ref: ref,
            transform: "translate(".concat(x, ", ").concat(y, ")"),
            className: "rsm-marker ".concat(className),
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            style: style[isPressed || isFocused ? isPressed ? "pressed" : "hover" : "default"]
          }, restProps), children);
        });
        Marker.displayName = "Marker";
        Marker.propTypes = {
          coordinates: PropTypes.array,
          children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
          onMouseEnter: PropTypes.func,
          onMouseLeave: PropTypes.func,
          onMouseDown: PropTypes.func,
          onMouseUp: PropTypes.func,
          onFocus: PropTypes.func,
          onBlur: PropTypes.func,
          style: PropTypes.object,
          className: PropTypes.string
        };
        var _excluded$1 = ["from", "to", "coordinates", "stroke", "strokeWidth", "fill", "className"];
        var Line = reactExports.forwardRef(function (_ref, ref) {
          var _ref$from = _ref.from,
            from = _ref$from === void 0 ? [0, 0] : _ref$from,
            _ref$to = _ref.to,
            to = _ref$to === void 0 ? [0, 0] : _ref$to,
            coordinates = _ref.coordinates,
            _ref$stroke = _ref.stroke,
            stroke = _ref$stroke === void 0 ? "currentcolor" : _ref$stroke,
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === void 0 ? 3 : _ref$strokeWidth,
            _ref$fill = _ref.fill,
            fill = _ref$fill === void 0 ? "transparent" : _ref$fill,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded$1);
          var _useContext = reactExports.useContext(MapContext),
            path = _useContext.path;
          var lineData = {
            type: "LineString",
            coordinates: coordinates || [from, to]
          };
          return /*#__PURE__*/React.createElement("path", _extends({
            ref: ref,
            d: path(lineData),
            className: "rsm-line ".concat(className),
            stroke: stroke,
            strokeWidth: strokeWidth,
            fill: fill
          }, restProps));
        });
        Line.displayName = "Line";
        Line.propTypes = {
          from: PropTypes.array,
          to: PropTypes.array,
          coordinates: PropTypes.array,
          stroke: PropTypes.string,
          strokeWidth: PropTypes.number,
          fill: PropTypes.string,
          className: PropTypes.string
        };
        var _excluded = ["subject", "children", "connectorProps", "dx", "dy", "curve", "className"];
        var Annotation = reactExports.forwardRef(function (_ref, ref) {
          var subject = _ref.subject,
            children = _ref.children,
            connectorProps = _ref.connectorProps,
            _ref$dx = _ref.dx,
            dx = _ref$dx === void 0 ? 30 : _ref$dx,
            _ref$dy = _ref.dy,
            dy = _ref$dy === void 0 ? 30 : _ref$dy,
            _ref$curve = _ref.curve,
            curve = _ref$curve === void 0 ? 0 : _ref$curve,
            _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            restProps = _objectWithoutProperties(_ref, _excluded);
          var _useContext = reactExports.useContext(MapContext),
            projection = _useContext.projection;
          var _projection = projection(subject),
            _projection2 = _slicedToArray(_projection, 2),
            x = _projection2[0],
            y = _projection2[1];
          var connectorPath = createConnectorPath(dx, dy, curve);
          return /*#__PURE__*/React.createElement("g", _extends({
            ref: ref,
            transform: "translate(".concat(x + dx, ", ").concat(y + dy, ")"),
            className: "rsm-annotation ".concat(className)
          }, restProps), /*#__PURE__*/React.createElement("path", _extends({
            d: connectorPath,
            fill: "transparent",
            stroke: "#000"
          }, connectorProps)), children);
        });
        Annotation.displayName = "Annotation";
        Annotation.propTypes = {
          subject: PropTypes.array,
          children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
          dx: PropTypes.number,
          dy: PropTypes.number,
          curve: PropTypes.number,
          connectorProps: PropTypes.object,
          className: PropTypes.string
        };
        var geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
        var countryTreatyData = {
          "United States of America": {
            count: 45,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقية فيينا للعلاقات الدبلوماسية", "معاهدة عدم انتشار الأسلحة النووية"]
          },
          "Russia": {
            count: 52,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقيات جنيف الأربع", "معاهدة عدم انتشار الأسلحة النووية"]
          },
          "China": {
            count: 48,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقية حقوق الطفل", "اتفاقية فيينا لقانون المعاهدات"]
          },
          "France": {
            count: 58,
            treaties: ["ميثاق الأمم المتحدة", "الإعلان العالمي لحقوق الإنسان", "اتفاقية باريس للمناخ"]
          },
          "United Kingdom": {
            count: 55,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقيات جنيف الأربع", "الاتفاقية الأوروبية لحقوق الإنسان"]
          },
          "Germany": {
            count: 54,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقية اللاجئين 1951", "معاهدة روما للمحكمة الجنائية الدولية"]
          },
          "Japan": {
            count: 42,
            treaties: ["ميثاق الأمم المتحدة", "معاهدة عدم انتشار الأسلحة النووية", "اتفاقية كيوتو"]
          },
          "Brazil": {
            count: 38,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقية التنوع البيولوجي", "اتفاقية باريس للمناخ"]
          },
          "India": {
            count: 35,
            treaties: ["ميثاق الأمم المتحدة", "اتفاقية حقوق الطفل", "اتفاقية القضاء على التمييز ضد المرأة"]
          },
          "South Africa": {
            count: 40,
            treaties: ["ميثاق الأمم المتحدة", "معاهدة روما للمحكمة الجنائية الدولية", "اتفاقية مناهضة التعذيب"]
          },
          "Egypt": {
            count: 32,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقيات جنيف الأربع"]
          },
          "Saudi Arabia": {
            count: 28,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية حقوق الطفل"]
          },
          "Jordan": {
            count: 30,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية اللاجئين 1951"]
          },
          "Palestine": {
            count: 15,
            treaties: ["معاهدة روما للمحكمة الجنائية الدولية", "اتفاقيات جنيف الأربع"]
          },
          "Lebanon": {
            count: 25,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية حقوق الطفل"]
          },
          "Syria": {
            count: 22,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقيات جنيف الأربع"]
          },
          "Iraq": {
            count: 24,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية مناهضة التعذيب"]
          },
          "Morocco": {
            count: 35,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية القضاء على التمييز ضد المرأة"]
          },
          "Algeria": {
            count: 33,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية حقوق الطفل"]
          },
          "Tunisia": {
            count: 36,
            treaties: ["ميثاق الأمم المتحدة", "ميثاق جامعة الدول العربية", "اتفاقية مناهضة التعذيب"]
          }
        };
        var getCountryColor = function getCountryColor(countryName, colorMode) {
          var data = countryTreatyData[countryName];
          if (!data) return colorMode === "dark" ? "#2D3748" : "#E2E8F0";
          var count = data.count;
          if (count >= 50) return "#22543D";
          if (count >= 40) return "#38A169";
          if (count >= 30) return "#68D391";
          if (count >= 20) return "#F6E05E";
          if (count >= 10) return "#ED8936";
          return "#FC8181";
        };
        function WorldMapPage() {
          var _selectedCountry$trea;
          var _reactExports$useStat = reactExports.useState(null),
            _reactExports$useStat2 = _slicedToArray2(_reactExports$useStat, 2),
            selectedCountry = _reactExports$useStat2[0],
            setSelectedCountry = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray2(_reactExports$useStat3, 2),
            isModalOpen = _reactExports$useStat4[0],
            setIsModalOpen = _reactExports$useStat4[1];
          var bgColor = useColorModeValue("white", "gray.800");
          var borderColor = useColorModeValue("gray.200", "gray.600");
          var colorMode = useColorModeValue("light", "dark");
          var handleCountryClick = function handleCountryClick(geo) {
            var countryName = geo.properties.name;
            if (countryTreatyData[countryName]) {
              setSelectedCountry(_objectSpread({
                name: countryName
              }, countryTreatyData[countryName]));
              setIsModalOpen(true);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            p: 4,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
              spacing: 4,
              align: "stretch",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heading, {
                size: "lg",
                textAlign: "center",
                children: "🗺️ خريطة الالتزام بالقانون الدولي"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                textAlign: "center",
                color: "gray.500",
                children: "اضغط على أي دولة لمشاهدة الاتفاقيات الموقعة عليها"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                justify: "center",
                wrap: "wrap",
                spacing: 4,
                mb: 4,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                  colorScheme: "green",
                  px: 3,
                  py: 1,
                  children: "50+ اتفاقية"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                  colorScheme: "teal",
                  px: 3,
                  py: 1,
                  children: "40-49"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                  colorScheme: "yellow",
                  px: 3,
                  py: 1,
                  children: "20-39"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                  colorScheme: "orange",
                  px: 3,
                  py: 1,
                  children: "10-19"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                  colorScheme: "red",
                  px: 3,
                  py: 1,
                  children: "أقل من 10"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                bg: bgColor,
                borderRadius: "xl",
                border: "1px",
                borderColor: borderColor,
                overflow: "hidden",
                height: "500px",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(ComposableMap, {
                  projectionConfig: {
                    scale: 150
                  },
                  style: {
                    width: "100%",
                    height: "100%"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(ZoomableGroup, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Geographies, {
                      geography: geoUrl,
                      children: function children(_ref14) {
                        var geographies = _ref14.geographies;
                        return geographies.map(function (geo) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(Geography$1, {
                            geography: geo,
                            onClick: function onClick() {
                              return handleCountryClick(geo);
                            },
                            style: {
                              default: {
                                fill: getCountryColor(geo.properties.name, colorMode),
                                stroke: "#FFF",
                                strokeWidth: 0.5,
                                outline: "none"
                              },
                              hover: {
                                fill: "#3182CE",
                                stroke: "#FFF",
                                strokeWidth: 1,
                                outline: "none",
                                cursor: "pointer"
                              },
                              pressed: {
                                fill: "#2B6CB0",
                                stroke: "#FFF",
                                strokeWidth: 1,
                                outline: "none"
                              }
                            }
                          }, geo.rsmKey);
                        });
                      }
                    })
                  })
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Modal, {
              isOpen: isModalOpen,
              onClose: function onClose() {
                return setIsModalOpen(false);
              },
              size: "lg",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ModalOverlay, {
                backdropFilter: "blur(4px)"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(ModalContent, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(ModalHeader, {
                  children: ["🏳️ ", selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.name]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(ModalCloseButton, {}), /* @__PURE__ */jsxRuntimeExports.jsx(ModalBody, {
                  pb: 6,
                  children: selectedCountry && /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
                    align: "stretch",
                    spacing: 4,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stat, {
                      textAlign: "center",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(StatLabel, {
                        children: "عدد الاتفاقيات الموقعة"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(StatNumber, {
                        color: "brand.500",
                        fontSize: "4xl",
                        children: selectedCountry.count
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                        fontWeight: "bold",
                        mb: 2,
                        children: "أهم الاتفاقيات:"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(List, {
                        spacing: 2,
                        children: (_selectedCountry$trea = selectedCountry.treaties) === null || _selectedCountry$trea === void 0 ? void 0 : _selectedCountry$trea.map(function (treaty, i) {
                          return /* @__PURE__ */jsxRuntimeExports.jsxs(ListItem, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(ListIcon, {
                              as: function as() {
                                return /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                  children: "📄"
                                });
                              },
                              color: "green.500"
                            }), treaty]
                          }, i);
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                      colorScheme: "brand",
                      leftIcon: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "🔗"
                      }),
                      children: "عرض جميع الاتفاقيات"
                    })]
                  })
                })]
              })]
            })]
          });
        }
        var WorldMapPage_default = exports("default", reactExports.memo(WorldMapPage));
      }
    };
  });
})();
//# sourceMappingURL=WorldMapPage-legacy-kTYvwtp2.js.map
