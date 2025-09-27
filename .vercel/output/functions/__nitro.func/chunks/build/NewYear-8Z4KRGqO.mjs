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
  __name: "HolidayDetailEnkutatash",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "The Bonfire (Chibo)",
        image: "https://i.imgur.com/UffEv0N.jpeg",
        description: "On New Year's Eve, communities gather to light a large bonfire called Chibo. The flames represent burning away the hardships of the past year. Families sing, dance, and celebrate late into the night, while some people leap over the glowing embers to symbolize crossing into a brighter future."
      },
      {
        title: "The Abebayosh Tradition",
        image: "https://i.imgur.com/eqtUZ1B.jpeg",
        description: "Young girls dressed in traditional white Habesha Kemis carry bunches of Adey Abeba flowers, symbolizing hope and renewal. They go door to door singing the famous song 'Abebayosh,' wishing blessings for the New Year. In return, they receive small gifts or money as a gesture of goodwill."
      },
      {
        title: "The Family Feast",
        image: "https://i.imgur.com/8AyoZHw.jpeg",
        description: "Families unite for a grand feast, a moment of joy and sharing. The centerpiece is Doro Wat, a rich and spicy chicken stew, served with Injera. This meal is more than food — it’s a symbol of family bonds, hospitality, and cultural pride."
      },
      {
        title: "The Coffee Ceremony",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "The Ethiopian coffee ceremony is at the heart of Enkutatash. Fresh green coffee beans are roasted, ground, and brewed in a traditional clay pot (jebena). The ceremony is accompanied by popcorn or roasted barley and serves as a social ritual of togetherness, reflection, and hospitality."
      }
    ];
    const culturalElements = [
      {
        title: "The Adey Abeba Flower",
        image: "https://i.imgur.com/xJ6VEdR.jpeg",
        description: "This bright yellow daisy blooms in September and is the most iconic symbol of Enkutatash. It represents joy, prosperity, and the beauty of a fresh start."
      },
      {
        title: "Traditional Attire",
        image: "https://i.imgur.com/PpvQ7Th.jpeg",
        description: "During the holiday, Ethiopians wear new white cotton clothes with colorful handwoven borders. This attire, called Habesha Kemis, reflects purity and cultural pride."
      },
      {
        title: "The Ethiopian Calendar",
        image: "https://i.imgur.com/mWwLoV2.jpeg",
        description: "Unlike the Gregorian calendar, the Ethiopian calendar is 7–8 years behind. Enkutatash marks its first day and is celebrated with cultural uniqueness that sets Ethiopia apart."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-12" data-v-4c5c5e0e${_scopeId}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-4c5c5e0e${_scopeId}> Ethiopian New Year&#39;s Day </h2><p class="text-body-1" data-v-4c5c5e0e${_scopeId}> Ethiopian New Year falls on Meskerem 1 (September 11th), or September 12th in a leap year. It marks the beginning of the Ethiopian calendar year and is a time of joy, renewal, and cultural pride. </p></div>`);
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-4c5c5e0e${_scopeId3}> Enkutatash (እንቁጣጣሽ) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-4c5c5e0e${_scopeId3}> The Ethiopian New Year </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Enkutatash (እንቁጣጣሽ) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Ethiopian New Year ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Enkutatash (እንቁጣጣሽ) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Ethiopian New Year ")
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
                  _push3(`<div class="mb-12 section-bg" data-v-4c5c5e0e${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-4c5c5e0e${_scopeId2}> History of Enkutatash (እንቁጣጣሽ) </h2><p class="text-body-2" data-v-4c5c5e0e${_scopeId2}> The name <strong data-v-4c5c5e0e${_scopeId2}>&quot;Enkutatash&quot;</strong> translates to &quot;gift of jewels&quot; in Amharic. According to Ethiopian tradition, the holiday originates from the Queen of Sheba’s return from King Solomon, when her chiefs welcomed her with jewels. This story symbolizes prosperity and renewal for the coming year. </p><p class="text-body-2 mt-4" data-v-4c5c5e0e${_scopeId2}> Enkutatash also falls at the end of the rainy season, when the Ethiopian highlands are lush, green, and filled with vibrant yellow <strong data-v-4c5c5e0e${_scopeId2}>Adey Abeba</strong> flowers. It is a celebration of nature’s renewal and the beginning of the harvest season. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-4c5c5e0e${_scopeId2}> Traditions and Celebrations </h2>`);
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
                                _push5(`<div class="d-flex flex-column flex-md-row align-start pa-4" data-v-4c5c5e0e${_scopeId4}><div data-v-4c5c5e0e${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-4c5c5e0e${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-4c5c5e0e${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div><img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-4c5c5e0e${_scopeId4}></div>`);
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
                  _push3(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-4c5c5e0e${_scopeId2}> Key Cultural Elements </h2>`);
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
                                _push5(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-4c5c5e0e${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-4c5c5e0e${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-4c5c5e0e${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
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
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Enkutatash (እንቁጣጣሽ) "),
                      createVNode("p", { class: "text-body-2" }, [
                        createTextVNode(" The name "),
                        createVNode("strong", null, '"Enkutatash"'),
                        createTextVNode(' translates to "gift of jewels" in Amharic. According to Ethiopian tradition, the holiday originates from the Queen of Sheba’s return from King Solomon, when her chiefs welcomed her with jewels. This story symbolizes prosperity and renewal for the coming year. ')
                      ]),
                      createVNode("p", { class: "text-body-2 mt-4" }, [
                        createTextVNode(" Enkutatash also falls at the end of the rainy season, when the Ethiopian highlands are lush, green, and filled with vibrant yellow "),
                        createVNode("strong", null, "Adey Abeba"),
                        createTextVNode(" flowers. It is a celebration of nature’s renewal and the beginning of the harvest season. ")
                      ])
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
                createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Ethiopian New Year's Day "),
                createVNode("p", { class: "text-body-1" }, " Ethiopian New Year falls on Meskerem 1 (September 11th), or September 12th in a leap year. It marks the beginning of the Ethiopian calendar year and is a time of joy, renewal, and cultural pride. ")
              ]),
              createVNode(VRow, {
                class: "hero-section text-center",
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Enkutatash (እንቁጣጣሽ) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Ethiopian New Year ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Enkutatash (እንቁጣጣሽ) "),
                    createVNode("p", { class: "text-body-2" }, [
                      createTextVNode(" The name "),
                      createVNode("strong", null, '"Enkutatash"'),
                      createTextVNode(' translates to "gift of jewels" in Amharic. According to Ethiopian tradition, the holiday originates from the Queen of Sheba’s return from King Solomon, when her chiefs welcomed her with jewels. This story symbolizes prosperity and renewal for the coming year. ')
                    ]),
                    createVNode("p", { class: "text-body-2 mt-4" }, [
                      createTextVNode(" Enkutatash also falls at the end of the rainy season, when the Ethiopian highlands are lush, green, and filled with vibrant yellow "),
                      createVNode("strong", null, "Adey Abeba"),
                      createTextVNode(" flowers. It is a celebration of nature’s renewal and the beginning of the harvest season. ")
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Enkutatash.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4c5c5e0e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolidayDetailEnkutatash = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailEnkutatash, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailEnkutatash)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/NewYear.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewYear = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { NewYear as default };
//# sourceMappingURL=NewYear-8Z4KRGqO.mjs.map
