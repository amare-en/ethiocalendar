import { defineComponent, ref, withCtx, createTextVNode, createVNode, toDisplayString, unref, createBlock, openBlock, Fragment, renderList, toRef, useId, mergeProps, createElementVNode, normalizeStyle, normalizeClass, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { a as getCurrentEthiopianDate, b as getEthiopianMonthName, c as getEthiopianDayName, d as getEthiopianMonthDays, e as ethiopianToGregorian } from './ethiopianDate-D8eUZq7u.mjs';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, E as useProxiedModel, ai as filterInputAttrs, ak as IN_BROWSER } from './server.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BtAk_Fsm.mjs';
import { u as useEthiopianHolidays, V as VTable } from './VTable-DmGOS52C.mjs';
import { V as VContainer, a as VRow, b as VCol, c as useRender } from './VRow-DuOE5lZP.mjs';
import { V as VBtn, a as VProgressCircular } from './VBtn-CtUSWaMx.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import { c as VScaleTransition } from './index-BsXMJvGl.mjs';
import { V as VDefaultsProvider } from './index-CaPUijDs.mjs';
import { a as useFocus, V as VInput, b as makeVInputProps } from './VInput-B9fom_-l.mjs';
import { V as VSelectionControl, m as makeVSelectionControlProps } from './VSelectionControl-CrgHcrmU.mjs';
import { f as forwardRefs } from './forwardRefs-CtBGLcOj.mjs';
import { c as useLoader, L as LoaderSlot } from './position-kce-9oVv.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
import 'ethiopian-date';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import './createSimpleFunctional-Cf07O5xJ.mjs';
import './router-D8sdwdYd.mjs';
import './color-DbIj6V-T.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './index-DsqekkR1.mjs';
import './group-CNE9VaDa.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CalendarWeekdays",
  __ssrInlineRender: true,
  props: {
    weekdays: {},
    showGregorian: { type: Boolean }
  },
  setup(__props) {
    const englishWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(_attrs)} data-v-b83ba752><tr data-v-b83ba752><!--[-->`);
      ssrRenderList(_ctx.weekdays, (day, index) => {
        _push(`<th class="text-center text-subtitle-2" data-v-b83ba752><div class="weekday-labels" data-v-b83ba752><span data-v-b83ba752>${ssrInterpolate(day)}</span>`);
        if (_ctx.showGregorian) {
          _push(`<span class="english-weekday text-caption text-grey-darken-1" data-v-b83ba752>${ssrInterpolate(englishWeekdays[index])}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></th>`);
      });
      _push(`<!--]--></tr></thead>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calendar/CalendarWeekdays.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CalendarWeekdays = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-b83ba752"]]), { __name: "CalendarWeekdays" });
