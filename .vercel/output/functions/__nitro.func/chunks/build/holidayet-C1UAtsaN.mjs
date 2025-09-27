import { ref, computed, withCtx, createVNode, unref, isRef, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, watch, nextTick, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, E as useProxiedModel } from './server.mjs';
import { V as VApp, a as VMain } from './VMain-BrqNVVcg.mjs';
import { V as VContainer, a as VRow, b as VCol, c as useRender } from './VRow-DuOE5lZP.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BtAk_Fsm.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
import { b as VBtnToggle, V as VBtn } from './VBtn-CtUSWaMx.mjs';
import { V as VChip, u as useScopeId, c as VOverlay, m as makeVOverlayProps, a as VDialogTransition } from './VOverlay-CWEBiN_D.mjs';
import { c as createSimpleFunctional } from './createSimpleFunctional-Cf07O5xJ.mjs';
import { f as forwardRefs } from './forwardRefs-CtBGLcOj.mjs';
import { V as VDefaultsProvider } from './index-CaPUijDs.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
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
import './ssrBoot-ZQn7gOuX.mjs';
import './router-D8sdwdYd.mjs';
import './color-DbIj6V-T.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './index-DsqekkR1.mjs';
import './position-kce-9oVv.mjs';
import './group-CNE9VaDa.mjs';
import './animation-APx-zXWD.mjs';
import './index-BsXMJvGl.mjs';
import './lazy-DuD9WWOI.mjs';

