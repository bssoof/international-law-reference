;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var _excluded = ["className"],
    _excluded2 = ["min", "max", "value", "isIndeterminate", "role"],
    _excluded3 = ["value", "min", "max", "hasStripe", "isAnimated", "children", "borderRadius", "isIndeterminate", "aria-label", "aria-labelledby", "aria-valuetext", "title", "role"],
    _excluded4 = ["className", "layout"],
    _excluded5 = ["isNumeric"],
    _excluded6 = ["isNumeric"];
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
  System.register(['./index-legacy-CPa8I-hb.js'], function (exports, module) {
    'use strict';

    var forwardRef, useCardStyles, jsxRuntimeExports, chakra, cx, keyframes, omitThemingProps, useMultiStyleConfig, createContext, reactExports, useColorModeValue, Box, VStack, Heading, Text, SimpleGrid, Card, HStack, Select, CardBody, Stat, StatNumber, StatLabel, Badge;
    return {
      setters: [function (module) {
        forwardRef = module.f;
        useCardStyles = module.D;
        jsxRuntimeExports = module.j;
        chakra = module.b;
        cx = module.d;
        keyframes = module.E;
        omitThemingProps = module.o;
        useMultiStyleConfig = module.u;
        createContext = module.c;
        reactExports = module.r;
        useColorModeValue = module.k;
        Box = module.B;
        VStack = module.V;
        Heading = module.H;
        Text = module.l;
        SimpleGrid = module.F;
        Card = module.G;
        HStack = module.n;
        Select = module.J;
        CardBody = module.K;
        Stat = module.S;
        StatNumber = module.z;
        StatLabel = module.y;
        Badge = module.p;
      }],
      execute: function execute() {
        exports("default", CountryCompare);
        var CardHeader = forwardRef(function CardHeader2(props, ref) {
          var className = props.className,
            rest = _objectWithoutProperties(props, _excluded);
          var styles = useCardStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread({
            ref: ref,
            className: cx("chakra-card__header", className),
            __css: styles.header
          }, rest));
        });
        function valueToPercent(value, min, max) {
          return (value - min) * 100 / (max - min);
        }
        keyframes({
          "0%": {
            strokeDasharray: "1, 400",
            strokeDashoffset: "0"
          },
          "50%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-100"
          },
          "100%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-260"
          }
        });
        keyframes({
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        });
        var progress = keyframes({
          "0%": {
            left: "-40%"
          },
          "100%": {
            left: "100%"
          }
        });
        var stripe = keyframes({
          from: {
            backgroundPosition: "1rem 0"
          },
          to: {
            backgroundPosition: "0 0"
          }
        });
        function getProgressProps(options) {
          var _options$value = options.value,
            value = _options$value === void 0 ? 0 : _options$value,
            min = options.min,
            max = options.max,
            valueText = options.valueText,
            getValueText = options.getValueText,
            isIndeterminate = options.isIndeterminate,
            _options$role = options.role,
            role = _options$role === void 0 ? "progressbar" : _options$role;
          var percent = valueToPercent(value, min, max);
          var getAriaValueText = function getAriaValueText() {
            if (value == null) return void 0;
            return typeof getValueText === "function" ? getValueText(value, percent) : valueText;
          };
          return {
            bind: {
              "data-indeterminate": isIndeterminate ? "" : void 0,
              "aria-valuemax": max,
              "aria-valuemin": min,
              "aria-valuenow": isIndeterminate ? void 0 : value,
              "aria-valuetext": getAriaValueText(),
              role: role
            },
            percent: percent,
            value: value
          };
        }
        var _createContext = createContext({
            name: "ProgressStylesContext",
            errorMessage: "useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "
          }),
          _createContext2 = _slicedToArray(_createContext, 2),
          ProgressStylesProvider = _createContext2[0],
          useProgressStyles = _createContext2[1];
        var ProgressFilledTrack = forwardRef(function (props, ref) {
          var min = props.min,
            max = props.max,
            value = props.value,
            isIndeterminate = props.isIndeterminate,
            role = props.role,
            rest = _objectWithoutProperties(props, _excluded2);
          var progress2 = getProgressProps({
            value: value,
            min: min,
            max: max,
            isIndeterminate: isIndeterminate,
            role: role
          });
          var styles = useProgressStyles();
          var trackStyles = _objectSpread({
            height: "100%"
          }, styles.filledTrack);
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread(_objectSpread(_objectSpread({
            ref: ref,
            style: _objectSpread({
              width: "".concat(progress2.percent, "%")
            }, rest.style)
          }, progress2.bind), rest), {}, {
            __css: trackStyles
          }));
        });
        var Progress = forwardRef(function (props, ref) {
          var _styles$track;
          var _omitThemingProps = omitThemingProps(props),
            value = _omitThemingProps.value,
            _omitThemingProps$min = _omitThemingProps.min,
            min = _omitThemingProps$min === void 0 ? 0 : _omitThemingProps$min,
            _omitThemingProps$max = _omitThemingProps.max,
            max = _omitThemingProps$max === void 0 ? 100 : _omitThemingProps$max,
            hasStripe = _omitThemingProps.hasStripe,
            isAnimated = _omitThemingProps.isAnimated,
            children = _omitThemingProps.children,
            propBorderRadius = _omitThemingProps.borderRadius,
            isIndeterminate = _omitThemingProps.isIndeterminate,
            ariaLabel = _omitThemingProps["aria-label"],
            ariaLabelledBy = _omitThemingProps["aria-labelledby"],
            ariaValueText = _omitThemingProps["aria-valuetext"],
            title = _omitThemingProps.title,
            role = _omitThemingProps.role,
            rest = _objectWithoutProperties(_omitThemingProps, _excluded3);
          var styles = useMultiStyleConfig("Progress", props);
          var borderRadius = propBorderRadius !== null && propBorderRadius !== void 0 ? propBorderRadius : (_styles$track = styles.track) === null || _styles$track === void 0 ? void 0 : _styles$track.borderRadius;
          var stripeAnimation = {
            animation: "".concat(stripe, " 1s linear infinite")
          };
          var shouldAddStripe = !isIndeterminate && hasStripe;
          var shouldAnimateStripe = shouldAddStripe && isAnimated;
          var css = _objectSpread(_objectSpread({}, shouldAnimateStripe && stripeAnimation), isIndeterminate && {
            position: "absolute",
            willChange: "left",
            minWidth: "50%",
            animation: "".concat(progress, " 1s ease infinite normal none running")
          });
          var trackStyles = _objectSpread({
            overflow: "hidden",
            position: "relative"
          }, styles.track);
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.div, _objectSpread(_objectSpread({
            ref: ref,
            borderRadius: borderRadius,
            __css: trackStyles
          }, rest), {}, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(ProgressStylesProvider, {
              value: styles,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ProgressFilledTrack, {
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-valuetext": ariaValueText,
                min: min,
                max: max,
                value: value,
                isIndeterminate: isIndeterminate,
                css: css,
                borderRadius: borderRadius,
                title: title,
                role: role
              }), children]
            })
          }));
        });
        Progress.displayName = "Progress";
        var _createContext3 = createContext({
            name: "TableStylesContext",
            errorMessage: "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "
          }),
          _createContext4 = _slicedToArray(_createContext3, 2),
          TableStylesProvider = _createContext4[0],
          useTableStyles = _createContext4[1];
        var Table = forwardRef(function (props, ref) {
          var styles = useMultiStyleConfig("Table", props);
          var _omitThemingProps2 = omitThemingProps(props),
            className = _omitThemingProps2.className,
            layout = _omitThemingProps2.layout,
            tableProps = _objectWithoutProperties(_omitThemingProps2, _excluded4);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableStylesProvider, {
            value: styles,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(chakra.table, _objectSpread({
              ref: ref,
              __css: _objectSpread({
                tableLayout: layout
              }, styles.table),
              className: cx("chakra-table", className)
            }, tableProps))
          });
        });
        Table.displayName = "Table";
        var Tbody = forwardRef(function (props, ref) {
          var styles = useTableStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.tbody, _objectSpread(_objectSpread({}, props), {}, {
            ref: ref,
            __css: styles.tbody
          }));
        });
        var Td = forwardRef(function (_ref, ref) {
          var isNumeric = _ref.isNumeric,
            rest = _objectWithoutProperties(_ref, _excluded5);
          var styles = useTableStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.td, _objectSpread(_objectSpread({}, rest), {}, {
            ref: ref,
            __css: styles.td,
            "data-is-numeric": isNumeric
          }));
        });
        var Th = forwardRef(function (_ref2, ref) {
          var isNumeric = _ref2.isNumeric,
            rest = _objectWithoutProperties(_ref2, _excluded6);
          var styles = useTableStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.th, _objectSpread(_objectSpread({}, rest), {}, {
            ref: ref,
            __css: styles.th,
            "data-is-numeric": isNumeric
          }));
        });
        var Thead = forwardRef(function (props, ref) {
          var styles = useTableStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.thead, _objectSpread(_objectSpread({}, props), {}, {
            ref: ref,
            __css: styles.thead
          }));
        });
        var Tr = forwardRef(function (props, ref) {
          var styles = useTableStyles();
          return /* @__PURE__ */jsxRuntimeExports.jsx(chakra.tr, _objectSpread(_objectSpread({}, props), {}, {
            ref: ref,
            __css: styles.tr
          }));
        });
        var countriesData = {
          "الأردن": {
            flag: "🇯🇴",
            treaties: 32,
            cases: 5,
            resolutions: 18,
            topics: ["حقوق الإنسان", "اللاجئين", "البيئة"]
          },
          "فلسطين": {
            flag: "🇵🇸",
            treaties: 15,
            cases: 12,
            resolutions: 45,
            topics: ["حقوق الإنسان", "القانون الإنساني", "الاحتلال"]
          },
          "لبنان": {
            flag: "🇱🇧",
            treaties: 28,
            cases: 4,
            resolutions: 12,
            topics: ["حقوق الإنسان", "اللاجئين"]
          },
          "سوريا": {
            flag: "🇸🇾",
            treaties: 22,
            cases: 8,
            resolutions: 35,
            topics: ["القانون الإنساني", "حقوق الإنسان"]
          },
          "العراق": {
            flag: "🇮🇶",
            treaties: 26,
            cases: 6,
            resolutions: 28,
            topics: ["حقوق الإنسان", "الإرهاب"]
          },
          "مصر": {
            flag: "🇪🇬",
            treaties: 38,
            cases: 3,
            resolutions: 15,
            topics: ["حقوق الإنسان", "البيئة"]
          },
          "السعودية": {
            flag: "🇸🇦",
            treaties: 25,
            cases: 2,
            resolutions: 8,
            topics: ["حقوق الإنسان"]
          },
          "الإمارات": {
            flag: "🇦🇪",
            treaties: 30,
            cases: 1,
            resolutions: 5,
            topics: ["البيئة", "التجارة"]
          },
          "المغرب": {
            flag: "🇲🇦",
            treaties: 35,
            cases: 4,
            resolutions: 10,
            topics: ["حقوق الإنسان", "البيئة"]
          },
          "تونس": {
            flag: "🇹🇳",
            treaties: 40,
            cases: 2,
            resolutions: 8,
            topics: ["حقوق الإنسان", "الديمقراطية"]
          },
          "الجزائر": {
            flag: "🇩🇿",
            treaties: 33,
            cases: 3,
            resolutions: 12,
            topics: ["حقوق الإنسان", "البيئة"]
          },
          "الولايات المتحدة": {
            flag: "🇺🇸",
            treaties: 45,
            cases: 15,
            resolutions: 120,
            topics: ["الأمن", "التجارة", "البيئة"]
          },
          "روسيا": {
            flag: "🇷🇺",
            treaties: 52,
            cases: 10,
            resolutions: 85,
            topics: ["الأمن", "نزع السلاح"]
          },
          "الصين": {
            flag: "🇨🇳",
            treaties: 48,
            cases: 5,
            resolutions: 50,
            topics: ["حقوق الإنسان", "التجارة"]
          },
          "فرنسا": {
            flag: "🇫🇷",
            treaties: 58,
            cases: 8,
            resolutions: 60,
            topics: ["حقوق الإنسان", "البيئة", "الثقافة"]
          },
          "بريطانيا": {
            flag: "🇬🇧",
            treaties: 55,
            cases: 12,
            resolutions: 75,
            topics: ["حقوق الإنسان", "الأمن"]
          },
          "ألمانيا": {
            flag: "🇩🇪",
            treaties: 54,
            cases: 6,
            resolutions: 40,
            topics: ["حقوق الإنسان", "البيئة", "اللاجئين"]
          }
        };
        function CountryCompare() {
          var _reactExports$useStat = reactExports.useState("الأردن"),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            country1 = _reactExports$useStat2[0],
            setCountry1 = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState("فلسطين"),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            country2 = _reactExports$useStat4[0],
            setCountry2 = _reactExports$useStat4[1];
          var bgColor = useColorModeValue("white", "gray.800");
          var borderColor = useColorModeValue("gray.200", "gray.600");
          var data1 = countriesData[country1];
          var data2 = countriesData[country2];
          var total1 = data1.treaties + data1.cases + data1.resolutions;
          var total2 = data2.treaties + data2.cases + data2.resolutions;
          var maxTotal = Math.max(total1, total2);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            p: 4,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
              spacing: 6,
              align: "stretch",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heading, {
                size: "lg",
                textAlign: "center",
                children: "🏳️ مقارنة الدول"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                textAlign: "center",
                color: "gray.500",
                children: "قارن بين التزام الدول المختلفة بالقانون الدولي"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(SimpleGrid, {
                columns: {
                  base: 1,
                  md: 2
                },
                spacing: 4,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                  bg: bgColor,
                  borderColor: borderColor,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardHeader, {
                    pb: 2,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                        fontSize: "3xl",
                        children: data1.flag
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Select, {
                        value: country1,
                        onChange: function onChange(e) {
                          return setCountry1(e.target.value);
                        },
                        fontWeight: "bold",
                        size: "lg",
                        children: Object.keys(countriesData).map(function (c) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: c,
                            children: c
                          }, c);
                        })
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
                      spacing: 4,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stat, {
                        textAlign: "center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(StatNumber, {
                          color: "brand.500",
                          fontSize: "3xl",
                          children: total1
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(StatLabel, {
                          children: "إجمالي الالتزامات"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Progress, {
                        value: total1 / maxTotal * 100,
                        colorScheme: "blue",
                        w: "100%",
                        borderRadius: "full"
                      })]
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                  bg: bgColor,
                  borderColor: borderColor,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardHeader, {
                    pb: 2,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                        fontSize: "3xl",
                        children: data2.flag
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Select, {
                        value: country2,
                        onChange: function onChange(e) {
                          return setCountry2(e.target.value);
                        },
                        fontWeight: "bold",
                        size: "lg",
                        children: Object.keys(countriesData).map(function (c) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: c,
                            children: c
                          }, c);
                        })
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(VStack, {
                      spacing: 4,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stat, {
                        textAlign: "center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(StatNumber, {
                          color: "green.500",
                          fontSize: "3xl",
                          children: total2
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(StatLabel, {
                          children: "إجمالي الالتزامات"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Progress, {
                        value: total2 / maxTotal * 100,
                        colorScheme: "green",
                        w: "100%",
                        borderRadius: "full"
                      })]
                    })
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                bg: bgColor,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardHeader, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Heading, {
                    size: "md",
                    children: "📊 مقارنة تفصيلية"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                    variant: "simple",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Thead, {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs(Tr, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Th, {
                          children: "المعيار"
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs(Th, {
                          isNumeric: true,
                          children: [country1, " ", data1.flag]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs(Th, {
                          isNumeric: true,
                          children: [country2, " ", data2.flag]
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Tbody, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Tr, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "📄"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "الاتفاقيات"
                            })]
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data1.treaties
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data2.treaties
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs(Tr, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "⚖️"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "القضايا"
                            })]
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data1.cases
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data2.cases
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs(Tr, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs(HStack, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "📈"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx(Text, {
                              children: "القرارات"
                            })]
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data1.resolutions
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Td, {
                          isNumeric: true,
                          fontWeight: "bold",
                          children: data2.resolutions
                        })]
                      })]
                    })]
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(SimpleGrid, {
                columns: {
                  base: 1,
                  md: 2
                },
                spacing: 4,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                  bg: bgColor,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardHeader, {
                    pb: 2,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(Heading, {
                      size: "sm",
                      children: ["مواضيع الاهتمام - ", country1]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(HStack, {
                      wrap: "wrap",
                      children: data1.topics.map(function (t, i) {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                          colorScheme: "blue",
                          px: 3,
                          py: 1,
                          borderRadius: "full",
                          children: t
                        }, i);
                      })
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                  bg: bgColor,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardHeader, {
                    pb: 2,
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(Heading, {
                      size: "sm",
                      children: ["مواضيع الاهتمام - ", country2]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(CardBody, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(HStack, {
                      wrap: "wrap",
                      children: data2.topics.map(function (t, i) {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                          colorScheme: "green",
                          px: 3,
                          py: 1,
                          borderRadius: "full",
                          children: t
                        }, i);
                      })
                    })
                  })]
                })]
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=CountryCompare-legacy-D6DsTlXu.js.map
