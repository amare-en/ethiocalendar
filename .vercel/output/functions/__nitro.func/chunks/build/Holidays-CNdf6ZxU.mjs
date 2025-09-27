import { _ as __nuxt_component_0 } from './nuxt-link-tRgjSU3V.mjs';
import { mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, normalizeStyle, normalizeClass, toRefs, toRef, computed, createElementVNode, Fragment, ref, watchEffect, capitalize, provide, shallowRef, watch, inject, withModifiers, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useEthiopianHolidays, g as getCategoryColor, V as VTable, m as makeVTableProps } from './VTable-DmGOS52C.mjs';
import { g as getEnglishEthiopianMonthName } from './ethiopianDate-D8eUZq7u.mjs';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, s as provideTheme, v as provideDefaults, o as makeThemeProps, E as useProxiedModel, U as useLocale, g as getCurrentInstance, F as wrapInArray, C as deepEqual, V as useDisplay, I as IconValue, P as getPropertyFromItem, Z as getObjectValueByPath, $ as isEmpty, w as clamp, f as useRtl, W as createRange, a0 as makeDisplayProps, Y as defineFunctionalComponent, d as convertToUnit, T as isOn, J as consoleError, X as keyValues, M as EventProp } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol, u as useDimension, c as useRender, m as makeTagProps, d as makeDimensionProps, e as makeComponentProps } from './VRow-DuOE5lZP.mjs';
import { u as useBorder, m as makeBorderProps, a as makeVariantProps, b as makeDensityProps } from './router-D8sdwdYd.mjs';
import { u as useBackgroundColor } from './color-DbIj6V-T.mjs';
import { u as useElevation, a as useRounded, m as makeRoundedProps, b as makeElevationProps } from './index-CaPUijDs.mjs';
import { u as useLocation, a as usePosition, m as makePositionProps, b as makeLocationProps, c as useLoader, L as LoaderSlot, d as makeLoaderProps } from './position-kce-9oVv.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
import { V as VSelect, a as VAlert, b as VCheckboxBtn } from './VSelect-A5-TMnCd.mjs';
import { a as VProgressCircular, V as VBtn, u as useResizeObserver } from './VBtn-CtUSWaMx.mjs';
import { V as VCard } from './VCard-BtAk_Fsm.mjs';
import { V as VIcon, m as makeSizeProps } from './VIcon-xAIaYZjS.mjs';
import { V as VChip } from './VOverlay-CWEBiN_D.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'ethiopian-date';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import './createSimpleFunctional-Cf07O5xJ.mjs';
import './VTextField-Ba7jKIdM.mjs';
import './index-BsXMJvGl.mjs';
import './index-DsqekkR1.mjs';
import './VInput-B9fom_-l.mjs';
import './animation-APx-zXWD.mjs';
import './forwardRefs-CtBGLcOj.mjs';
import './VList-B37lLHJc.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './VSelectionControl-CrgHcrmU.mjs';
import './group-CNE9VaDa.mjs';
import './lazy-DuD9WWOI.mjs';

function getPrefixedEventHandlers(attrs, suffix, getData) {
  return Object.keys(attrs).filter((key) => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
    acc[key.slice(0, -suffix.length)] = (event) => attrs[key](event, getData(event));
    return acc;
  }, {});
}
function useRefs() {
  const refs = ref([]);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}
