import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, toRef, normalizeStyle, normalizeClass, computed, provide, createElementVNode, inject, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, s as provideTheme, v as provideDefaults, o as makeThemeProps, O as pick, I as IconValue } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol, c as useRender, u as useDimension, m as makeTagProps, e as makeComponentProps, d as makeDimensionProps } from './VRow-DuOE5lZP.mjs';
import { d as VExpandTransition } from './index-BsXMJvGl.mjs';
import { u as useLazy, m as makeLazyProps } from './lazy-DuD9WWOI.mjs';
import { u as useBackgroundColor } from './color-DbIj6V-T.mjs';
import { u as useElevation, a as useRounded, V as VDefaultsProvider, R as Ripple, m as makeRoundedProps, b as makeElevationProps } from './index-CaPUijDs.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import { b as useGroup, u as useGroupItem, a as makeGroupProps, m as makeGroupItemProps } from './group-CNE9VaDa.mjs';
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

const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-expansion-panel-text", props.class]),
        "style": normalizeStyle(props.style)
      }, [slots.default && hasContent.value && createElementVNode("div", {
        "class": "v-expansion-panel-text__wrapper"
      }, [slots.default?.()])]), [[vShow, expansionPanel.isSelected.value]])]
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      dimensionStyles
    } = useDimension(props);
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    const icon = toRef(() => expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon);
    useRender(() => withDirectives(createElementVNode("button", {
      "class": normalizeClass(["v-expansion-panel-title", {
        "v-expansion-panel-title--active": expansionPanel.isSelected.value,
        "v-expansion-panel-title--focusable": props.focusable,
        "v-expansion-panel-title--static": props.static
      }, backgroundColorClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, props.style]),
      "type": "button",
      "tabindex": expansionPanel.disabled.value ? -1 : void 0,
      "disabled": expansionPanel.disabled.value,
      "aria-expanded": expansionPanel.isSelected.value,
      "onClick": !props.readonly ? expansionPanel.toggle : void 0
    }, [createElementVNode("span", {
      "class": "v-expansion-panel-title__overlay"
    }, null), slots.default?.(slotProps.value), !props.hideActions && createVNode(VDefaultsProvider, {
      "defaults": {
        VIcon: {
          icon: icon.value
        }
      }
    }, {
      default: () => [createElementVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions?.(slotProps.value) ?? createVNode(VIcon, null, null)])]
    })]), [[Ripple, props.ripple]]));
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps(),
  ...makeVExpansionPanelTextProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = toRef(() => groupItem?.disabled.value || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id)) arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      const expansionPanelTitleProps = VExpansionPanelTitle.filterProps(props);
      const expansionPanelTextProps = VExpansionPanelText.filterProps(props);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [createElementVNode("div", {
          "class": normalizeClass(["v-expansion-panel__shadow", ...elevationClasses.value])
        }, null), createVNode(VDefaultsProvider, {
          "defaults": {
            VExpansionPanelTitle: {
              ...expansionPanelTitleProps
            },
            VExpansionPanelText: {
              ...expansionPanelTextProps
            }
          }
        }, {
          default: () => [hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title"
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text"
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), slots.default?.()]
        })]
      });
    });
    return {
      groupItem
    };
  }
});
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  flat: Boolean,
  ...makeGroupProps(),
  ...pick(makeVExpansionPanelProps(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...makeThemeProps(),
  ...makeComponentProps(),
  ...makeTagProps(),
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  }
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      next,
      prev
    } = useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = toRef(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        bgColor: toRef(() => props.bgColor),
        collapseIcon: toRef(() => props.collapseIcon),
        color: toRef(() => props.color),
        eager: toRef(() => props.eager),
        elevation: toRef(() => props.elevation),
        expandIcon: toRef(() => props.expandIcon),
        focusable: toRef(() => props.focusable),
        hideActions: toRef(() => props.hideActions),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        rounded: toRef(() => props.rounded),
        static: toRef(() => props.static)
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-expansion-panels", {
        "v-expansion-panels--flat": props.flat,
        "v-expansion-panels--tile": props.tile
      }, themeClasses.value, variantClass.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => [slots.default?.({
        prev,
        next
      })]
    }));
    return {
      next,
      prev
    };
  }
});
const _sfc_main$1 = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "What is the Ethiopian calendar?",
        answer: "The Ethiopian calendar is a solar calendar with 13 months: 12 months of 30 days and one short month of 5 days (6 in a leap year). It is about 7–8 years behind the Gregorian calendar."
      },
      {
        question: "Why is the Ethiopian calendar 7–8 years behind?",
        answer: "The difference comes from alternate calculations of the birth year of Jesus Christ. The Ethiopian calendar follows the Alexandrian system, which places His birth later than the Gregorian calculation."
      },
      {
        question: "When does the Ethiopian New Year (Enkutatash) fall?",
        answer: "Ethiopian New Year falls on Meskerem 1, which corresponds to September 11th in the Gregorian calendar, or September 12th in a Gregorian leap year."
      },
      {
        question: "How is the Ethiopian calendar different from the Gregorian?",
        answer: "The Ethiopian calendar has 13 months: 12 months of 30 days and a 13th month, Pagume, of 5 or 6 days. It also has unique month names and follows a different calculation for leap years."
      },
      {
        question: "What are the names of the Ethiopian months?",
        answer: "The 12 primary months are: Meskerem, Tikimt, Hidar, Tahsas, Tir, Yekatit, Megabit, Miyazia, Ginbot, Sene, Hamle, and Nehasse. The 13th month is Pagume."
      },
      {
        question: "How does the 13th month work?",
        answer: "The 13th month, Pagume, has 5 days (6 in leap years). It ensures the calendar aligns with the solar year"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-8" data-v-f55b8c77${_scopeId}><h2 class="text-h5 text-md-h4 font-weight-bold text-primary" data-v-f55b8c77${_scopeId}> Frequently Asked Questions </h2><p class="text-body-1 mt-2 text-medium-emphasis" data-v-f55b8c77${_scopeId}> Find answers to common questions below. </p></div>`);
            _push2(ssrRenderComponent(VExpansionPanels, { variant: "accordion" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(faqs, (faq, i) => {
                    _push3(ssrRenderComponent(VExpansionPanel, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VExpansionPanelTitle, { "expand-icon": "mdi-chevron-down" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="font-weight-medium" data-v-f55b8c77${_scopeId4}>${ssrInterpolate(faq.question)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(faq.question), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VExpansionPanelText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-body-2" data-v-f55b8c77${_scopeId4}>${ssrInterpolate(faq.answer)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-body-2" }, toDisplayString(faq.answer), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VExpansionPanelTitle, { "expand-icon": "mdi-chevron-down" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-weight-medium" }, toDisplayString(faq.question), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VExpansionPanelText, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-body-2" }, toDisplayString(faq.answer), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, i) => {
                      return createVNode(VExpansionPanel, { key: i }, {
                        default: withCtx(() => [
                          createVNode(VExpansionPanelTitle, { "expand-icon": "mdi-chevron-down" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "font-weight-medium" }, toDisplayString(faq.question), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VExpansionPanelText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-body-2" }, toDisplayString(faq.answer), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center mb-8" }, [
                createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary" }, " Frequently Asked Questions "),
                createVNode("p", { class: "text-body-1 mt-2 text-medium-emphasis" }, " Find answers to common questions below. ")
              ]),
              createVNode(VExpansionPanels, { variant: "accordion" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, i) => {
                    return createVNode(VExpansionPanel, { key: i }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanelTitle, { "expand-icon": "mdi-chevron-down" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "font-weight-medium" }, toDisplayString(faq.question), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VExpansionPanelText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-body-2" }, toDisplayString(faq.answer), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f55b8c77"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FAQ = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-8" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "10",
                class: "mx-auto"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h5 text-md-h4 font-weight-bold text-primary mb-4"${_scopeId3}> Historical Origins and Influences </h2><p class="text-body-1 leading-relaxed"${_scopeId3}> The Ethiopian calendar, also known as the <strong${_scopeId3}>Ge&#39;ez calendar</strong>, has deep roots in ancient civilizations, particularly the <strong${_scopeId3}>Coptic Egyptian calendar</strong>. Both share a 13-month structure—twelve months of 30 days each and a short thirteenth month. While influenced by the Alexandrian system, the Ethiopian calendar developed its own distinct features, including unique names for months and days. </p><p class="text-body-1 leading-relaxed mt-4"${_scopeId3}> A cornerstone of its calculations is the <strong${_scopeId3}>Bahre Hasab (ባሕረ ሐሳብ)</strong>, meaning “sea of thought.” This traditional system combines <em${_scopeId3}>astronomy</em> and <em${_scopeId3}>mathematics</em> to determine movable feasts such as Easter, following lunar cycles and solar alignments. It remains central to the Ethiopian Orthodox Tewahedo Church. </p><p class="text-body-1 leading-relaxed mt-4"${_scopeId3}> The <strong${_scopeId3}>Book of Enoch</strong>, preserved in its entirety only in Ethiopia, also provides calendrical references describing a 364-day year. Scholars suggest these passages influenced early Ethiopian time-reckoning traditions. </p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Historical Origins and Influences "),
                      createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                        createTextVNode(" The Ethiopian calendar, also known as the "),
                        createVNode("strong", null, "Ge'ez calendar"),
                        createTextVNode(", has deep roots in ancient civilizations, particularly the "),
                        createVNode("strong", null, "Coptic Egyptian calendar"),
                        createTextVNode(". Both share a 13-month structure—twelve months of 30 days each and a short thirteenth month. While influenced by the Alexandrian system, the Ethiopian calendar developed its own distinct features, including unique names for months and days. ")
                      ]),
                      createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                        createTextVNode(" A cornerstone of its calculations is the "),
                        createVNode("strong", null, "Bahre Hasab (ባሕረ ሐሳብ)"),
                        createTextVNode(", meaning “sea of thought.” This traditional system combines "),
                        createVNode("em", null, "astronomy"),
                        createTextVNode(" and "),
                        createVNode("em", null, "mathematics"),
                        createTextVNode(" to determine movable feasts such as Easter, following lunar cycles and solar alignments. It remains central to the Ethiopian Orthodox Tewahedo Church. ")
                      ]),
                      createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                        createTextVNode(" The "),
                        createVNode("strong", null, "Book of Enoch"),
                        createTextVNode(", preserved in its entirety only in Ethiopia, also provides calendrical references describing a 364-day year. Scholars suggest these passages influenced early Ethiopian time-reckoning traditions. ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "10",
                  class: "mx-auto"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Historical Origins and Influences "),
                    createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                      createTextVNode(" The Ethiopian calendar, also known as the "),
                      createVNode("strong", null, "Ge'ez calendar"),
                      createTextVNode(", has deep roots in ancient civilizations, particularly the "),
                      createVNode("strong", null, "Coptic Egyptian calendar"),
                      createTextVNode(". Both share a 13-month structure—twelve months of 30 days each and a short thirteenth month. While influenced by the Alexandrian system, the Ethiopian calendar developed its own distinct features, including unique names for months and days. ")
                    ]),
                    createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                      createTextVNode(" A cornerstone of its calculations is the "),
                      createVNode("strong", null, "Bahre Hasab (ባሕረ ሐሳብ)"),
                      createTextVNode(", meaning “sea of thought.” This traditional system combines "),
                      createVNode("em", null, "astronomy"),
                      createTextVNode(" and "),
                      createVNode("em", null, "mathematics"),
                      createTextVNode(" to determine movable feasts such as Easter, following lunar cycles and solar alignments. It remains central to the Ethiopian Orthodox Tewahedo Church. ")
                    ]),
                    createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                      createTextVNode(" The "),
                      createVNode("strong", null, "Book of Enoch"),
                      createTextVNode(", preserved in its entirety only in Ethiopia, also provides calendrical references describing a 364-day year. Scholars suggest these passages influenced early Ethiopian time-reckoning traditions. ")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, { class: "mt-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "10",
                class: "mx-auto"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h5 text-md-h4 font-weight-bold text-primary mb-4"${_scopeId3}> Structure of the Ethiopian Calendar </h2><p class="text-body-1 leading-relaxed"${_scopeId3}> The Ethiopian calendar is celebrated for its <strong${_scopeId3}>consistency and elegance</strong>. As a solar calendar, it closely tracks the astronomical year while maintaining a unique division of time. </p><div class="mt-6"${_scopeId3}><h3 class="text-h6 font-weight-medium mb-2 text-secondary"${_scopeId3}> The 13-Month System </h3><ul class="pl-6 list-disc text-body-1"${_scopeId3}><li${_scopeId3}><strong${_scopeId3}>Twelve 30-Day Months:</strong> Each of the first twelve months contains exactly 30 days. </li><li${_scopeId3}><strong${_scopeId3}>Thirteenth Month (Pagume):</strong> Known as <em${_scopeId3}>ጳጉሜን</em>, this short month has: <ul class="pl-6 list-disc"${_scopeId3}><li${_scopeId3}>5 days in a common year</li><li${_scopeId3}>6 days in a leap year</li></ul></li></ul></div><div class="mt-6"${_scopeId3}><h3 class="text-h6 font-weight-medium mb-2 text-secondary"${_scopeId3}> The Months of the Year </h3><p class="text-body-1 leading-relaxed"${_scopeId3}> The twelve primary months are named in <strong${_scopeId3}>Ge&#39;ez</strong>, the ancient liturgical language of Ethiopia. Each carries cultural and seasonal significance, deeply tied to agricultural and religious life. </p></div><div class="mt-6"${_scopeId3}><h3 class="text-h6 font-weight-medium mb-2 text-secondary"${_scopeId3}> Leap Years </h3><p class="text-body-1 leading-relaxed"${_scopeId3}> The Ethiopian calendar adds a leap day every four years without exception, unlike the Gregorian calendar, which skips leap years in certain century years </p></div><div class="mt-6"${_scopeId3}><h3 class="text-h6 font-weight-medium mb-2 text-secondary"${_scopeId3}> New Year and Timekeeping </h3><ul class="pl-6 list-disc text-body-1"${_scopeId3}><li${_scopeId3}><strong${_scopeId3}>New Year (Enkutatash): </strong> Celebrated on September 11 (or September 12 in leap years), marking the end of the rainy season and the arrival of spring </li><li${_scopeId3}><strong${_scopeId3}>Time System: </strong> Ethiopians use a 12-hour clock starting at dawn (6:00 AM GMT), meaning 7:00 AM GMT is considered 1:00 AM in Ethiopia </li></ul></div><div class="mt-6"${_scopeId3}><h3 class="text-h6 font-weight-medium mb-2 text-secondary"${_scopeId3}> National Identity </h3><p class="text-body-1 leading-relaxed"${_scopeId3}> Ethiopia&#39;s avoidance of colonization allowed it to preserve its calendar system. The calendar is a source of national pride, reflecting Ethiopia&#39;s unique cultural identity and resistance to external influences . It is used in government documents, education, and daily life, alongside the Gregorian calendar </p></div>`);
                    _push4(ssrRenderComponent(_component_FAQ, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Structure of the Ethiopian Calendar "),
                      createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                        createTextVNode(" The Ethiopian calendar is celebrated for its "),
                        createVNode("strong", null, "consistency and elegance"),
                        createTextVNode(". As a solar calendar, it closely tracks the astronomical year while maintaining a unique division of time. ")
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The 13-Month System "),
                        createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                          createVNode("li", null, [
                            createVNode("strong", null, "Twelve 30-Day Months:"),
                            createTextVNode(" Each of the first twelve months contains exactly 30 days. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Thirteenth Month (Pagume):"),
                            createTextVNode(" Known as "),
                            createVNode("em", null, "ጳጉሜን"),
                            createTextVNode(", this short month has: "),
                            createVNode("ul", { class: "pl-6 list-disc" }, [
                              createVNode("li", null, "5 days in a common year"),
                              createVNode("li", null, "6 days in a leap year")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The Months of the Year "),
                        createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                          createTextVNode(" The twelve primary months are named in "),
                          createVNode("strong", null, "Ge'ez"),
                          createTextVNode(", the ancient liturgical language of Ethiopia. Each carries cultural and seasonal significance, deeply tied to agricultural and religious life. ")
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " Leap Years "),
                        createVNode("p", { class: "text-body-1 leading-relaxed" }, " The Ethiopian calendar adds a leap day every four years without exception, unlike the Gregorian calendar, which skips leap years in certain century years ")
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " New Year and Timekeeping "),
                        createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                          createVNode("li", null, [
                            createVNode("strong", null, "New Year (Enkutatash): "),
                            createTextVNode(" Celebrated on September 11 (or September 12 in leap years), marking the end of the rainy season and the arrival of spring ")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Time System: "),
                            createTextVNode(" Ethiopians use a 12-hour clock starting at dawn (6:00 AM GMT), meaning 7:00 AM GMT is considered 1:00 AM in Ethiopia ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " National Identity "),
                        createVNode("p", { class: "text-body-1 leading-relaxed" }, " Ethiopia's avoidance of colonization allowed it to preserve its calendar system. The calendar is a source of national pride, reflecting Ethiopia's unique cultural identity and resistance to external influences . It is used in government documents, education, and daily life, alongside the Gregorian calendar ")
                      ]),
                      createVNode(_component_FAQ)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "10",
                  class: "mx-auto"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Structure of the Ethiopian Calendar "),
                    createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                      createTextVNode(" The Ethiopian calendar is celebrated for its "),
                      createVNode("strong", null, "consistency and elegance"),
                      createTextVNode(". As a solar calendar, it closely tracks the astronomical year while maintaining a unique division of time. ")
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The 13-Month System "),
                      createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                        createVNode("li", null, [
                          createVNode("strong", null, "Twelve 30-Day Months:"),
                          createTextVNode(" Each of the first twelve months contains exactly 30 days. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("strong", null, "Thirteenth Month (Pagume):"),
                          createTextVNode(" Known as "),
                          createVNode("em", null, "ጳጉሜን"),
                          createTextVNode(", this short month has: "),
                          createVNode("ul", { class: "pl-6 list-disc" }, [
                            createVNode("li", null, "5 days in a common year"),
                            createVNode("li", null, "6 days in a leap year")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The Months of the Year "),
                      createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                        createTextVNode(" The twelve primary months are named in "),
                        createVNode("strong", null, "Ge'ez"),
                        createTextVNode(", the ancient liturgical language of Ethiopia. Each carries cultural and seasonal significance, deeply tied to agricultural and religious life. ")
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " Leap Years "),
                      createVNode("p", { class: "text-body-1 leading-relaxed" }, " The Ethiopian calendar adds a leap day every four years without exception, unlike the Gregorian calendar, which skips leap years in certain century years ")
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " New Year and Timekeeping "),
                      createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                        createVNode("li", null, [
                          createVNode("strong", null, "New Year (Enkutatash): "),
                          createTextVNode(" Celebrated on September 11 (or September 12 in leap years), marking the end of the rainy season and the arrival of spring ")
                        ]),
                        createVNode("li", null, [
                          createVNode("strong", null, "Time System: "),
                          createTextVNode(" Ethiopians use a 12-hour clock starting at dawn (6:00 AM GMT), meaning 7:00 AM GMT is considered 1:00 AM in Ethiopia ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " National Identity "),
                      createVNode("p", { class: "text-body-1 leading-relaxed" }, " Ethiopia's avoidance of colonization allowed it to preserve its calendar system. The calendar is a source of national pride, reflecting Ethiopia's unique cultural identity and resistance to external influences . It is used in government documents, education, and daily life, alongside the Gregorian calendar ")
                    ]),
                    createVNode(_component_FAQ)
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
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                md: "10",
                class: "mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Historical Origins and Influences "),
                  createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                    createTextVNode(" The Ethiopian calendar, also known as the "),
                    createVNode("strong", null, "Ge'ez calendar"),
                    createTextVNode(", has deep roots in ancient civilizations, particularly the "),
                    createVNode("strong", null, "Coptic Egyptian calendar"),
                    createTextVNode(". Both share a 13-month structure—twelve months of 30 days each and a short thirteenth month. While influenced by the Alexandrian system, the Ethiopian calendar developed its own distinct features, including unique names for months and days. ")
                  ]),
                  createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                    createTextVNode(" A cornerstone of its calculations is the "),
                    createVNode("strong", null, "Bahre Hasab (ባሕረ ሐሳብ)"),
                    createTextVNode(", meaning “sea of thought.” This traditional system combines "),
                    createVNode("em", null, "astronomy"),
                    createTextVNode(" and "),
                    createVNode("em", null, "mathematics"),
                    createTextVNode(" to determine movable feasts such as Easter, following lunar cycles and solar alignments. It remains central to the Ethiopian Orthodox Tewahedo Church. ")
                  ]),
                  createVNode("p", { class: "text-body-1 leading-relaxed mt-4" }, [
                    createTextVNode(" The "),
                    createVNode("strong", null, "Book of Enoch"),
                    createTextVNode(", preserved in its entirety only in Ethiopia, also provides calendrical references describing a 364-day year. Scholars suggest these passages influenced early Ethiopian time-reckoning traditions. ")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VRow, { class: "mt-10" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                md: "10",
                class: "mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h5 text-md-h4 font-weight-bold text-primary mb-4" }, " Structure of the Ethiopian Calendar "),
                  createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                    createTextVNode(" The Ethiopian calendar is celebrated for its "),
                    createVNode("strong", null, "consistency and elegance"),
                    createTextVNode(". As a solar calendar, it closely tracks the astronomical year while maintaining a unique division of time. ")
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The 13-Month System "),
                    createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Twelve 30-Day Months:"),
                        createTextVNode(" Each of the first twelve months contains exactly 30 days. ")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Thirteenth Month (Pagume):"),
                        createTextVNode(" Known as "),
                        createVNode("em", null, "ጳጉሜን"),
                        createTextVNode(", this short month has: "),
                        createVNode("ul", { class: "pl-6 list-disc" }, [
                          createVNode("li", null, "5 days in a common year"),
                          createVNode("li", null, "6 days in a leap year")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " The Months of the Year "),
                    createVNode("p", { class: "text-body-1 leading-relaxed" }, [
                      createTextVNode(" The twelve primary months are named in "),
                      createVNode("strong", null, "Ge'ez"),
                      createTextVNode(", the ancient liturgical language of Ethiopia. Each carries cultural and seasonal significance, deeply tied to agricultural and religious life. ")
                    ])
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " Leap Years "),
                    createVNode("p", { class: "text-body-1 leading-relaxed" }, " The Ethiopian calendar adds a leap day every four years without exception, unlike the Gregorian calendar, which skips leap years in certain century years ")
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " New Year and Timekeeping "),
                    createVNode("ul", { class: "pl-6 list-disc text-body-1" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "New Year (Enkutatash): "),
                        createTextVNode(" Celebrated on September 11 (or September 12 in leap years), marking the end of the rainy season and the arrival of spring ")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Time System: "),
                        createTextVNode(" Ethiopians use a 12-hour clock starting at dawn (6:00 AM GMT), meaning 7:00 AM GMT is considered 1:00 AM in Ethiopia ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("h3", { class: "text-h6 font-weight-medium mb-2 text-secondary" }, " National Identity "),
                    createVNode("p", { class: "text-body-1 leading-relaxed" }, " Ethiopia's avoidance of colonization allowed it to preserve its calendar system. The calendar is a source of national pride, reflecting Ethiopia's unique cultural identity and resistance to external influences . It is used in government documents, education, and daily life, alongside the Gregorian calendar ")
                  ]),
                  createVNode(_component_FAQ)
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About-Ethiopian-Calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutEthiopianCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AboutEthiopianCalendar as default };
//# sourceMappingURL=About-Ethiopian-Calendar-CtAT9bS2.mjs.map
