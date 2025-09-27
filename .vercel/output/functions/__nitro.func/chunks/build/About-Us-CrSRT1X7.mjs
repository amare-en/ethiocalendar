import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList-B37lLHJc.mjs';
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
import './index-BsXMJvGl.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './index-DsqekkR1.mjs';
import './index-CaPUijDs.mjs';
import './createSimpleFunctional-Cf07O5xJ.mjs';
import './router-D8sdwdYd.mjs';
import './color-DbIj6V-T.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './VIcon-xAIaYZjS.mjs';
import './VDivider-Cn3sLQGe.mjs';

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
                md: "8",
                class: "text-center mb-8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4"${_scopeId3}> About Us </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> Welcome to <strong${_scopeId3}>Ethiopian Calendar</strong> — an Ethiopian Calendar web app designed to make it easier for everyone to access Ethiopian holidays, non-working days, and date conversions between the Ethiopian and Gregorian calendars. </p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " About Us "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                        createTextVNode(" Welcome to "),
                        createVNode("strong", null, "Ethiopian Calendar"),
                        createTextVNode(" — an Ethiopian Calendar web app designed to make it easier for everyone to access Ethiopian holidays, non-working days, and date conversions between the Ethiopian and Gregorian calendars. ")
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
                  md: "8",
                  class: "text-center mb-8"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " About Us "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                      createTextVNode(" Welcome to "),
                      createVNode("strong", null, "Ethiopian Calendar"),
                      createTextVNode(" — an Ethiopian Calendar web app designed to make it easier for everyone to access Ethiopian holidays, non-working days, and date conversions between the Ethiopian and Gregorian calendars. ")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="pa-4 rounded-xl border"${_scopeId3}><h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-2"${_scopeId3}> Our Mission </h2>`);
                    _push4(ssrRenderComponent(VList, { density: "compact" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VListItem, { "prepend-icon": "mdi-calendar-heart" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` To help Ethiopians and the diaspora stay connected with cultural and national holidays. `);
                                    } else {
                                      return [
                                        createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VListItem, {
                            class: "pr-2",
                            "prepend-icon": "mdi-check-circle"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` To provide accurate, reliable, and user-friendly calendar tools. `);
                                    } else {
                                      return [
                                        createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VListItem, { "prepend-icon": "mdi-earth" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` To promote awareness of Ethiopia’s unique calendar system. `);
                                    } else {
                                      return [
                                        createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
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
                            createVNode(VListItem, { "prepend-icon": "mdi-calendar-heart" }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, {
                              class: "pr-2",
                              "prepend-icon": "mdi-check-circle"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { "prepend-icon": "mdi-earth" }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
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
                    }, _parent4, _scopeId3));
                    _push4(`<p class="text-body-1 text-medium-emphasis mt-4"${_scopeId3}> We believe in blending technology with culture to create something useful and meaningful. </p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "pa-4 rounded-xl border" }, [
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-4 text-blue-darken-2" }, " Our Mission "),
                        createVNode(VList, { density: "compact" }, {
                          default: withCtx(() => [
                            createVNode(VListItem, { "prepend-icon": "mdi-calendar-heart" }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, {
                              class: "pr-2",
                              "prepend-icon": "mdi-check-circle"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { "prepend-icon": "mdi-earth" }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis mt-4" }, " We believe in blending technology with culture to create something useful and meaningful. ")
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
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pa-4 rounded-xl border" }, [
                      createVNode("h2", { class: "text-h5 font-weight-bold mb-4 text-blue-darken-2" }, " Our Mission "),
                      createVNode(VList, { density: "compact" }, {
                        default: withCtx(() => [
                          createVNode(VListItem, { "prepend-icon": "mdi-calendar-heart" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            class: "pr-2",
                            "prepend-icon": "mdi-check-circle"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { "prepend-icon": "mdi-earth" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mt-4" }, " We believe in blending technology with culture to create something useful and meaningful. ")
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
                md: "8",
                class: "text-center mb-8"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " About Us "),
                  createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                    createTextVNode(" Welcome to "),
                    createVNode("strong", null, "Ethiopian Calendar"),
                    createTextVNode(" — an Ethiopian Calendar web app designed to make it easier for everyone to access Ethiopian holidays, non-working days, and date conversions between the Ethiopian and Gregorian calendars. ")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VRow, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pa-4 rounded-xl border" }, [
                    createVNode("h2", { class: "text-h5 font-weight-bold mb-4 text-blue-darken-2" }, " Our Mission "),
                    createVNode(VList, { density: "compact" }, {
                      default: withCtx(() => [
                        createVNode(VListItem, { "prepend-icon": "mdi-calendar-heart" }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" To help Ethiopians and the diaspora stay connected with cultural and national holidays. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          class: "pr-2",
                          "prepend-icon": "mdi-check-circle"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" To provide accurate, reliable, and user-friendly calendar tools. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, { "prepend-icon": "mdi-earth" }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" To promote awareness of Ethiopia’s unique calendar system. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mt-4" }, " We believe in blending technology with culture to create something useful and meaningful. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About-Us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AboutUs as default };
//# sourceMappingURL=About-Us-CrSRT1X7.mjs.map
