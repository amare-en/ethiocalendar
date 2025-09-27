import { ref, computed, toValue, getCurrentInstance, onServerPrefetch, createVNode, normalizeStyle, normalizeClass, createElementVNode, shallowRef, toRef, nextTick, unref, defineComponent, createElementBlock, provide, cloneVNode, h } from 'vue';
import { e as genericComponent, u as useNuxtApp, a1 as asyncDataDefaults, p as propsFactory, s as provideTheme, d as convertToUnit, a2 as createError, o as makeThemeProps } from './server.mjs';
import { toEthiopian, toGregorian } from 'ethiopian-date';
import { c as useRender, m as makeTagProps, e as makeComponentProps } from './VRow-DuOE5lZP.mjs';
import { d as useDensity, b as makeDensityProps } from './router-D8sdwdYd.mjs';
import { V as VDefaultsProvider } from './index-CaPUijDs.mjs';

const DEBOUNCE_DEFAULTS = {
  trailing: true
};
function debounce(fn, wait = 25, options = {}) {
  options = { ...DEBOUNCE_DEFAULTS, ...options };
  if (!Number.isFinite(wait)) {
    throw new TypeError("Expected `wait` to be a finite number");
  }
  let leadingValue;
  let timeout;
  let resolveList = [];
  let currentPromise;
  let trailingArgs;
  const applyFn = (_this, args) => {
    currentPromise = _applyPromised(fn, _this, args);
    currentPromise.finally(() => {
      currentPromise = null;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = null;
        return promise;
      }
    });
    return currentPromise;
  };
  return function(...args) {
    if (currentPromise) {
      if (options.trailing) {
        trailingArgs = args;
      }
      return currentPromise;
    }
    return new Promise((resolve) => {
      const shouldCallNow = !timeout && options.leading;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        const promise = options.leading ? leadingValue : applyFn(this, args);
        for (const _resolve of resolveList) {
          _resolve(promise);
        }
        resolveList = [];
      }, wait);
      if (shouldCallNow) {
        leadingValue = applyFn(this, args);
        resolve(leadingValue);
      } else {
        resolveList.push(resolve);
      }
    });
  };
}
async function _applyPromised(fn, _this, args) {
  return await fn.apply(_this, args);
}

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
  if (!nuxtApp._asyncData[key.value]?._init) {
    initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function islamicToGregorian(hYear, hMonth, hDay) {
  const julianDay = hDay + Math.ceil(29.5 * (hMonth - 1)) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + 19484395e-1 - 1;
  const l = julianDay + 68569;
  const n = Math.floor(4 * l / 146097);
  const l2 = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor(4e3 * (l2 + 1) / 1461001);
  const l3 = l2 - Math.floor(1461 * i / 4) + 31;
  const j = Math.floor(80 * l3 / 2447);
  const gDay = l3 - Math.floor(2447 * j / 80);
  const l4 = Math.floor(j / 11);
  const gMonth = j + 2 - 12 * l4;
  const gYear = 100 * (n - 49) + i + l4;
  return new Date(gYear, gMonth - 1, gDay, 0, 0, 0);
}
function getIslamicHolidays(year) {
  const holidays = {
    "Mawlid al-Nabi": { month: 3, day: 12, am: "መውሊድ", description: "Birth of the Prophet Muhammad." },
    "Eid al-Fitr": { month: 10, day: 1, am: "ኢድ አል-ፈጥር", description: "End of Ramadan." },
    "Eid al-Adha": { month: 12, day: 10, am: "ኢድ አል-አድሐ (አረፋ)", description: "Feast of Sacrifice." }
  };
  const results = {};
  const hijriYear = Math.round((year - 622) * 33 / 32);
  for (const hijriCheckYear of [hijriYear - 1, hijriYear]) {
    for (const holidayName in holidays) {
      const holidayInfo = holidays[holidayName];
      const gregorianDate = islamicToGregorian(hijriCheckYear, holidayInfo.month, holidayInfo.day);
      if (gregorianDate.getFullYear() === year) {
        const key = results[holidayName] ? `${holidayName} (2)` : holidayName;
        results[key] = { date: gregorianDate, am: holidayInfo.am, description: holidayInfo.description };
      }
    }
  }
  return results;
}
function getEthiopianEaster(year) {
  const a = year % 19;
  const b = year % 7;
  const c = year % 4;
  const d = (19 * a + 16) % 30;
  const e = (2 * c + 4 * b + 6 * d) % 7;
  const f = d + e;
  const julianMonth = f > 25 ? 4 : 3;
  const julianDay = f > 25 ? f - 25 : f + 5;
  const julianDateStr = `${year}-${String(julianMonth).padStart(2, "0")}-${String(julianDay).padStart(2, "0")}`;
  const date = new Date(julianDateStr);
  date.setDate(date.getDate() + 13);
  return date;
}
function getHolidaysForYear(etYear) {
  const holidays = [];
  const gregorianYearStart = toGregorian(etYear, 1, 1)[0];
  const gregorianYearEnd = toGregorian(etYear, 12, 30)[0];
  const fixedHolidays = [
    { title: { am: "አዲስ ዓመት", en: "Ethiopian New Year" }, date: { month: 1, day: 1 }, category: "National", description: "Marks the beginning of the Ethiopian calendar year.", detail: "/NewYear" },
    { title: { am: "መስቀል", en: "Finding of the True Cross" }, date: { month: 1, day: 17 }, category: "Religious", description: "Commemorates the finding of the True Cross.", detail: "/FindingOfTheTrueCross" },
    { title: { am: "የገና በዓል", en: "Ethiopian Christmas" }, date: { month: 4, day: 29 }, category: "Religious", description: "Celebrates the birth of Jesus Christ.", detail: "/EthiopiaChristmas" },
    { title: { am: "ጥምቀት", en: "Epiphany" }, date: { month: 5, day: 11 }, category: "Religious", description: "Celebrates the baptism of Jesus.", detail: "/EthiopiaEpiphany" },
    { title: { am: "የአድዋ ድል በዓል", en: "Adwa Victory Day" }, date: { month: 6, day: 23 }, category: "National", description: "Commemorates the Battle of Adwa.", detail: "/AdwaVictoryDay" },
    { title: { am: "ዓለም አቀፍ የሠራተኞች ቀን", en: "International Labor Day" }, date: { month: 8, day: 23 }, category: "National", description: "Celebrates workers achievements.", detail: "/InternationalLaborDay" },
    { title: { am: "የአርበኞች ቀን", en: "Patriots' Victory Day" }, date: { month: 8, day: 27 }, category: "National", description: "Commemorates the end of Italian occupation.", detail: "/PatriotsVictoryDay" },
    { title: { am: "የደርግ መውደቅ", en: "Downfall of the Derg" }, date: { month: 9, day: 20 }, category: "National", description: "Marks the end of the Derg regime.", detail: "/DownfallOfDerg" }
  ];
  fixedHolidays.forEach((holiday) => {
    const gregorianDateArr = toGregorian(etYear, holiday.date.month, holiday.date.day);
    const dateObj = new Date(gregorianDateArr[0], gregorianDateArr[1] - 1, gregorianDateArr[2]);
    holidays.push({
      ...holiday,
      ethiopianDate: { year: etYear, month: holiday.date.month, day: holiday.date.day },
      gregorianDate: dateObj,
      dayOfWeek: dateObj.toLocaleDateString("en-US", { weekday: "long" })
    });
  });
  const easterGregorian = getEthiopianEaster(gregorianYearEnd);
  const easterEthiopian = toEthiopian(easterGregorian.getFullYear(), easterGregorian.getMonth() + 1, easterGregorian.getDate());
  if (easterEthiopian[0] === etYear) {
    const goodFridayGregorian = new Date(easterGregorian);
    goodFridayGregorian.setDate(easterGregorian.getDate() - 2);
    const goodFridayEthiopian = toEthiopian(goodFridayGregorian.getFullYear(), goodFridayGregorian.getMonth() + 1, goodFridayGregorian.getDate());
    holidays.push({
      title: { am: "ስቅለት", en: "Good Friday" },
      category: "Religious",
      description: "Commemorates the crucifixion of Jesus.",
      detail: "/GoodFriday",
      ethiopianDate: { year: goodFridayEthiopian[0], month: goodFridayEthiopian[1], day: goodFridayEthiopian[2] },
      gregorianDate: goodFridayGregorian,
      dayOfWeek: "Friday"
    });
    holidays.push({
      title: { am: "ፋሲካ", en: "Easter" },
      category: "Religious",
      description: "Celebrates the resurrection of Jesus.",
      detail: "/Easter",
      ethiopianDate: { year: easterEthiopian[0], month: easterEthiopian[1], day: easterEthiopian[2] },
      gregorianDate: easterGregorian,
      dayOfWeek: "Sunday"
    });
  }
  const islamicHolidaysStart = getIslamicHolidays(gregorianYearStart);
  const islamicHolidaysEnd = getIslamicHolidays(gregorianYearEnd);
  const islamicHolidays = { ...islamicHolidaysStart, ...islamicHolidaysEnd };
  for (const name in islamicHolidays) {
    const holidayData = islamicHolidays[name];
    const etDate = toEthiopian(holidayData.date.getFullYear(), holidayData.date.getMonth() + 1, holidayData.date.getDate());
    if (etDate[0] === etYear) {
      holidays.push({
        title: { am: holidayData.am, en: name },
        category: "Religious",
        description: `${holidayData.description} (Date is an estimate and may vary based on moon sighting.)`,
        detail: `/${name.replace(/\s+/g, "")}`,
        ethiopianDate: { year: etDate[0], month: etDate[1], day: etDate[2] },
        gregorianDate: holidayData.date,
        dayOfWeek: holidayData.date.toLocaleDateString("en-US", { weekday: "long" })
      });
    }
  }
  return holidays.sort((a, b) => {
    if (a.ethiopianDate.month !== b.ethiopianDate.month) {
      return a.ethiopianDate.month - b.ethiopianDate.month;
    }
    return a.ethiopianDate.day - b.ethiopianDate.day;
  });
}
function getCategoryColor(category) {
  switch (category) {
    case "Religious":
      return "teal";
    case "National":
      return "indigo";
    default:
      return "grey";
  }
}
function useEthiopianHolidays() {
  const today = /* @__PURE__ */ new Date();
  const ethiopianToday = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate()) || [(/* @__PURE__ */ new Date()).getFullYear() - 8, 1, 1];
  const selectedYear = ref(ethiopianToday[0]);
  const { data: holidays, pending, error } = useAsyncData(
    "holidays",
    async () => {
      try {
        const result = await Promise.resolve(getHolidaysForYear(selectedYear.value));
        return result;
      } catch (e) {
        console.error(`Failed to get holidays for year ${selectedYear.value}:`, e);
        throw new Error("There was a problem calculating the holidays. Please try a different year or refresh the page.");
      }
    },
    {
      // Watch for changes in selectedYear to automatically refetch data
      watch: [selectedYear]
    }
  );
  const availableYears = computed(() => {
    const currentYear = ethiopianToday[0];
    const years = [];
    for (let i = -5; i <= 5; i++) {
      years.push(currentYear + i);
    }
    return years;
  });
  return {
    selectedYear,
    holidays,
    availableYears,
    pending,
    error
  };
}
const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (v) => ["even", "odd"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => {
      const tableContentDefaults = {
        VCheckboxBtn: {
          density: props.density
        }
      };
      return createVNode(props.tag, {
        "class": normalizeClass(["v-table", {
          "v-table--fixed-height": !!props.height,
          "v-table--fixed-header": props.fixedHeader,
          "v-table--fixed-footer": props.fixedFooter,
          "v-table--has-top": !!slots.top,
          "v-table--has-bottom": !!slots.bottom,
          "v-table--hover": props.hover,
          "v-table--striped-even": props.striped === "even",
          "v-table--striped-odd": props.striped === "odd"
        }, themeClasses.value, densityClasses.value, props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => [slots.top?.(), createVNode(VDefaultsProvider, {
          "defaults": tableContentDefaults
        }, {
          default: () => [slots.default ? createElementVNode("div", {
            "class": "v-table__wrapper",
            "style": {
              height: convertToUnit(props.height)
            }
          }, [createElementVNode("table", null, [slots.default()])]) : slots.wrapper?.()]
        }), slots.bottom?.()]
      });
    });
    return {};
  }
});

export { VTable as V, getCategoryColor as g, makeVTableProps as m, useEthiopianHolidays as u };
//# sourceMappingURL=VTable-DmGOS52C.mjs.map