const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onAfterEnter() {
      emit("afterEnter");
      if ((props.scrim || props.retainFocus) && overlay.value?.contentEl && !overlay.value.contentEl.contains((void 0).activeElement)) {
        overlay.value.contentEl.focus({
          preventScroll: true
        });
      }
    }
    function onAfterLeave() {
      emit("afterLeave");
    }
    watch(isActive, async (val) => {
      if (!val) {
        await nextTick();
        overlay.value.activatorEl?.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const activatorProps = mergeProps({
        "aria-haspopup": "dialog"
      }, props.activatorProps);
      const contentProps = mergeProps({
        tabindex: -1
      }, props.contentProps);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps,
        "contentProps": contentProps,
        "height": !props.fullscreen ? props.height : void 0,
        "width": !props.fullscreen ? props.width : void 0,
        "maxHeight": !props.fullscreen ? props.maxHeight : void 0,
        "maxWidth": !props.fullscreen ? props.maxWidth : void 0,
        "role": "dialog",
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = {
  __name: "holidayet",
  __ssrInlineRender: true,
  setup(__props) {
    const EthiopianDate = {
      now() {
        return /* @__PURE__ */ new Date("2025-09-01T16:28:00");
      },
      // Simplified conversion function for this example
      fromGregorian(year, month, day) {
        const gregorianDate = new Date(year, month - 1, day);
        const dayOfWeek = gregorianDate.toLocaleDateString("en-US", { weekday: "long" });
        const ethiopianYear = year - 7;
        const ethiopianMonth = month + 4;
        const ethiopianDay = day;
        const amharicMonths = ["መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን"];
        return {
          year: ethiopianYear,
          month: ethiopianMonth,
          day: ethiopianDay,
          dayOfWeek,
          amharicMonth: amharicMonths[ethiopianMonth - 1]
        };
      }
    };
    const filterCategory = ref("all");
    const dialog = ref(false);
    const selectedHoliday = ref({});
    const staticHolidays = [
      {
        title: { am: "አዲስ ዓመት", en: "Ethiopian New Year" },
        date: { month: 1, day: 1 },
        category: "National",
        description: "Marks the beginning of the Ethiopian calendar year, also known as Enkutatash."
      },
      {
        title: { am: "መስቀል", en: "Meskel" },
        date: { month: 1, day: 17 },
        category: "Religious",
        description: "A major religious holiday commemorating the finding of the True Cross."
      },
      {
        title: { am: "ገና", en: "Christmas" },
        date: { month: 4, day: 29 },
        category: "Religious",
        description: "The Ethiopian Orthodox celebration of the birth of Jesus Christ."
      },
      {
        title: { am: "ጥምቀት", en: "Epiphany / Timkat" },
        date: { month: 5, day: 11 },
        category: "Religious",
        description: "Celebrates the baptism of Jesus Christ in the Jordan River."
      },
      {
        title: { am: "የአድዋ ድል በዓል", en: "Adwa Victory Day" },
        date: { month: 6, day: 23 },
        category: "National",
        description: "Commemorates Ethiopia's victory over Italy in the Battle of Adwa."
      },
      {
        title: { am: "የዓለም የሠራተኞች ቀን", en: "International Workers' Day" },
        date: { month: 8, day: 23 },
        category: "Cultural",
        description: "A global holiday celebrating the achievements of workers."
      },
      {
        title: { am: "የአርበኞች ቀን", en: "Patriots' Victory Day" },
        date: { month: 8, day: 27 },
        category: "National",
        description: "Honors the Ethiopian patriots who fought against the Italian occupation."
      }
    ];
    function calculateFasika(year) {
      const a = year % 19;
      const b = Math.floor(year / 100);
      const c = year % 100;
      const d = Math.floor(b / 4);
      const e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4);
      const k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31);
      const day = (h + l - 7 * m + 114) % 31 + 1;
      const gregorianFasika = new Date(year, month - 1, day);
      const ethiopianFasika = EthiopianDate.fromGregorian(gregorianFasika.getFullYear(), gregorianFasika.getMonth() + 1, gregorianFasika.getDate());
      return {
        title: { am: "ፋሲካ", en: "Fasika (Easter)" },
        date: { year: ethiopianFasika.year, month: ethiopianFasika.month, day: ethiopianFasika.day },
        category: "Religious",
        description: "The Ethiopian Orthodox celebration of the Resurrection of Jesus Christ."
      };
    }
    function getHolidaysForYear(year) {
      const allHolidays2 = [...staticHolidays];
      allHolidays2.push(calculateFasika(year));
      return allHolidays2;
    }
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const allHolidays = ref(getHolidaysForYear(currentYear));
    function formatHoliday(holiday) {
      const today = EthiopianDate.now();
      const todayGregorian = new Date(today);
      const currentGregorianYear = todayGregorian.getFullYear();
      let gregorianYear = currentGregorianYear;
      let holidayDate = new Date(gregorianYear, holiday.date.month - 1, holiday.date.day);
      if (holiday.date.month < 4) {
        gregorianYear = currentGregorianYear + 1;
      }
      const ethiopianDate = `${holiday.date.amharicMonth} ${holiday.date.day}, ${holiday.date.year}`;
      const gregorianDate = `${holidayDate.toLocaleString("en-US", { month: "long", day: "numeric" })}, ${gregorianYear}`;
      const dayOfWeek = holidayDate.toLocaleString("en-US", { weekday: "long" });
      const timeDifference = holidayDate.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDifference / (1e3 * 60 * 60 * 24));
      return {
        ...holiday,
        ethiopianDate,
        gregorianDate,
        dayOfWeek,
        daysLeft
      };
    }
    const holidaysData = computed(() => {
      return allHolidays.value.map(formatHoliday);
    });
    const filteredHolidays = computed(() => {
      let list = holidaysData.value;
      if (filterCategory.value === "upcoming") {
        return list.filter((h) => h.daysLeft >= 0).sort((a, b) => a.daysLeft - b.daysLeft);
      } else if (filterCategory.value !== "all") {
        return list.filter((h) => h.category.toLowerCase() === filterCategory.value);
      }
      return list;
    });
    const showDetails = (holiday) => {
      selectedHoliday.value = holiday;
      dialog.value = true;
    };
    const getCategoryColor = (category) => {
      switch (category) {
        case "Religious":
          return "red-darken-2";
        case "National":
          return "green-darken-2";
        case "Cultural":
          return "yellow-darken-2";
        default:
          return "blue-grey-darken-2";
      }
    };
    const getCountdownColor = (days) => {
      if (days <= 7 && days >= 0) {
        return "text-green-darken-2";
      } else if (days > 7) {
        return "text-blue-darken-2";
      } else {
        return "text-grey-darken-1";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, { class: "bg-blue-grey-lighten-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "py-12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "mx-auto pa-4 pa-sm-8",
                          rounded: "xl",
                          elevation: "10",
                          "max-width": "1200"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "text-h4 text-sm-h3 font-weight-bold text-center mb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-blue-darken-4" data-v-e135c93e${_scopeId5}> የኢትዮጵያ በዓላት </span><br data-v-e135c93e${_scopeId5}><span class="text-sm-h5 text-blue-grey-darken-3" data-v-e135c93e${_scopeId5}> Ethiopian Holidays </span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-blue-darken-4" }, " የኢትዮጵያ በዓላት "),
                                      createVNode("br"),
                                      createVNode("span", { class: "text-sm-h5 text-blue-grey-darken-3" }, " Ethiopian Holidays ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-center mb-6 flex-wrap" data-v-e135c93e${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtnToggle, {
                                modelValue: unref(filterCategory),
                                "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : null,
                                rounded: "pill",
                                color: "blue-darken-4",
                                group: "",
                                mandatory: "",
                                class: "d-flex flex-wrap justify-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "all",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` All Holidays `);
                                        } else {
                                          return [
                                            createTextVNode(" All Holidays ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "upcoming",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Upcoming `);
                                        } else {
                                          return [
                                            createTextVNode(" Upcoming ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "religious",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Religious `);
                                        } else {
                                          return [
                                            createTextVNode(" Religious ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "national",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` National `);
                                        } else {
                                          return [
                                            createTextVNode(" National ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "cultural",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Cultural `);
                                        } else {
                                          return [
                                            createTextVNode(" Cultural ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        value: "all",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" All Holidays ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "upcoming",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Upcoming ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "religious",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Religious ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "national",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" National ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "cultural",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cultural ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VRow, { dense: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(filteredHolidays), (holiday) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: holiday.title.en,
                                        cols: "12",
                                        md: "6",
                                        lg: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                              rounded: "xl",
                                              elevation: "5"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex justify-space-between align-start mb-2" data-v-e135c93e${_scopeId7}><div class="flex-grow-1" data-v-e135c93e${_scopeId7}><div class="text-h6 text-blue-darken-4 font-weight-bold" data-v-e135c93e${_scopeId7}>${ssrInterpolate(holiday.title.en)}</div><div class="text-subtitle-1 text-blue-grey-darken-2" data-v-e135c93e${_scopeId7}>${ssrInterpolate(holiday.title.am)}</div></div>`);
                                                  _push8(ssrRenderComponent(VChip, {
                                                    color: getCategoryColor(holiday.category),
                                                    class: "font-weight-bold",
                                                    size: "small",
                                                    label: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(holiday.category)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(holiday.category), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div><div class="mb-4" data-v-e135c93e${_scopeId7}><div class="text-body-1 font-weight-medium" data-v-e135c93e${_scopeId7}> Date: ${ssrInterpolate(holiday.ethiopianDate)} (${ssrInterpolate(holiday.gregorianDate)}) </div><div class="text-body-1 font-weight-medium" data-v-e135c93e${_scopeId7}> Day: ${ssrInterpolate(holiday.dayOfWeek)}</div><div class="${ssrRenderClass([getCountdownColor(holiday.daysLeft), "text-h5 font-weight-bold mt-2"])}" data-v-e135c93e${_scopeId7}>${ssrInterpolate(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed")}</div></div>`);
                                                  _push8(ssrRenderComponent(VSpacer, null, null, _parent8, _scopeId7));
                                                  _push8(`<div class="d-flex justify-end mt-2" data-v-e135c93e${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    variant: "text",
                                                    color: "blue-darken-4",
                                                    class: "text-none font-weight-bold",
                                                    onClick: ($event) => showDetails(holiday)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Read More `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Read More ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                                      createVNode("div", { class: "flex-grow-1" }, [
                                                        createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                                        createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                                      ]),
                                                      createVNode(VChip, {
                                                        color: getCategoryColor(holiday.category),
                                                        class: "font-weight-bold",
                                                        size: "small",
                                                        label: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(holiday.category), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    createVNode("div", { class: "mb-4" }, [
                                                      createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                                      createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                                      createVNode("div", {
                                                        class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                                      }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                                    ]),
                                                    createVNode(VSpacer),
                                                    createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                                      createVNode(VBtn, {
                                                        variant: "text",
                                                        color: "blue-darken-4",
                                                        class: "text-none font-weight-bold",
                                                        onClick: ($event) => showDetails(holiday)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Read More ")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                                rounded: "xl",
                                                elevation: "5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                                    createVNode("div", { class: "flex-grow-1" }, [
                                                      createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                                      createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                                    ]),
                                                    createVNode(VChip, {
                                                      color: getCategoryColor(holiday.category),
                                                      class: "font-weight-bold",
                                                      size: "small",
                                                      label: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(holiday.category), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  createVNode("div", { class: "mb-4" }, [
                                                    createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                                    createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                                    createVNode("div", {
                                                      class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                                    }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                                  ]),
                                                  createVNode(VSpacer),
                                                  createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                                    createVNode(VBtn, {
                                                      variant: "text",
                                                      color: "blue-darken-4",
                                                      class: "text-none font-weight-bold",
                                                      onClick: ($event) => showDetails(holiday)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Read More ")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredHolidays), (holiday) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: holiday.title.en,
                                          cols: "12",
                                          md: "6",
                                          lg: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                              rounded: "xl",
                                              elevation: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                                  createVNode("div", { class: "flex-grow-1" }, [
                                                    createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                                    createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                                  ]),
                                                  createVNode(VChip, {
                                                    color: getCategoryColor(holiday.category),
                                                    class: "font-weight-bold",
                                                    size: "small",
                                                    label: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(holiday.category), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                createVNode("div", { class: "mb-4" }, [
                                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                                  createVNode("div", {
                                                    class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                                  }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                                ]),
                                                createVNode(VSpacer),
                                                createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                                  createVNode(VBtn, {
                                                    variant: "text",
                                                    color: "blue-darken-4",
                                                    class: "text-none font-weight-bold",
                                                    onClick: ($event) => showDetails(holiday)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Read More ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "text-h4 text-sm-h3 font-weight-bold text-center mb-6" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-blue-darken-4" }, " የኢትዮጵያ በዓላት "),
                                    createVNode("br"),
                                    createVNode("span", { class: "text-sm-h5 text-blue-grey-darken-3" }, " Ethiopian Holidays ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "mb-6" }),
                                createVNode("div", { class: "d-flex justify-center mb-6 flex-wrap" }, [
                                  createVNode(VBtnToggle, {
                                    modelValue: unref(filterCategory),
                                    "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : null,
                                    rounded: "pill",
                                    color: "blue-darken-4",
                                    group: "",
                                    mandatory: "",
                                    class: "d-flex flex-wrap justify-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        value: "all",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" All Holidays ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "upcoming",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Upcoming ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "religious",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Religious ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "national",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" National ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "cultural",
                                        class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cultural ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VRow, { dense: "" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredHolidays), (holiday) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: holiday.title.en,
                                        cols: "12",
                                        md: "6",
                                        lg: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                            rounded: "xl",
                                            elevation: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                                createVNode("div", { class: "flex-grow-1" }, [
                                                  createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                                  createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                                ]),
                                                createVNode(VChip, {
                                                  color: getCategoryColor(holiday.category),
                                                  class: "font-weight-bold",
                                                  size: "small",
                                                  label: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(holiday.category), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              createVNode("div", { class: "mb-4" }, [
                                                createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                                createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                                createVNode("div", {
                                                  class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                                }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                              ]),
                                              createVNode(VSpacer),
                                              createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                                createVNode(VBtn, {
                                                  variant: "text",
                                                  color: "blue-darken-4",
                                                  class: "text-none font-weight-bold",
                                                  onClick: ($event) => showDetails(holiday)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Read More ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                          createVNode(VCard, {
                            class: "mx-auto pa-4 pa-sm-8",
                            rounded: "xl",
                            elevation: "10",
                            "max-width": "1200"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-h4 text-sm-h3 font-weight-bold text-center mb-6" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-blue-darken-4" }, " የኢትዮጵያ በዓላት "),
                                  createVNode("br"),
                                  createVNode("span", { class: "text-sm-h5 text-blue-grey-darken-3" }, " Ethiopian Holidays ")
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "mb-6" }),
                              createVNode("div", { class: "d-flex justify-center mb-6 flex-wrap" }, [
                                createVNode(VBtnToggle, {
                                  modelValue: unref(filterCategory),
                                  "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : null,
                                  rounded: "pill",
                                  color: "blue-darken-4",
                                  group: "",
                                  mandatory: "",
                                  class: "d-flex flex-wrap justify-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      value: "all",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" All Holidays ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "upcoming",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Upcoming ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "religious",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Religious ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "national",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" National ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "cultural",
                                      class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cultural ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VRow, { dense: "" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredHolidays), (holiday) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: holiday.title.en,
                                      cols: "12",
                                      md: "6",
                                      lg: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                          rounded: "xl",
                                          elevation: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                              createVNode("div", { class: "flex-grow-1" }, [
                                                createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                                createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                              ]),
                                              createVNode(VChip, {
                                                color: getCategoryColor(holiday.category),
                                                class: "font-weight-bold",
                                                size: "small",
                                                label: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(holiday.category), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                              createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                              createVNode("div", {
                                                class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                              }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                            ]),
                                            createVNode(VSpacer),
                                            createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                              createVNode(VBtn, {
                                                variant: "text",
                                                color: "blue-darken-4",
                                                class: "text-none font-weight-bold",
                                                onClick: ($event) => showDetails(holiday)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Read More ")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(VContainer, { class: "py-12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "mx-auto pa-4 pa-sm-8",
                          rounded: "xl",
                          elevation: "10",
                          "max-width": "1200"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-h4 text-sm-h3 font-weight-bold text-center mb-6" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-blue-darken-4" }, " የኢትዮጵያ በዓላት "),
                                createVNode("br"),
                                createVNode("span", { class: "text-sm-h5 text-blue-grey-darken-3" }, " Ethiopian Holidays ")
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "mb-6" }),
                            createVNode("div", { class: "d-flex justify-center mb-6 flex-wrap" }, [
                              createVNode(VBtnToggle, {
                                modelValue: unref(filterCategory),
                                "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : null,
                                rounded: "pill",
                                color: "blue-darken-4",
                                group: "",
                                mandatory: "",
                                class: "d-flex flex-wrap justify-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    value: "all",
                                    class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" All Holidays ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "upcoming",
                                    class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Upcoming ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "religious",
                                    class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Religious ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "national",
                                    class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" National ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "cultural",
                                    class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cultural ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(VRow, { dense: "" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredHolidays), (holiday) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: holiday.title.en,
                                    cols: "12",
                                    md: "6",
                                    lg: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                        rounded: "xl",
                                        elevation: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                            createVNode("div", { class: "flex-grow-1" }, [
                                              createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                              createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                            ]),
                                            createVNode(VChip, {
                                              color: getCategoryColor(holiday.category),
                                              class: "font-weight-bold",
                                              size: "small",
                                              label: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(holiday.category), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                            createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                            createVNode("div", {
                                              class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                            }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                          ]),
                                          createVNode(VSpacer),
                                          createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                            createVNode(VBtn, {
                                              variant: "text",
                                              color: "blue-darken-4",
                                              class: "text-none font-weight-bold",
                                              onClick: ($event) => showDetails(holiday)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Read More ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            _push2(ssrRenderComponent(VDialog, {
              modelValue: unref(dialog),
              "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
              "max-width": "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { rounded: "xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex justify-space-between align-center text-h5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-blue-darken-4 font-weight-bold" data-v-e135c93e${_scopeId4}>${ssrInterpolate(unref(selectedHoliday).title.en)}</span>`);
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "flat"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-close`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-close")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-close")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", { class: "text-blue-darken-4 font-weight-bold" }, toDisplayString(unref(selectedHoliday).title.en), 1),
                                createVNode(VBtn, {
                                  icon: "",
                                  onClick: ($event) => dialog.value = false,
                                  variant: "flat"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-close")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-subtitle-1 text-blue-grey-darken-2 mb-2" data-v-e135c93e${_scopeId4}>${ssrInterpolate(unref(selectedHoliday).title.am)}</div><p class="text-body-1 mb-2" data-v-e135c93e${_scopeId4}><strong data-v-e135c93e${_scopeId4}>Date:</strong> ${ssrInterpolate(unref(selectedHoliday).ethiopianDate)} (${ssrInterpolate(unref(selectedHoliday).gregorianDate)}) </p><p class="text-body-1 mb-2" data-v-e135c93e${_scopeId4}><strong data-v-e135c93e${_scopeId4}>Day:</strong> ${ssrInterpolate(unref(selectedHoliday).dayOfWeek)}</p><p class="text-body-1 mb-2" data-v-e135c93e${_scopeId4}><strong data-v-e135c93e${_scopeId4}>Category:</strong> ${ssrInterpolate(unref(selectedHoliday).category)}</p>`);
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<p class="text-body-1" data-v-e135c93e${_scopeId4}>${ssrInterpolate(unref(selectedHoliday).description)}</p>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2 mb-2" }, toDisplayString(unref(selectedHoliday).title.am), 1),
                                createVNode("p", { class: "text-body-1 mb-2" }, [
                                  createVNode("strong", null, "Date:"),
                                  createTextVNode(" " + toDisplayString(unref(selectedHoliday).ethiopianDate) + " (" + toDisplayString(unref(selectedHoliday).gregorianDate) + ") ", 1)
                                ]),
                                createVNode("p", { class: "text-body-1 mb-2" }, [
                                  createVNode("strong", null, "Day:"),
                                  createTextVNode(" " + toDisplayString(unref(selectedHoliday).dayOfWeek), 1)
                                ]),
                                createVNode("p", { class: "text-body-1 mb-2" }, [
                                  createVNode("strong", null, "Category:"),
                                  createTextVNode(" " + toDisplayString(unref(selectedHoliday).category), 1)
                                ]),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("p", { class: "text-body-1" }, toDisplayString(unref(selectedHoliday).description), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex justify-space-between align-center text-h5" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-blue-darken-4 font-weight-bold" }, toDisplayString(unref(selectedHoliday).title.en), 1),
                              createVNode(VBtn, {
                                icon: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "flat"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-close")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2 mb-2" }, toDisplayString(unref(selectedHoliday).title.am), 1),
                              createVNode("p", { class: "text-body-1 mb-2" }, [
                                createVNode("strong", null, "Date:"),
                                createTextVNode(" " + toDisplayString(unref(selectedHoliday).ethiopianDate) + " (" + toDisplayString(unref(selectedHoliday).gregorianDate) + ") ", 1)
                              ]),
                              createVNode("p", { class: "text-body-1 mb-2" }, [
                                createVNode("strong", null, "Day:"),
                                createTextVNode(" " + toDisplayString(unref(selectedHoliday).dayOfWeek), 1)
                              ]),
                              createVNode("p", { class: "text-body-1 mb-2" }, [
                                createVNode("strong", null, "Category:"),
                                createTextVNode(" " + toDisplayString(unref(selectedHoliday).category), 1)
                              ]),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("p", { class: "text-body-1" }, toDisplayString(unref(selectedHoliday).description), 1)
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
                    createVNode(VCard, { rounded: "xl" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex justify-space-between align-center text-h5" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-blue-darken-4 font-weight-bold" }, toDisplayString(unref(selectedHoliday).title.en), 1),
                            createVNode(VBtn, {
                              icon: "",
                              onClick: ($event) => dialog.value = false,
                              variant: "flat"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-close")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2 mb-2" }, toDisplayString(unref(selectedHoliday).title.am), 1),
                            createVNode("p", { class: "text-body-1 mb-2" }, [
                              createVNode("strong", null, "Date:"),
                              createTextVNode(" " + toDisplayString(unref(selectedHoliday).ethiopianDate) + " (" + toDisplayString(unref(selectedHoliday).gregorianDate) + ") ", 1)
                            ]),
                            createVNode("p", { class: "text-body-1 mb-2" }, [
                              createVNode("strong", null, "Day:"),
                              createTextVNode(" " + toDisplayString(unref(selectedHoliday).dayOfWeek), 1)
                            ]),
                            createVNode("p", { class: "text-body-1 mb-2" }, [
                              createVNode("strong", null, "Category:"),
                              createTextVNode(" " + toDisplayString(unref(selectedHoliday).category), 1)
                            ]),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("p", { class: "text-body-1" }, toDisplayString(unref(selectedHoliday).description), 1)
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
          } else {
            return [
              createVNode(VMain, { class: "bg-blue-grey-lighten-5" }, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "py-12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "mx-auto pa-4 pa-sm-8",
                        rounded: "xl",
                        elevation: "10",
                        "max-width": "1200"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "text-h4 text-sm-h3 font-weight-bold text-center mb-6" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-blue-darken-4" }, " የኢትዮጵያ በዓላት "),
                              createVNode("br"),
                              createVNode("span", { class: "text-sm-h5 text-blue-grey-darken-3" }, " Ethiopian Holidays ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mb-6" }),
                          createVNode("div", { class: "d-flex justify-center mb-6 flex-wrap" }, [
                            createVNode(VBtnToggle, {
                              modelValue: unref(filterCategory),
                              "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : null,
                              rounded: "pill",
                              color: "blue-darken-4",
                              group: "",
                              mandatory: "",
                              class: "d-flex flex-wrap justify-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  value: "all",
                                  class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" All Holidays ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "upcoming",
                                  class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Upcoming ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "religious",
                                  class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Religious ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "national",
                                  class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" National ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "cultural",
                                  class: "ma-1 rounded-xl px-4 text-none font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cultural ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VRow, { dense: "" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredHolidays), (holiday) => {
                                return openBlock(), createBlock(VCol, {
                                  key: holiday.title.en,
                                  cols: "12",
                                  md: "6",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: ["holiday-card pa-4 d-flex flex-column", { "upcoming-card": holiday.daysLeft <= 7 }],
                                      rounded: "xl",
                                      elevation: "5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-start mb-2" }, [
                                          createVNode("div", { class: "flex-grow-1" }, [
                                            createVNode("div", { class: "text-h6 text-blue-darken-4 font-weight-bold" }, toDisplayString(holiday.title.en), 1),
                                            createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2" }, toDisplayString(holiday.title.am), 1)
                                          ]),
                                          createVNode(VChip, {
                                            color: getCategoryColor(holiday.category),
                                            class: "font-weight-bold",
                                            size: "small",
                                            label: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(holiday.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("div", { class: "text-body-1 font-weight-medium" }, " Date: " + toDisplayString(holiday.ethiopianDate) + " (" + toDisplayString(holiday.gregorianDate) + ") ", 1),
                                          createVNode("div", { class: "text-body-1 font-weight-medium" }, " Day: " + toDisplayString(holiday.dayOfWeek), 1),
                                          createVNode("div", {
                                            class: ["text-h5 font-weight-bold mt-2", getCountdownColor(holiday.daysLeft)]
                                          }, toDisplayString(holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : "Passed"), 3)
                                        ]),
                                        createVNode(VSpacer),
                                        createVNode("div", { class: "d-flex justify-end mt-2" }, [
                                          createVNode(VBtn, {
                                            variant: "text",
                                            color: "blue-darken-4",
                                            class: "text-none font-weight-bold",
                                            onClick: ($event) => showDetails(holiday)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Read More ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              createVNode(VDialog, {
                modelValue: unref(dialog),
                "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
                "max-width": "500"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { rounded: "xl" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex justify-space-between align-center text-h5" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-blue-darken-4 font-weight-bold" }, toDisplayString(unref(selectedHoliday).title.en), 1),
                          createVNode(VBtn, {
                            icon: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "flat"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-subtitle-1 text-blue-grey-darken-2 mb-2" }, toDisplayString(unref(selectedHoliday).title.am), 1),
                          createVNode("p", { class: "text-body-1 mb-2" }, [
                            createVNode("strong", null, "Date:"),
                            createTextVNode(" " + toDisplayString(unref(selectedHoliday).ethiopianDate) + " (" + toDisplayString(unref(selectedHoliday).gregorianDate) + ") ", 1)
                          ]),
                          createVNode("p", { class: "text-body-1 mb-2" }, [
                            createVNode("strong", null, "Day:"),
                            createTextVNode(" " + toDisplayString(unref(selectedHoliday).dayOfWeek), 1)
                          ]),
                          createVNode("p", { class: "text-body-1 mb-2" }, [
                            createVNode("strong", null, "Category:"),
                            createTextVNode(" " + toDisplayString(unref(selectedHoliday).category), 1)
                          ]),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode("p", { class: "text-body-1" }, toDisplayString(unref(selectedHoliday).description), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/holidayet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const holidayet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e135c93e"]]);

export { holidayet as default };
//# sourceMappingURL=holidayet-C1UAtsaN.mjs.map
