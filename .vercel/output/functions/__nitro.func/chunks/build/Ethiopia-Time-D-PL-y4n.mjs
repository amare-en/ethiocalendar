import { defineComponent, withCtx, createVNode, mergeProps, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useCurrentDateAndTime } from './useCurrentDateAndTime-Dvt9pcao.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import { _ as _export_sfc } from './server.mjs';
import './ethiopianDate-D8eUZq7u.mjs';
import 'ethiopian-date';
import './color-DbIj6V-T.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhatTime",
  __ssrInlineRender: true,
  setup(__props) {
    const { ethiopianTime, gregorianTime } = useCurrentDateAndTime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-12" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12" data-v-9f81ba60${_scopeId}><h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text" data-v-9f81ba60${_scopeId}> What Time is it in Ethiopia? </h1><p class="text-gray-500 mt-2 text-lg" data-v-9f81ba60${_scopeId}> Live Ethiopian &amp; Gregorian time updates </p></div>`);
            _push2(ssrRenderComponent(VRow, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" data-v-9f81ba60${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-clock-time-four-outline",
                          size: "40",
                          class: "mb-4 text-indigo-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h2 class="text-2xl font-semibold text-gray-800 mb-4" data-v-9f81ba60${_scopeId3}> Local Ethiopian Time </h2><div class="time-display rounded-xl p-6 mb-4" data-v-9f81ba60${_scopeId3}><h4 class="text-3xl font-bold text-gray-900 glow" data-v-9f81ba60${_scopeId3}>${ssrInterpolate(unref(ethiopianTime))}</h4></div><p class="text-sm text-gray-500" data-v-9f81ba60${_scopeId3}> Addis Ababa (EAT) </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                            createVNode(VIcon, {
                              icon: "mdi-clock-time-four-outline",
                              size: "40",
                              class: "mb-4 text-indigo-500"
                            }),
                            createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Local Ethiopian Time "),
                            createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                              createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(ethiopianTime)), 1)
                            ]),
                            createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa (EAT) ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" data-v-9f81ba60${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-clock-time-four-outline",
                          size: "40",
                          class: "mb-4 text-pink-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h2 class="text-2xl font-semibold text-gray-800 mb-4" data-v-9f81ba60${_scopeId3}> Current Gregorian Time </h2><div class="time-display rounded-xl p-6 mb-4" data-v-9f81ba60${_scopeId3}><h4 class="text-3xl font-bold text-gray-900 glow" data-v-9f81ba60${_scopeId3}>${ssrInterpolate(unref(gregorianTime))}</h4></div><p class="text-sm text-gray-500" data-v-9f81ba60${_scopeId3}> Addis Ababa, EAT (UTC+3) </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                            createVNode(VIcon, {
                              icon: "mdi-clock-time-four-outline",
                              size: "40",
                              class: "mb-4 text-pink-500"
                            }),
                            createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Current Gregorian Time "),
                            createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                              createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(gregorianTime)), 1)
                            ]),
                            createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa, EAT (UTC+3) ")
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
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                          createVNode(VIcon, {
                            icon: "mdi-clock-time-four-outline",
                            size: "40",
                            class: "mb-4 text-indigo-500"
                          }),
                          createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Local Ethiopian Time "),
                          createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                            createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(ethiopianTime)), 1)
                          ]),
                          createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa (EAT) ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                          createVNode(VIcon, {
                            icon: "mdi-clock-time-four-outline",
                            size: "40",
                            class: "mb-4 text-pink-500"
                          }),
                          createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Current Gregorian Time "),
                          createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                            createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(gregorianTime)), 1)
                          ]),
                          createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa, EAT (UTC+3) ")
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
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h1", { class: "text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text" }, " What Time is it in Ethiopia? "),
                createVNode("p", { class: "text-gray-500 mt-2 text-lg" }, " Live Ethiopian & Gregorian time updates ")
              ]),
              createVNode(VRow, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                        createVNode(VIcon, {
                          icon: "mdi-clock-time-four-outline",
                          size: "40",
                          class: "mb-4 text-indigo-500"
                        }),
                        createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Local Ethiopian Time "),
                        createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                          createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(ethiopianTime)), 1)
                        ]),
                        createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa (EAT) ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center border pa-4 rounded-lg" }, [
                        createVNode(VIcon, {
                          icon: "mdi-clock-time-four-outline",
                          size: "40",
                          class: "mb-4 text-pink-500"
                        }),
                        createVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " Current Gregorian Time "),
                        createVNode("div", { class: "time-display rounded-xl p-6 mb-4" }, [
                          createVNode("h4", { class: "text-3xl font-bold text-gray-900 glow" }, toDisplayString(unref(gregorianTime)), 1)
                        ]),
                        createVNode("p", { class: "text-sm text-gray-500" }, " Addis Ababa, EAT (UTC+3) ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatTime.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f81ba60"]]), { __name: "WhatTime" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Ethiopia-Time",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WhatTime = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WhatTime, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WhatTime)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Ethiopia-Time.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Ethiopia-Time-D-PL-y4n.mjs.map
