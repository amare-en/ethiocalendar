import { withCtx, createVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "HolidayDetailTimket",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "The Procession of the Tabot (Ketera)",
        image: "https://i.imgur.com/UffEv0N.jpeg",
        description: "On the eve of Timket (Ketera), replicas of the Ark of the Covenant, known as Tabots, are carried from churches in a grand procession. Priests, deacons, and a massive crowd of believers follow them to a designated Timket Bahir (baptismal pool)."
      },
      {
        title: "The Overnight Vigil",
        image: "https://i.imgur.com/eqtUZ1B.jpeg",
        description: "Worshippers spend the night by the water, where the Tabots rest in a large tent. The night is filled with prayers, hymns, and spiritual songs, creating a deeply sacred and expectant atmosphere."
      },
      {
        title: "Blessing of the Water and Renewal of Vows",
        image: "https://i.imgur.com/8AyoZHw.jpeg",
        description: "At dawn, the priests bless the water, commemorating Christ's baptism. Worshippers then immerse themselves or are sprinkled with the blessed water, symbolizing the renewal of their baptismal vows."
      },
      {
        title: "The Return Procession",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "After the morning ceremonies, the Tabots are carried back to their churches in another joyous procession. This journey is filled with traditional songs, rhythmic drumming, and celebratory dancing."
      }
    ];
    const culturalElements = [
      {
        title: "The Tabot (ታቦት)",
        image: "https://i.imgur.com/xJ6VEdR.jpeg",
        description: "The sacred Tabot, a replica of the Ark of the Covenant, is the most revered object of the festival. It is the centerpiece of Timket and is carried in grand processions."
      },
      {
        title: "Traditional White Attire",
        image: "https://i.imgur.com/PpvQ7Th.jpeg",
        description: "Faithful wear traditional white cotton clothes (Habesha Kemis or Netela), symbolizing purity and devotion during the celebrations."
      },
      {
        title: "The Timket Bahir",
        image: "https://i.imgur.com/mWwLoV2.jpeg",
        description: "The 'Timket Bahir' or baptismal pool is the site of the main water ceremony. It is the spiritual heart of the celebration, representing the Jordan River."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-b9cb961c${_scopeId3}> Timket (ጥምቀት) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-b9cb961c${_scopeId3}> Ethiopian Epiphany </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Timket (ጥምቀት) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Epiphany ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Timket (ጥምቀት) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Epiphany ")
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
                  _push3(`<div class="mb-12" data-v-b9cb961c${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b9cb961c${_scopeId2}> At-a-Glance Overview </h2><p class="text-body-1" data-v-b9cb961c${_scopeId2}> Ethiopian Epiphany, known as **Timket**, is a vibrant three-day festival celebrating the baptism of Jesus Christ in the Jordan River. It officially begins on **Tahsas 11** (January 19), with the main celebrations on the second day. It is one of the most sacred and colorful festivals in Ethiopia. </p></div><div class="mb-12 section-bg" data-v-b9cb961c${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b9cb961c${_scopeId2}> History and Significance of Timket </h2><p class="text-body-2" data-v-b9cb961c${_scopeId2}> Timket traces its roots to the early Christian era and celebrates the baptism of Jesus Christ by John the Baptist in the Jordan River. The holiday is a powerful reminder of the importance of baptism in Christian faith and the renewal of spiritual life. </p><p class="text-body-2 mt-4" data-v-b9cb961c${_scopeId2}> The centerpiece of the celebration is the **Tabot** (ታቦት), a sacred replica of the Ark of the Covenant. The Tabot represents the manifestation of Christ at His baptism, and its procession is a powerful symbol of His presence among the people. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-b9cb961c${_scopeId2}> Main Traditions and Celebrations </h2>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(traditions, (tradition, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            key: `tradition-${i}`,
                            class: "mb-8"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-column flex-md-row pa-4" data-v-b9cb961c${_scopeId4}><img${ssrRenderAttr("src", tradition.image)}${ssrRenderAttr("alt", tradition.title)} class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-b9cb961c${_scopeId4}><div data-v-b9cb961c${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-b9cb961c${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-b9cb961c${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div></div>`);
                                _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-column flex-md-row pa-4" }, [
                                    createVNode("img", {
                                      src: tradition.image,
                                      alt: tradition.title,
                                      class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                      createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                    ])
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
                              key: `tradition-${i}`,
                              class: "mb-8"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column flex-md-row pa-4" }, [
                                  createVNode("img", {
                                    src: tradition.image,
                                    alt: tradition.title,
                                    class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                    createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                  ])
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
                  _push3(`<div class="mb-12" data-v-b9cb961c${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b9cb961c${_scopeId2}> What to Expect During Timket </h2><p class="text-body-2" data-v-b9cb961c${_scopeId2}> As a visitor, you can expect to see grand processions, vibrant colors, and deep spiritual devotion. The atmosphere is one of immense joy and unity. The festival is a powerful display of faith and culture, with people from all walks of life gathering to celebrate. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-b9cb961c${_scopeId2}> Key Cultural Elements </h2>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(culturalElements, (element, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: `element-${i}`,
                            class: "mb-10 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", element.image)}${ssrRenderAttr("alt", element.title)} class="gallery-image mb-4" data-v-b9cb961c${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-b9cb961c${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-b9cb961c${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: element.image,
                                    alt: element.title,
                                    class: "gallery-image mb-4"
                                  }, null, 8, ["src", "alt"]),
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
                          (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element, i) => {
                            return createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: `element-${i}`,
                              class: "mb-10 text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: element.image,
                                  alt: element.title,
                                  class: "gallery-image mb-4"
                                }, null, 8, ["src", "alt"]),
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
                    createVNode("div", { class: "mb-12" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " At-a-Glance Overview "),
                      createVNode("p", { class: "text-body-1" }, " Ethiopian Epiphany, known as **Timket**, is a vibrant three-day festival celebrating the baptism of Jesus Christ in the Jordan River. It officially begins on **Tahsas 11** (January 19), with the main celebrations on the second day. It is one of the most sacred and colorful festivals in Ethiopia. ")
                    ]),
                    createVNode("div", { class: "mb-12 section-bg" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Significance of Timket "),
                      createVNode("p", { class: "text-body-2" }, " Timket traces its roots to the early Christian era and celebrates the baptism of Jesus Christ by John the Baptist in the Jordan River. The holiday is a powerful reminder of the importance of baptism in Christian faith and the renewal of spiritual life. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " The centerpiece of the celebration is the **Tabot** (ታቦት), a sacred replica of the Ark of the Covenant. The Tabot represents the manifestation of Christ at His baptism, and its procession is a powerful symbol of His presence among the people. ")
                    ]),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Main Traditions and Celebrations "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                          return createVNode(VCol, {
                            cols: "12",
                            key: `tradition-${i}`,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column flex-md-row pa-4" }, [
                                createVNode("img", {
                                  src: tradition.image,
                                  alt: tradition.title,
                                  class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                  createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                ])
                              ]),
                              createVNode(VDivider, { class: "my-4" })
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mb-12" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " What to Expect During Timket "),
                      createVNode("p", { class: "text-body-2" }, " As a visitor, you can expect to see grand processions, vibrant colors, and deep spiritual devotion. The atmosphere is one of immense joy and unity. The festival is a powerful display of faith and culture, with people from all walks of life gathering to celebrate. ")
                    ]),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element, i) => {
                          return createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: `element-${i}`,
                            class: "mb-10 text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: element.image,
                                alt: element.title,
                                class: "gallery-image mb-4"
                              }, null, 8, ["src", "alt"]),
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
              createVNode(VRow, {
                class: "hero-section text-center",
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Timket (ጥምቀት) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Ethiopian Epiphany ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " At-a-Glance Overview "),
                    createVNode("p", { class: "text-body-1" }, " Ethiopian Epiphany, known as **Timket**, is a vibrant three-day festival celebrating the baptism of Jesus Christ in the Jordan River. It officially begins on **Tahsas 11** (January 19), with the main celebrations on the second day. It is one of the most sacred and colorful festivals in Ethiopia. ")
                  ]),
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Significance of Timket "),
                    createVNode("p", { class: "text-body-2" }, " Timket traces its roots to the early Christian era and celebrates the baptism of Jesus Christ by John the Baptist in the Jordan River. The holiday is a powerful reminder of the importance of baptism in Christian faith and the renewal of spiritual life. "),
                    createVNode("p", { class: "text-body-2 mt-4" }, " The centerpiece of the celebration is the **Tabot** (ታቦት), a sacred replica of the Ark of the Covenant. The Tabot represents the manifestation of Christ at His baptism, and its procession is a powerful symbol of His presence among the people. ")
                  ]),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Main Traditions and Celebrations "),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                        return createVNode(VCol, {
                          cols: "12",
                          key: `tradition-${i}`,
                          class: "mb-8"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column flex-md-row pa-4" }, [
                              createVNode("img", {
                                src: tradition.image,
                                alt: tradition.title,
                                class: "tradition-image mr-md-6 mb-4 mb-md-0"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                              ])
                            ]),
                            createVNode(VDivider, { class: "my-4" })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mb-12" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " What to Expect During Timket "),
                    createVNode("p", { class: "text-body-2" }, " As a visitor, you can expect to see grand processions, vibrant colors, and deep spiritual devotion. The atmosphere is one of immense joy and unity. The festival is a powerful display of faith and culture, with people from all walks of life gathering to celebrate. ")
                  ]),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element, i) => {
                        return createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4",
                          key: `element-${i}`,
                          class: "mb-10 text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: element.image,
                              alt: element.title,
                              class: "gallery-image mb-4"
                            }, null, 8, ["src", "alt"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Timket.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b9cb961c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolidayDetailTimket = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailTimket, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailTimket)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/EthiopiaEpiphany.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EthiopiaEpiphany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EthiopiaEpiphany as default };
//# sourceMappingURL=EthiopiaEpiphany-BHd3barh.mjs.map