const makeVPaginationProps = propsFactory({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (props) => props.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (val) => val % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VPagination");
const VPagination = genericComponent()({
  name: "VPagination",
  props: makeVPaginationProps(),
  emits: {
    "update:modelValue": (value) => true,
    first: (value) => true,
    prev: (value) => true,
    next: (value) => true,
    last: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const page = useProxiedModel(props, "modelValue");
    const {
      t,
      n
    } = useLocale();
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      width
    } = useDisplay();
    const maxButtons = shallowRef(-1);
    provideDefaults(void 0, {
      scoped: true
    });
    const {
      resizeRef
    } = useResizeObserver();
    const length = computed(() => parseInt(props.length, 10));
    const start = computed(() => parseInt(props.start, 10));
    const totalVisible = computed(() => {
      if (props.totalVisible != null) return parseInt(props.totalVisible, 10);
      else if (maxButtons.value >= 0) return maxButtons.value;
      return getMax(width.value, 58);
    });
    function getMax(totalWidth, itemWidth) {
      const minButtons = props.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))
      ));
    }
    const range = computed(() => {
      if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
      if (totalVisible.value <= 0) return [];
      else if (totalVisible.value === 1) return [page.value];
      if (length.value <= totalVisible.value) {
        return createRange(length.value, start.value);
      }
      const even = totalVisible.value % 2 === 0;
      const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
      const left = even ? middle : middle + 1;
      const right = length.value - middle;
      if (left - page.value >= 0) {
        return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
      } else if (page.value - right >= (even ? 1 : 0)) {
        const rangeLength = totalVisible.value - 1;
        const rangeStart = length.value - rangeLength + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 2);
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
      }
    });
    function setValue(e, value, event) {
      e.preventDefault();
      page.value = value;
      event && emit(event, value);
    }
    const {
      refs,
      updateRef
    } = useRefs();
    provideDefaults({
      VPaginationBtn: {
        color: toRef(() => props.color),
        border: toRef(() => props.border),
        density: toRef(() => props.density),
        size: toRef(() => props.size),
        variant: toRef(() => props.variant),
        rounded: toRef(() => props.rounded),
        elevation: toRef(() => props.elevation)
      }
    });
    const items = computed(() => {
      return range.value.map((item, index) => {
        const ref2 = (e) => updateRef(e, index);
        if (typeof item === "string") {
          return {
            isActive: false,
            key: `ellipsis-${index}`,
            page: item,
            props: {
              ref: ref2,
              ellipsis: true,
              icon: true,
              disabled: true
            }
          };
        } else {
          const isActive = item === page.value;
          return {
            isActive,
            key: item,
            page: n(item),
            props: {
              ref: ref2,
              ellipsis: false,
              icon: true,
              disabled: !!props.disabled || Number(props.length) < 2,
              color: isActive ? props.activeColor : props.color,
              "aria-current": isActive,
              "aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
              onClick: (e) => setValue(e, item)
            }
          };
        }
      });
    });
    const controls = computed(() => {
      const prevDisabled = !!props.disabled || page.value <= start.value;
      const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
      return {
        first: props.showFirstLastPage ? {
          icon: isRtl.value ? props.lastIcon : props.firstIcon,
          onClick: (e) => setValue(e, start.value, "first"),
          disabled: prevDisabled,
          "aria-label": t(props.firstAriaLabel),
          "aria-disabled": prevDisabled
        } : void 0,
        prev: {
          icon: isRtl.value ? props.nextIcon : props.prevIcon,
          onClick: (e) => setValue(e, page.value - 1, "prev"),
          disabled: prevDisabled,
          "aria-label": t(props.previousAriaLabel),
          "aria-disabled": prevDisabled
        },
        next: {
          icon: isRtl.value ? props.prevIcon : props.nextIcon,
          onClick: (e) => setValue(e, page.value + 1, "next"),
          disabled: nextDisabled,
          "aria-label": t(props.nextAriaLabel),
          "aria-disabled": nextDisabled
        },
        last: props.showFirstLastPage ? {
          icon: isRtl.value ? props.firstIcon : props.lastIcon,
          onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
          disabled: nextDisabled,
          "aria-label": t(props.lastAriaLabel),
          "aria-disabled": nextDisabled
        } : void 0
      };
    });
    function updateFocus() {
      const currentIndex = page.value - start.value;
      refs.value[currentIndex]?.$el.focus();
    }
    function onKeydown(e) {
      if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
        page.value = page.value - 1;
        nextTick(updateFocus);
      } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
        page.value = page.value + 1;
        nextTick(updateFocus);
      }
    }
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-pagination", themeClasses.value, props.class]),
      "style": normalizeStyle(props.style),
      "role": "navigation",
      "aria-label": t(props.ariaLabel),
      "onKeydown": onKeydown,
      "data-test": "v-pagination-root"
    }, {
      default: () => [createElementVNode("ul", {
        "class": "v-pagination__list"
      }, [props.showFirstLastPage && createElementVNode("li", {
        "key": "first",
        "class": "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [slots.first ? slots.first(controls.value.first) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.first), null)]), createElementVNode("li", {
        "key": "prev",
        "class": "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [slots.prev ? slots.prev(controls.value.prev) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.prev), null)]), items.value.map((item, index) => createElementVNode("li", {
        "key": item.key,
        "class": normalizeClass(["v-pagination__item", {
          "v-pagination__item--is-active": item.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [slots.item ? slots.item(item) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, item.props), {
        default: () => [item.page]
      })])), createElementVNode("li", {
        "key": "next",
        "class": "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [slots.next ? slots.next(controls.value.next) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.next), null)]), props.showFirstLastPage && createElementVNode("li", {
        "key": "last",
        "class": "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [slots.last ? slots.last(controls.value.last) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.last), null)])])]
    }));
    return {};
  }
});
const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => Number(value ?? 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => Number(value ?? 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1) return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1) return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watch([page, pageCount], () => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data) throw new Error("Missing pagination!");
  return data;
}
function usePaginatedItems(options) {
  const vm = getCurrentInstance("usePaginatedItems");
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0) return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  watch(paginatedItems, (val) => {
    vm.emit("update:currentItems", val);
  }, {
    immediate: true
  });
  return {
    paginatedItems
  };
}
const makeVDataTableFooterProps = propsFactory({
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter");
const VDataTableFooter = genericComponent()({
  name: "VDataTableFooter",
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map((option) => {
      if (typeof option === "number") {
        return {
          value: option,
          title: option === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(option)
        };
      }
      return {
        ...option,
        title: !isNaN(Number(option.title)) ? option.title : t(option.title)
      };
    }));
    useRender(() => {
      const paginationProps = VPagination.filterProps(props);
      return createElementVNode("div", {
        "class": "v-data-table-footer"
      }, [slots.prepend?.(), createElementVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [createElementVNode("span", {
        "aria-label": t(props.itemsPerPageText)
      }, [t(props.itemsPerPageText)]), createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "hideDetails": true
      }, null)]), createElementVNode("div", {
        "class": "v-data-table-footer__info"
      }, [createElementVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), createElementVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [createVNode(VPagination, mergeProps({
        "modelValue": page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        "density": "comfortable",
        "firstAriaLabel": props.firstPageLabel,
        "lastAriaLabel": props.lastPageLabel,
        "length": pageCount.value,
        "nextAriaLabel": props.nextPageLabel,
        "previousAriaLabel": props.prevPageLabel,
        "rounded": true,
        "showFirstLastPage": true,
        "totalVisible": props.showCurrentPage ? 1 : 0,
        "variant": "plain"
      }, paginationProps), null)])]);
    });
    return {};
  }
});
const VDataTableColumn = defineFunctionalComponent({
  align: {
    type: String,
    default: "start"
  },
  fixed: {
    type: [Boolean, String],
    default: false
  },
  fixedOffset: [Number, String],
  fixedEndOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  firstFixedEnd: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (props, _ref) => {
  let {
    slots
  } = _ref;
  const Tag = props.tag ?? "td";
  const fixedSide = typeof props.fixed === "string" ? props.fixed : props.fixed ? "start" : "none";
  return createVNode(Tag, {
    "class": normalizeClass(["v-data-table__td", {
      "v-data-table-column--fixed": fixedSide === "start",
      "v-data-table-column--fixed-end": fixedSide === "end",
      "v-data-table-column--last-fixed": props.lastFixed,
      "v-data-table-column--first-fixed-end": props.firstFixedEnd,
      "v-data-table-column--no-padding": props.noPadding,
      "v-data-table-column--nowrap": props.nowrap
    }, `v-data-table-column--align-${props.align}`]),
    "style": {
      height: convertToUnit(props.height),
      width: convertToUnit(props.width),
      maxWidth: convertToUnit(props.maxWidth),
      left: fixedSide === "start" ? convertToUnit(props.fixedOffset || null) : void 0,
      right: fixedSide === "end" ? convertToUnit(props.fixedEndOffset || null) : void 0
    }
  }, {
    default: () => [slots.default?.()]
  });
});
const makeDataTableHeaderProps = propsFactory({
  headers: Array
}, "DataTable-header");
const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
const defaultHeader = {
  title: "",
  sortable: false
};
const defaultActionHeader = {
  ...defaultHeader,
  width: 48
};
function priorityQueue() {
  let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const queue = arr.map((element) => ({
    element,
    priority: 0
  }));
  return {
    enqueue: (element, priority) => {
      let added = false;
      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (item.priority > priority) {
          queue.splice(i, 0, {
            element,
            priority
          });
          added = true;
          break;
        }
      }
      if (!added) queue.push({
        element,
        priority
      });
    },
    size: () => queue.length,
    count: () => {
      let count = 0;
      if (!queue.length) return 0;
      const whole = Math.floor(queue[0].priority);
      for (let i = 0; i < queue.length; i++) {
        if (Math.floor(queue[i].priority) === whole) count += 1;
      }
      return count;
    },
    dequeue: () => {
      return queue.shift();
    }
  };
}
function extractLeaves(item) {
  let columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!item.children) {
    columns.push(item);
  } else {
    for (const child of item.children) {
      extractLeaves(child, columns);
    }
  }
  return columns;
}
function extractKeys(headers) {
  let keys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const item of headers) {
    if (item.key) keys.add(item.key);
    if (item.children) {
      extractKeys(item.children, keys);
    }
  }
  return keys;
}
function getDefaultItem(item) {
  if (!item.key) return void 0;
  if (item.key === "data-table-group") return defaultHeader;
  if (["data-table-expand", "data-table-select"].includes(item.key)) return defaultActionHeader;
  return void 0;
}
function getDepth(item) {
  let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!item.children) return depth;
  return Math.max(depth, ...item.children.map((child) => getDepth(child, depth + 1)));
}
function parseFixedColumns(items) {
  let seenFixed = false;
  function setFixed(item, side) {
    let parentFixedSide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (!item) return;
    if (parentFixedSide !== "none") {
      item.fixed = parentFixedSide;
    }
    if (item.fixed === true) {
      item.fixed = "start";
    }
    if (item.fixed === side) {
      if (item.children) {
        if (side === "start") {
          for (let i = item.children.length - 1; i >= 0; i--) {
            setFixed(item.children[i], side, side);
          }
        } else {
          for (let i = 0; i < item.children.length; i++) {
            setFixed(item.children[i], side, side);
          }
        }
      } else {
        if (!seenFixed && side === "start") {
          item.lastFixed = true;
        } else if (!seenFixed && side === "end") {
          item.firstFixedEnd = true;
        } else if (isNaN(Number(item.width))) {
          consoleError(`Multiple fixed columns should have a static width (key: ${item.key})`);
        } else {
          item.minWidth = Math.max(Number(item.width) || 0, Number(item.minWidth) || 0);
        }
        seenFixed = true;
      }
    } else {
      if (item.children) {
        if (side === "start") {
          for (let i = item.children.length - 1; i >= 0; i--) {
            setFixed(item.children[i], side);
          }
        } else {
          for (let i = 0; i < item.children.length; i++) {
            setFixed(item.children[i], side);
          }
        }
      } else {
        seenFixed = false;
      }
    }
  }
  for (let i = items.length - 1; i >= 0; i--) {
    setFixed(items[i], "start");
  }
  for (let i = 0; i < items.length; i++) {
    setFixed(items[i], "end");
  }
  let fixedOffset = 0;
  for (let i = 0; i < items.length; i++) {
    fixedOffset = setFixedOffset(items[i], fixedOffset);
  }
  let fixedEndOffset = 0;
  for (let i = items.length - 1; i >= 0; i--) {
    fixedEndOffset = setFixedEndOffset(items[i], fixedEndOffset);
  }
}
function setFixedOffset(item) {
  let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!item) return offset;
  if (item.children) {
    item.fixedOffset = offset;
    for (const child of item.children) {
      offset = setFixedOffset(child, offset);
    }
  } else if (item.fixed && item.fixed !== "end") {
    item.fixedOffset = offset;
    offset += parseFloat(item.width || "0") || 0;
  }
  return offset;
}
function setFixedEndOffset(item) {
  let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!item) return offset;
  if (item.children) {
    item.fixedEndOffset = offset;
    for (const child of item.children) {
      offset = setFixedEndOffset(child, offset);
    }
  } else if (item.fixed === "end") {
    item.fixedEndOffset = offset;
    offset += parseFloat(item.width || "0") || 0;
  }
  return offset;
}
function parse(items, maxDepth) {
  const headers = [];
  let currentDepth = 0;
  const queue = priorityQueue(items);
  while (queue.size() > 0) {
    let rowSize = queue.count();
    const row = [];
    let fraction = 1;
    while (rowSize > 0) {
      const {
        element: item,
        priority
      } = queue.dequeue();
      const diff = maxDepth - currentDepth - getDepth(item);
      row.push({
        ...item,
        rowspan: diff ?? 1,
        colspan: item.children ? extractLeaves(item).length : 1
      });
      if (item.children) {
        for (const child of item.children) {
          const sort = priority % 1 + fraction / Math.pow(10, currentDepth + 2);
          queue.enqueue(child, currentDepth + diff + sort);
        }
      }
      fraction += 1;
      rowSize -= 1;
    }
    currentDepth += 1;
    headers.push(row);
  }
  const columns = items.map((item) => extractLeaves(item)).flat();
  return {
    columns,
    headers
  };
}
function convertToInternalHeaders(items) {
  const internalHeaders = [];
  for (const item of items) {
    const defaultItem = {
      ...getDefaultItem(item),
      ...item
    };
    const key = defaultItem.key ?? (typeof defaultItem.value === "string" ? defaultItem.value : null);
    const value = defaultItem.value ?? key ?? null;
    const internalItem = {
      ...defaultItem,
      key,
      value,
      sortable: defaultItem.sortable ?? (defaultItem.key != null || !!defaultItem.sort),
      children: defaultItem.children ? convertToInternalHeaders(defaultItem.children) : void 0
    };
    internalHeaders.push(internalItem);
  }
  return internalHeaders;
}
function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  const sortFunctions = ref({});
  const sortRawFunctions = ref({});
  const filterFunctions = ref({});
  watchEffect(() => {
    const _headers = props.headers || Object.keys(props.items[0] ?? {}).map((key) => ({
      key,
      title: capitalize(key)
    }));
    const items = _headers.slice();
    const keys = extractKeys(items);
    if (options?.groupBy?.value.length && !keys.has("data-table-group")) {
      items.unshift({
        key: "data-table-group",
        title: "Group"
      });
    }
    if (options?.showSelect?.value && !keys.has("data-table-select")) {
      items.unshift({
        key: "data-table-select"
      });
    }
    if (options?.showExpand?.value && !keys.has("data-table-expand")) {
      items.push({
        key: "data-table-expand"
      });
    }
    const internalHeaders = convertToInternalHeaders(items);
    parseFixedColumns(internalHeaders);
    const maxDepth = Math.max(...internalHeaders.map((item) => getDepth(item))) + 1;
    const parsed = parse(internalHeaders, maxDepth);
    headers.value = parsed.headers;
    columns.value = parsed.columns;
    const flatHeaders = parsed.headers.flat(1);
    for (const header of flatHeaders) {
      if (!header.key) continue;
      if (header.sortable) {
        if (header.sort) {
          sortFunctions.value[header.key] = header.sort;
        }
        if (header.sortRaw) {
          sortRawFunctions.value[header.key] = header.sortRaw;
        }
      }
      if (header.filter) {
        filterFunctions.value[header.key] = header.filter;
      }
    }
  });
  const data = {
    headers,
    columns,
    sortFunctions,
    sortRawFunctions,
    filterFunctions
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data) throw new Error("Missing headers!");
  return data;
}
const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [items[0]?.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(wrapInArray(v).map((v2) => {
      return allItems.value.find((item) => props.valueComparator(v2, item.value))?.value ?? v2;
    }));
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  const lastSelectedIndex = shallowRef(null);
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item, index, event) {
    const items = [];
    index = index ?? currentPage.value.findIndex((i) => i.value === item.value);
    if (props.selectStrategy !== "single" && event?.shiftKey && lastSelectedIndex.value !== null) {
      const [start, end] = [lastSelectedIndex.value, index].sort((a, b) => a - b);
      items.push(...currentPage.value.slice(start, end + 1).filter((item2) => item2.selectable));
    } else {
      items.push(item);
      lastSelectedIndex.value = index;
    }
    select(items, !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return !!items.length && isSelected(items);
  });
  const showSelectAll = toRef(() => selectStrategy.value.showSelectAll);
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll,
    lastSelectedIndex,
    selectStrategy
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data) throw new Error("Missing selection!");
  return data;
}
const makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(() => props.mustSort);
  const multiSort = toRef(() => props.multiSort);
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    if (column.key == null) return;
    let newSortBy = sortBy.value.map((x) => ({
      ...x
    })) ?? [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value) {
        newSortBy.push({
          key: column.key,
          order: "asc"
        });
      } else {
        newSortBy = [{
          key: column.key,
          order: "asc"
        }];
      }
    } else if (item.order === "desc") {
      if (mustSort.value && newSortBy.length === 1) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page) page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data) throw new Error("Missing sort!");
  return data;
}
function useSortedItems(props, items, sortBy, options) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    if (!sortBy.value.length) return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, {
      transform: options?.transform,
      sortFunctions: {
        ...props.customKeySort,
        ...options?.sortFunctions?.value
      },
      sortRawFunctions: options?.sortRawFunctions?.value
    });
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, options) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  const transformedItems = items.map((item) => [item, options?.transform ? options.transform(item) : item]);
  return transformedItems.sort((a, b) => {
    for (let i = 0; i < sortByItems.length; i++) {
      let hasCustomResult = false;
      const sortKey = sortByItems[i].key;
      const sortOrder = sortByItems[i].order ?? "asc";
      if (sortOrder === false) continue;
      let sortA = getObjectValueByPath(a[1], sortKey);
      let sortB = getObjectValueByPath(b[1], sortKey);
      let sortARaw = a[0].raw;
      let sortBRaw = b[0].raw;
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
        [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
      }
      if (options?.sortRawFunctions?.[sortKey]) {
        const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (options?.sortFunctions?.[sortKey]) {
        const customResult = options.sortFunctions[sortKey](sortA, sortB);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (hasCustomResult) continue;
      if (sortA instanceof Date && sortB instanceof Date) {
        sortA = sortA.getTime();
        sortB = sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB)) return 0;
        if (isEmpty(sortA)) return -1;
        if (isEmpty(sortB)) return 1;
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  }).map((_ref) => {
    let [item] = _ref;
    return item;
  });
}
const makeVDataTableHeadersProps = propsFactory({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: IconValue,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...makeDisplayProps(),
  ...makeLoaderProps()
}, "VDataTableHeaders");
const VDataTableHeaders = genericComponent()({
  name: "VDataTableHeaders",
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    function getFixedStyles(column, y) {
      if (!(props.sticky || props.fixedHeader) && !column.fixed) return void 0;
      const fixedSide = typeof column.fixed === "string" ? column.fixed : column.fixed ? "start" : "none";
      return {
        position: "sticky",
        left: fixedSide === "start" ? convertToUnit(column.fixedOffset) : void 0,
        right: fixedSide === "end" ? convertToUnit(column.fixedEndOffset) : void 0,
        top: props.sticky || props.fixedHeader ? `calc(var(--v-table-header-height) * ${y})` : void 0
      };
    }
    function handleEnterKeyPress(event, column) {
      if (event.key === "Enter" && !props.disableSort) {
        toggleSort(column);
      }
    }
    function getSortIcon(column) {
      const item = sortBy.value.find((item2) => item2.key === column.key);
      if (!item) return props.sortAscIcon;
      return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon
    }));
    const headerCellClasses = computed(() => ["v-data-table__th", {
      "v-data-table__th--sticky": props.sticky || props.fixedHeader
    }, displayClasses.value, loaderClasses.value]);
    const VDataTableHeaderCell = (_ref2) => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
      const headerProps = mergeProps(props.headerProps ?? {}, column.headerProps ?? {});
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "align": column.align,
        "class": [{
          "v-data-table__th--sortable": column.sortable && !props.disableSort,
          "v-data-table__th--sorted": isSorted(column),
          "v-data-table__th--fixed": column.fixed
        }, ...headerCellClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.minWidth),
          maxWidth: convertToUnit(column.maxWidth),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "fixed": column.fixed,
        "nowrap": column.nowrap,
        "lastFixed": column.lastFixed,
        "firstFixedEnd": column.firstFixedEnd,
        "noPadding": noPadding,
        "tabindex": column.sortable ? 0 : void 0,
        "onClick": column.sortable ? () => toggleSort(column) : void 0,
        "onKeydown": column.sortable ? (event) => handleEnterKeyPress(event, column) : void 0
      }, headerProps), {
        default: () => {
          const columnSlotName = `header.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
          if (column.key === "data-table-select") {
            return slots["header.data-table-select"]?.(columnSlotProps) ?? (showSelectAll.value && createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null));
          }
          return createElementVNode("div", {
            "class": "v-data-table-header__content"
          }, [createElementVNode("span", null, [column.title]), column.sortable && !props.disableSort && createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && createElementVNode("div", {
            "key": "badge",
            "class": normalizeClass(["v-data-table-header__sort-badge", ...backgroundColorClasses.value]),
            "style": normalizeStyle(backgroundColorStyles.value)
          }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
        }
      });
    };
    const VDataTableMobileHeaderCell = () => {
      const displayItems = computed(() => {
        return columns.value.filter((column) => column?.sortable && !props.disableSort);
      });
      const appendIcon = computed(() => {
        const showSelectColumn = columns.value.find((column) => column.key === "data-table-select");
        if (showSelectColumn == null) return;
        return allSelected.value ? "$checkboxOn" : someSelected.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "class": [...headerCellClasses.value],
        "colspan": headers.value.length + 1
      }, props.headerProps), {
        default: () => [createElementVNode("div", {
          "class": "v-data-table-header__content"
        }, [createVNode(VSelect, {
          "chips": true,
          "class": "v-data-table__td-sort-select",
          "clearable": true,
          "density": "default",
          "items": displayItems.value,
          "label": t("$vuetify.dataTable.sortBy"),
          "multiple": props.multiSort,
          "variant": "underlined",
          "onClick:clear": () => sortBy.value = [],
          "appendIcon": appendIcon.value,
          "onClick:append": () => selectAll(!allSelected.value)
        }, {
          chip: (props2) => createVNode(VChip, {
            "onClick": props2.item.raw?.sortable ? () => toggleSort(props2.item.raw) : void 0,
            "onMousedown": (e) => {
              e.preventDefault();
              e.stopPropagation();
            }
          }, {
            default: () => [props2.item.title, createVNode(VIcon, {
              "class": normalizeClass(["v-data-table__td-sort-icon", isSorted(props2.item.raw) && "v-data-table__td-sort-icon-active"]),
              "icon": getSortIcon(props2.item.raw),
              "size": "small"
            }, null)]
          })
        })])]
      });
    };
    useRender(() => {
      return mobile.value ? createElementVNode("tr", null, [createVNode(VDataTableMobileHeaderCell, null, null)]) : createElementVNode(Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => createElementVNode("tr", null, [row.map((column, x) => createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && createElementVNode("tr", {
        "class": "v-data-table-progress"
      }, [createElementVNode("th", {
        "colspan": columns.value.length
      }, [createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "absolute": true,
        "active": true,
        "color": typeof props.loading === "boolean" ? void 0 : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});
const makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
  const groupBy = useProxiedModel(props, "groupBy");
  return {
    groupBy
  };
}
function provideGroupBy(options) {
  const {
    disableSort,
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => ({
      ...val,
      order: val.order ?? false
    })).concat(disableSort?.value ? [] : sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group)) newOpened.add(group.id);
    else newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return [...new Set(arr)];
    }
    return dive({
      items
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function useGroupBy() {
  const data = inject(VDataTableGroupSymbol);
  if (!data) throw new Error("Missing group!");
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length) return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length) return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length) return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}
const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, "VDataTableGroupHeaderRow");
const VDataTableGroupHeaderRow = genericComponent()({
  name: "VDataTableGroupHeaderRow",
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => createElementVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        "--v-data-table-group-header-row-depth": props.item.depth
      }
    }, [columns.value.map((column) => {
      if (column.key === "data-table-group") {
        const icon = isGroupOpen(props.item) ? "$expand" : "$next";
        const onClick = () => toggleGroup(props.item);
        return slots["data-table-group"]?.({
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        }) ?? createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), createElementVNode("span", null, [props.item.value]), createElementVNode("span", null, [createTextVNode("("), rows.value.length, createTextVNode(")")])]
        });
      }
      if (column.key === "data-table-select") {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = (v) => select(rows.value, v);
        return slots["data-table-select"]?.({
          props: {
            modelValue,
            indeterminate,
            "onUpdate:modelValue": selectGroup
          }
        }) ?? createElementVNode("td", null, [createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return createElementVNode("td", null, null);
    })]);
  }
});
const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(() => props.expandOnClick);
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data) throw new Error("foo");
  return data;
}
const makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: EventProp(),
  onContextmenu: EventProp(),
  onDblclick: EventProp(),
  ...makeDisplayProps()
}, "VDataTableRow");
const VDataTableRow = genericComponent()({
  name: "VDataTableRow",
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      displayClasses,
      mobile
    } = useDisplay(props, "v-data-table__tr");
    const {
      isSelected,
      toggleSelect,
      someSelected,
      allSelected,
      selectAll
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      columns
    } = useHeaders();
    useRender(() => createElementVNode("tr", {
      "class": normalizeClass(["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(props.onClick || props.onContextmenu || props.onDblclick)
      }, displayClasses.value]),
      "onClick": props.onClick,
      "onContextmenu": props.onContextmenu,
      "onDblclick": props.onDblclick
    }, [props.item && columns.value.map((column, i) => {
      const item = props.item;
      const slotName = `item.${column.key}`;
      const headerSlotName = `header.${column.key}`;
      const slotProps = {
        index: props.index,
        item: item.raw,
        internalItem: item,
        value: getObjectValueByPath(item.columns, column.key),
        column,
        isSelected,
        toggleSelect,
        isExpanded,
        toggleExpand
      };
      const columnSlotProps = {
        column,
        selectAll,
        isSorted,
        toggleSort,
        sortBy: sortBy.value,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        getSortIcon: () => ""
      };
      const cellProps = typeof props.cellProps === "function" ? props.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value,
        column
      }) : props.cellProps;
      const columnCellProps = typeof column.cellProps === "function" ? column.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value
      }) : column.cellProps;
      return createVNode(VDataTableColumn, mergeProps({
        "align": column.align,
        "class": {
          "v-data-table__td--expanded-row": column.key === "data-table-expand",
          "v-data-table__td--select-row": column.key === "data-table-select"
        },
        "fixed": column.fixed,
        "fixedOffset": column.fixedOffset,
        "fixedEndOffset": column.fixedEndOffset,
        "lastFixed": column.lastFixed,
        "firstFixedEnd": column.firstFixedEnd,
        "maxWidth": !mobile.value ? column.maxWidth : void 0,
        "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
        "nowrap": column.nowrap,
        "width": !mobile.value ? column.width : void 0
      }, cellProps, columnCellProps), {
        default: () => {
          if (column.key === "data-table-select") {
            return slots["item.data-table-select"]?.({
              ...slotProps,
              props: {
                disabled: !item.selectable,
                modelValue: isSelected([item]),
                onClick: withModifiers(() => toggleSelect(item), ["stop"])
              }
            }) ?? createVNode(VCheckboxBtn, {
              "disabled": !item.selectable,
              "modelValue": isSelected([item]),
              "onClick": withModifiers((event) => toggleSelect(item, props.index, event), ["stop"])
            }, null);
          }
          if (column.key === "data-table-expand") {
            return slots["item.data-table-expand"]?.({
              ...slotProps,
              props: {
                icon: isExpanded(item) ? "$collapse" : "$expand",
                size: "small",
                variant: "text",
                onClick: withModifiers(() => toggleExpand(item), ["stop"])
              }
            }) ?? createVNode(VBtn, {
              "icon": isExpanded(item) ? "$collapse" : "$expand",
              "size": "small",
              "variant": "text",
              "onClick": withModifiers(() => toggleExpand(item), ["stop"])
            }, null);
          }
          if (slots[slotName] && !mobile.value) return slots[slotName](slotProps);
          const displayValue = toDisplayString(slotProps.value);
          return !mobile.value ? displayValue : createElementVNode(Fragment, null, [createElementVNode("div", {
            "class": "v-data-table__td-title"
          }, [slots[headerSlotName]?.(columnSlotProps) ?? column.title]), createElementVNode("div", {
            "class": "v-data-table__td-value"
          }, [slots[slotName]?.(slotProps) ?? displayValue])]);
        }
      });
    })]));
  }
});
const makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...makeDisplayProps()
}, "VDataTableRows");
const VDataTableRows = genericComponent()({
  name: "VDataTableRows",
  inheritAttrs: false,
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    const {
      mobile
    } = useDisplay(props);
    useRender(() => {
      if (props.loading && (!props.items.length || slots.loading)) {
        return createElementVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [createElementVNode("td", {
          "colspan": columns.value.length
        }, [slots.loading?.() ?? t(props.loadingText)])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return createElementVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [createElementVNode("td", {
          "colspan": columns.value.length
        }, [slots["no-data"]?.() ?? t(props.noDataText)])]);
      }
      return createElementVNode(Fragment, null, [props.items.map((item, index) => {
        if (item.type === "group") {
          const slotProps2 = {
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          };
          return slots["group-header"] ? slots["group-header"](slotProps2) : createVNode(VDataTableGroupHeaderRow, mergeProps({
            "key": `group-header_${item.id}`,
            "item": item
          }, getPrefixedEventHandlers(attrs, ":group-header", () => slotProps2)), slots);
        }
        const slotProps = {
          index,
          item: item.raw,
          internalItem: item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: mergeProps({
            key: `item_${item.key ?? item.index}`,
            onClick: expandOnClick.value ? () => {
              toggleExpand(item);
            } : void 0,
            index,
            item,
            cellProps: props.cellProps,
            mobile: mobile.value
          }, getPrefixedEventHandlers(attrs, ":row", () => slotProps), typeof props.rowProps === "function" ? props.rowProps({
            item: slotProps.item,
            index: slotProps.index,
            internalItem: slotProps.internalItem
          }) : props.rowProps)
        };
        return createElementVNode(Fragment, {
          "key": itemSlotProps.props.key
        }, [slots.item ? slots.item(itemSlotProps) : createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && slots["expanded-row"]?.(slotProps)]);
      })]);
    });
    return {};
  }
});
const makeDataTableItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function transformItem(props, item, index, columns) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  const itemColumns = columns.reduce((obj, column) => {
    if (column.key != null) obj[column.key] = getPropertyFromItem(item, column.value);
    return obj;
  }, {});
  return {
    type: "item",
    key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
    index,
    value,
    selectable,
    columns: itemColumns,
    raw: item
  };
}
function transformItems(props, items, columns) {
  return items.map((item, index) => transformItem(props, item, index, columns));
}
function useDataTableItems(props, columns) {
  const items = computed(() => transformItems(props, props.items, columns.value));
  return {
    items
  };
}
function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = () => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  });
  let oldOptions = null;
  watch(options, (value) => {
    if (deepEqual(oldOptions, value)) return;
    if (oldOptions && oldOptions.search !== value.search) {
      page.value = 1;
    }
    vm.emit("update:options", value);
    oldOptions = value;
  }, {
    deep: true,
    immediate: true
  });
}
const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  if (!query.length) return 0;
  value = value.toString().toLocaleLowerCase();
  query = query.toString().toLocaleLowerCase();
  const result = [];
  let idx = value.indexOf(query);
  while (~idx) {
    result.push([idx, idx + query.length]);
    idx = value.indexOf(query, idx + query.length);
  }
  return result.length ? result : -1;
};
function normaliseMatch(match, query) {
  if (match == null || typeof match === "boolean" || match === -1) return;
  if (typeof match === "number") return [[match, match + query.length]];
  if (Array.isArray(match[0])) return match;
  return [match];
}
const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  const array = [];
  const filter = options?.default ?? defaultFilter;
  const keys = options?.filterKeys ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys(options?.customKeyFilter ?? {}).length;
  if (!items?.length) return array;
  loop: for (let i = 0; i < items.length; i++) {
    const [item, transformed = item] = wrapInArray(items[i]);
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if ((query || customFiltersLength > 0) && !options?.noFilter) {
      if (typeof item === "object") {
        if (item.type === "divider" || item.type === "subheader") {
          continue;
        }
        const filterKeys = keys || Object.keys(transformed);
        for (const key of filterKeys) {
          const value = getPropertyFromItem(transformed, key);
          const keyFilter = options?.customKeyFilter?.[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = normaliseMatch(match, query);
            else defaultMatches[key] = normaliseMatch(match, query);
          } else if (options?.filterMode === "every") {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = normaliseMatch(match, query);
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if (options?.filterMode === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if (options?.filterMode === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength)) continue;
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = shallowRef([]);
  const filteredMatches = shallowRef(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => options?.transform ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: {
        ...props.customKeyFilter,
        ...unref(options?.customKeyFilter)
      },
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach((_ref) => {
      let {
        index,
        matches
      } = _ref;
      const item = originalItems[index];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}
const makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, "DataTable");
const makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, "VDataTable");
const VDataTable = genericComponent()({
  name: "VDataTable",
  props: makeVDataTableProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true,
    "update:currentItems": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const {
      columns,
      headers,
      sortFunctions,
      sortRawFunctions,
      filterFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(() => props.showSelect),
      showExpand: toRef(() => props.showExpand)
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(() => props.search);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(() => props.hideNoData),
        noDataText: toRef(() => props.noDataText),
        loading: toRef(() => props.loading),
        loadingText: toRef(() => props.loadingText)
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value.map((item) => item.raw),
      internalItems: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--show-select": props.showSelect,
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => slots.top?.(slotProps.value),
        default: () => slots.default ? slots.default(slotProps.value) : createElementVNode(Fragment, null, [slots.colgroup?.(slotProps.value), !props.hideDefaultHeader && createElementVNode("thead", {
          "key": "thead"
        }, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), slots.thead?.(slotProps.value), !props.hideDefaultBody && createElementVNode("tbody", null, [slots["body.prepend"]?.(slotProps.value), slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
          "items": paginatedItems.value
        }), slots), slots["body.append"]?.(slotProps.value)]), slots.tbody?.(slotProps.value), slots.tfoot?.(slotProps.value)]),
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && createElementVNode(Fragment, null, [createVNode(VDivider, null, null), createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
    return {};
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main = {
  __name: "Holidays",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      selectedYear,
      holidays,
      availableYears,
      pending,
      error
    } = useEthiopianHolidays();
    const headers = [
      { title: "Holiday Name", value: "name", sortable: true, width: "20%" },
      { title: "Date", value: "date", sortable: true, width: "20%" },
      { title: "Day", value: "day", sortable: false, width: "10%" },
      { title: "Description", value: "description", sortable: false, width: "30%" },
      { title: "Category", value: "category", sortable: true, width: "10%" },
      { title: "Actions", value: "actions", sortable: false, width: "10%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-8" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, { class: "mx-auto pa-6 pa-sm-10 holiday-container border rounded-lg pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center mb-6" data-v-2dfecc67${_scopeId2}><h2 class="text-h4 font-weight-bold mb-2 holiday-title" data-v-2dfecc67${_scopeId2}><span class="text-blue-darken-3" data-v-2dfecc67${_scopeId2}>የኢትዮጵያ በዓላት</span></h2><p class="text-subtitle-1 text-blue-grey-darken-2 font-weight-medium" data-v-2dfecc67${_scopeId2}> Ethiopian Holidays &amp; Celebrations </p></div>`);
                  _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, {
                    justify: "center",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(selectedYear),
                                "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                items: unref(availableYears),
                                label: "Select Year",
                                outlined: "",
                                dense: "",
                                disabled: unref(pending)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedYear),
                                  "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                  items: unref(availableYears),
                                  label: "Select Year",
                                  outlined: "",
                                  dense: "",
                                  disabled: unref(pending)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedYear),
                                "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                items: unref(availableYears),
                                label: "Select Year",
                                outlined: "",
                                dense: "",
                                disabled: unref(pending)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(error)) {
                    _push3(ssrRenderComponent(VAlert, {
                      type: "error",
                      class: "mb-6",
                      prominent: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(error).message)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(error).message), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(pending)) {
                    _push3(`<div class="text-center py-10" data-v-2dfecc67${_scopeId2}>`);
                    _push3(ssrRenderComponent(VProgressCircular, {
                      indeterminate: "",
                      color: "primary",
                      size: "64"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="mt-4 text-subtitle-1" data-v-2dfecc67${_scopeId2}>Loading Holidays...</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(pending) && !unref(error) && unref(holidays)) {
                    _push3(ssrRenderComponent(VCard, { flat: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VDataTable, {
                            headers,
                            items: unref(holidays),
                            class: "elevation-1",
                            "item-key": "title.en"
                          }, {
                            "item.name": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-2dfecc67${_scopeId4}><p class="text-grey-darken-1" data-v-2dfecc67${_scopeId4}>${ssrInterpolate(item.title.am)}</p><p class="font-weight-bold" data-v-2dfecc67${_scopeId4}>${ssrInterpolate(item.title.en)}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-grey-darken-1" }, toDisplayString(item.title.am), 1),
                                    createVNode("p", { class: "font-weight-bold" }, toDisplayString(item.title.en), 1)
                                  ])
                                ];
                              }
                            }),
                            "item.date": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-2dfecc67${_scopeId4}><p class="font-weight-medium" data-v-2dfecc67${_scopeId4}>${ssrInterpolate(unref(getEnglishEthiopianMonthName)(item.ethiopianDate.month))} ${ssrInterpolate(item.ethiopianDate.day)}, ${ssrInterpolate(item.ethiopianDate.year)}</p><p class="text-caption text-grey-darken-1" data-v-2dfecc67${_scopeId4}> (${ssrInterpolate(item.gregorianDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }))}) </p></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("p", { class: "font-weight-medium" }, toDisplayString(unref(getEnglishEthiopianMonthName)(item.ethiopianDate.month)) + " " + toDisplayString(item.ethiopianDate.day) + ", " + toDisplayString(item.ethiopianDate.year), 1),
                                    createVNode("p", { class: "text-caption text-grey-darken-1" }, " (" + toDisplayString(item.gregorianDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })) + ") ", 1)
                                  ])
                                ];
                              }
                            }),
                            "item.day": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span data-v-2dfecc67${_scopeId4}>${ssrInterpolate(item.dayOfWeek)}</span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(item.dayOfWeek), 1)
                                ];
                              }
                            }),
                            "item.description": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-caption" data-v-2dfecc67${_scopeId4}>${ssrInterpolate(item.description)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption" }, toDisplayString(item.description), 1)
                                ];
                              }
                            }),
                            "item.category": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  color: unref(getCategoryColor)(item.category),
                                  small: ""
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.category)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.category), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    color: unref(getCategoryColor)(item.category),
                                    small: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.category), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            "item.actions": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: item.detail
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        size: "small",
                                        variant: "text",
                                        color: "primary"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Details `);
                                          } else {
                                            return [
                                              createTextVNode(" Details ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          size: "small",
                                          variant: "text",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Details ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: item.detail
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        size: "small",
                                        variant: "text",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Details ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VDataTable, {
                              headers,
                              items: unref(holidays),
                              class: "elevation-1",
                              "item-key": "title.en"
                            }, {
                              "item.name": withCtx(({ item }) => [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-grey-darken-1" }, toDisplayString(item.title.am), 1),
                                  createVNode("p", { class: "font-weight-bold" }, toDisplayString(item.title.en), 1)
                                ])
                              ]),
                              "item.date": withCtx(({ item }) => [
                                createVNode("div", null, [
                                  createVNode("p", { class: "font-weight-medium" }, toDisplayString(unref(getEnglishEthiopianMonthName)(item.ethiopianDate.month)) + " " + toDisplayString(item.ethiopianDate.day) + ", " + toDisplayString(item.ethiopianDate.year), 1),
                                  createVNode("p", { class: "text-caption text-grey-darken-1" }, " (" + toDisplayString(item.gregorianDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })) + ") ", 1)
                                ])
                              ]),
                              "item.day": withCtx(({ item }) => [
                                createVNode("span", null, toDisplayString(item.dayOfWeek), 1)
                              ]),
                              "item.description": withCtx(({ item }) => [
                                createVNode("span", { class: "text-caption" }, toDisplayString(item.description), 1)
                              ]),
                              "item.category": withCtx(({ item }) => [
                                createVNode(VChip, {
                                  color: unref(getCategoryColor)(item.category),
                                  small: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.category), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              "item.actions": withCtx(({ item }) => [
                                createVNode(_component_NuxtLink, {
                                  to: item.detail
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      size: "small",
                                      variant: "text",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Details ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 1
                            }, 8, ["items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "text-center mb-6" }, [
                      createVNode("h2", { class: "text-h4 font-weight-bold mb-2 holiday-title" }, [
                        createVNode("span", { class: "text-blue-darken-3" }, "የኢትዮጵያ በዓላት")
                      ]),
                      createVNode("p", { class: "text-subtitle-1 text-blue-grey-darken-2 font-weight-medium" }, " Ethiopian Holidays & Celebrations ")
                    ]),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode(VRow, {
                      justify: "center",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(selectedYear),
                              "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                              items: unref(availableYears),
                              label: "Select Year",
                              outlined: "",
                              dense: "",
                              disabled: unref(pending)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    unref(error) ? (openBlock(), createBlock(VAlert, {
                      key: 0,
                      type: "error",
                      class: "mb-6",
                      prominent: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(error).message), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(pending) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-10"
                    }, [
                      createVNode(VProgressCircular, {
                        indeterminate: "",
                        color: "primary",
                        size: "64"
                      }),
                      createVNode("p", { class: "mt-4 text-subtitle-1" }, "Loading Holidays...")
                    ])) : createCommentVNode("", true),
                    !unref(pending) && !unref(error) && unref(holidays) ? (openBlock(), createBlock(VCard, {
                      key: 2,
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VDataTable, {
                          headers,
                          items: unref(holidays),
                          class: "elevation-1",
                          "item-key": "title.en"
                        }, {
                          "item.name": withCtx(({ item }) => [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-grey-darken-1" }, toDisplayString(item.title.am), 1),
                              createVNode("p", { class: "font-weight-bold" }, toDisplayString(item.title.en), 1)
                            ])
                          ]),
                          "item.date": withCtx(({ item }) => [
                            createVNode("div", null, [
                              createVNode("p", { class: "font-weight-medium" }, toDisplayString(unref(getEnglishEthiopianMonthName)(item.ethiopianDate.month)) + " " + toDisplayString(item.ethiopianDate.day) + ", " + toDisplayString(item.ethiopianDate.year), 1),
                              createVNode("p", { class: "text-caption text-grey-darken-1" }, " (" + toDisplayString(item.gregorianDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })) + ") ", 1)
                            ])
                          ]),
                          "item.day": withCtx(({ item }) => [
                            createVNode("span", null, toDisplayString(item.dayOfWeek), 1)
                          ]),
                          "item.description": withCtx(({ item }) => [
                            createVNode("span", { class: "text-caption" }, toDisplayString(item.description), 1)
                          ]),
                          "item.category": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: unref(getCategoryColor)(item.category),
                              small: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.category), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.actions": withCtx(({ item }) => [
                            createVNode(_component_NuxtLink, {
                              to: item.detail
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  size: "small",
                                  variant: "text",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Details ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 1
                        }, 8, ["items"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSheet, { class: "mx-auto pa-6 pa-sm-10 holiday-container border rounded-lg pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center mb-6" }, [
                    createVNode("h2", { class: "text-h4 font-weight-bold mb-2 holiday-title" }, [
                      createVNode("span", { class: "text-blue-darken-3" }, "የኢትዮጵያ በዓላት")
                    ]),
                    createVNode("p", { class: "text-subtitle-1 text-blue-grey-darken-2 font-weight-medium" }, " Ethiopian Holidays & Celebrations ")
                  ]),
                  createVNode(VDivider, { class: "mb-6" }),
                  createVNode(VRow, {
                    justify: "center",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(selectedYear),
                            "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                            items: unref(availableYears),
                            label: "Select Year",
                            outlined: "",
                            dense: "",
                            disabled: unref(pending)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  unref(error) ? (openBlock(), createBlock(VAlert, {
                    key: 0,
                    type: "error",
                    class: "mb-6",
                    prominent: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(error).message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(pending) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-center py-10"
                  }, [
                    createVNode(VProgressCircular, {
                      indeterminate: "",
                      color: "primary",
                      size: "64"
                    }),
                    createVNode("p", { class: "mt-4 text-subtitle-1" }, "Loading Holidays...")
                  ])) : createCommentVNode("", true),
                  !unref(pending) && !unref(error) && unref(holidays) ? (openBlock(), createBlock(VCard, {
                    key: 2,
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VDataTable, {
                        headers,
                        items: unref(holidays),
                        class: "elevation-1",
                        "item-key": "title.en"
                      }, {
                        "item.name": withCtx(({ item }) => [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-grey-darken-1" }, toDisplayString(item.title.am), 1),
                            createVNode("p", { class: "font-weight-bold" }, toDisplayString(item.title.en), 1)
                          ])
                        ]),
                        "item.date": withCtx(({ item }) => [
                          createVNode("div", null, [
                            createVNode("p", { class: "font-weight-medium" }, toDisplayString(unref(getEnglishEthiopianMonthName)(item.ethiopianDate.month)) + " " + toDisplayString(item.ethiopianDate.day) + ", " + toDisplayString(item.ethiopianDate.year), 1),
                            createVNode("p", { class: "text-caption text-grey-darken-1" }, " (" + toDisplayString(item.gregorianDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })) + ") ", 1)
                          ])
                        ]),
                        "item.day": withCtx(({ item }) => [
                          createVNode("span", null, toDisplayString(item.dayOfWeek), 1)
                        ]),
                        "item.description": withCtx(({ item }) => [
                          createVNode("span", { class: "text-caption" }, toDisplayString(item.description), 1)
                        ]),
                        "item.category": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: unref(getCategoryColor)(item.category),
                            small: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.category), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.actions": withCtx(({ item }) => [
                          createVNode(_component_NuxtLink, {
                            to: item.detail
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                size: "small",
                                variant: "text",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Details ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 1
                      }, 8, ["items"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Holidays.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Holidays = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dfecc67"]]);

export { Holidays as default };
//# sourceMappingURL=Holidays-CNdf6ZxU.mjs.map
