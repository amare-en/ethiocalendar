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
  __name: "HolidayDetailAdewa",
  __ssrInlineRender: true,
  setup(__props) {
    const traditions = [
      {
        title: "Commemorative Parades",
        image: "https://i.imgur.com/kplpOZs.jpeg",
        description: "In Addis Ababa and towns across Ethiopia, parades are held featuring the military, students, and community groups. These parades honor the memory of those who fought at Adwa and celebrate Ethiopia’s sovereignty."
      },
      {
        title: "Public Gatherings and Speeches",
        image: "https://i.imgur.com/5n0Gk1Q.jpeg",
        description: "Government leaders, scholars, and community figures deliver speeches reflecting on the significance of Adwa. The day is a moment to honor national heroes and inspire future generations."
      },
      {
        title: "Cultural Performances",
        image: "https://i.imgur.com/zAMj2Mt.jpeg",
        description: "Traditional songs, dances, and theatrical performances reenact the bravery and unity that defined the victory. These performances preserve the history and transmit it to younger Ethiopians."
      },
      {
        title: "Community Gatherings",
        image: "https://i.imgur.com/LVu3pGo.jpeg",
        description: "Families and communities gather to share meals, tell stories of the heroes of Adwa, and reflect on the values of courage, unity, and independence."
      }
    ];
    const culturalElements = [
      {
        title: "Ethiopian Flag",
        image: "https://i.imgur.com/Z1B3nJ7.jpeg",
        description: "The green, yellow, and red colors of the Ethiopian flag are prominently displayed during Adwa celebrations, symbolizing unity, hope, and sacrifice."
      },
      {
        title: "Heroic Leaders",
        image: "https://i.imgur.com/hA1w7mH.jpeg",
        description: "Figures such as Emperor Menelik II, Empress Taytu, and Ras Alula are honored for their leadership and strategic brilliance during the battle."
      },
      {
        title: "Songs of Victory",
        image: "https://i.imgur.com/7NUs2ut.jpeg",
        description: "Patriotic songs celebrating Adwa are performed by choirs and musicians, strengthening national pride and identity."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-12" data-v-b53a5656${_scopeId}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b53a5656${_scopeId}> Adwa Victory Day </h2><p class="text-body-1" data-v-b53a5656${_scopeId}> Adwa Victory Day is celebrated on <strong data-v-b53a5656${_scopeId}>Yekatit 23 (March 2)</strong> to honor Ethiopia’s historic victory over the Italian colonial army in 1896. The Battle of Adwa stands as a symbol of freedom, unity, and resistance against colonialism, making Ethiopia the only African nation to successfully repel European colonization during that era. </p></div>`);
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
                        _push4(`<h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" data-v-b53a5656${_scopeId3}> Adwa Victory (የአድዋ ጦርነት) </h1><h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" data-v-b53a5656${_scopeId3}> A Symbol of African Freedom and Resistance </h2>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Adwa Victory (የአድዋ ጦርነት) "),
                          createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " A Symbol of African Freedom and Resistance ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Adwa Victory (የአድዋ ጦርነት) "),
                        createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " A Symbol of African Freedom and Resistance ")
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
                  _push3(`<div class="mb-12 section-bg" data-v-b53a5656${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b53a5656${_scopeId2}> History of the Battle of Adwa </h2><p class="text-body-2" data-v-b53a5656${_scopeId2}> On March 2, 1896, Ethiopian forces led by <strong data-v-b53a5656${_scopeId2}>Emperor Menelik II</strong>, <strong data-v-b53a5656${_scopeId2}>Empress Taytu Betul</strong>, and other regional leaders decisively defeated the invading Italian army at the Battle of Adwa in northern Ethiopia. This victory preserved Ethiopia’s sovereignty and dealt a significant blow to European colonial ambitions in Africa. </p><p class="text-body-2 mt-4" data-v-b53a5656${_scopeId2}> The triumph at Adwa was not only a military success but also a moment of African pride and inspiration for anti-colonial struggles across the continent. It remains a powerful reminder of unity, resilience, and the determination to defend independence. </p></div><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6" data-v-b53a5656${_scopeId2}> Traditions and Celebrations </h2>`);
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
                                _push5(`<div class="d-flex flex-column flex-md-row align-start pa-4" data-v-b53a5656${_scopeId4}><div data-v-b53a5656${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-b53a5656${_scopeId4}>${ssrInterpolate(tradition.title)}</h3><p class="mt-2 text-body-2" data-v-b53a5656${_scopeId4}>${ssrInterpolate(tradition.description)}</p></div><img${ssrRenderAttr("src", tradition.image)} alt="tradition image" class="tradition-image mr-md-6 mb-4 mb-md-0" data-v-b53a5656${_scopeId4}></div>`);
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
                  _push3(`<h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6" data-v-b53a5656${_scopeId2}> Key Cultural Elements </h2>`);
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
                                _push5(`<img${ssrRenderAttr("src", element.image)} alt="cultural element image" class="gallery-image mb-4" data-v-b53a5656${_scopeId4}><h3 class="text-h6 font-weight-bold" data-v-b53a5656${_scopeId4}>${ssrInterpolate(element.title)}</h3><p class="mt-2 text-body-2" data-v-b53a5656${_scopeId4}>${ssrInterpolate(element.description)}</p>`);
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
                  _push3(`<div class="mt-16 section-bg" data-v-b53a5656${_scopeId2}><h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4" data-v-b53a5656${_scopeId2}> African &amp; Global Legacy of Adwa </h2><p class="text-body-2" data-v-b53a5656${_scopeId2}> The Battle of Adwa was more than a victory for Ethiopia — it was a turning point for Africa and the world. It shattered the myth of European invincibility and became a source of pride for oppressed peoples everywhere. </p><ul class="mt-4 text-body-2" data-v-b53a5656${_scopeId2}><li class="mb-2" data-v-b53a5656${_scopeId2}> ✦ Inspired Pan-African leaders such as W.E.B. Du Bois, Marcus Garvey, and Kwame Nkrumah, who viewed Adwa as a call for unity and resistance. </li><li class="mb-2" data-v-b53a5656${_scopeId2}> ✦ Strengthened African liberation movements in the 20th century, giving hope that freedom from colonial rule was possible. </li><li class="mb-2" data-v-b53a5656${_scopeId2}> ✦ Inspired the African diaspora, especially in the Caribbean and the United States, where Adwa became a symbol of Black pride and resilience. </li><li data-v-b53a5656${_scopeId2}> ✦ Today, Adwa remains celebrated not just in Ethiopia but across the African continent and by people of African descent worldwide. </li></ul></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-12 section-bg" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of the Battle of Adwa "),
                      createVNode("p", { class: "text-body-2" }, [
                        createTextVNode(" On March 2, 1896, Ethiopian forces led by "),
                        createVNode("strong", null, "Emperor Menelik II"),
                        createTextVNode(", "),
                        createVNode("strong", null, "Empress Taytu Betul"),
                        createTextVNode(", and other regional leaders decisively defeated the invading Italian army at the Battle of Adwa in northern Ethiopia. This victory preserved Ethiopia’s sovereignty and dealt a significant blow to European colonial ambitions in Africa. ")
                      ]),
                      createVNode("p", { class: "text-body-2 mt-4" }, " The triumph at Adwa was not only a military success but also a moment of African pride and inspiration for anti-colonial struggles across the continent. It remains a powerful reminder of unity, resilience, and the determination to defend independence. ")
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
                    }),
                    createVNode("div", { class: "mt-16 section-bg" }, [
                      createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " African & Global Legacy of Adwa "),
                      createVNode("p", { class: "text-body-2" }, " The Battle of Adwa was more than a victory for Ethiopia — it was a turning point for Africa and the world. It shattered the myth of European invincibility and became a source of pride for oppressed peoples everywhere. "),
                      createVNode("ul", { class: "mt-4 text-body-2" }, [
                        createVNode("li", { class: "mb-2" }, " ✦ Inspired Pan-African leaders such as W.E.B. Du Bois, Marcus Garvey, and Kwame Nkrumah, who viewed Adwa as a call for unity and resistance. "),
                        createVNode("li", { class: "mb-2" }, " ✦ Strengthened African liberation movements in the 20th century, giving hope that freedom from colonial rule was possible. "),
                        createVNode("li", { class: "mb-2" }, " ✦ Inspired the African diaspora, especially in the Caribbean and the United States, where Adwa became a symbol of Black pride and resilience. "),
                        createVNode("li", null, " ✦ Today, Adwa remains celebrated not just in Ethiopia but across the African continent and by people of African descent worldwide. ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-12" }, [
                createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " Adwa Victory Day "),
                createVNode("p", { class: "text-body-1" }, [
                  createTextVNode(" Adwa Victory Day is celebrated on "),
                  createVNode("strong", null, "Yekatit 23 (March 2)"),
                  createTextVNode(" to honor Ethiopia’s historic victory over the Italian colonial army in 1896. The Battle of Adwa stands as a symbol of freedom, unity, and resistance against colonialism, making Ethiopia the only African nation to successfully repel European colonization during that era. ")
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
                      createVNode("h1", { class: "text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up" }, " Adwa Victory (የአድዋ ጦርነት) "),
                      createVNode("h2", { class: "text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1" }, " A Symbol of African Freedom and Resistance ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VContainer, { class: "py-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " History of the Battle of Adwa "),
                    createVNode("p", { class: "text-body-2" }, [
                      createTextVNode(" On March 2, 1896, Ethiopian forces led by "),
                      createVNode("strong", null, "Emperor Menelik II"),
                      createTextVNode(", "),
                      createVNode("strong", null, "Empress Taytu Betul"),
                      createTextVNode(", and other regional leaders decisively defeated the invading Italian army at the Battle of Adwa in northern Ethiopia. This victory preserved Ethiopia’s sovereignty and dealt a significant blow to European colonial ambitions in Africa. ")
                    ]),
                    createVNode("p", { class: "text-body-2 mt-4" }, " The triumph at Adwa was not only a military success but also a moment of African pride and inspiration for anti-colonial struggles across the continent. It remains a powerful reminder of unity, resilience, and the determination to defend independence. ")
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
                  }),
                  createVNode("div", { class: "mt-16 section-bg" }, [
                    createVNode("h2", { class: "text-h5 text-sm-h4 font-weight-bold primary--text mb-4" }, " African & Global Legacy of Adwa "),
                    createVNode("p", { class: "text-body-2" }, " The Battle of Adwa was more than a victory for Ethiopia — it was a turning point for Africa and the world. It shattered the myth of European invincibility and became a source of pride for oppressed peoples everywhere. "),
                    createVNode("ul", { class: "mt-4 text-body-2" }, [
                      createVNode("li", { class: "mb-2" }, " ✦ Inspired Pan-African leaders such as W.E.B. Du Bois, Marcus Garvey, and Kwame Nkrumah, who viewed Adwa as a call for unity and resistance. "),
                      createVNode("li", { class: "mb-2" }, " ✦ Strengthened African liberation movements in the 20th century, giving hope that freedom from colonial rule was possible. "),
                      createVNode("li", { class: "mb-2" }, " ✦ Inspired the African diaspora, especially in the Caribbean and the United States, where Adwa became a symbol of Black pride and resilience. "),
                      createVNode("li", null, " ✦ Today, Adwa remains celebrated not just in Ethiopia but across the African continent and by people of African descent worldwide. ")
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HolidayDetail/Adewa.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b53a5656"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_contener = resolveComponent("v-contener");
  const _component_HolidayDetailAdewa = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_contener, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HolidayDetailAdewa, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HolidayDetailAdewa)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AdwaVictoryDay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdwaVictoryDay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AdwaVictoryDay as default };
//# sourceMappingURL=AdwaVictoryDay-m4IJCXhx.mjs.map
