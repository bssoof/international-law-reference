import { r as reactExports, f as forwardRef, t as useCardStyles, j as jsxRuntimeExports, b as chakra, v as cx, J as useImage, K as omit, L as shouldShowFallbackImage, N as useEnvironment, O as useTheme, Q as isObject, U as breakpoints, W as arrayToObjectNotation, X as useStyleConfig, o as omitThemingProps, Y as useToken, Z as cssVar, _ as keyframes, d as useColorModeValue, B as Box, V as VStack, e as HStack, H as Heading, T as Text, x as Select, $ as IconButton, w as SimpleGrid, C as Card, y as CardBody, h as Badge, s as Button, a0 as Link } from "./index-B-VgRjCU.js";
function usePrevious(value) {
  const ref = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const CardFooter = forwardRef(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles.footer
        },
        ...rest
      }
    );
  }
);
const NativeImage = forwardRef(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";
const Image = forwardRef(function Image2(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || // use can opt out of fallback image
  ignoreFallback || // if the user doesn't provide any kind of fallback we should ignore it
  !providedFallback;
  const status = useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image.displayName = "Image";
function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = reactExports.useState(() => {
    return queries.map((query2, index) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index] : getWindow().matchMedia(query2).matches
    }));
  });
  reactExports.useEffect(() => {
    const win = getWindow();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow]);
  return value.map((item) => item.matches);
}
function useBreakpoint(arg) {
  var _a, _b;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const theme = useTheme();
  const breakpoints2 = theme.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints2.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints2.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return (_b = (_a = breakpoints2[index]) == null ? void 0 : _a.breakpoint) != null ? _b : opts.fallback;
}
function getClosestValue(values, breakpoint, breakpoints$1 = breakpoints) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints$1.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints$1[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints$1[index];
    return values[key];
  }
  return void 0;
}
function useBreakpointValue(values, arg) {
  var _a;
  const opts = isObject(arg) ? arg : { fallback: "base" };
  const breakpoint = useBreakpoint(opts);
  const theme = useTheme();
  if (!breakpoint)
    return;
  const breakpoints2 = Array.from(((_a = theme.__breakpoints) == null ? void 0 : _a.keys) || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation(values, breakpoints2)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints2);
}
function useIsFirstRender() {
  const isFirstRender = reactExports.useRef(true);
  reactExports.useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}
