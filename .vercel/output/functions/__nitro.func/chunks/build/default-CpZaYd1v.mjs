import { _ as __nuxt_component_0$1 } from './nuxt-link-tRgjSU3V.mjs';
import { withCtx, renderSlot, createVNode, defineComponent, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, computed, toRef, watchEffect, shallowRef, watch, normalizeStyle, normalizeClass, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { V as VContainer, a as VRow, b as VCol, c as useRender, m as makeTagProps, e as makeComponentProps } from './VRow-DuOE5lZP.mjs';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, E as useProxiedModel, a7 as useToggleScope, w as clamp, s as provideTheme, f as useRtl, v as provideDefaults, d as convertToUnit, o as makeThemeProps } from './server.mjs';
import { d as VExpandTransition } from './index-BsXMJvGl.mjs';
import { u as useBorder, m as makeBorderProps } from './router-D8sdwdYd.mjs';
import { u as useBackgroundColor } from './color-DbIj6V-T.mjs';
import { u as useElevation, a as useRounded, V as VDefaultsProvider, m as makeRoundedProps, b as makeElevationProps } from './index-CaPUijDs.mjs';
import { a as VImg, V as VAvatar } from './VAvatar-gjgzi8JG.mjs';
import { V as VApp, a as VMain, u as useLayoutItem, m as makeLayoutItemProps } from './VMain-BrqNVVcg.mjs';
import { u as useSsrBoot } from './ssrBoot-ZQn7gOuX.mjs';
import { V as VBtn, m as makeVBtnProps } from './VBtn-CtUSWaMx.mjs';
import { V as VDivider } from './VDivider-Cn3sLQGe.mjs';
import { V as VIcon } from './VIcon-xAIaYZjS.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import './index-DsqekkR1.mjs';
import './group-CNE9VaDa.mjs';
import './position-kce-9oVv.mjs';

