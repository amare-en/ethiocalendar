import { defineComponent, withCtx, createVNode, ref, computed, watch, mergeProps, unref, isRef, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { toEthiopian, toGregorian } from 'ethiopian-date';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VSelect, a as VAlert } from './VSelect-A5-TMnCd.mjs';
import { V as VBtn } from './VBtn-CtUSWaMx.mjs';
import { _ as _export_sfc } from './server.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
import './createSimpleFunctional-Cf07O5xJ.mjs';
import './color-DbIj6V-T.mjs';
import './router-D8sdwdYd.mjs';
import './index-CaPUijDs.mjs';
import './position-kce-9oVv.mjs';
import './VIcon-xAIaYZjS.mjs';
import './VTextField-Ba7jKIdM.mjs';
import './index-BsXMJvGl.mjs';
import './index-DsqekkR1.mjs';
import './VInput-B9fom_-l.mjs';
import './animation-APx-zXWD.mjs';
import './forwardRefs-CtBGLcOj.mjs';
import './VList-B37lLHJc.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './VOverlay-CWEBiN_D.mjs';
import './group-CNE9VaDa.mjs';
import './lazy-DuD9WWOI.mjs';
import './VSelectionControl-CrgHcrmU.mjs';
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

const ETH_MONTHS = [
  "1 - መስከረም / Meskerem",
  "2 - ጥቅምት / Teqember",
  "3 - ህዳር / Hidar",
  "4 - ታኅሣሥ / Tahsas",
  "5 - ጥር / Tir",
  "6 - የካቲት / Genbot",
  "7 - መጋቢት / Megabit",
  "8 - ሚያዝያ / Miyazya",
  "9 - ግንቦት / Ginbot",
  "10 - ሰኔ / Sene",
  "11 - ሐምሌ / Hamle",
  "12 - ነሐሴ / Nehasé",
  "13 - ጳጉሜ / Paguemé"
];
const GR_MONTHS = [
  "1 - January",
  "2 - February",
  "3 - March",
  "4 - April",
  "5 - May",
  "6 - June",
  "7 - July",
  "8 - August",
  "9 - September",
  "10 - October",
  "11 - November",
  "12 - December"
];
function useDateConversion() {
  const ethDay = ref(1);
  const ethMonth = ref(ETH_MONTHS[0]);
  const ethYear = ref(2015);
  const convertedToGregorian = ref(null);
  const grDay = ref(1);
  const grMonth = ref(GR_MONTHS[0]);
  const grYear = ref((/* @__PURE__ */ new Date()).getFullYear());
  const convertedToEthiopian = ref(null);
  const convertEthToGr = (year, month, day) => {
    try {
      const res = toGregorian(year, month, day);
      if (!res) return null;
      if (res instanceof Date) {
        return res;
      }
      if (Array.isArray(res) && res.length >= 3) {
        const [y, m, d] = res;
        return new Date(y, m - 1, d);
      }
      if (typeof res === "object" && "year" in res && "month" in res && "day" in res) {
        const y = res.year;
        const m = res.month;
        const d = res.day;
        return new Date(y, m - 1, d);
      }
      const coerced = new Date(res);
      return isNaN(coerced.getTime()) ? null : coerced;
    } catch (e) {
      console.error("Invalid Ethiopian date (convertEthToGr):", e);
      return null;
    }
  };
  const convertGrToEth = (year, month, day) => {
    try {
      return toEthiopian(year, month, day);
    } catch (e) {
      console.error("Invalid Gregorian date:", e);
      return null;
    }
  };
  const generateDays = (count) => Array.from({ length: count }, (_, i) => i + 1);
  const generateYears = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const getDaysInMonth = (year, month) => {
    if (month === 13) {
      return year % 4 === 3 ? 6 : 5;
    }
    return 30;
  };
  const getCurrentEthiopianDate = () => {
    const today = /* @__PURE__ */ new Date();
    const [year, month, day] = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate());
    return { year, month, day };
  };
  return {
    ethDay,
    ethMonth,
    ethYear,
    convertedToGregorian,
    grDay,
    grMonth,
    grYear,
    convertedToEthiopian,
    convertEthToGr,
    convertGrToEth,
    ETH_MONTHS,
    GR_MONTHS,
    generateDays,
    generateYears,
    getDaysInMonth,
    getCurrentEthiopianDate
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EthiopianToGregorian",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      ethDay,
      ethMonth,
      ethYear,
      convertedToGregorian,
      convertEthToGr,
      ETH_MONTHS: ETH_MONTHS2,
      generateYears,
      getDaysInMonth,
      generateDays,
      getCurrentEthiopianDate
    } = useDateConversion();
    const errorMessage = ref("");
    const { year: currYear, month: currMonth, day: currDay } = getCurrentEthiopianDate();
    ethYear.value = currYear;
    ethMonth.value = ETH_MONTHS2[currMonth - 1];
    ethDay.value = currDay;
    const daysInMonth = computed(() => {
      const monthIndex = ETH_MONTHS2.indexOf(ethMonth.value ?? "");
      if (monthIndex === -1) return [];
      const numDays = getDaysInMonth(ethYear.value, monthIndex + 1);
      return generateDays(numDays);
    });
    const monthHint = computed(() => {
      const monthIndex = ETH_MONTHS2.indexOf(ethMonth.value ?? "");
      if (monthIndex === 12) {
        return ethYear.value % 4 === 3 ? "ጳጉሜ has 6 days this year (leap year)" : "ጳጉሜ has 5 days this year";
      }
      return "30 days";
    });
    watch([ethYear, ethMonth], () => {
      const maxDays = daysInMonth.value.length;
      if (ethDay.value > maxDays) {
        ethDay.value = maxDays;
      }
    });
    const onConvert = () => {
      errorMessage.value = "";
      const monthIndex = ETH_MONTHS2.indexOf(ethMonth.value ?? "");
      if (monthIndex === -1) {
        convertedToGregorian.value = null;
        errorMessage.value = "Invalid Ethiopian month selected.";
        return;
      }
      const result = convertEthToGr(ethYear.value, monthIndex + 1, ethDay.value);
      if (!result) {
        errorMessage.value = "Conversion failed. Please check your input.";
      }
      convertedToGregorian.value = result;
    };
    const formattedGregorianDate = computed(() => {
      if (convertedToGregorian.value) {
        const date = convertedToGregorian.value;
        const fullDate = date.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const numericDate = `${day}/${month}/${year}`;
        return `${fullDate} or ${numericDate}`;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "d-flex justify-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "flex-column rounded-lg pa-6",
              style: { "max-width": "800px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-h6 text-center mb-6 font-weight-bold text-primary" data-v-4b438d96${_scopeId2}> Ethiopian → Gregorian Converter </h2>`);
                  _push3(ssrRenderComponent(VRow, {
                    dense: "",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(ethDay),
                                "onUpdate:modelValue": ($event) => isRef(ethDay) ? ethDay.value = $event : null,
                                items: daysInMonth.value,
                                label: "Day",
                                disabled: daysInMonth.value.length === 0,
                                hint: monthHint.value,
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(ethDay),
                                  "onUpdate:modelValue": ($event) => isRef(ethDay) ? ethDay.value = $event : null,
                                  items: daysInMonth.value,
                                  label: "Day",
                                  disabled: daysInMonth.value.length === 0,
                                  hint: monthHint.value,
                                  "persistent-hint": "",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(ethMonth),
                                "onUpdate:modelValue": ($event) => isRef(ethMonth) ? ethMonth.value = $event : null,
                                items: unref(ETH_MONTHS2),
                                label: "Month",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(ethMonth),
                                  "onUpdate:modelValue": ($event) => isRef(ethMonth) ? ethMonth.value = $event : null,
                                  items: unref(ETH_MONTHS2),
                                  label: "Month",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(ethYear),
                                "onUpdate:modelValue": ($event) => isRef(ethYear) ? ethYear.value = $event : null,
                                items: unref(generateYears)(1900, 2100),
                                label: "Year",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(ethYear),
                                  "onUpdate:modelValue": ($event) => isRef(ethYear) ? ethYear.value = $event : null,
                                  items: unref(generateYears)(1900, 2100),
                                  label: "Year",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(ethDay),
                                "onUpdate:modelValue": ($event) => isRef(ethDay) ? ethDay.value = $event : null,
                                items: daysInMonth.value,
                                label: "Day",
                                disabled: daysInMonth.value.length === 0,
                                hint: monthHint.value,
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(ethMonth),
                                "onUpdate:modelValue": ($event) => isRef(ethMonth) ? ethMonth.value = $event : null,
                                items: unref(ETH_MONTHS2),
                                label: "Month",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(ethYear),
                                "onUpdate:modelValue": ($event) => isRef(ethYear) ? ethYear.value = $event : null,
                                items: unref(generateYears)(1900, 2100),
                                label: "Year",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-center mb-6" data-v-4b438d96${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    size: "large",
                    rounded: "xl",
                    variant: "elevated",
                    class: "px-6 text-capitalize",
                    onClick: onConvert,
                    disabled: !unref(ethMonth) || !unref(ethYear) || !unref(ethDay)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Convert Date `);
                      } else {
                        return [
                          createTextVNode(" Convert Date ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (formattedGregorianDate.value) {
                    _push3(`<div class="text-center text-h6 font-weight-medium text-success" data-v-4b438d96${_scopeId2}>${ssrInterpolate(formattedGregorianDate.value)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (errorMessage.value) {
                    _push3(ssrRenderComponent(VAlert, {
                      type: "error",
                      variant: "tonal",
                      density: "comfortable",
                      class: "mt-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(errorMessage.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(errorMessage.value), 1)
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
                    createVNode("h2", { class: "text-h6 text-center mb-6 font-weight-bold text-primary" }, " Ethiopian → Gregorian Converter "),
                    createVNode(VRow, {
                      dense: "",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(ethDay),
                              "onUpdate:modelValue": ($event) => isRef(ethDay) ? ethDay.value = $event : null,
                              items: daysInMonth.value,
                              label: "Day",
                              disabled: daysInMonth.value.length === 0,
                              hint: monthHint.value,
                              "persistent-hint": "",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(ethMonth),
                              "onUpdate:modelValue": ($event) => isRef(ethMonth) ? ethMonth.value = $event : null,
                              items: unref(ETH_MONTHS2),
                              label: "Month",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(ethYear),
                              "onUpdate:modelValue": ($event) => isRef(ethYear) ? ethYear.value = $event : null,
                              items: unref(generateYears)(1900, 2100),
                              label: "Year",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "text-center mb-6" }, [
                      createVNode(VBtn, {
                        color: "primary",
                        size: "large",
                        rounded: "xl",
                        variant: "elevated",
                        class: "px-6 text-capitalize",
                        onClick: onConvert,
                        disabled: !unref(ethMonth) || !unref(ethYear) || !unref(ethDay)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Convert Date ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    formattedGregorianDate.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center text-h6 font-weight-medium text-success"
                    }, toDisplayString(formattedGregorianDate.value), 1)) : createCommentVNode("", true),
                    errorMessage.value ? (openBlock(), createBlock(VAlert, {
                      key: 1,
                      type: "error",
                      variant: "tonal",
                      density: "comfortable",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(errorMessage.value), 1)
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
              createVNode(VRow, {
                class: "flex-column rounded-lg pa-6",
                style: { "max-width": "800px" }
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h6 text-center mb-6 font-weight-bold text-primary" }, " Ethiopian → Gregorian Converter "),
                  createVNode(VRow, {
                    dense: "",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(ethDay),
                            "onUpdate:modelValue": ($event) => isRef(ethDay) ? ethDay.value = $event : null,
                            items: daysInMonth.value,
                            label: "Day",
                            disabled: daysInMonth.value.length === 0,
                            hint: monthHint.value,
                            "persistent-hint": "",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(ethMonth),
                            "onUpdate:modelValue": ($event) => isRef(ethMonth) ? ethMonth.value = $event : null,
                            items: unref(ETH_MONTHS2),
                            label: "Month",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(ethYear),
                            "onUpdate:modelValue": ($event) => isRef(ethYear) ? ethYear.value = $event : null,
                            items: unref(generateYears)(1900, 2100),
                            label: "Year",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-center mb-6" }, [
                    createVNode(VBtn, {
                      color: "primary",
                      size: "large",
                      rounded: "xl",
                      variant: "elevated",
                      class: "px-6 text-capitalize",
                      onClick: onConvert,
                      disabled: !unref(ethMonth) || !unref(ethYear) || !unref(ethDay)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Convert Date ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  formattedGregorianDate.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center text-h6 font-weight-medium text-success"
                  }, toDisplayString(formattedGregorianDate.value), 1)) : createCommentVNode("", true),
                  errorMessage.value ? (openBlock(), createBlock(VAlert, {
                    key: 1,
                    type: "error",
                    variant: "tonal",
                    density: "comfortable",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(errorMessage.value), 1)
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
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EthiopianToGregorian.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-4b438d96"]]), { __name: "EthiopianToGregorian" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GregorianToEthiopian",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      grDay,
      grMonth,
      grYear,
      convertedToEthiopian,
      convertGrToEth,
      GR_MONTHS: GR_MONTHS2,
      generateDays,
      generateYears
    } = useDateConversion();
    const errorMessage = ref("");
    const gregorianDateOnConvert = ref(null);
    const today = /* @__PURE__ */ new Date();
    grYear.value = today.getFullYear();
    grMonth.value = GR_MONTHS2[today.getMonth()];
    grDay.value = today.getDate();
    const daysInGrMonth = computed(() => {
      const monthIndex = GR_MONTHS2.indexOf(grMonth.value ?? "");
      if (monthIndex === -1) return [];
      const month = monthIndex + 1;
      const year = grYear.value;
      const days = new Date(year, month, 0).getDate();
      return generateDays(days);
    });
    const monthHint = computed(() => {
      const monthIndex = GR_MONTHS2.indexOf(grMonth.value ?? "");
      if (monthIndex === 1) {
        const year = grYear.value;
        const isLeap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        return isLeap ? "February has 29 days this year (leap year)" : "February has 28 days this year";
      }
      const days = daysInGrMonth.value.length;
      return days ? `${days} days` : "";
    });
    watch([grYear, grMonth], () => {
      const maxDays = daysInGrMonth.value.length;
      if (grDay.value > maxDays) {
        grDay.value = maxDays;
      }
    });
    const onConvert = () => {
      errorMessage.value = "";
      const monthIndex = GR_MONTHS2.indexOf(grMonth.value ?? "");
      if (monthIndex === -1) {
        convertedToEthiopian.value = null;
        gregorianDateOnConvert.value = null;
        errorMessage.value = "Invalid Gregorian month selected.";
        return;
      }
      gregorianDateOnConvert.value = new Date(Date.UTC(grYear.value, monthIndex, grDay.value));
      const result = convertGrToEth(
        grYear.value,
        monthIndex + 1,
        grDay.value
      );
      if (!result) {
        errorMessage.value = "Conversion failed. Please check your input.";
        convertedToEthiopian.value = null;
        gregorianDateOnConvert.value = null;
      } else {
        convertedToEthiopian.value = result;
      }
    };
    const ETH_WEEKDAYS_AM = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];
    const ETH_MONTHS_AM = ["መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
    const formattedEthiopianDate = computed(() => {
      if (convertedToEthiopian.value && gregorianDateOnConvert.value) {
        const [year, month, day] = convertedToEthiopian.value;
        const numericDate = `${day}/${month}/${year}`;
        const weekdayIndex = gregorianDateOnConvert.value.getUTCDay();
        const weekday = ETH_WEEKDAYS_AM[weekdayIndex];
        const monthName = ETH_MONTHS_AM[month - 1];
        const amharicDate = `${weekday}, ${monthName} ${day} ${year}`;
        return `${amharicDate} or ${numericDate}`;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "d-flex justify-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "flex-column rounded-lg pa-6",
              style: { "max-width": "800px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-h6 text-center mb-6 font-weight-bold text-primary" data-v-2b085f20${_scopeId2}> Gregorian → Ethiopian Converter </h2>`);
                  _push3(ssrRenderComponent(VRow, {
                    dense: "",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(grDay),
                                "onUpdate:modelValue": ($event) => isRef(grDay) ? grDay.value = $event : null,
                                items: daysInGrMonth.value,
                                label: "Day",
                                disabled: daysInGrMonth.value.length === 0,
                                hint: monthHint.value,
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(grDay),
                                  "onUpdate:modelValue": ($event) => isRef(grDay) ? grDay.value = $event : null,
                                  items: daysInGrMonth.value,
                                  label: "Day",
                                  disabled: daysInGrMonth.value.length === 0,
                                  hint: monthHint.value,
                                  "persistent-hint": "",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(grMonth),
                                "onUpdate:modelValue": ($event) => isRef(grMonth) ? grMonth.value = $event : null,
                                items: unref(GR_MONTHS2),
                                label: "Month",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(grMonth),
                                  "onUpdate:modelValue": ($event) => isRef(grMonth) ? grMonth.value = $event : null,
                                  items: unref(GR_MONTHS2),
                                  label: "Month",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(grYear),
                                "onUpdate:modelValue": ($event) => isRef(grYear) ? grYear.value = $event : null,
                                items: unref(generateYears)(1900, 2100),
                                label: "Year",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(grYear),
                                  "onUpdate:modelValue": ($event) => isRef(grYear) ? grYear.value = $event : null,
                                  items: unref(generateYears)(1900, 2100),
                                  label: "Year",
                                  variant: "outlined",
                                  density: "comfortable",
                                  rounded: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(grDay),
                                "onUpdate:modelValue": ($event) => isRef(grDay) ? grDay.value = $event : null,
                                items: daysInGrMonth.value,
                                label: "Day",
                                disabled: daysInGrMonth.value.length === 0,
                                hint: monthHint.value,
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(grMonth),
                                "onUpdate:modelValue": ($event) => isRef(grMonth) ? grMonth.value = $event : null,
                                items: unref(GR_MONTHS2),
                                label: "Month",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(grYear),
                                "onUpdate:modelValue": ($event) => isRef(grYear) ? grYear.value = $event : null,
                                items: unref(generateYears)(1900, 2100),
                                label: "Year",
                                variant: "outlined",
                                density: "comfortable",
                                rounded: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-center mb-6" data-v-2b085f20${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    variant: "elevated",
                    size: "large",
                    rounded: "xl",
                    class: "text-capitalize px-6",
                    onClick: onConvert,
                    disabled: !unref(grMonth) || !unref(grYear) || !unref(grDay)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Convert Date `);
                      } else {
                        return [
                          createTextVNode(" Convert Date ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (formattedEthiopianDate.value) {
                    _push3(`<div class="text-center text-h6 font-weight-medium text-success" data-v-2b085f20${_scopeId2}>${ssrInterpolate(formattedEthiopianDate.value)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (errorMessage.value) {
                    _push3(ssrRenderComponent(VAlert, {
                      type: "error",
                      variant: "tonal",
                      density: "comfortable",
                      class: "mt-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(errorMessage.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(errorMessage.value), 1)
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
                    createVNode("h2", { class: "text-h6 text-center mb-6 font-weight-bold text-primary" }, " Gregorian → Ethiopian Converter "),
                    createVNode(VRow, {
                      dense: "",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(grDay),
                              "onUpdate:modelValue": ($event) => isRef(grDay) ? grDay.value = $event : null,
                              items: daysInGrMonth.value,
                              label: "Day",
                              disabled: daysInGrMonth.value.length === 0,
                              hint: monthHint.value,
                              "persistent-hint": "",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(grMonth),
                              "onUpdate:modelValue": ($event) => isRef(grMonth) ? grMonth.value = $event : null,
                              items: unref(GR_MONTHS2),
                              label: "Month",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(grYear),
                              "onUpdate:modelValue": ($event) => isRef(grYear) ? grYear.value = $event : null,
                              items: unref(generateYears)(1900, 2100),
                              label: "Year",
                              variant: "outlined",
                              density: "comfortable",
                              rounded: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "text-center mb-6" }, [
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "elevated",
                        size: "large",
                        rounded: "xl",
                        class: "text-capitalize px-6",
                        onClick: onConvert,
                        disabled: !unref(grMonth) || !unref(grYear) || !unref(grDay)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Convert Date ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    formattedEthiopianDate.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center text-h6 font-weight-medium text-success"
                    }, toDisplayString(formattedEthiopianDate.value), 1)) : createCommentVNode("", true),
                    errorMessage.value ? (openBlock(), createBlock(VAlert, {
                      key: 1,
                      type: "error",
                      variant: "tonal",
                      density: "comfortable",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(errorMessage.value), 1)
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
              createVNode(VRow, {
                class: "flex-column rounded-lg pa-6",
                style: { "max-width": "800px" }
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h6 text-center mb-6 font-weight-bold text-primary" }, " Gregorian → Ethiopian Converter "),
                  createVNode(VRow, {
                    dense: "",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(grDay),
                            "onUpdate:modelValue": ($event) => isRef(grDay) ? grDay.value = $event : null,
                            items: daysInGrMonth.value,
                            label: "Day",
                            disabled: daysInGrMonth.value.length === 0,
                            hint: monthHint.value,
                            "persistent-hint": "",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "hint"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(grMonth),
                            "onUpdate:modelValue": ($event) => isRef(grMonth) ? grMonth.value = $event : null,
                            items: unref(GR_MONTHS2),
                            label: "Month",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(grYear),
                            "onUpdate:modelValue": ($event) => isRef(grYear) ? grYear.value = $event : null,
                            items: unref(generateYears)(1900, 2100),
                            label: "Year",
                            variant: "outlined",
                            density: "comfortable",
                            rounded: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-center mb-6" }, [
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "elevated",
                      size: "large",
                      rounded: "xl",
                      class: "text-capitalize px-6",
                      onClick: onConvert,
                      disabled: !unref(grMonth) || !unref(grYear) || !unref(grDay)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Convert Date ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  formattedEthiopianDate.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center text-h6 font-weight-medium text-success"
                  }, toDisplayString(formattedEthiopianDate.value), 1)) : createCommentVNode("", true),
                  errorMessage.value ? (openBlock(), createBlock(VAlert, {
                    key: 1,
                    type: "error",
                    variant: "tonal",
                    density: "comfortable",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(errorMessage.value), 1)
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GregorianToEthiopian.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-2b085f20"]]), { __name: "GregorianToEthiopian" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Converter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EthiopianToGregorian = __nuxt_component_0;
      const _component_GregorianToEthiopian = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-10" data-v-1d690558${_scopeId3}><h1 class="text-h5 text-md-h4 font-weight-bold text-gradient mb-3" data-v-1d690558${_scopeId3}> Ethiopian ↔ Gregorian Date Converter </h1><p class="text-subtitle-1 text-medium-emphasis" data-v-1d690558${_scopeId3}> Convert dates seamlessly between Ethiopian and Gregorian calendars </p></div><div class="converter-wrapper" data-v-1d690558${_scopeId3}>`);
                        _push4(ssrRenderComponent(VRow, {
                          dense: "",
                          class: "border rounded-lg pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_EthiopianToGregorian, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_EthiopianToGregorian)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_GregorianToEthiopian, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_GregorianToEthiopian)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_EthiopianToGregorian)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_GregorianToEthiopian)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-10" }, [
                            createVNode("h1", { class: "text-h5 text-md-h4 font-weight-bold text-gradient mb-3" }, " Ethiopian ↔ Gregorian Date Converter "),
                            createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " Convert dates seamlessly between Ethiopian and Gregorian calendars ")
                          ]),
                          createVNode("div", { class: "converter-wrapper" }, [
                            createVNode(VRow, {
                              dense: "",
                              class: "border rounded-lg pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_EthiopianToGregorian)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_GregorianToEthiopian)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-10" }, [
                          createVNode("h1", { class: "text-h5 text-md-h4 font-weight-bold text-gradient mb-3" }, " Ethiopian ↔ Gregorian Date Converter "),
                          createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " Convert dates seamlessly between Ethiopian and Gregorian calendars ")
                        ]),
                        createVNode("div", { class: "converter-wrapper" }, [
                          createVNode(VRow, {
                            dense: "",
                            class: "border rounded-lg pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_EthiopianToGregorian)
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_GregorianToEthiopian)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-10" }, [
                        createVNode("h1", { class: "text-h5 text-md-h4 font-weight-bold text-gradient mb-3" }, " Ethiopian ↔ Gregorian Date Converter "),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " Convert dates seamlessly between Ethiopian and Gregorian calendars ")
                      ]),
                      createVNode("div", { class: "converter-wrapper" }, [
                        createVNode(VRow, {
                          dense: "",
                          class: "border rounded-lg pa-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_EthiopianToGregorian)
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_GregorianToEthiopian)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Converter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Converter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d690558"]]);

export { Converter as default };
//# sourceMappingURL=Converter-BL5CmVvY.mjs.map
