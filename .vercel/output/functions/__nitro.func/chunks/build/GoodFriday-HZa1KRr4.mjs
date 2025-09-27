import { resolveComponent, withCtx, createVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
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
  __name: "HolidayDetailSiklet",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "Day-long Fasting and Prayer",
        image: "https://i.imgur.com/5n0Gk1Q.jpeg",
        description: "The faithful observe strict fasting, refraining from food and drink until the conclusion of church services, as an expression of repentance and solidarity with Christ’s suffering."
      },
      {
        title: "Church Services and Prostrations",
        image: "https://i.imgur.com/kplpOZs.jpeg",
        description: "Special liturgies are held in churches, where worshippers perform hundreds of prostrations, chant hymns, and listen to readings from the Gospels recounting the Passion of Christ."
      },
      {
        title: "Processions and Symbolic Acts",
        image: "https://i.imgur.com/zAMj2Mt.jpeg",
        description: "Some communities hold processions symbolizing Christ’s journey to the cross, carrying wooden crosses and chanting hymns of lamentation."
      },
      {
        title: "Quiet Reflection at Home",
        image: "https://i.imgur.com/LVu3pGo.jpeg",
        description: "Families spend the day in solemn reflection, prayer, and reading scripture, preparing spiritually for the joy of the Resurrection on Easter Sunday (Fasika)."
      }
    ];
    const culturalElements = [
      {
        title: "The Cross",
        image: "https://i.imgur.com/hA1w7mH.jpeg",
        description: "The cross is the central symbol of Good Friday, representing both Christ’s suffering and the victory of salvation through His sacrifice."
      },
      {
        title: "Sacred Hymns",
        image: "https://i.imgur.com/7NUs2ut.jpeg",
        description: "Traditional hymns and chants, filled with deep emotion, are sung to honor the Passion of Christ and to invite worshippers into reflection and prayer."
      },
      {
        title: "Fasting Tradition",
        image: "https://i.imgur.com/Z1B3nJ7.jpeg",
        description: "Strict fasting on Good Friday reinforces humility, repentance, and spiritual focus, connecting worshippers to the solemnity of the day."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-12" data-v-021f8058${_scopeId}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-021f8058${_scopeId}> Good Friday (ስቅለት – Siklet) </h2><p class="text-body-1" data-v-021f8058${_scopeId}> Good Friday, known as <strong data-v-021f8058${_scopeId}>Siklet</strong> in Ethiopia, is one of the most solemn and sacred days in the Ethiopian Orthodox Tewahedo Church. It commemorates the crucifixion and death of Jesus Christ, marking the culmination of His suffering for the salvation of humanity. It is observed on the Friday before Easter Sunday (Fasika) according to the Ethiopian calendar. </p></div>`);
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-021f8058${_scopeId3}> ስቅለት (Siklet) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-021f8058${_scopeId3}> The Crucifixion and Sacrifice of Jesus Christ </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " ስቅለት (Siklet) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Crucifixion and Sacrifice of Jesus Christ ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " ስቅለት (Siklet) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Crucifixion and Sacrifice of Jesus Christ ")
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
                  _push3(`<div class="mb-12 section-bg" data-v-021f8058${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-021f8058${_scopeId2}> History and Religious Significance </h2><p class="text-body-2" data-v-021f8058${_scopeId2}> Good Friday commemorates the suffering, crucifixion, and death of Jesus Christ on Mount Calvary. For Ethiopian Orthodox Christians, it is a day of deep mourning, reflection, and prayer. The faithful remember Christ’s sacrifice as the ultimate act of love and redemption. </p><p class="text-body-2 mt-4" data-v-021f8058${_scopeId2}> The observance of Good Friday in Ethiopia is rooted in centuries-old liturgical tradition. The faithful participate in long church services filled with prayers, prostrations, and chants that recount the Passion of Christ. The atmosphere is solemn, reminding worshippers of both the sorrow of Christ’s death and the hope of resurrection. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-021f8058${_scopeId2}> Traditions and Observances </h2>`);
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
                                _push5(`<div class="d-flex flex-column flex-md-row align-start pa-4" data-v-021f8058${_scopeId4}><div data-v-021f8058${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-021f8058${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-021f8058${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div><img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-021f8058${_scopeId4}></div>`);
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
                  _push3(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-021f8058${_scopeId2}> Key Spiritual and Cultural Elements </h2>`);
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
                                _push5(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-021f8058${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-021f8058${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-021f8058${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
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
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Religious Significance "),
                      createVNode("p", { class: "text-body-2" }, " Good Friday commemorates the suffering, crucifixion, and death of Jesus Christ on Mount Calvary. For Ethiopian Orthodox Christians, it is a day of deep mourning, reflection, and prayer. The faithful remember Christ’s sacrifice as the ultimate act of love and redemption. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " The observance of Good Friday in Ethiopia is rooted in centuries-old liturgical tradition. The faithful participate in long church services filled with prayers, prostrations, and chants that recount the Passion of Christ. The atmosphere is solemn, reminding worshippers of both the sorrow of Christ’s death and the hope of resurrection. ")
                    ]),
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Observances "),
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
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Spiritual and Cultural Elements "),
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
                createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Good Friday (ስቅለት – Siklet) "),
                createVNode("p", { class: "text-body-1" }, [
                  createTextVNode(" Good Friday, known as "),
                  createVNode("strong", null, "Siklet"),
                  createTextVNode(" in Ethiopia, is one of the most solemn and sacred days in the Ethiopian Orthodox Tewahedo Church. It commemorates the crucifixion and death of Jesus Christ, marking the culmination of His suffering for the salvation of humanity. It is observed on the Friday before Easter Sunday (Fasika) according to the Ethiopian calendar. ")
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
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " ስቅለት (Siklet) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " The Crucifixion and Sacrifice of Jesus Christ ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History and Religious Significance "),
                    createVNode("p", { class: "text-body-2" }, " Good Friday commemorates the suffering, crucifixion, and death of Jesus Christ on Mount Calvary. For Ethiopian Orthodox Christians, it is a day of deep mourning, reflection, and prayer. The faithful remember Christ’s sacrifice as the ultimate act of love and redemption. "),
                    createVNode("p", { class: "text-body-2 mt-4" }, " The observance of Good Friday in Ethiopia is rooted in centuries-old liturgical tradition. The faithful participate in long church services filled with prayers, prostrations, and chants that recount the Passion of Christ. The atmosphere is solemn, reminding worshippers of both the sorrow of Christ’s death and the hope of resurrection. ")
                  ]),
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions and Observances "),
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
                  createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Spiritual and Cultural Elements "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Siklet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-021f8058"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_contener = resolveComponent("v-contener");
  const _component_HolidayDetailSiklet = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_contener, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailSiklet, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailSiklet)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/GoodFriday.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GoodFriday = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { GoodFriday as default };
//# sourceMappingURL=GoodFriday-HZa1KRr4.mjs.map
