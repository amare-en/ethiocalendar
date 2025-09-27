import { withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import { V as VCard } from './VCard-BtAk_Fsm.mjs';
import { V as VList, a as VListItem } from './VList-B37lLHJc.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
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
import './createSimpleFunctional-Cf07O5xJ.mjs';
import './router-D8sdwdYd.mjs';
import './color-DbIj6V-T.mjs';
import './VAvatar-gjgzi8JG.mjs';
import './index-CaPUijDs.mjs';
import './index-DsqekkR1.mjs';
import './position-kce-9oVv.mjs';
import './index-BsXMJvGl.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './VDivider-Cn3sLQGe.mjs';

const _sfc_main$1 = {
  __name: "HolidayDetailMeskel",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "Demera (Bonfire)",
        image: "https://i.imgur.com/UffEv0N.jpeg",
        description: "On the eve of Meskel, large bonfires called Demera are lit in churches and city squares. The collapse of the fire is believed to foretell the year’s fortunes."
      },
      {
        title: "Religious Processions",
        image: "https://i.imgur.com/eqtUZ1B.jpeg",
        description: "Priests and deacons, dressed in colorful liturgical robes, lead processions carrying crosses, chanting hymns, and offering prayers."
      },
      {
        title: "Meskel Flowers (Adey Abeba)",
        image: "https://i.imgur.com/8AyoZHw.jpeg",
        description: "Yellow daisies that bloom during this season are used to decorate churches, homes, and celebration areas, symbolizing peace and renewal."
      },
      {
        title: "Feasting and Fellowship",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "Families, friends, and neighbors gather to share traditional meals, coffee, and cultural drinks, strengthening bonds of community."
      },
      {
        title: "Meskel Square in Addis Ababa",
        image: "https://i.imgur.com/sXg4l8B.jpeg",
        description: "The largest and most famous celebration takes place here, attracting thousands of worshippers, choirs, and visitors each year."
      }
    ];
    const culturalElements = [
      {
        title: "The Adey Abeba Flower",
        image: "https://i.imgur.com/xJ6VEdR.jpeg",
        description: "This bright yellow daisy blooms in September and is the most iconic symbol of Meskel. It represents peace, hope, and renewal."
      },
      {
        title: "Traditional Attire",
        image: "https://i.imgur.com/PpvQ7Th.jpeg",
        description: "Many Ethiopians wear white cotton clothes with colorful woven borders, reflecting purity and cultural pride."
      },
      {
        title: "Meskel Square Gathering",
        image: "https://i.imgur.com/mWwLoV2.jpeg",
        description: "The heart of Meskel celebrations in Addis Ababa, drawing thousands for prayers, music, and the lighting of the grand Demera."
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-d5e68cde${_scopeId3}> መስቀል (Meskel) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-d5e68cde${_scopeId3}> Finding of the True Cross </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " መስቀል (Meskel) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Finding of the True Cross ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " መስቀል (Meskel) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Finding of the True Cross ")
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
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-d5e68cde${_scopeId3}> Overview </h2><p class="text-body-1" data-v-d5e68cde${_scopeId3}> Finding of the True Cross (Meskel) falls on Meskerem 17 in the Ethiopian calendar, which corresponds to September 27 (or September 28 in a Gregorian leap year). </p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Overview "),
                          createVNode("p", { class: "text-body-1" }, " Finding of the True Cross (Meskel) falls on Meskerem 17 in the Ethiopian calendar, which corresponds to September 27 (or September 28 in a Gregorian leap year). ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12 section-bg"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-d5e68cde${_scopeId3}> History of Meskel </h2><p class="text-body-2" data-v-d5e68cde${_scopeId3}> The origins of Meskel date back to the 4th century A.D., during the reign of Emperor Constantine of Rome. His mother, Empress Helena (Saint Helena), was a devoted Christian who set out on a mission to find the cross on which Jesus Christ was crucified. </p><p class="text-body-2 mt-4" data-v-d5e68cde${_scopeId3}> According to tradition, after days of prayer, Saint Helena was guided by a dream to build a large fire. The smoke from the fire pointed her to the location where the True Cross was buried in Jerusalem. </p><p class="text-body-2 mt-4" data-v-d5e68cde${_scopeId3}> Ethiopian Orthodox Christians adopted this commemoration centuries ago, and it has since become one of the most important celebrations in the Ethiopian calendar. </p><p class="text-body-2 mt-4" data-v-d5e68cde${_scopeId3}> In 2013, UNESCO recognized Meskel as part of the Intangible Cultural Heritage of Humanity, highlighting its deep spiritual and cultural significance. </p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Meskel "),
                          createVNode("p", { class: "text-body-2" }, " The origins of Meskel date back to the 4th century A.D., during the reign of Emperor Constantine of Rome. His mother, Empress Helena (Saint Helena), was a devoted Christian who set out on a mission to find the cross on which Jesus Christ was crucified. "),
                          createVNode("p", { class: "text-body-2 mt-4" }, " According to tradition, after days of prayer, Saint Helena was guided by a dream to build a large fire. The smoke from the fire pointed her to the location where the True Cross was buried in Jerusalem. "),
                          createVNode("p", { class: "text-body-2 mt-4" }, " Ethiopian Orthodox Christians adopted this commemoration centuries ago, and it has since become one of the most important celebrations in the Ethiopian calendar. "),
                          createVNode("p", { class: "text-body-2 mt-4" }, " In 2013, UNESCO recognized Meskel as part of the Intangible Cultural Heritage of Humanity, highlighting its deep spiritual and cultural significance. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-d5e68cde${_scopeId3}> Religious Significance </h2>`);
                        _push4(ssrRenderComponent(VList, { lines: "two" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-cross`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-cross")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Meskel marks the finding of the True Cross by Saint Helena. `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-cross")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Meskel marks the finding of the True Cross by Saint Helena. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-lightning-bolt`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-lightning-bolt")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` The holiday emphasizes the victory of the cross as a symbol of salvation and hope. `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-lightning-bolt")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" The holiday emphasizes the victory of the cross as a symbol of salvation and hope. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-account-group`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-account-group")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-group")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-cross")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Meskel marks the finding of the True Cross by Saint Helena. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-lightning-bolt")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" The holiday emphasizes the victory of the cross as a symbol of salvation and hope. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account-group")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Religious Significance "),
                          createVNode(VList, { lines: "two" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-cross")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Meskel marks the finding of the True Cross by Saint Helena. ")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-lightning-bolt")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" The holiday emphasizes the victory of the cross as a symbol of salvation and hope. ")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-group")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. ")
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
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mb-12" data-v-d5e68cde${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-d5e68cde${_scopeId2}> Traditions &amp; Celebrations in Ethiopia </h2>`);
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
                                _push5(ssrRenderComponent(VCard, {
                                  elevation: "2",
                                  class: ["pa-4 rounded-xl d-flex flex-column flex-md-row align-center", { "flex-md-row-reverse": i % 2 }]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-d5e68cde${_scopeId5}><div data-v-d5e68cde${_scopeId5}><h3 class="text-h6 font-weight-bold" data-v-d5e68cde${_scopeId5}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-d5e68cde${_scopeId5}>${ssrInterpolate(tradition.description)}</p></div>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: tradition.image,
                                          alt: "tradition image",
                                          class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                        }, null, 8, ["src"]),
                                        createVNode("div", null, [
                                          createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                          createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    elevation: "2",
                                    class: ["pa-4 rounded-xl d-flex flex-column flex-md-row align-center", { "flex-md-row-reverse": i % 2 }]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: tradition.image,
                                        alt: "tradition image",
                                        class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                      }, null, 8, ["src"]),
                                      createVNode("div", null, [
                                        createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                        createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
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
                                createVNode(VCard, {
                                  elevation: "2",
                                  class: ["pa-4 rounded-xl d-flex flex-column flex-md-row align-center", { "flex-md-row-reverse": i % 2 }]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: tradition.image,
                                      alt: "tradition image",
                                      class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                    }, null, 8, ["src"]),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                      createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d5e68cde${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-d5e68cde${_scopeId2}> Key Cultural Elements </h2>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(culturalElements, (element) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: element.title
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  elevation: "3",
                                  class: "pa-4 rounded-xl text-center hover-card"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-d5e68cde${_scopeId5}><h3 class="text-h6 font-weight-bold" data-v-d5e68cde${_scopeId5}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-d5e68cde${_scopeId5}>${ssrInterpolate(element.description)}</p>`);
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    elevation: "3",
                                    class: "pa-4 rounded-xl text-center hover-card"
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
                                  }, 1024)
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
                              key: element.title
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "3",
                                  class: "pa-4 rounded-xl text-center hover-card"
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
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(VCard, {
                      elevation: "2",
                      class: "pa-6 rounded-xl mb-12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Overview "),
                        createVNode("p", { class: "text-body-1" }, " Finding of the True Cross (Meskel) falls on Meskerem 17 in the Ethiopian calendar, which corresponds to September 27 (or September 28 in a Gregorian leap year). ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      elevation: "2",
                      class: "pa-6 rounded-xl mb-12 section-bg"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Meskel "),
                        createVNode("p", { class: "text-body-2" }, " The origins of Meskel date back to the 4th century A.D., during the reign of Emperor Constantine of Rome. His mother, Empress Helena (Saint Helena), was a devoted Christian who set out on a mission to find the cross on which Jesus Christ was crucified. "),
                        createVNode("p", { class: "text-body-2 mt-4" }, " According to tradition, after days of prayer, Saint Helena was guided by a dream to build a large fire. The smoke from the fire pointed her to the location where the True Cross was buried in Jerusalem. "),
                        createVNode("p", { class: "text-body-2 mt-4" }, " Ethiopian Orthodox Christians adopted this commemoration centuries ago, and it has since become one of the most important celebrations in the Ethiopian calendar. "),
                        createVNode("p", { class: "text-body-2 mt-4" }, " In 2013, UNESCO recognized Meskel as part of the Intangible Cultural Heritage of Humanity, highlighting its deep spiritual and cultural significance. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      elevation: "2",
                      class: "pa-6 rounded-xl mb-12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Religious Significance "),
                        createVNode(VList, { lines: "two" }, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-cross")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Meskel marks the finding of the True Cross by Saint Helena. ")
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lightning-bolt")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" The holiday emphasizes the victory of the cross as a symbol of salvation and hope. ")
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-group")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mb-12" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions & Celebrations in Ethiopia "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                            return createVNode(VCol, {
                              cols: "12",
                              key: tradition.title,
                              class: "mb-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "2",
                                  class: ["pa-4 rounded-xl d-flex flex-column flex-md-row align-center", { "flex-md-row-reverse": i % 2 }]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: tradition.image,
                                      alt: "tradition image",
                                      class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                    }, null, 8, ["src"]),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                      createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element) => {
                            return createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: element.title
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  elevation: "3",
                                  class: "pa-4 rounded-xl text-center hover-card"
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
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ])
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
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " መስቀል (Meskel) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " Finding of the True Cross ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Overview "),
                      createVNode("p", { class: "text-body-1" }, " Finding of the True Cross (Meskel) falls on Meskerem 17 in the Ethiopian calendar, which corresponds to September 27 (or September 28 in a Gregorian leap year). ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12 section-bg"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of Meskel "),
                      createVNode("p", { class: "text-body-2" }, " The origins of Meskel date back to the 4th century A.D., during the reign of Emperor Constantine of Rome. His mother, Empress Helena (Saint Helena), was a devoted Christian who set out on a mission to find the cross on which Jesus Christ was crucified. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " According to tradition, after days of prayer, Saint Helena was guided by a dream to build a large fire. The smoke from the fire pointed her to the location where the True Cross was buried in Jerusalem. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " Ethiopian Orthodox Christians adopted this commemoration centuries ago, and it has since become one of the most important celebrations in the Ethiopian calendar. "),
                      createVNode("p", { class: "text-body-2 mt-4" }, " In 2013, UNESCO recognized Meskel as part of the Intangible Cultural Heritage of Humanity, highlighting its deep spiritual and cultural significance. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, {
                    elevation: "2",
                    class: "pa-6 rounded-xl mb-12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Religious Significance "),
                      createVNode(VList, { lines: "two" }, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-cross")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Meskel marks the finding of the True Cross by Saint Helena. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lightning-bolt")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" The holiday emphasizes the victory of the cross as a symbol of salvation and hope. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-group")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mb-12" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-6" }, " Traditions & Celebrations in Ethiopia "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(traditions, (tradition, i) => {
                          return createVNode(VCol, {
                            cols: "12",
                            key: tradition.title,
                            class: "mb-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                elevation: "2",
                                class: ["pa-4 rounded-xl d-flex flex-column flex-md-row align-center", { "flex-md-row-reverse": i % 2 }]
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: tradition.image,
                                    alt: "tradition image",
                                    class: "tradition-image mr-md-6 mb-4 mb-md-0"
                                  }, null, 8, ["src"]),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold" }, toDisplayString(tradition.title), 1),
                                    createVNode("p", { class: "mt-2 text-body-2" }, toDisplayString(tradition.description), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" }, " Key Cultural Elements "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(culturalElements, (element) => {
                          return createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: element.title
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                elevation: "3",
                                class: "pa-4 rounded-xl text-center hover-card"
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
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Meskel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d5e68cde"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HolidayDetailMeskel = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailMeskel, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailMeskel)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/FindingOfTheTrueCross.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FindingOfTheTrueCross = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FindingOfTheTrueCross as default };
//# sourceMappingURL=FindingOfTheTrueCross-Cy43gi0d.mjs.map
