import { f as forwardRef, E as useCardStyles, j as jsxRuntimeExports, b as chakra, d as cx, G as keyframes, o as omitThemingProps, u as useMultiStyleConfig, c as createContext, r as reactExports, k as useColorModeValue, B as Box, V as VStack, H as Heading, l as Text, J as SimpleGrid, K as Card, n as HStack, L as Select, N as CardBody, S as Stat, z as StatNumber, y as StatLabel, F as FiFileText, O as FiAward, P as FiTrendingUp, p as Badge } from "./index-CRLz9qcp.js";
const CardHeader = forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);
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
const progress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
const stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent(value, min, max);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText === "function" ? getValueText(value, percent) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}
const [ProgressStylesProvider, useProgressStyles] = createContext({
  name: "ProgressStylesContext",
  errorMessage: "useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "
});
const ProgressFilledTrack = forwardRef(
  (props, ref) => {
    const { min, max, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
      value,
      min,
      max,
      isIndeterminate,
      role
    });
    const styles = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles.filledTrack
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ref,
        style: { width: "".concat(progress2.percent, "%"), ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
const Progress = forwardRef((props, ref) => {
  var _a;
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius != null ? propBorderRadius : (_a = styles.track) == null ? void 0 : _a.borderRadius;
  const stripeAnimation = { animation: "".concat(stripe, " 1s linear infinite") };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: "".concat(progress, " 1s ease infinite normal none running")
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ProgressStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min,
            max,
            value,
            isIndeterminate,
            css,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";
const [TableStylesProvider, useTableStyles] = createContext({
  name: "TableStylesContext",
  errorMessage: "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "
});
const Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";
const Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.tbody, { ...props, ref, __css: styles.tbody });
});
const Td = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);
const Th = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);
const Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.thead, { ...props, ref, __css: styles.thead });
});
const Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.tr, { ...props, ref, __css: styles.tr });
});
const countriesData = {
  "الأردن": { flag: "🇯🇴", treaties: 32, cases: 5, resolutions: 18, topics: ["حقوق الإنسان", "اللاجئين", "البيئة"] },
  "فلسطين": { flag: "🇵🇸", treaties: 15, cases: 12, resolutions: 45, topics: ["حقوق الإنسان", "القانون الإنساني", "الاحتلال"] },
  "لبنان": { flag: "🇱🇧", treaties: 28, cases: 4, resolutions: 12, topics: ["حقوق الإنسان", "اللاجئين"] },
  "سوريا": { flag: "🇸🇾", treaties: 22, cases: 8, resolutions: 35, topics: ["القانون الإنساني", "حقوق الإنسان"] },
  "العراق": { flag: "🇮🇶", treaties: 26, cases: 6, resolutions: 28, topics: ["حقوق الإنسان", "الإرهاب"] },
  "مصر": { flag: "🇪🇬", treaties: 38, cases: 3, resolutions: 15, topics: ["حقوق الإنسان", "البيئة"] },
  "السعودية": { flag: "🇸🇦", treaties: 25, cases: 2, resolutions: 8, topics: ["حقوق الإنسان"] },
  "الإمارات": { flag: "🇦🇪", treaties: 30, cases: 1, resolutions: 5, topics: ["البيئة", "التجارة"] },
  "المغرب": { flag: "🇲🇦", treaties: 35, cases: 4, resolutions: 10, topics: ["حقوق الإنسان", "البيئة"] },
  "تونس": { flag: "🇹🇳", treaties: 40, cases: 2, resolutions: 8, topics: ["حقوق الإنسان", "الديمقراطية"] },
  "الجزائر": { flag: "🇩🇿", treaties: 33, cases: 3, resolutions: 12, topics: ["حقوق الإنسان", "البيئة"] },
  "الولايات المتحدة": { flag: "🇺🇸", treaties: 45, cases: 15, resolutions: 120, topics: ["الأمن", "التجارة", "البيئة"] },
  "روسيا": { flag: "🇷🇺", treaties: 52, cases: 10, resolutions: 85, topics: ["الأمن", "نزع السلاح"] },
  "الصين": { flag: "🇨🇳", treaties: 48, cases: 5, resolutions: 50, topics: ["حقوق الإنسان", "التجارة"] },
  "فرنسا": { flag: "🇫🇷", treaties: 58, cases: 8, resolutions: 60, topics: ["حقوق الإنسان", "البيئة", "الثقافة"] },
  "بريطانيا": { flag: "🇬🇧", treaties: 55, cases: 12, resolutions: 75, topics: ["حقوق الإنسان", "الأمن"] },
  "ألمانيا": { flag: "🇩🇪", treaties: 54, cases: 6, resolutions: 40, topics: ["حقوق الإنسان", "البيئة", "اللاجئين"] }
};
function CountryCompare() {
  const [country1, setCountry1] = reactExports.useState("الأردن");
  const [country2, setCountry2] = reactExports.useState("فلسطين");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const data1 = countriesData[country1];
  const data2 = countriesData[country2];
  const total1 = data1.treaties + data1.cases + data1.resolutions;
  const total2 = data2.treaties + data2.cases + data2.resolutions;
  const maxTotal = Math.max(total1, total2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { p: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { spacing: 6, align: "stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "lg", textAlign: "center", children: "🏳️ مقارنة الدول" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { textAlign: "center", color: "gray.500", children: "قارن بين التزام الدول المختلفة بالقانون الدولي" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, borderColor, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { pb: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: "3xl", children: data1.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: country1,
              onChange: (e) => setCountry1(e.target.value),
              fontWeight: "bold",
              size: "lg",
              children: Object.keys(countriesData).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { spacing: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stat, { textAlign: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatNumber, { color: "brand.500", fontSize: "3xl", children: total1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatLabel, { children: "إجمالي الالتزامات" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: total1 / maxTotal * 100, colorScheme: "blue", w: "100%", borderRadius: "full" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, borderColor, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { pb: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: "3xl", children: data2.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: country2,
              onChange: (e) => setCountry2(e.target.value),
              fontWeight: "bold",
              size: "lg",
              children: Object.keys(countriesData).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { spacing: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stat, { textAlign: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatNumber, { color: "green.500", fontSize: "3xl", children: total2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatLabel, { children: "إجمالي الالتزامات" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: total2 / maxTotal * 100, colorScheme: "green", w: "100%", borderRadius: "full" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "md", children: "📊 مقارنة تفصيلية" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { variant: "simple", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Thead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "المعيار" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Th, { isNumeric: true, children: [
            country1,
            " ",
            data1.flag
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Th, { isNumeric: true, children: [
            country2,
            " ",
            data2.flag
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tbody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiFileText, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "الاتفاقيات" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data1.treaties }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data2.treaties })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiAward, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "القضايا" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data1.cases }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data2.cases })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiTrendingUp, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "القرارات" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data1.resolutions }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data2.resolutions })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { pb: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { size: "sm", children: [
          "مواضيع الاهتمام - ",
          country1
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { wrap: "wrap", children: data1.topics.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { colorScheme: "blue", px: 3, py: 1, borderRadius: "full", children: t }, i)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { pb: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { size: "sm", children: [
          "مواضيع الاهتمام - ",
          country2
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { wrap: "wrap", children: data2.topics.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { colorScheme: "green", px: 3, py: 1, borderRadius: "full", children: t }, i)) }) })
      ] })
    ] })
  ] }) });
}
export {
  CountryCompare as default
};
//# sourceMappingURL=CountryCompare-TV6WmpeC.js.map
