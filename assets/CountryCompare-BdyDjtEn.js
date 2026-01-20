import { f as forwardRef, t as useCardStyles, j as jsxRuntimeExports, b as chakra, v as cx, r as reactExports, d as useColorModeValue, B as Box, V as VStack, H as Heading, T as Text, w as SimpleGrid, C as Card, e as HStack, x as Select, y as CardBody, S as Stat, q as StatNumber, p as StatLabel, P as Progress, z as Table, A as Thead, D as Tr, E as Th, F as Tbody, G as Td, h as Badge } from "./index-BxEduNNq.js";
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "📄" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "الاتفاقيات" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data1.treaties }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data2.treaties })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "⚖️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "القضايا" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data1.cases }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, fontWeight: "bold", children: data2.cases })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "📈" }),
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
//# sourceMappingURL=CountryCompare-BdyDjtEn.js.map
