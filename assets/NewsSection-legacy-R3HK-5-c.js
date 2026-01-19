;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var _excluded = ["className", "justify"],
    _excluded2 = ["htmlWidth", "htmlHeight", "alt"],
    _excluded3 = ["fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin", "fallbackStrategy", "referrerPolicy"],
    _excluded4 = ["startColor", "endColor", "isLoaded", "fadeDuration", "speed", "className", "fitContent", "animation"],
    _excluded5 = ["noOfLines", "spacing", "skeletonHeight", "className", "startColor", "endColor", "isLoaded", "fadeDuration", "speed", "variant", "size", "colorScheme", "children"];
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  System.register(['./index-legacy-Wqg3_ahz.js'], function (exports, module) {
    'use strict';

    var reactExports, forwardRef, useCardStyles, jsxRuntimeExports, chakra, cx, useImage, omit, shouldShowFallbackImage, useEnvironment, useTheme, isObject, breakpoints, arrayToObjectNotation, useStyleConfig, omitThemingProps, useToken, cssVar, keyframes, useColorModeValue, Box, VStack, HStack, Heading, Text, Select, IconButton, SimpleGrid, Card, CardBody, Badge, Button, Link;
    return {
      setters: [function (module) {
        reactExports = module.r;
        forwardRef = module.f;
        useCardStyles = module.D;
        jsxRuntimeExports = module.j;
        chakra = module.b;
        cx = module.d;
        useImage = module.W;
        omit = module.X;
        shouldShowFallbackImage = module.Y;
        useEnvironment = module.Z;
        useTheme = module._;
        isObject = module.$;
        breakpoints = module.a0;
        arrayToObjectNotation = module.a1;
        useStyleConfig = module.a2;
        omitThemingProps = module.o;
        useToken = module.a3;
        cssVar = module.a4;
        keyframes = module.E;
        useColorModeValue = module.k;
        Box = module.B;
        VStack = module.V;
        HStack = module.n;
        Heading = module.H;
        Text = module.l;
        Select = module.J;
        IconButton = module.a5;
        SimpleGrid = module.F;
        Card = module.G;
        CardBody = module.K;
        Badge = module.p;
        Button = module.C;
        Link = module.a6;
      }],
      execute: function execute() {
        exports("default", NewsSection);
        function usePrevious(value) {
          var ref = reactExports.useRef(void 0);
          reactExports.useEffect(function () {
            ref.current = value;
          }, [value]);
          return ref.current;
        }
        var CardFooter = forwardRef(function CardFooter2(props, ref) {
          var className = props.className,
            justify = props.justify,
            rest = _objectWithoutProperties(props, _excluded);
          var styles = useCardStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread({
            ref: ref,
            className: cx("chakra-card__footer", className),
            __css: _objectSpread({
              display: "flex",
              justifyContent: justify
            }, styles.footer)
          }, rest));
        });
        var NativeImage = forwardRef(function NativeImage2(props, ref) {
          var htmlWidth = props.htmlWidth,
            htmlHeight = props.htmlHeight,
            alt = props.alt,
            rest = _objectWithoutProperties(props, _excluded2);
          return /* @__PURE__ */jsxRuntimeExports.jsx("img", _objectSpread({
            width: htmlWidth,
            height: htmlHeight,
            ref: ref,
            alt: alt
          }, rest));
        });
        NativeImage.displayName = "NativeImage";
        var Image = forwardRef(function Image2(props, ref) {
          var fallbackSrc = props.fallbackSrc,
            fallback = props.fallback,
            src = props.src,
            srcSet = props.srcSet,
            align = props.align,
            fit = props.fit,
            loading = props.loading,
            ignoreFallback = props.ignoreFallback,
            crossOrigin = props.crossOrigin,
            _props$fallbackStrate = props.fallbackStrategy,
            fallbackStrategy = _props$fallbackStrate === void 0 ? "beforeLoadOrError" : _props$fallbackStrate,
            referrerPolicy = props.referrerPolicy,
            rest = _objectWithoutProperties(props, _excluded3);
          var providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
          var shouldIgnoreFallbackImage = loading != null ||
          // use can opt out of fallback image
          ignoreFallback ||
          // if the user doesn't provide any kind of fallback we should ignore it
          !providedFallback;
          var status = useImage(_objectSpread(_objectSpread({}, props), {}, {
            crossOrigin: crossOrigin,
            ignoreFallback: shouldIgnoreFallbackImage
          }));
          var showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
          var shared = _objectSpread({
            ref: ref,
            objectFit: fit,
            objectPosition: align
          }, shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"]));
          if (showFallbackImage) {
            if (fallback) return fallback;
            return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.img, _objectSpread({
              as: NativeImage,
              className: "chakra-image__placeholder",
              src: fallbackSrc
            }, shared));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.img, _objectSpread({
            as: NativeImage,
            src: src,
            srcSet: srcSet,
            crossOrigin: crossOrigin,
            loading: loading,
            referrerPolicy: referrerPolicy,
            className: "chakra-image"
          }, shared));
        });
        Image.displayName = "Image";
        function useMediaQuery(query) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _options$ssr = options.ssr,
            ssr = _options$ssr === void 0 ? true : _options$ssr,
            fallback = options.fallback;
          var _useEnvironment = useEnvironment(),
            getWindow = _useEnvironment.getWindow;
          var queries = Array.isArray(query) ? query : [query];
          var fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
          fallbackValues = fallbackValues.filter(function (v) {
            return v != null;
          });
          var _reactExports$useStat = reactExports.useState(function () {
              return queries.map(function (query2, index) {
                return {
                  media: query2,
                  matches: ssr ? !!fallbackValues[index] : getWindow().matchMedia(query2).matches
                };
              });
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            value = _reactExports$useStat2[0],
            setValue = _reactExports$useStat2[1];
          reactExports.useEffect(function () {
            var win = getWindow();
            setValue(queries.map(function (query2) {
              return {
                media: query2,
                matches: win.matchMedia(query2).matches
              };
            }));
            var mql = queries.map(function (query2) {
              return win.matchMedia(query2);
            });
            var handler = function handler(evt) {
              setValue(function (prev) {
                return prev.slice().map(function (item) {
                  if (item.media === evt.media) return _objectSpread(_objectSpread({}, item), {}, {
                    matches: evt.matches
                  });
                  return item;
                });
              });
            };
            mql.forEach(function (mql2) {
              if (typeof mql2.addListener === "function") {
                mql2.addListener(handler);
              } else {
                mql2.addEventListener("change", handler);
              }
            });
            return function () {
              mql.forEach(function (mql2) {
                if (typeof mql2.removeListener === "function") {
                  mql2.removeListener(handler);
                } else {
                  mql2.removeEventListener("change", handler);
                }
              });
            };
          }, [getWindow]);
          return value.map(function (item) {
            return item.matches;
          });
        }
        function useBreakpoint(arg) {
          var _breakpoints$index$br, _breakpoints$index;
          var opts = isObject(arg) ? arg : {
            fallback: arg !== null && arg !== void 0 ? arg : "base"
          };
          var theme = useTheme();
          var breakpoints = theme.__breakpoints.details.map(function (_ref) {
            var minMaxQuery = _ref.minMaxQuery,
              breakpoint = _ref.breakpoint;
            return {
              breakpoint: breakpoint,
              query: minMaxQuery.replace("@media screen and ", "")
            };
          });
          var fallback = breakpoints.map(function (bp) {
            return bp.breakpoint === opts.fallback;
          });
          var values = useMediaQuery(breakpoints.map(function (bp) {
            return bp.query;
          }), {
            fallback: fallback,
            ssr: opts.ssr
          });
          var index = values.findIndex(function (value) {
            return value == true;
          });
          return (_breakpoints$index$br = (_breakpoints$index = breakpoints[index]) === null || _breakpoints$index === void 0 ? void 0 : _breakpoints$index.breakpoint) !== null && _breakpoints$index$br !== void 0 ? _breakpoints$index$br : opts.fallback;
        }
        function getClosestValue(values, breakpoint) {
          var breakpoints$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : breakpoints;
          var index = Object.keys(values).indexOf(breakpoint);
          if (index !== -1) {
            return values[breakpoint];
          }
          var stopIndex = breakpoints$1.indexOf(breakpoint);
          while (stopIndex >= 0) {
            var key = breakpoints$1[stopIndex];
            if (values.hasOwnProperty(key)) {
              index = stopIndex;
              break;
            }
            stopIndex -= 1;
          }
          if (index !== -1) {
            var _key = breakpoints$1[index];
            return values[_key];
          }
          return void 0;
        }
        function useBreakpointValue(values, arg) {
          var _theme$__breakpoints;
          var opts = isObject(arg) ? arg : {
            fallback: "base"
          };
          var breakpoint = useBreakpoint(opts);
          var theme = useTheme();
          if (!breakpoint) return;
          var breakpoints = Array.from(((_theme$__breakpoints = theme.__breakpoints) === null || _theme$__breakpoints === void 0 ? void 0 : _theme$__breakpoints.keys) || []);
          var obj = Array.isArray(values) ? Object.fromEntries(Object.entries(arrayToObjectNotation(values, breakpoints)).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
            return [key, value];
          })) : values;
          return getClosestValue(obj, breakpoint, breakpoints);
        }
        function useIsFirstRender() {
          var isFirstRender = reactExports.useRef(true);
          reactExports.useEffect(function () {
            isFirstRender.current = false;
          }, []);
          return isFirstRender.current;
        }
        var StyledSkeleton = chakra("div", {
          baseStyle: {
            boxShadow: "none",
            backgroundClip: "padding-box",
            cursor: "default",
            color: "transparent",
            pointerEvents: "none",
            userSelect: "none",
            "&::before, &::after, *": {
              visibility: "hidden"
            }
          }
        });
        var $startColor = cssVar("skeleton-start-color");
        var $endColor = cssVar("skeleton-end-color");
        var fade = keyframes({
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        });
        var bgFade = keyframes({
          from: {
            borderColor: $startColor.reference,
            background: $startColor.reference
          },
          to: {
            borderColor: $endColor.reference,
            background: $endColor.reference
          }
        });
        var Skeleton = forwardRef(function (props, ref) {
          var skeletonProps = _objectSpread(_objectSpread({}, props), {}, {
            fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
            speed: typeof props.speed === "number" ? props.speed : 0.8
          });
          var styles = useStyleConfig("Skeleton", skeletonProps);
          var isFirstRender = useIsFirstRender();
          var _omitThemingProps = omitThemingProps(skeletonProps),
            _omitThemingProps$sta = _omitThemingProps.startColor,
            startColor = _omitThemingProps$sta === void 0 ? "" : _omitThemingProps$sta,
            _omitThemingProps$end = _omitThemingProps.endColor,
            endColor = _omitThemingProps$end === void 0 ? "" : _omitThemingProps$end,
            isLoaded = _omitThemingProps.isLoaded,
            fadeDuration = _omitThemingProps.fadeDuration,
            speed = _omitThemingProps.speed,
            className = _omitThemingProps.className,
            fitContent = _omitThemingProps.fitContent,
            animationProp = _omitThemingProps.animation,
            rest = _objectWithoutProperties(_omitThemingProps, _excluded4);
          var _useToken = useToken("colors", [startColor, endColor]),
            _useToken2 = _slicedToArray(_useToken, 2),
            startColorVar = _useToken2[0],
            endColorVar = _useToken2[1];
          var wasPreviouslyLoaded = usePrevious(isLoaded);
          var _className = cx("chakra-skeleton", className);
          var cssVarStyles = _objectSpread(_objectSpread({}, startColorVar && _defineProperty({}, $startColor.variable, startColorVar)), endColorVar && _defineProperty({}, $endColor.variable, endColorVar));
          if (isLoaded) {
            var animation = isFirstRender || wasPreviouslyLoaded ? "none" : "".concat(fade, " ").concat(fadeDuration, "s");
            return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread({
              ref: ref,
              className: _className,
              __css: {
                animation: animation
              }
            }, rest));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(StyledSkeleton, _objectSpread(_objectSpread({
            ref: ref,
            className: _className
          }, rest), {}, {
            __css: _objectSpread(_objectSpread(_objectSpread({
              width: fitContent ? "fit-content" : void 0
            }, styles), cssVarStyles), {}, {
              _dark: _objectSpread(_objectSpread({}, styles["_dark"]), cssVarStyles),
              animation: animationProp || "".concat(speed, "s linear infinite alternate ").concat(bgFade)
            })
          }));
        });
        Skeleton.displayName = "Skeleton";
        function range(count) {
          return Array(count).fill(1).map(function (_, index) {
            return index + 1;
          });
        }
        var defaultNoOfLines = 3;
        var SkeletonText = function SkeletonText(props) {
          var _props$noOfLines = props.noOfLines,
            noOfLines = _props$noOfLines === void 0 ? defaultNoOfLines : _props$noOfLines,
            _props$spacing = props.spacing,
            spacing = _props$spacing === void 0 ? "0.5rem" : _props$spacing,
            _props$skeletonHeight = props.skeletonHeight,
            skeletonHeight = _props$skeletonHeight === void 0 ? "0.5rem" : _props$skeletonHeight,
            className = props.className,
            startColor = props.startColor,
            endColor = props.endColor,
            isLoaded = props.isLoaded,
            fadeDuration = props.fadeDuration,
            speed = props.speed,
            variant = props.variant,
            size = props.size,
            colorScheme = props.colorScheme,
            children = props.children,
            rest = _objectWithoutProperties(props, _excluded5);
          var noOfLinesValue = useBreakpointValue(typeof noOfLines === "number" ? [noOfLines] : noOfLines) || defaultNoOfLines;
          var numbers = range(noOfLinesValue);
          var getWidth = function getWidth(index) {
            if (noOfLinesValue > 1) {
              return index === numbers.length ? "80%" : "100%";
            }
            return "100%";
          };
          var _className = cx("chakra-skeleton__group", className);
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread(_objectSpread({
            className: _className
          }, rest), {}, {
            children: numbers.map(function (number, index) {
              if (isLoaded && index > 0) {
                return null;
              }
              var sizeProps = isLoaded ? null : {
                mb: number === numbers.length ? "0" : spacing,
                width: getWidth(number),
                height: skeletonHeight
              };
              return /* @__PURE__ */jsxRuntimeExports.jsx(Skeleton, _objectSpread(_objectSpread({
                startColor: startColor,
                endColor: endColor,
                isLoaded: isLoaded,
                fadeDuration: fadeDuration,
                speed: speed,
                variant: variant,
                size: size,
                colorScheme: colorScheme
              }, sizeProps), {}, {
                // allows animating the children
                children: index === 0 ? children : void 0
              }), numbers.length.toString() + number);
            })
          }));
        };
        SkeletonText.displayName = "SkeletonText";
        var sampleNews = [{
          id: 1,
          title: "محكمة العدل الدولية تصدر قراراً جديداً بشأن غزة",
          description: "أصدرت محكمة العدل الدولية قراراً جديداً يدعو إلى وقف فوري للأعمال العسكرية...",
          source: "الجزيرة",
          date: "2024-01-15",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
          category: "قضايا",
          url: "https://aljazeera.net"
        }, {
          id: 2,
          title: "الأمم المتحدة تعتمد قراراً جديداً حول تغير المناخ",
          description: "اعتمدت الجمعية العامة للأمم المتحدة قراراً يدعو الدول إلى تسريع جهود مكافحة التغير المناخي...",
          source: "رويترز",
          date: "2024-01-14",
          image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400",
          category: "قرارات",
          url: "https://reuters.com"
        }, {
          id: 3,
          title: "توقيع اتفاقية دولية جديدة لحماية المحيطات",
          description: "وقعت أكثر من 50 دولة على اتفاقية جديدة تهدف إلى حماية المحيطات من التلوث...",
          source: "بي بي سي",
          date: "2024-01-13",
          image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400",
          category: "اتفاقيات",
          url: "https://bbc.com"
        }, {
          id: 4,
          title: "المحكمة الجنائية الدولية تفتح تحقيقاً جديداً",
          description: "أعلن المدعي العام للمحكمة الجنائية الدولية عن فتح تحقيق جديد في جرائم حرب مزعومة...",
          source: "فرانس 24",
          date: "2024-01-12",
          image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400",
          category: "قضايا",
          url: "https://france24.com"
        }, {
          id: 5,
          title: "مجلس حقوق الإنسان يناقش أوضاع اللاجئين",
          description: "عقد مجلس حقوق الإنسان التابع للأمم المتحدة جلسة خاصة لمناقشة أوضاع اللاجئين حول العالم...",
          source: "الأمم المتحدة",
          date: "2024-01-11",
          image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400",
          category: "حقوق الإنسان",
          url: "https://un.org"
        }, {
          id: 6,
          title: "اتفاقية جديدة لمكافحة الجرائم الإلكترونية",
          description: "أقرت الأمم المتحدة اتفاقية جديدة تهدف إلى تعزيز التعاون الدولي في مكافحة الجرائم الإلكترونية...",
          source: "سكاي نيوز",
          date: "2024-01-10",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
          category: "اتفاقيات",
          url: "https://skynews.com"
        }];
        var categoryColors = {
          "قضايا": "red",
          "قرارات": "purple",
          "اتفاقيات": "blue",
          "حقوق الإنسان": "green"
        };
        function NewsSection() {
          var _reactExports$useStat3 = reactExports.useState([]),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            news = _reactExports$useStat4[0],
            setNews = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(true),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            loading = _reactExports$useStat6[0],
            setLoading = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState("الكل"),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            filter = _reactExports$useStat8[0],
            setFilter = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(/* @__PURE__ */new Date()),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            lastUpdate = _reactExports$useStat0[0],
            setLastUpdate = _reactExports$useStat0[1];
          var bgColor = useColorModeValue("white", "gray.800");
          var borderColor = useColorModeValue("gray.200", "gray.600");
          reactExports.useEffect(function () {
            loadNews();
          }, []);
          var loadNews = /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    setLoading(true);
                    _context.n = 1;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 1e3);
                    });
                  case 1:
                    setNews(sampleNews);
                    setLastUpdate(/* @__PURE__ */new Date());
                    setLoading(false);
                  case 2:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return function loadNews() {
              return _ref6.apply(this, arguments);
            };
          }();
          var filteredNews = filter === "الكل" ? news : news.filter(function (n) {
            return n.category === filter;
          });
          var categories = ["الكل"].concat(_toConsumableArray(new Set(news.map(function (n) {
            return n.category;
          }))));
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            p: 4,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
              spacing: 6,
              align: "stretch",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                justify: "space-between",
                wrap: "wrap",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
                  align: "start",
                  spacing: 0,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heading, {
                    size: "lg",
                    children: "📰 أخبار القانون الدولي"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                    color: "gray.500",
                    fontSize: "sm",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "🕒"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Text, {
                      children: ["آخر تحديث: ", lastUpdate.toLocaleTimeString("ar-EG")]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Select, {
                    value: filter,
                    onChange: function onChange(e) {
                      return setFilter(e.target.value);
                    },
                    size: "sm",
                    w: "150px",
                    children: categories.map(function (c) {
                      return /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                        value: c,
                        children: c
                      }, c);
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    icon: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "🔄"
                    }),
                    onClick: loadNews,
                    isLoading: loading,
                    "aria-label": "تحديث",
                    size: "sm"
                  })]
                })]
              }), loading ? /* @__PURE__ */jsxRuntimeExports.jsx(SimpleGrid, {
                columns: {
                  base: 1,
                  md: 2,
                  lg: 3
                },
                spacing: 4,
                children: [1, 2, 3, 4, 5, 6].map(function (i) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                    bg: bgColor,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Skeleton, {
                      height: "150px"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(SkeletonText, {
                        noOfLines: 3,
                        spacing: 2
                      })
                    })]
                  }, i);
                })
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(SimpleGrid, {
                columns: {
                  base: 1,
                  md: 2,
                  lg: 3
                },
                spacing: 4,
                children: filteredNews.map(function (item) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                    bg: bgColor,
                    borderColor: borderColor,
                    overflow: "hidden",
                    _hover: {
                      transform: "translateY(-4px)",
                      shadow: "lg"
                    },
                    transition: "all 0.2s",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                      src: item.image,
                      alt: item.title,
                      height: "150px",
                      objectFit: "cover",
                      fallbackSrc: "https://via.placeholder.com/400x150?text=أخبار"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
                        align: "start",
                        spacing: 2,
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                          justify: "space-between",
                          w: "100%",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                            colorScheme: categoryColors[item.category] || "gray",
                            children: item.category
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: item.date
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Heading, {
                          size: "sm",
                          noOfLines: 2,
                          children: item.title
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                          fontSize: "sm",
                          color: "gray.500",
                          noOfLines: 2,
                          children: item.description
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(CardFooter, {
                      pt: 0,
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                        justify: "space-between",
                        w: "100%",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                          fontSize: "xs",
                          color: "gray.400",
                          children: item.source
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                          as: Link,
                          href: item.url,
                          isExternal: true,
                          size: "xs",
                          rightIcon: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: "🔗"
                          }),
                          colorScheme: "brand",
                          variant: "ghost",
                          children: "اقرأ المزيد"
                        })]
                      })
                    })]
                  }, item.id);
                })
              }), filteredNews.length === 0 && !loading && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                textAlign: "center",
                py: 10,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                  color: "gray.500",
                  children: "لا توجد أخبار في هذه الفئة"
                })
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=NewsSection-legacy-R3HK-5-c.js.map
