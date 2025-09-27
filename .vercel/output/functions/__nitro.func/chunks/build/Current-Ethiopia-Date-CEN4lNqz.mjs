import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
  __name: "CurrentDate",
  __ssrInlineRender: true,
  setup(__props) {
    const { ethiopianDate, gregorianDate, ethiopianTime, gregorianTime } = useCurrentDateAndTime();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-12" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center" data-v-08b221f0${_scopeId}><h1 class="text-h4 font-weight-bold text-gradient mb-2" data-v-08b221f0${_scopeId}> Current Date in Ethiopia </h1><p class="text-subtitle-1 text-medium-emphasis" data-v-08b221f0${_scopeId}> Live updates of Ethiopian &amp; Gregorian calendar </p></div>`);
            _push2(ssrRenderComponent(VRow, {
              class: "mt-10",
              dense: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-4 border rounded-lg text-center" data-v-08b221f0${_scopeId3}><h2 class="text-h5 font-weight-semibold d-flex align-center justify-center text-indigo-darken-2" data-v-08b221f0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-calendar-blank",
                          size: "28",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(` Ethiopian Date </h2><div class="text-h6 font-weight-bold mt-3" data-v-08b221f0${_scopeId3}>${ssrInterpolate(unref(ethiopianDate))}</div><div class="d-flex align-center justify-center mt-4 text-indigo-darken-2" data-v-08b221f0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-clock-time-four-outline",
                          size: "22",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 font-weight-medium" data-v-08b221f0${_scopeId3}>${ssrInterpolate(unref(ethiopianTime))}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                            createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-indigo-darken-2" }, [
                              createVNode(VIcon, {
                                icon: "mdi-calendar-blank",
                                size: "28",
                                class: "me-2"
                              }),
                              createTextVNode(" Ethiopian Date ")
                            ]),
                            createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(ethiopianDate)), 1),
                            createVNode("div", { class: "d-flex align-center justify-center mt-4 text-indigo-darken-2" }, [
                              createVNode(VIcon, {
                                icon: "mdi-clock-time-four-outline",
                                size: "22",
                                class: "me-2"
                              }),
                              createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(ethiopianTime)), 1)
                            ])
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
                        _push4(`<div class="pa-4 border rounded-lg text-center" data-v-08b221f0${_scopeId3}><h2 class="text-h5 font-weight-semibold d-flex align-center justify-center text-pink-darken-2" data-v-08b221f0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-calendar-range",
                          size: "28",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(` Gregorian Date </h2><div class="text-h6 font-weight-bold mt-3" data-v-08b221f0${_scopeId3}>${ssrInterpolate(unref(gregorianDate))}</div><div class="d-flex align-center justify-center mt-4 text-pink-darken-2" data-v-08b221f0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-clock-outline",
                          size: "22",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 font-weight-medium" data-v-08b221f0${_scopeId3}>${ssrInterpolate(unref(gregorianTime))}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                            createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-pink-darken-2" }, [
                              createVNode(VIcon, {
                                icon: "mdi-calendar-range",
                                size: "28",
                                class: "me-2"
                              }),
                              createTextVNode(" Gregorian Date ")
                            ]),
                            createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(gregorianDate)), 1),
                            createVNode("div", { class: "d-flex align-center justify-center mt-4 text-pink-darken-2" }, [
                              createVNode(VIcon, {
                                icon: "mdi-clock-outline",
                                size: "22",
                                class: "me-2"
                              }),
                              createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(gregorianTime)), 1)
                            ])
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
                        createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-indigo-darken-2" }, [
                            createVNode(VIcon, {
                              icon: "mdi-calendar-blank",
                              size: "28",
                              class: "me-2"
                            }),
                            createTextVNode(" Ethiopian Date ")
                          ]),
                          createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(ethiopianDate)), 1),
                          createVNode("div", { class: "d-flex align-center justify-center mt-4 text-indigo-darken-2" }, [
                            createVNode(VIcon, {
                              icon: "mdi-clock-time-four-outline",
                              size: "22",
                              class: "me-2"
                            }),
                            createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(ethiopianTime)), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-pink-darken-2" }, [
                            createVNode(VIcon, {
                              icon: "mdi-calendar-range",
                              size: "28",
                              class: "me-2"
                            }),
                            createTextVNode(" Gregorian Date ")
                          ]),
                          createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(gregorianDate)), 1),
                          createVNode("div", { class: "d-flex align-center justify-center mt-4 text-pink-darken-2" }, [
                            createVNode(VIcon, {
                              icon: "mdi-clock-outline",
                              size: "22",
                              class: "me-2"
                            }),
                            createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(gregorianTime)), 1)
                          ])
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
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-h4 font-weight-bold text-gradient mb-2" }, " Current Date in Ethiopia "),
                createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, " Live updates of Ethiopian & Gregorian calendar ")
              ]),
              createVNode(VRow, {
                class: "mt-10",
                dense: ""
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-indigo-darken-2" }, [
                          createVNode(VIcon, {
                            icon: "mdi-calendar-blank",
                            size: "28",
                            class: "me-2"
                          }),
                          createTextVNode(" Ethiopian Date ")
                        ]),
                        createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(ethiopianDate)), 1),
                        createVNode("div", { class: "d-flex align-center justify-center mt-4 text-indigo-darken-2" }, [
                          createVNode(VIcon, {
                            icon: "mdi-clock-time-four-outline",
                            size: "22",
                            class: "me-2"
                          }),
                          createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(ethiopianTime)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-4 border rounded-lg text-center" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold d-flex align-center justify-center text-pink-darken-2" }, [
                          createVNode(VIcon, {
                            icon: "mdi-calendar-range",
                            size: "28",
                            class: "me-2"
                          }),
                          createTextVNode(" Gregorian Date ")
                        ]),
                        createVNode("div", { class: "text-h6 font-weight-bold mt-3" }, toDisplayString(unref(gregorianDate)), 1),
                        createVNode("div", { class: "d-flex align-center justify-center mt-4 text-pink-darken-2" }, [
                          createVNode(VIcon, {
                            icon: "mdi-clock-outline",
                            size: "22",
                            class: "me-2"
                          }),
                          createVNode("span", { class: "text-subtitle-1 font-weight-medium" }, toDisplayString(unref(gregorianTime)), 1)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurrentDate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-08b221f0"]]), { __name: "CurrentDate" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CurrentDate = __nuxt_component_0;
  _push(ssrRenderComponent(_component_CurrentDate, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Current-Ethiopia-Date.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CurrentEthiopiaDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CurrentEthiopiaDate as default };
//# sourceMappingURL=Current-Ethiopia-Date-CEN4lNqz.mjs.map