const GEEZ_MAP = {
  1: "፩",
  2: "፪",
  3: "፫",
  4: "፬",
  5: "፭",
  6: "፮",
  7: "፯",
  8: "፰",
  9: "፱",
  10: "፲",
  20: "፳",
  30: "፴",
  40: "፵",
  50: "፶",
  60: "፷",
  70: "፸",
  80: "፹",
  90: "፺",
  100: "፻",
  1e4: "፼"
};
function toGeez(n) {
  if (n === 0) return "0";
  if (n <= 10) return GEEZ_MAP[n] ?? String(n);
  let out = "";
  let num = n;
  if (num >= 1e4) {
    const blocks = Math.floor(num / 1e4);
    out += toGeez(blocks) + GEEZ_MAP[1e4];
    num %= 1e4;
  }
  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    if (hundreds > 1) out += toGeez(hundreds);
    out += GEEZ_MAP[100];
    num %= 100;
  }
  if (num >= 10) {
    const tens = Math.floor(num / 10) * 10;
    out += GEEZ_MAP[tens] ?? "";
    num %= 10;
  }
  if (num > 0) out += GEEZ_MAP[num] ?? "";
  return out || String(n);
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CalendarDayCell",
  __ssrInlineRender: true,
  props: {
    day: {},
    isCurrentDay: { type: Boolean },
    isSelected: { type: Boolean },
    isHoliday: { type: Boolean },
    showGregorian: { type: Boolean }
  },
  emits: ["select-date"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: ["text-center day-cell", {
          "current-day": _ctx.isCurrentDay,
          "selected-day": _ctx.isSelected,
          "holiday-day": _ctx.isHoliday,
          "different-month": _ctx.day && !_ctx.day.isCurrentMonth,
          "is-clickable": _ctx.day
        }]
      }, _attrs))} data-v-c50ec630>`);
      if (_ctx.day) {
        _push(`<div class="day-content" data-v-c50ec630><div class="top-row" data-v-c50ec630><span class="geez-numeral" data-v-c50ec630>${ssrInterpolate(unref(toGeez)(_ctx.day.day))}</span><span class="arabic-numeral" data-v-c50ec630>${ssrInterpolate(_ctx.day.day)}</span></div>`);
        if (_ctx.showGregorian) {
          _push(`<div class="gregorian-date-display" data-v-c50ec630>${ssrInterpolate(_ctx.day.gregorianDate)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="empty-day" data-v-c50ec630></div>`);
      }
      _push(`</td>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calendar/CalendarDayCell.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CalendarDayCell = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-c50ec630"]]), { __name: "CalendarDayCell" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CalendarGrid",
  __ssrInlineRender: true,
  props: {
    year: {},
    month: {},
    showGregorian: { type: Boolean },
    holidays: {}
  },
  setup(__props) {
    const props = __props;
    const selectedDate = ref(null);
    const monthName = computed(() => getEthiopianMonthName(props.month));
    const weekDays = computed(() => Array.from({ length: 7 }, (_, i) => getEthiopianDayName(i)));
    const calendarGrid = computed(() => {
      const daysInMonth = getEthiopianMonthDays(props.year, props.month);
      const firstDayOfEthMonth = ethiopianToGregorian(props.year, props.month, 1);
      const startingDayOfWeek = firstDayOfEthMonth.getDay();
      const days = [];
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const gregorianDate = ethiopianToGregorian(props.year, props.month, day);
        days.push({
          day,
          isCurrentMonth: true,
          ethiopian: { year: props.year, month: props.month, day },
          gregorianDate: gregorianDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          date: gregorianDate
        });
      }
      const weeks = [];
      for (let i = 0; i < days.length; i += 7) {
        const week = days.slice(i, i + 7);
        while (week.length < 7) {
          week.push(null);
        }
        weeks.push(week);
      }
      return weeks;
    });
    function isCurrentDay(day) {
      if (!day) return false;
      const today = getCurrentEthiopianDate();
      return day.ethiopian.year === today.year && day.ethiopian.month === today.month && day.ethiopian.day === today.day;
    }
    function isSelected(day) {
      if (!day || !selectedDate.value) return false;
      return day.ethiopian.year === selectedDate.value.ethiopian.year && day.ethiopian.month === selectedDate.value.ethiopian.month && day.ethiopian.day === selectedDate.value.ethiopian.day;
    }
    function isHoliday(day) {
      if (!day) return false;
      return props.holidays.some(
        (holiday) => holiday.year === day.ethiopian.year && holiday.month === day.ethiopian.month && holiday.day === day.ethiopian.day
      );
    }
    function selectDate(day) {
      if (!day) return;
      selectedDate.value = day;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "mb-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "bg-primary text-white text-center text-subtitle-1 font-weight-bold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(monthName.value)} ${ssrInterpolate(_ctx.year)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(monthName.value) + " " + toDisplayString(_ctx.year), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTable, {
                    density: "comfortable",
                    "fixed-header": "",
                    class: "calendar-table"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CalendarWeekdays, {
                          weekdays: weekDays.value,
                          "show-gregorian": _ctx.showGregorian
                        }, null, _parent4, _scopeId3));
                        _push4(`<tbody data-v-4292a98f${_scopeId3}><!--[-->`);
                        ssrRenderList(calendarGrid.value, (week, index) => {
                          _push4(`<tr data-v-4292a98f${_scopeId3}><!--[-->`);
                          ssrRenderList(week, (day, dayIndex) => {
                            _push4(ssrRenderComponent(CalendarDayCell, {
                              key: dayIndex,
                              day,
                              "is-current-day": isCurrentDay(day),
                              "is-selected": isSelected(day),
                              "is-holiday": isHoliday(day),
                              "show-gregorian": _ctx.showGregorian,
                              onSelectDate: selectDate
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode(CalendarWeekdays, {
                            weekdays: weekDays.value,
                            "show-gregorian": _ctx.showGregorian
                          }, null, 8, ["weekdays", "show-gregorian"]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(calendarGrid.value, (week, index) => {
                              return openBlock(), createBlock("tr", { key: index }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(week, (day, dayIndex) => {
                                  return openBlock(), createBlock(CalendarDayCell, {
                                    key: dayIndex,
                                    day,
                                    "is-current-day": isCurrentDay(day),
                                    "is-selected": isSelected(day),
                                    "is-holiday": isHoliday(day),
                                    "show-gregorian": _ctx.showGregorian,
                                    onSelectDate: selectDate
                                  }, null, 8, ["day", "is-current-day", "is-selected", "is-holiday", "show-gregorian"]);
                                }), 128))
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTable, {
                      density: "comfortable",
                      "fixed-header": "",
                      class: "calendar-table"
                    }, {
                      default: withCtx(() => [
                        createVNode(CalendarWeekdays, {
                          weekdays: weekDays.value,
                          "show-gregorian": _ctx.showGregorian
                        }, null, 8, ["weekdays", "show-gregorian"]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(calendarGrid.value, (week, index) => {
                            return openBlock(), createBlock("tr", { key: index }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(week, (day, dayIndex) => {
                                return openBlock(), createBlock(CalendarDayCell, {
                                  key: dayIndex,
                                  day,
                                  "is-current-day": isCurrentDay(day),
                                  "is-selected": isSelected(day),
                                  "is-holiday": isHoliday(day),
                                  "show-gregorian": _ctx.showGregorian,
                                  onSelectDate: selectDate
                                }, null, 8, ["day", "is-current-day", "is-selected", "is-holiday", "show-gregorian"]);
                              }), 128))
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "bg-primary text-white text-center text-subtitle-1 font-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(monthName.value) + " " + toDisplayString(_ctx.year), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VTable, {
                    density: "comfortable",
                    "fixed-header": "",
                    class: "calendar-table"
                  }, {
                    default: withCtx(() => [
                      createVNode(CalendarWeekdays, {
                        weekdays: weekDays.value,
                        "show-gregorian": _ctx.showGregorian
                      }, null, 8, ["weekdays", "show-gregorian"]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(calendarGrid.value, (week, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(week, (day, dayIndex) => {
                              return openBlock(), createBlock(CalendarDayCell, {
                                key: dayIndex,
                                day,
                                "is-current-day": isCurrentDay(day),
                                "is-selected": isSelected(day),
                                "is-holiday": isHoliday(day),
                                "show-gregorian": _ctx.showGregorian,
                                onSelectDate: selectDate
                              }, null, 8, ["day", "is-current-day", "is-selected", "is-holiday", "show-gregorian"]);
                            }), 128))
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calendar/CalendarGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CalendarGrid = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-4292a98f"]]), { __name: "CalendarGrid" });
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const inputRef = ref();
    const isForcedColorsModeActive = IN_BROWSER;
    const loaderColor = toRef(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = useId();
    const id = toRef(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      e.stopPropagation();
      e.preventDefault();
      control.value?.input?.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": inputRef,
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createElementVNode("div", {
                "class": normalizeClass(["v-switch__track", backgroundColorClasses.value]),
                "style": normalizeStyle(backgroundColorStyles.value),
                "onClick": onTrackClick
              }, [slots["track-true"] && createElementVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createElementVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createElementVNode(Fragment, null, [inputNode, createElementVNode("div", {
                "class": normalizeClass(["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value]),
                "style": normalizeStyle(props.inset ? void 0 : backgroundColorStyles.value)
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return forwardRefs({}, inputRef);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Ethiopia-Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const todayEth = getCurrentEthiopianDate();
    const selectedYear = ref(todayEth.year);
    const showGregorian = ref(true);
    const { holidays } = useEthiopianHolidays();
    const prevYear = () => {
      selectedYear.value--;
    };
    const nextYear = () => {
      selectedYear.value++;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "mb-6 align-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          onClick: prevYear,
                          variant: "text",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-chevron-left`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-chevron-left")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-chevron-left")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h4 font-weight-bold mx-4" data-v-a0d3f2ba${_scopeId3}>${ssrInterpolate(selectedYear.value)} ዓ.ም </h1>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          onClick: nextYear,
                          variant: "text",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-chevron-right`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-chevron-right")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-chevron-right")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            onClick: prevYear,
                            variant: "text",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chevron-left")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h4 font-weight-bold mx-4" }, toDisplayString(selectedYear.value) + " ዓ.ም ", 1),
                          createVNode(VBtn, {
                            icon: "",
                            onClick: nextYear,
                            variant: "text",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chevron-right")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          onClick: prevYear,
                          variant: "text",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-chevron-left")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h4 font-weight-bold mx-4" }, toDisplayString(selectedYear.value) + " ዓ.ም ", 1),
                        createVNode(VBtn, {
                          icon: "",
                          onClick: nextYear,
                          variant: "text",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-chevron-right")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex justify-end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSwitch, {
                          modelValue: showGregorian.value,
                          "onUpdate:modelValue": ($event) => showGregorian.value = $event,
                          label: "Show Gregorian Dates",
                          color: "primary",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSwitch, {
                            modelValue: showGregorian.value,
                            "onUpdate:modelValue": ($event) => showGregorian.value = $event,
                            label: "Show Gregorian Dates",
                            color: "primary",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSwitch, {
                          modelValue: showGregorian.value,
                          "onUpdate:modelValue": ($event) => showGregorian.value = $event,
                          label: "Show Gregorian Dates",
                          color: "primary",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(13, (month) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: month,
                      cols: "12",
                      sm: "6",
                      lg: "6",
                      xl: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(CalendarGrid, {
                            year: selectedYear.value,
                            month,
                            "show-gregorian": showGregorian.value,
                            holidays: unref(holidays)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(CalendarGrid, {
                              year: selectedYear.value,
                              month,
                              "show-gregorian": showGregorian.value,
                              holidays: unref(holidays)
                            }, null, 8, ["year", "month", "show-gregorian", "holidays"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(13, (month) => {
                      return createVNode(VCol, {
                        key: month,
                        cols: "12",
                        sm: "6",
                        lg: "6",
                        xl: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(CalendarGrid, {
                            year: selectedYear.value,
                            month,
                            "show-gregorian": showGregorian.value,
                            holidays: unref(holidays)
                          }, null, 8, ["year", "month", "show-gregorian", "holidays"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "mb-6 align-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        onClick: prevYear,
                        variant: "text",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chevron-left")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h4 font-weight-bold mx-4" }, toDisplayString(selectedYear.value) + " ዓ.ም ", 1),
                      createVNode(VBtn, {
                        icon: "",
                        onClick: nextYear,
                        variant: "text",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chevron-right")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex justify-end"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSwitch, {
                        modelValue: showGregorian.value,
                        "onUpdate:modelValue": ($event) => showGregorian.value = $event,
                        label: "Show Gregorian Dates",
                        color: "primary",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(13, (month) => {
                    return createVNode(VCol, {
                      key: month,
                      cols: "12",
                      sm: "6",
                      lg: "6",
                      xl: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(CalendarGrid, {
                          year: selectedYear.value,
                          month,
                          "show-gregorian": showGregorian.value,
                          holidays: unref(holidays)
                        }, null, 8, ["year", "month", "show-gregorian", "holidays"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "my-3" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Ethiopia-Calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EthiopiaCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0d3f2ba"]]);

export { EthiopiaCalendar as default };
//# sourceMappingURL=Ethiopia-Calendar-bfaotuPD.mjs.map
