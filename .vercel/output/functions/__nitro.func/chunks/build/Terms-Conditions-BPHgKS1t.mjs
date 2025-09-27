import { mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-10 px-4 px-md-12" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "10",
                lg: "8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-center mb-10"${_scopeId3}><h2 class="text-h4 text-md-h3 font-weight-bold mb-4 text-blue-darken-3"${_scopeId3}> Terms &amp; Conditions </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> Welcome to <strong${_scopeId3}>[Your App Name]</strong>. By using our app, you agree to the following terms and conditions. </p></div><div class="pa-4 rounded-lg border"${_scopeId3}><div class="mb-8"${_scopeId3}><h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VIcon, {
                      size: "20",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-account-check`);
                        } else {
                          return [
                            createTextVNode("mdi-account-check")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` 1. Use of Service </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> You may use this app for personal, non-commercial purposes only. </p></div><div class="mb-8"${_scopeId3}><h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VIcon, {
                      size: "20",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-calendar-check`);
                        } else {
                          return [
                            createTextVNode("mdi-calendar-check")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` 2. Accuracy </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> We do our best to provide accurate dates and holiday information, but we cannot guarantee 100% accuracy. </p></div><div class="mb-8"${_scopeId3}><h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VIcon, {
                      size: "20",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-alert-circle`);
                        } else {
                          return [
                            createTextVNode("mdi-alert-circle")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` 3. Restrictions </h2><ul class="pl-6 list-disc text-body-1 text-medium-emphasis"${_scopeId3}><li${_scopeId3}>Do not copy or redistribute our content without permission.</li><li${_scopeId3}>Do not misuse the site (e.g., spam, hacking, or unlawful activities).</li></ul></div><div class="mb-8"${_scopeId3}><h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VIcon, {
                      size: "20",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-shield-alert`);
                        } else {
                          return [
                            createTextVNode("mdi-shield-alert")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` 4. Limitation of Liability </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> [Your App Name] is not responsible for any loss or damages caused by the use of this app. </p></div><div class="mb-8"${_scopeId3}><h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VIcon, {
                      size: "20",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-update`);
                        } else {
                          return [
                            createTextVNode("mdi-update")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` 5. Changes </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> We may update these terms at any time. Continued use means you accept the updated terms. </p></div><div class="text-center mt-10"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent4, _scopeId3));
                    _push4(`<p class="text-caption text-medium-emphasis"${_scopeId3}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} [Your App Name]. All rights reserved. </p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center mb-10" }, [
                        createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold mb-4 text-blue-darken-3" }, " Terms & Conditions "),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                          createTextVNode(" Welcome to "),
                          createVNode("strong", null, "[Your App Name]"),
                          createTextVNode(". By using our app, you agree to the following terms and conditions. ")
                        ])
                      ]),
                      createVNode("div", { class: "pa-4 rounded-lg border" }, [
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-check")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" 1. Use of Service ")
                          ]),
                          createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " You may use this app for personal, non-commercial purposes only. ")
                        ]),
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-calendar-check")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" 2. Accuracy ")
                          ]),
                          createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We do our best to provide accurate dates and holiday information, but we cannot guarantee 100% accuracy. ")
                        ]),
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-alert-circle")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" 3. Restrictions ")
                          ]),
                          createVNode("ul", { class: "pl-6 list-disc text-body-1 text-medium-emphasis" }, [
                            createVNode("li", null, "Do not copy or redistribute our content without permission."),
                            createVNode("li", null, "Do not misuse the site (e.g., spam, hacking, or unlawful activities).")
                          ])
                        ]),
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-shield-alert")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" 4. Limitation of Liability ")
                          ]),
                          createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " [Your App Name] is not responsible for any loss or damages caused by the use of this app. ")
                        ]),
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-update")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" 5. Changes ")
                          ]),
                          createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We may update these terms at any time. Continued use means you accept the updated terms. ")
                        ]),
                        createVNode("div", { class: "text-center mt-10" }, [
                          createVNode(VDivider, { class: "mb-6" }),
                          createVNode("p", { class: "text-caption text-medium-emphasis" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " [Your App Name]. All rights reserved. ", 1)
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
                  md: "10",
                  lg: "8"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center mb-10" }, [
                      createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold mb-4 text-blue-darken-3" }, " Terms & Conditions "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                        createTextVNode(" Welcome to "),
                        createVNode("strong", null, "[Your App Name]"),
                        createTextVNode(". By using our app, you agree to the following terms and conditions. ")
                      ])
                    ]),
                    createVNode("div", { class: "pa-4 rounded-lg border" }, [
                      createVNode("div", { class: "mb-8" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                          createVNode(VIcon, {
                            size: "20",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-check")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 1. Use of Service ")
                        ]),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " You may use this app for personal, non-commercial purposes only. ")
                      ]),
                      createVNode("div", { class: "mb-8" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                          createVNode(VIcon, {
                            size: "20",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-calendar-check")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 2. Accuracy ")
                        ]),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We do our best to provide accurate dates and holiday information, but we cannot guarantee 100% accuracy. ")
                      ]),
                      createVNode("div", { class: "mb-8" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                          createVNode(VIcon, {
                            size: "20",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-alert-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 3. Restrictions ")
                        ]),
                        createVNode("ul", { class: "pl-6 list-disc text-body-1 text-medium-emphasis" }, [
                          createVNode("li", null, "Do not copy or redistribute our content without permission."),
                          createVNode("li", null, "Do not misuse the site (e.g., spam, hacking, or unlawful activities).")
                        ])
                      ]),
                      createVNode("div", { class: "mb-8" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                          createVNode(VIcon, {
                            size: "20",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-shield-alert")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 4. Limitation of Liability ")
                        ]),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " [Your App Name] is not responsible for any loss or damages caused by the use of this app. ")
                      ]),
                      createVNode("div", { class: "mb-8" }, [
                        createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                          createVNode(VIcon, {
                            size: "20",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-update")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 5. Changes ")
                        ]),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We may update these terms at any time. Continued use means you accept the updated terms. ")
                      ]),
                      createVNode("div", { class: "text-center mt-10" }, [
                        createVNode(VDivider, { class: "mb-6" }),
                        createVNode("p", { class: "text-caption text-medium-emphasis" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " [Your App Name]. All rights reserved. ", 1)
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
          createVNode(VRow, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                md: "10",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center mb-10" }, [
                    createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold mb-4 text-blue-darken-3" }, " Terms & Conditions "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                      createTextVNode(" Welcome to "),
                      createVNode("strong", null, "[Your App Name]"),
                      createTextVNode(". By using our app, you agree to the following terms and conditions. ")
                    ])
                  ]),
                  createVNode("div", { class: "pa-4 rounded-lg border" }, [
                    createVNode("div", { class: "mb-8" }, [
                      createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                        createVNode(VIcon, {
                          size: "20",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account-check")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 1. Use of Service ")
                      ]),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " You may use this app for personal, non-commercial purposes only. ")
                    ]),
                    createVNode("div", { class: "mb-8" }, [
                      createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                        createVNode(VIcon, {
                          size: "20",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calendar-check")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 2. Accuracy ")
                      ]),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We do our best to provide accurate dates and holiday information, but we cannot guarantee 100% accuracy. ")
                    ]),
                    createVNode("div", { class: "mb-8" }, [
                      createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                        createVNode(VIcon, {
                          size: "20",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-alert-circle")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 3. Restrictions ")
                      ]),
                      createVNode("ul", { class: "pl-6 list-disc text-body-1 text-medium-emphasis" }, [
                        createVNode("li", null, "Do not copy or redistribute our content without permission."),
                        createVNode("li", null, "Do not misuse the site (e.g., spam, hacking, or unlawful activities).")
                      ])
                    ]),
                    createVNode("div", { class: "mb-8" }, [
                      createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                        createVNode(VIcon, {
                          size: "20",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-shield-alert")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 4. Limitation of Liability ")
                      ]),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " [Your App Name] is not responsible for any loss or damages caused by the use of this app. ")
                    ]),
                    createVNode("div", { class: "mb-8" }, [
                      createVNode("h2", { class: "text-h5 font-weight-semibold mb-2 text-blue-darken-2" }, [
                        createVNode(VIcon, {
                          size: "20",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-update")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 5. Changes ")
                      ]),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " We may update these terms at any time. Continued use means you accept the updated terms. ")
                    ]),
                    createVNode("div", { class: "text-center mt-10" }, [
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("p", { class: "text-caption text-medium-emphasis" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " [Your App Name]. All rights reserved. ", 1)
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Terms-Conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TermsConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TermsConditions as default };
//# sourceMappingURL=Terms-Conditions-BPHgKS1t.mjs.map
