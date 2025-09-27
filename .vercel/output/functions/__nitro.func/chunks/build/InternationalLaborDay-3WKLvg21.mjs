import { withCtx, createVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
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

const _sfc_main$1 = {
  __name: "HolidayDetailLabourDay",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "Public Gatherings and Rallies",
        image: "https://i.imgur.com/eqtUZ1B.jpeg",
        description: "Trade unions, workers’ associations, and officials organize rallies and gatherings, emphasizing workers’ rights, achievements, and solidarity."
      },
      {
        title: "Day of Rest and Reflection",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "Many Ethiopians take the day off to spend time with family and reflect on their role in building the nation’s future."
      },
      {
        title: "Cultural Programs",
        image: "https://i.imgur.com/8AyoZHw.jpeg",
        description: "In some regions, cultural shows, performances, and public speeches are organized to honor workers and their contributions."
      }
    ];
    const culturalElements = [
      {
        title: "Unity of Workers",
        image: "https://i.imgur.com/xJ6VEdR.jpeg",
        description: "Labor Day reinforces solidarity among workers across all professions and industries."
      },
      {
        title: "Awareness of Rights",
        image: "https://i.imgur.com/PpvQ7Th.jpeg",
        description: "The holiday reminds everyone of the importance of protecting workers’ rights and fair labor standards."
      },
      {
        title: "Economic Contribution",
        image: "https://i.imgur.com/mWwLoV2.jpeg",
        description: "It acknowledges workers as the backbone of Ethiopia’s economic growth and national progress."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-12" data-v-e1a649fc${_scopeId}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-e1a649fc${_scopeId}> International Labor Day </h2><p class="text-body-1" data-v-e1a649fc${_scopeId}> International Labor Day, celebrated on <strong data-v-e1a649fc${_scopeId}>May 1st</strong>, honors workers and their contributions to society. In Ethiopia, it is a public holiday that highlights unity, productivity, and the importance of fair labor practices. </p></div>`);
            _push2(ssrRenderComponent(VRow, {
              class: "hero-section text-center",
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-e1a649fc${_scopeId3}> International Labor Day </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-e1a649fc${_scopeId3}> Celebrating Workers’ Rights and Contributions </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " International Labor Day "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Celebrating Workers’ Rights and Contributions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " International Labor Day "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Celebrating Workers’ Rights and Contributions ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VContainer, { class: "py-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-12 section-bg" data-v-e1a649fc${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-e1a649fc${_scopeId2}> History and Significance </h2><p class="text-body-2" data-v-e1a649fc${_scopeId2}> International Labor Day originated in the late 19th century, inspired by workers’ movements demanding better wages, safer workplaces, and fairer working hours. It became a global symbol of solidarity and justice. </p><p class="text-body-2 mt-4" data-v-e1a649fc${_scopeId2}> In Ethiopia, May 1st is recognized as a public holiday. The day honors workers’ essential role in national development and economic growth, while also emphasizing dignity, equality, and unity in the workplace. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-e1a649fc${_scopeId2}> Traditions and Celebrations in Ethiopia </h2>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(traditions, (tradition, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            key: tradition.title,
                            class: "mb-8"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-column flex-md-row align-start pa-4" data-v-e1a649fc${_scopeId4}><div data-v-e1a649fc${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-e1a649fc${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-e1a649fc${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div><img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-e1a649fc${_scopeId4}></div>`);
                                _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-column flex-md-row align-start pa-4" }, [
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                      createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                    ]),
                                    createVNode("img", {
                                      src: tradition.image,
                                      alt: "tradition image",
                                      class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode(VDivider, { class: "my-4" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                            return createVNode(VCol, {
                              cols: "12",
                              key: tradition.title,
                              class: "mb-8"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column flex-md-row align-start pa-4" }, [
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                    createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                  ]),
                                  createVNode("img", {
                                    src: tradition.image,
                                    alt: "tradition image",
                                    class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode(VDivider, { class: "my-4" })
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-e1a649fc${_scopeId2}> Key Cultural and Social Elements </h2>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(culturalElements, (element) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: element.title,
                            class: "mb-10 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-e1a649fc${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-e1a649fc${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-e1a649fc${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: element.image,
                                    alt: "cultural element image",
                                    class: "gallery-image mb-4"
                                  }, null, 8, ["src"]),
                                  createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(element.title), 1),
                                  createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(element.description), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element) => {
                            return createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: element.title,
                              class: "mb-10 text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: element.image,
                                  alt: "cultural element image",
                                  class: "gallery-image mb-4"
                                }, null, 8, ["src"]),
                                createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(element.title), 1),
                                createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(element.description), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-12 section-bg" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Significance "),
                      createVNode("p", { class: "text-body-2" }, " International Labor Day originated in the late 19th century, inspired by workers’ movements demanding better wages, safer workplaces, and fairer working hours. It became a global symbol of solidarity and justice. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " In Ethiopia, May 1st is recognized as a public holiday. The day honors workers’ essential role in national development and economic growth, while also emphasizing dignity, equality, and unity in the workplace. ")
                    ]),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Celebrations in Ethiopia "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                          return createVNode(VCol, {
                            cols: "12",
                            key: tradition.title,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column flex-md-row align-start pa-4" }, [
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                  createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                ]),
                                createVNode("img", {
                                  src: tradition.image,
                                  alt: "tradition image",
                                  class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                }, null, 8, ["src"])
                              ]),
                              createVNode(VDivider, { class: "my-4" })
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural and Social Elements "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element) => {
                          return createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: element.title,
                            class: "mb-10 text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: element.image,
                                alt: "cultural element image",
                                class: "gallery-image mb-4"
                              }, null, 8, ["src"]),
                              createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(element.title), 1),
                              createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(element.description), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-12" }, [
                createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " International Labor Day "),
                createVNode("p", { class: "text-body-1" }, [
                  createTextVNode(" International Labor Day, celebrated on "),
                  createVNode("strong", null, "May 1st"),
                  createTextVNode(", honors workers and their contributions to society. In Ethiopia, it is a public holiday that highlights unity, productivity, and the importance of fair labor practices. ")
                ])
              ]),
              createVNode(VRow, {
                class: "hero-section text-center",
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " International Labor Day "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Celebrating Workers’ Rights and Contributions ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Significance "),
                    createVNode("p", { class: "text-body-2" }, " International Labor Day originated in the late 19th century, inspired by workers’ movements demanding better wages, safer workplaces, and fairer working hours. It became a global symbol of solidarity and justice. "),
                    createVNode("p", { class: "text-body-2 mt-4" }, " In Ethiopia, May 1st is recognized as a public holiday. The day honors workers’ essential role in national development and economic growth, while also emphasizing dignity, equality, and unity in the workplace. ")
                  ]),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Celebrations in Ethiopia "),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                        return createVNode(VCol, {
                          cols: "12",
                          key: tradition.title,
                          class: "mb-8"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column flex-md-row align-start pa-4" }, [
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                              ]),
                              createVNode("img", {
                                src: tradition.image,
                                alt: "tradition image",
                                class: "tradition-image mr-md-6 mb-4 mb-md-0"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(VDivider, { class: "my-4" })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural and Social Elements "),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element) => {
                        return createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4",
                          key: element.title,
                          class: "mb-10 text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: element.image,
                              alt: "cultural element image",
                              class: "gallery-image mb-4"
                            }, null, 8, ["src"]),
                            createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(element.title), 1),
                            createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(element.description), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/LabourDay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1a649fc"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolidayDetailLabourDay = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailLabourDay, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailLabourDay)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/InternationalLaborDay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InternationalLaborDay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { InternationalLaborDay as default };
//# sourceMappingURL=InternationalLaborDay-3WKLvg21.mjs.map
