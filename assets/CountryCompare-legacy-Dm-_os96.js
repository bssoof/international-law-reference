;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var _excluded = ["className"];
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
  System.register(['./index-legacy-CBD9bhuY.js'], function (exports, module) {
    'use strict';

    var forwardRef, useCardStyles, jsxRuntimeExports, chakra, cx, reactExports, useColorModeValue, Box, VStack, Heading, Text, SimpleGrid, Card, HStack, Select, CardBody, Stat, StatNumber, StatLabel, Progress, Table, Thead, Tr, Th, Tbody, Td, Badge;
    return {
      setters: [function (module) {
        forwardRef = module.f;
        useCardStyles = module.t;
        jsxRuntimeExports = module.j;
        chakra = module.b;
        cx = module.v;
        reactExports = module.r;
        useColorModeValue = module.d;
        Box = module.B;
        VStack = module.V;
        Heading = module.H;
        Text = module.T;
        SimpleGrid = module.w;
        Card = module.C;
        HStack = module.e;
        Select = module.x;
        CardBody = module.y;
        Stat = module.S;
        StatNumber = module.q;
        StatLabel = module.p;
        Progress = module.P;
        Table = module.z;
        Thead = module.A;
        Tr = module.D;
        Th = module.E;
        Tbody = module.F;
        Td = module.G;
        Badge = module.h;
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
//# sourceMappingURL=CountryCompare-legacy-Dm-_os96.js.map
