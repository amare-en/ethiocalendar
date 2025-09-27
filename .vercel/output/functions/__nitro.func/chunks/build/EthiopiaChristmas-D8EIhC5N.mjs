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
  __name: "HolidayDetailGena",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "Church Services",
        image: "https://i.imgur.com/UffEv0N.jpeg",
        description: "Ethiopians attend special church services at dawn, where priests lead prayers and hymns celebrating the birth of Jesus Christ."
      },
      {
        title: "Traditional Genna Game",
        image: "https://i.imgur.com/eqtUZ1B.jpeg",
        description: "Communities play a traditional game called 'Genna', resembling hockey, which is a festive activity during the holiday."
      },
      {
        title: "Family Feast",
        image: "https://i.imgur.com/8AyoZHw.jpeg",
        description: "Families gather for a special meal, typically featuring Doro Wat (spicy chicken stew) served with Injera, symbolizing togetherness and joy."
      },
      {
        title: "Cultural Singing and Dancing",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "Communities celebrate with traditional music, chants, and dance, enhancing the festive spirit of Genna."
      }
    ];
    const culturalElements = [
      {
        title: "Liturgical Cross",
        image: "https://i.imgur.com/xJ6VEdR.jpeg",
        description: "The cross is central to Genna celebrations, symbolizing faith and devotion within Ethiopian Orthodox Christianity."
      },
      {
        title: "Habesha Kemis",
        image: "https://i.imgur.com/PpvQ7Th.jpeg",
        description: "Traditional white cotton attire worn during church services and celebrations, reflecting purity and cultural pride."
      },
      {
        title: "Ethiopian Orthodox Church",
        image: "https://i.imgur.com/mWwLoV2.jpeg",
        description: "Churches are beautifully decorated for Genna, serving as the spiritual and cultural hub of the celebrations."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-12" data-v-bc74c7b5${_scopeId}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-bc74c7b5${_scopeId}> Ethiopian Christmas </h2><p class="text-body-1" data-v-bc74c7b5${_scopeId}> Ethiopian Christmas, known as <strong data-v-bc74c7b5${_scopeId}>Genna</strong>, is celebrated on <strong data-v-bc74c7b5${_scopeId}>Tahsas 29</strong> (January 7 in the Gregorian calendar). It commemorates the birth of Jesus Christ and is a time of religious devotion, family gatherings, and joyful festivities. </p></div>`);
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-bc74c7b5${_scopeId3}> Genna (ገና) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-bc74c7b5${_scopeId3}> Ethiopian Christmas </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Genna (ገና) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Christmas ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Genna (ገና) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Christmas ")
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
                  _push3(`<div class="mb-12 section-bg" data-v-bc74c7b5${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-bc74c7b5${_scopeId2}> History of Genna (Ethiopian Christmas) </h2><p class="text-body-2" data-v-bc74c7b5${_scopeId2}> Genna celebrates the birth of Jesus Christ and has been observed in Ethiopia for centuries, following the traditions of the Ethiopian Orthodox Church. The holiday is deeply rooted in religious devotion and community celebration. </p><p class="text-body-2 mt-4" data-v-bc74c7b5${_scopeId2}> Many Ethiopian communities also associate Genna with traditional games and cultural activities that symbolize unity, joy, and the festive spirit of the season. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-bc74c7b5${_scopeId2}> Traditions and Celebrations </h2>`);
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
                                _push5(`<div class="d-flex flex-column flex-md-row align-start pa-4" data-v-bc74c7b5${_scopeId4}><div data-v-bc74c7b5${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-bc74c7b5${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-bc74c7b5${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div><img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-bc74c7b5${_scopeId4}></div>`);
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
                  _push3(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-bc74c7b5${_scopeId2}> Key Cultural Elements </h2>`);
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
                                _push5(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-bc74c7b5${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-bc74c7b5${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-bc74c7b5${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
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
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Genna (Ethiopian Christmas) "),
                      createVNode("p", { class: "text-body-2" }, " Genna celebrates the birth of Jesus Christ and has been observed in Ethiopia for centuries, following the traditions of the Ethiopian Orthodox Church. The holiday is deeply rooted in religious devotion and community celebration. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " Many Ethiopian communities also associate Genna with traditional games and cultural activities that symbolize unity, joy, and the festive spirit of the season. ")
                    ]),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Celebrations "),
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
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
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
                createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Ethiopian Christmas "),
                createVNode("p", { class: "text-body-1" }, [
                  createTextVNode(" Ethiopian Christmas, known as "),
                  createVNode("strong", null, "Genna"),
                  createTextVNode(", is celebrated on "),
                  createVNode("strong", null, "Tahsas 29"),
                  createTextVNode(" (January 7 in the Gregorian calendar). It commemorates the birth of Jesus Christ and is a time of religious devotion, family gatherings, and joyful festivities. ")
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
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Genna (ገና) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Christmas ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Genna (Ethiopian Christmas) "),
                    createVNode("p", { class: "text-body-2" }, " Genna celebrates the birth of Jesus Christ and has been observed in Ethiopia for centuries, following the traditions of the Ethiopian Orthodox Church. The holiday is deeply rooted in religious devotion and community celebration. "),
                    createVNode("p", { class: "text-body-2 mt-4" }, " Many Ethiopian communities also associate Genna with traditional games and cultural activities that symbolize unity, joy, and the festive spirit of the season. ")
                  ]),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Celebrations "),
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
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Gena.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc74c7b5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolidayDetailGena = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailGena, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailGena)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/EthiopiaChristmas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EthiopiaChristmas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EthiopiaChristmas as default };
//# sourceMappingURL=EthiopiaChristmas-D8EIhC5N.mjs.map