const StyledSkeleton = chakra("div", {
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
const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");
const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
const bgFade = keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference
  }
});
const Skeleton = forwardRef((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    animation: animationProp,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor.variable]: startColorVar },
    ...endColorVar && { [$endColor.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : "".concat(fade, " ").concat(fadeDuration, "s");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles,
        ...cssVarStyles,
        _dark: { ...styles["_dark"], ...cssVarStyles },
        animation: animationProp || "".concat(speed, "s linear infinite alternate ").concat(bgFade)
      }
    }
  );
});
Skeleton.displayName = "Skeleton";
function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
const defaultNoOfLines = 3;
const SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index) => {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = cx("chakra-skeleton__group", className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.div, { className: _className, ...rest, children: numbers.map((number, index) => {
    if (isLoaded && index > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing,
      width: getWidth(number),
      height: skeletonHeight
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size,
        colorScheme,
        ...sizeProps,
        // allows animating the children
        children: index === 0 ? children : void 0
      },
      numbers.length.toString() + number
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";
const sampleNews = [
  {
    id: 1,
    title: "محكمة العدل الدولية تصدر قراراً جديداً بشأن غزة",
    description: "أصدرت محكمة العدل الدولية قراراً جديداً يدعو إلى وقف فوري للأعمال العسكرية...",
    source: "الجزيرة",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    category: "قضايا",
    url: "https://aljazeera.net"
  },
  {
    id: 2,
    title: "الأمم المتحدة تعتمد قراراً جديداً حول تغير المناخ",
    description: "اعتمدت الجمعية العامة للأمم المتحدة قراراً يدعو الدول إلى تسريع جهود مكافحة التغير المناخي...",
    source: "رويترز",
    date: "2024-01-14",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400",
    category: "قرارات",
    url: "https://reuters.com"
  },
  {
    id: 3,
    title: "توقيع اتفاقية دولية جديدة لحماية المحيطات",
    description: "وقعت أكثر من 50 دولة على اتفاقية جديدة تهدف إلى حماية المحيطات من التلوث...",
    source: "بي بي سي",
    date: "2024-01-13",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400",
    category: "اتفاقيات",
    url: "https://bbc.com"
  },
  {
    id: 4,
    title: "المحكمة الجنائية الدولية تفتح تحقيقاً جديداً",
    description: "أعلن المدعي العام للمحكمة الجنائية الدولية عن فتح تحقيق جديد في جرائم حرب مزعومة...",
    source: "فرانس 24",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400",
    category: "قضايا",
    url: "https://france24.com"
  },
  {
    id: 5,
    title: "مجلس حقوق الإنسان يناقش أوضاع اللاجئين",
    description: "عقد مجلس حقوق الإنسان التابع للأمم المتحدة جلسة خاصة لمناقشة أوضاع اللاجئين حول العالم...",
    source: "الأمم المتحدة",
    date: "2024-01-11",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400",
    category: "حقوق الإنسان",
    url: "https://un.org"
  },
  {
    id: 6,
    title: "اتفاقية جديدة لمكافحة الجرائم الإلكترونية",
    description: "أقرت الأمم المتحدة اتفاقية جديدة تهدف إلى تعزيز التعاون الدولي في مكافحة الجرائم الإلكترونية...",
    source: "سكاي نيوز",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
    category: "اتفاقيات",
    url: "https://skynews.com"
  }
];
const categoryColors = {
  "قضايا": "red",
  "قرارات": "purple",
  "اتفاقيات": "blue",
  "حقوق الإنسان": "green"
};
function NewsSection() {
  const [news, setNews] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [filter, setFilter] = reactExports.useState("الكل");
  const [lastUpdate, setLastUpdate] = reactExports.useState(/* @__PURE__ */ new Date());
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  reactExports.useEffect(() => {
    loadNews();
  }, []);
  const loadNews = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    setNews(sampleNews);
    setLastUpdate(/* @__PURE__ */ new Date());
    setLoading(false);
  };
  const filteredNews = filter === "الكل" ? news : news.filter((n) => n.category === filter);
  const categories = ["الكل", ...new Set(news.map((n) => n.category))];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { p: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { spacing: 6, align: "stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { justify: "space-between", wrap: "wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { align: "start", spacing: 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "lg", children: "📰 أخبار القانون الدولي" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { color: "gray.500", fontSize: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🕒" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { children: [
            "آخر تحديث: ",
            lastUpdate.toLocaleTimeString("ar-EG")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            value: filter,
            onChange: (e) => setFilter(e.target.value),
            size: "sm",
            w: "150px",
            children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔄" }),
            onClick: loadNews,
            isLoading: loading,
            "aria-label": "تحديث",
            size: "sm"
          }
        )
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleGrid, { columns: { base: 1, md: 2, lg: 3 }, spacing: 4, children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { bg: bgColor, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { height: "150px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonText, { noOfLines: 3, spacing: 2 }) })
    ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleGrid, { columns: { base: 1, md: 2, lg: 3 }, spacing: 4, children: filteredNews.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        bg: bgColor,
        borderColor,
        overflow: "hidden",
        _hover: { transform: "translateY(-4px)", shadow: "lg" },
        transition: "all 0.2s",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: item.image,
              alt: item.title,
              height: "150px",
              objectFit: "cover",
              fallbackSrc: "https://via.placeholder.com/400x150?text=أخبار"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { align: "start", spacing: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { justify: "space-between", w: "100%", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { colorScheme: categoryColors[item.category] || "gray", children: item.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: "xs", color: "gray.500", children: item.date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "sm", noOfLines: 2, children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: "sm", color: "gray.500", noOfLines: 2, children: item.description })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { pt: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { justify: "space-between", w: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: "xs", color: "gray.400", children: item.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                as: Link,
                href: item.url,
                isExternal: true,
                size: "xs",
                rightIcon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔗" }),
                colorScheme: "brand",
                variant: "ghost",
                children: "اقرأ المزيد"
              }
            )
          ] }) })
        ]
      },
      item.id
    )) }),
    filteredNews.length === 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { textAlign: "center", py: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { color: "gray.500", children: "لا توجد أخبار في هذه الفئة" }) })
  ] }) });
}
export {
  NewsSection as default
};
//# sourceMappingURL=NewsSection-aow8MUwx.js.map