const _imports_0$1 = publicAssetsURL("/logo.png");
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar-title", props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => [hasText && createElementVNode("div", {
          "class": "v-toolbar-title__placeholder"
        }, [slots.text ? slots.text() : props.text, slots.default?.()])]
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(props.extended === null ? !!slots.extension?.() : props.extended);
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = slots.extension?.();
      isExtended.value = props.extended === null ? !!extension : props.extended;
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => [createElementVNode("div", {
            "class": "v-toolbar__content",
            "style": {
              height: convertToUnit(contentHeight.value)
            }
          }, [slots.prepend && createElementVNode("div", {
            "class": "v-toolbar__prepend"
          }, [slots.prepend?.()]), hasTitle && createVNode(VToolbarTitle, {
            "key": "title",
            "text": props.title
          }, {
            text: slots.title
          }), slots.default?.(), slots.append && createElementVNode("div", {
            "class": "v-toolbar__append"
          }, [slots.append?.()])])]
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createElementVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      const behavior = new Set(props.scrollBehavior?.split(" ") ?? []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = toRef(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = vToolbarRef.value?.contentHeight ?? 0;
      const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(() => !!props.scrollBehavior, () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => props.location),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...makeVBtnProps({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  emits: ["toggle-drawer"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const menuItems = [
      { title: "Home", to: "/", icon: "mdi-home" },
      { title: "Ethiopian Calendar", to: "/Ethiopia-Calendar", icon: "mdi-calendar" },
      { title: "Converter", to: "/Converter", icon: "mdi-sync" },
      { title: "Current Ethiopian Date & Time", to: "/Current-Ethiopia-Date", icon: "mdi-information" },
      //{ title: 'Time', to: '/Ethiopia-Time', icon: 'mdi-clock' },
      { title: "Holidays", to: "/Holidays", icon: "mdi-party-popper" },
      { title: "Blog", to: "/Blog", icon: "mdi-blogger" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VAppBar, mergeProps({
        app: "",
        elevation: "2",
        height: 70,
        class: "app-header",
        color: "primary"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "px-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    align: "center",
                    justify: "space-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "auto",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/",
                                class: "d-flex align-center text-decoration-none text-white"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: _imports_0$1,
                                      alt: "Logo",
                                      height: "60",
                                      width: "60",
                                      class: "mr-2"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="text-center" data-v-b92e42c1${_scopeId5}><h2 class="text-h6 font-weight-bold mb-0 text-white" data-v-b92e42c1${_scopeId5}> የኢትዮጵያ ቀን መቁጠሪያ </h2><p class="text-white font-weight-bold text-body-2 mb-0" data-v-b92e42c1${_scopeId5}>Ethiopian Calendar</p></div>`);
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: _imports_0$1,
                                        alt: "Logo",
                                        height: "60",
                                        width: "60",
                                        class: "mr-2"
                                      }),
                                      createVNode("div", { class: "text-center" }, [
                                        createVNode("h2", { class: "text-h6 font-weight-bold mb-0 text-white" }, " የኢትዮጵያ ቀን መቁጠሪያ "),
                                        createVNode("p", { class: "text-white font-weight-bold text-body-2 mb-0" }, "Ethiopian Calendar")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "d-flex align-center text-decoration-none text-white"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: _imports_0$1,
                                      alt: "Logo",
                                      height: "60",
                                      width: "60",
                                      class: "mr-2"
                                    }),
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode("h2", { class: "text-h6 font-weight-bold mb-0 text-white" }, " የኢትዮጵያ ቀን መቁጠሪያ "),
                                      createVNode("p", { class: "text-white font-weight-bold text-body-2 mb-0" }, "Ethiopian Calendar")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "auto",
                          class: "d-none d-md-flex align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(menuItems, (item, i) => {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  key: i,
                                  to: item.to,
                                  class: "nav-link",
                                  "active-class": "router-link-active"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                                  return createVNode(_component_NuxtLink, {
                                    key: i,
                                    to: item.to,
                                    class: "nav-link",
                                    "active-class": "router-link-active"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VAppBarNavIcon, {
                          class: "d-md-none",
                          onClick: ($event) => emit("toggle-drawer")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "auto",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "d-flex align-center text-decoration-none text-white"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: _imports_0$1,
                                    alt: "Logo",
                                    height: "60",
                                    width: "60",
                                    class: "mr-2"
                                  }),
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("h2", { class: "text-h6 font-weight-bold mb-0 text-white" }, " የኢትዮጵያ ቀን መቁጠሪያ "),
                                    createVNode("p", { class: "text-white font-weight-bold text-body-2 mb-0" }, "Ethiopian Calendar")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "auto",
                            class: "d-none d-md-flex align-center"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                                return createVNode(_component_NuxtLink, {
                                  key: i,
                                  to: item.to,
                                  class: "nav-link",
                                  "active-class": "router-link-active"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VAppBarNavIcon, {
                            class: "d-md-none",
                            onClick: ($event) => emit("toggle-drawer")
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      align: "center",
                      justify: "space-between"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "auto",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "d-flex align-center text-decoration-none text-white"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: _imports_0$1,
                                  alt: "Logo",
                                  height: "60",
                                  width: "60",
                                  class: "mr-2"
                                }),
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("h2", { class: "text-h6 font-weight-bold mb-0 text-white" }, " የኢትዮጵያ ቀን መቁጠሪያ "),
                                  createVNode("p", { class: "text-white font-weight-bold text-body-2 mb-0" }, "Ethiopian Calendar")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "auto",
                          class: "d-none d-md-flex align-center"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                              return createVNode(_component_NuxtLink, {
                                key: i,
                                to: item.to,
                                class: "nav-link",
                                "active-class": "router-link-active"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        createVNode(VAppBarNavIcon, {
                          class: "d-md-none",
                          onClick: ($event) => emit("toggle-drawer")
                        }, null, 8, ["onClick"])
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
              createVNode(VContainer, { class: "px-0" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    align: "center",
                    justify: "space-between"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "auto",
                        class: "d-flex align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: "d-flex align-center text-decoration-none text-white"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: _imports_0$1,
                                alt: "Logo",
                                height: "60",
                                width: "60",
                                class: "mr-2"
                              }),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("h2", { class: "text-h6 font-weight-bold mb-0 text-white" }, " የኢትዮጵያ ቀን መቁጠሪያ "),
                                createVNode("p", { class: "text-white font-weight-bold text-body-2 mb-0" }, "Ethiopian Calendar")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "auto",
                        class: "d-none d-md-flex align-center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                            return createVNode(_component_NuxtLink, {
                              key: i,
                              to: item.to,
                              class: "nav-link",
                              "active-class": "router-link-active"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VAppBarNavIcon, {
                        class: "d-md-none",
                        onClick: ($event) => emit("toggle-drawer")
                      }, null, 8, ["onClick"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-b92e42c1"]]), { __name: "AppHeader" });
const _imports_0 = publicAssetsURL("/Footerlogo.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      { icon: "mdi-facebook", url: "https://facebook.com" },
      { icon: "mdi-twitter", url: "https://twitter.com" },
      { icon: "mdi-linkedin", url: "https://linkedin.com" },
      { icon: "mdi-telegram", url: "https://t.me" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "box" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "text-center text-md-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center justify-center justify-md-start mb-4" data-v-ecbd0ca5${_scopeId3}>`);
                        _push4(ssrRenderComponent(VAvatar, {
                          tile: "",
                          class: "mr-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                src: _imports_0,
                                alt: "Ethiopian Calendar Logo"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: _imports_0,
                                  alt: "Ethiopian Calendar Logo"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-h6 font-weight-bold title-text text-primary" data-v-ecbd0ca5${_scopeId3}>Ethiopian Calendar</div></div><p class="text-body-2 copy" data-v-ecbd0ca5${_scopeId3}> Your guide to Ethiopian dates, holidays, and time. </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center justify-center justify-md-start mb-4" }, [
                            createVNode(VAvatar, {
                              tile: "",
                              class: "mr-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: _imports_0,
                                  alt: "Ethiopian Calendar Logo"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "text-h6 font-weight-bold title-text text-primary" }, "Ethiopian Calendar")
                          ]),
                          createVNode("p", { class: "text-body-2 copy" }, " Your guide to Ethiopian dates, holidays, and time. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    md: "1",
                    class: "d-none d-md-block"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h6 font-weight-bold mb-4 title-text text-primary" data-v-ecbd0ca5${_scopeId5}>Navigate</div><ul class="footer-links" data-v-ecbd0ca5${_scopeId5}><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Calendar`);
                                        } else {
                                          return [
                                            createTextVNode("Calendar")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/converter" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Converter`);
                                        } else {
                                          return [
                                            createTextVNode("Converter")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Holidays" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Holidays`);
                                        } else {
                                          return [
                                            createTextVNode("Holidays")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Time`);
                                        } else {
                                          return [
                                            createTextVNode("Time")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li></ul>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Navigate"),
                                      createVNode("ul", { class: "footer-links" }, [
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Calendar")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/converter" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Converter")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Holidays" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Holidays")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Time")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h6 font-weight-bold mb-4 title-text text-primary" data-v-ecbd0ca5${_scopeId5}>About</div><ul class="footer-links" data-v-ecbd0ca5${_scopeId5}><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/About-Us" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`About Us`);
                                        } else {
                                          return [
                                            createTextVNode("About Us")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Calendar Facts`);
                                        } else {
                                          return [
                                            createTextVNode("Calendar Facts")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Contact-Us" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Contact`);
                                        } else {
                                          return [
                                            createTextVNode("Contact")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li></ul>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "About"),
                                      createVNode("ul", { class: "footer-links" }, [
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/About-Us" }, {
                                            default: withCtx(() => [
                                              createTextVNode("About Us")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Calendar Facts")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Contact-Us" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Contact")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h6 font-weight-bold mb-4 title-text text-primary" data-v-ecbd0ca5${_scopeId5}>Legal</div><ul class="footer-links" data-v-ecbd0ca5${_scopeId5}><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Terms`);
                                        } else {
                                          return [
                                            createTextVNode("Terms")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li><li data-v-ecbd0ca5${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Privacy`);
                                        } else {
                                          return [
                                            createTextVNode("Privacy")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</li></ul>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Legal"),
                                      createVNode("ul", { class: "footer-links" }, [
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Terms")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("li", null, [
                                          createVNode(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Privacy")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Navigate"),
                                    createVNode("ul", { class: "footer-links" }, [
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Calendar")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/converter" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Converter")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Holidays" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Holidays")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Time")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "About"),
                                    createVNode("ul", { class: "footer-links" }, [
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/About-Us" }, {
                                          default: withCtx(() => [
                                            createTextVNode("About Us")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Calendar Facts")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Contact-Us" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Contact")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Legal"),
                                    createVNode("ul", { class: "footer-links" }, [
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Terms")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("li", null, [
                                        createVNode(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Privacy")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Navigate"),
                                  createVNode("ul", { class: "footer-links" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Calendar")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/converter" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Converter")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Holidays" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Holidays")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Time")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "About"),
                                  createVNode("ul", { class: "footer-links" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/About-Us" }, {
                                        default: withCtx(() => [
                                          createTextVNode("About Us")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Calendar Facts")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Contact-Us" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Contact")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Legal"),
                                  createVNode("ul", { class: "footer-links" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Terms")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Privacy")
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-center justify-md-start mb-4" }, [
                          createVNode(VAvatar, {
                            tile: "",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: _imports_0,
                                alt: "Ethiopian Calendar Logo"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-h6 font-weight-bold title-text text-primary" }, "Ethiopian Calendar")
                        ]),
                        createVNode("p", { class: "text-body-2 copy" }, " Your guide to Ethiopian dates, holidays, and time. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      md: "1",
                      class: "d-none d-md-block"
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Navigate"),
                                createVNode("ul", { class: "footer-links" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Calendar")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/converter" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Converter")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Holidays" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Holidays")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Time")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "About"),
                                createVNode("ul", { class: "footer-links" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/About-Us" }, {
                                      default: withCtx(() => [
                                        createTextVNode("About Us")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Calendar Facts")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Contact-Us" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Contact")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Legal"),
                                createVNode("ul", { class: "footer-links" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Terms")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Privacy")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center text-md-left"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-body-2 copy text-primary" data-v-ecbd0ca5${_scopeId3}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Ethiopian Calendar. All rights reserved. </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-body-2 copy text-primary" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Ethiopian Calendar. All rights reserved. ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center text-md-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-ecbd0ca5${_scopeId3}><!--[-->`);
                        ssrRenderList(socials, (social) => {
                          _push4(ssrRenderComponent(VBtn, {
                            key: social.icon,
                            href: social.url,
                            target: "_blank",
                            rel: "noopener",
                            color: "primary",
                            icon: "",
                            variant: "text",
                            class: "mx-1"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: social.icon,
                                  size: "22"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: social.icon,
                                    size: "22"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(socials, (social) => {
                              return createVNode(VBtn, {
                                key: social.icon,
                                href: social.url,
                                target: "_blank",
                                rel: "noopener",
                                color: "primary",
                                icon: "",
                                variant: "text",
                                class: "mx-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: social.icon,
                                    size: "22"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 64))
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
                      md: "6",
                      class: "text-center text-md-left"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-body-2 copy text-primary" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Ethiopian Calendar. All rights reserved. ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "text-center text-md-right"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(socials, (social) => {
                            return createVNode(VBtn, {
                              key: social.icon,
                              href: social.url,
                              target: "_blank",
                              rel: "noopener",
                              color: "primary",
                              icon: "",
                              variant: "text",
                              class: "mx-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: social.icon,
                                  size: "22"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 64))
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
              createVNode(VRow, { class: "text-center text-md-left" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-center justify-md-start mb-4" }, [
                        createVNode(VAvatar, {
                          tile: "",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: _imports_0,
                              alt: "Ethiopian Calendar Logo"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-h6 font-weight-bold title-text text-primary" }, "Ethiopian Calendar")
                      ]),
                      createVNode("p", { class: "text-body-2 copy" }, " Your guide to Ethiopian dates, holidays, and time. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    md: "1",
                    class: "d-none d-md-block"
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Navigate"),
                              createVNode("ul", { class: "footer-links" }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Ethiopia-Calendar" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Calendar")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/converter" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Converter")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Holidays" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Holidays")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Ethiopia-Time" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Time")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "About"),
                              createVNode("ul", { class: "footer-links" }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/About-Us" }, {
                                    default: withCtx(() => [
                                      createTextVNode("About Us")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Ethiopian-Calendar-Facts" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Calendar Facts")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Contact-Us" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Contact")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6 font-weight-bold mb-4 title-text text-primary" }, "Legal"),
                              createVNode("ul", { class: "footer-links" }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Terms-Conditions" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Terms")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, { to: "/Privacy-Policy" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Privacy")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "my-6" }),
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center text-md-left"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-body-2 copy text-primary" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Ethiopian Calendar. All rights reserved. ", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center text-md-right"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(socials, (social) => {
                          return createVNode(VBtn, {
                            key: social.icon,
                            href: social.url,
                            target: "_blank",
                            rel: "noopener",
                            color: "primary",
                            icon: "",
                            variant: "text",
                            class: "mx-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: social.icon,
                                size: "22"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecbd0ca5"]]), { __name: "AppFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VContainer, { class: "py-6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VContainer, { class: "py-6" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AppHeader),
          createVNode(VMain, null, {
            default: withCtx(() => [
              createVNode(VContainer, { class: "py-6" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          }),
          createVNode(_component_AppFooter)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CpZaYd1v.mjs.map
