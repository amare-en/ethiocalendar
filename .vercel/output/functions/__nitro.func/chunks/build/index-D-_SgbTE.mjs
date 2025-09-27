import { _ as __nuxt_component_0$1 } from './nuxt-link-tRgjSU3V.mjs';
import { withCtx, createVNode, mergeProps, createTextVNode, ref, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import { V as VBtn } from './VBtn-CtUSWaMx.mjs';
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
import './color-DbIj6V-T.mjs';
import './router-D8sdwdYd.mjs';
import './index-CaPUijDs.mjs';
import './group-CNE9VaDa.mjs';
import './position-kce-9oVv.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(VRow, mergeProps({
    justify: "center",
    class: "my-8"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "10",
          lg: "8",
          class: "py-6 px-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2 class="text-h4 text-center mb-6 font-weight-bold text-blue-darken-3"${_scopeId2}> About the Ethiopian Calendar </h2><div class="text-body-1 mb-4"${_scopeId2}><p class="mb-4"${_scopeId2}> The Ethiopian calendar is a solar calendar that has 13 months: 12 months of 30 days each and an additional month, Pagumē, which has 5 days in a common year and 6 days in a leap year. </p><p${_scopeId2}> The Ethiopian calendar is approximately 7-8 years behind the Gregorian calendar, depending on the time of year. `);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/About-Ethiopian-Calendar",
                class: "text-primary text-decoration-none d-inline-flex align-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Read More `);
                    _push4(ssrRenderComponent(VIcon, {
                      icon: "mdi-chevron-right",
                      size: "small",
                      class: "ml-1"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createTextVNode(" Read More "),
                      createVNode(VIcon, {
                        icon: "mdi-chevron-right",
                        size: "small",
                        class: "ml-1"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</p></div>`);
            } else {
              return [
                createVNode("h2", { class: "text-h4 text-center mb-6 font-weight-bold text-blue-darken-3" }, " About the Ethiopian Calendar "),
                createVNode("div", { class: "text-body-1 mb-4" }, [
                  createVNode("p", { class: "mb-4" }, " The Ethiopian calendar is a solar calendar that has 13 months: 12 months of 30 days each and an additional month, Pagumē, which has 5 days in a common year and 6 days in a leap year. "),
                  createVNode("p", null, [
                    createTextVNode(" The Ethiopian calendar is approximately 7-8 years behind the Gregorian calendar, depending on the time of year. "),
                    createVNode(_component_NuxtLink, {
                      to: "/About-Ethiopian-Calendar",
                      class: "text-primary text-decoration-none d-inline-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read More "),
                        createVNode(VIcon, {
                          icon: "mdi-chevron-right",
                          size: "small",
                          class: "ml-1"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "12",
            md: "10",
            lg: "8",
            class: "py-6 px-4"
          }, {
            default: withCtx(() => [
              createVNode("h2", { class: "text-h4 text-center mb-6 font-weight-bold text-blue-darken-3" }, " About the Ethiopian Calendar "),
              createVNode("div", { class: "text-body-1 mb-4" }, [
                createVNode("p", { class: "mb-4" }, " The Ethiopian calendar is a solar calendar that has 13 months: 12 months of 30 days each and an additional month, Pagumē, which has 5 days in a common year and 6 days in a leap year. "),
                createVNode("p", null, [
                  createTextVNode(" The Ethiopian calendar is approximately 7-8 years behind the Gregorian calendar, depending on the time of year. "),
                  createVNode(_component_NuxtLink, {
                    to: "/About-Ethiopian-Calendar",
                    class: "text-primary text-decoration-none d-inline-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Read More "),
                      createVNode(VIcon, {
                        icon: "mdi-chevron-right",
                        size: "small",
                        class: "ml-1"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutEthiopiaCalendar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AboutEthiopiaCalendar" });
const _sfc_main$1 = {
  __name: "FeatureCards",
  __ssrInlineRender: true,
  setup(__props) {
    const feature = ref([
      {
        title: "Ethiopian Calendar",
        description: "The Ethiopian calendar is a solar calendar based on the ancient Coptic calendar, consisting of 13 months: 12 months of 30 days each and a 13th month of 5 or 6 days.",
        link: "http://localhost:3001/Ethiopia-Calendar"
      },
      {
        title: "Ethiopian Holidays",
        description: "Explore national and religious holidays in the Ethiopian calendar.",
        link: "http://localhost:3001/Holidays"
      },
      {
        title: "Ethiopian Date Converter",
        description: "Easily convert dates between the Gregorian and Ethiopian calendars with our converter tool.",
        link: "http://localhost:3001/converter"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({
        justify: "center",
        class: "g-8"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(feature.value, (item, index2) => {
              _push2(ssrRenderComponent(VCol, {
                key: index2,
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="feature-box d-flex flex-column border rounded-lg pa-4 h-100" data-v-b7d81095${_scopeId2}><h3 class="feature-title" data-v-b7d81095${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="feature-desc" data-v-b7d81095${_scopeId2}>${ssrInterpolate(item.description)}</p><div class="mt-auto" data-v-b7d81095${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      href: item.link,
                      target: "_blank",
                      color: "primary",
                      variant: "flat",
                      class: "p-4 mt-4 text-white rounded-lg"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Learn More `);
                        } else {
                          return [
                            createTextVNode(" Learn More ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "feature-box d-flex flex-column border rounded-lg pa-4 h-100" }, [
                        createVNode("h3", { class: "feature-title" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "feature-desc" }, toDisplayString(item.description), 1),
                        createVNode("div", { class: "mt-auto" }, [
                          createVNode(VBtn, {
                            href: item.link,
                            target: "_blank",
                            color: "primary",
                            variant: "flat",
                            class: "p-4 mt-4 text-white rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Learn More ")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(feature.value, (item, index2) => {
                return openBlock(), createBlock(VCol, {
                  key: index2,
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "feature-box d-flex flex-column border rounded-lg pa-4 h-100" }, [
                      createVNode("h3", { class: "feature-title" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "feature-desc" }, toDisplayString(item.description), 1),
                      createVNode("div", { class: "mt-auto" }, [
                        createVNode(VBtn, {
                          href: item.link,
                          target: "_blank",
                          color: "primary",
                          variant: "flat",
                          class: "p-4 mt-4 text-white rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Learn More ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b7d81095"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutEthiopiaCalendar = __nuxt_component_0;
  const _component_FeatureCards = __nuxt_component_1;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AboutEthiopiaCalendar, null, null, _parent2, _scopeId));
        _push2(`<div class="py-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FeatureCards, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_AboutEthiopiaCalendar),
          createVNode("div", { class: "py-8" }, [
            createVNode(_component_FeatureCards)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-D-_SgbTE.mjs.map
