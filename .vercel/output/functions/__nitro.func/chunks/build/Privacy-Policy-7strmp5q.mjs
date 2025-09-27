import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VContainer, a as VRow, b as VCol } from './VRow-DuOE5lZP.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "Privacy-Policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-12 px-4 px-md-12" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-8"${_scopeId3}><h2 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4"${_scopeId3}> Privacy Policy </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> Your privacy is important to us at <strong${_scopeId3}>[Your App Name]</strong>. This Privacy Policy explains how we collect, use, and protect your information. </p></div><div class="pa-4 rounded-lg border"${_scopeId3}><h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2"${_scopeId3}> Information We Collect </h2><ul class="text-body-1 mb-6 pl-6"${_scopeId3}><li${_scopeId3}>Cookies and usage data (to improve performance and show ads).</li><li${_scopeId3}>Anonymous analytics (to understand how users use our app).</li></ul><h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2"${_scopeId3}> How We Use Your Information </h2><ul class="text-body-1 mb-6 pl-6"${_scopeId3}><li${_scopeId3}>To provide and improve our services.</li><li${_scopeId3}>To display Google Ads (AdSense may use cookies to serve personalized ads).</li><li${_scopeId3}>To analyze usage and enhance user experience.</li></ul><h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2"${_scopeId3}> Third-Party Services </h2><p class="text-body-1 mb-6"${_scopeId3}> We use Google AdSense. Google may use cookies to show ads based on your interests. </p><h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2"${_scopeId3}> Your Rights </h2><ul class="text-body-1 mb-6 pl-6"${_scopeId3}><li${_scopeId3}>You can disable cookies in your browser settings.</li><li${_scopeId3}>We do not sell or share your personal data with third parties.</li></ul><p class="text-body-1"${_scopeId3}> If you have any questions, please contact us at: <strong${_scopeId3}>[your email]</strong>. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-8" }, [
                            createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Privacy Policy "),
                            createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                              createTextVNode(" Your privacy is important to us at "),
                              createVNode("strong", null, "[Your App Name]"),
                              createTextVNode(". This Privacy Policy explains how we collect, use, and protect your information. ")
                            ])
                          ]),
                          createVNode("div", { class: "pa-4 rounded-lg border" }, [
                            createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Information We Collect "),
                            createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                              createVNode("li", null, "Cookies and usage data (to improve performance and show ads)."),
                              createVNode("li", null, "Anonymous analytics (to understand how users use our app).")
                            ]),
                            createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " How We Use Your Information "),
                            createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                              createVNode("li", null, "To provide and improve our services."),
                              createVNode("li", null, "To display Google Ads (AdSense may use cookies to serve personalized ads)."),
                              createVNode("li", null, "To analyze usage and enhance user experience.")
                            ]),
                            createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Third-Party Services "),
                            createVNode("p", { class: "text-body-1 mb-6" }, " We use Google AdSense. Google may use cookies to show ads based on your interests. "),
                            createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Your Rights "),
                            createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                              createVNode("li", null, "You can disable cookies in your browser settings."),
                              createVNode("li", null, "We do not sell or share your personal data with third parties.")
                            ]),
                            createVNode("p", { class: "text-body-1" }, [
                              createTextVNode(" If you have any questions, please contact us at: "),
                              createVNode("strong", null, "[your email]"),
                              createTextVNode(". ")
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
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-8" }, [
                          createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Privacy Policy "),
                          createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                            createTextVNode(" Your privacy is important to us at "),
                            createVNode("strong", null, "[Your App Name]"),
                            createTextVNode(". This Privacy Policy explains how we collect, use, and protect your information. ")
                          ])
                        ]),
                        createVNode("div", { class: "pa-4 rounded-lg border" }, [
                          createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Information We Collect "),
                          createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                            createVNode("li", null, "Cookies and usage data (to improve performance and show ads)."),
                            createVNode("li", null, "Anonymous analytics (to understand how users use our app).")
                          ]),
                          createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " How We Use Your Information "),
                          createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                            createVNode("li", null, "To provide and improve our services."),
                            createVNode("li", null, "To display Google Ads (AdSense may use cookies to serve personalized ads)."),
                            createVNode("li", null, "To analyze usage and enhance user experience.")
                          ]),
                          createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Third-Party Services "),
                          createVNode("p", { class: "text-body-1 mb-6" }, " We use Google AdSense. Google may use cookies to show ads based on your interests. "),
                          createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Your Rights "),
                          createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                            createVNode("li", null, "You can disable cookies in your browser settings."),
                            createVNode("li", null, "We do not sell or share your personal data with third parties.")
                          ]),
                          createVNode("p", { class: "text-body-1" }, [
                            createTextVNode(" If you have any questions, please contact us at: "),
                            createVNode("strong", null, "[your email]"),
                            createTextVNode(". ")
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
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-8" }, [
                        createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Privacy Policy "),
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, [
                          createTextVNode(" Your privacy is important to us at "),
                          createVNode("strong", null, "[Your App Name]"),
                          createTextVNode(". This Privacy Policy explains how we collect, use, and protect your information. ")
                        ])
                      ]),
                      createVNode("div", { class: "pa-4 rounded-lg border" }, [
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Information We Collect "),
                        createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                          createVNode("li", null, "Cookies and usage data (to improve performance and show ads)."),
                          createVNode("li", null, "Anonymous analytics (to understand how users use our app).")
                        ]),
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " How We Use Your Information "),
                        createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                          createVNode("li", null, "To provide and improve our services."),
                          createVNode("li", null, "To display Google Ads (AdSense may use cookies to serve personalized ads)."),
                          createVNode("li", null, "To analyze usage and enhance user experience.")
                        ]),
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Third-Party Services "),
                        createVNode("p", { class: "text-body-1 mb-6" }, " We use Google AdSense. Google may use cookies to show ads based on your interests. "),
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-3 text-blue-darken-2" }, " Your Rights "),
                        createVNode("ul", { class: "text-body-1 mb-6 pl-6" }, [
                          createVNode("li", null, "You can disable cookies in your browser settings."),
                          createVNode("li", null, "We do not sell or share your personal data with third parties.")
                        ]),
                        createVNode("p", { class: "text-body-1" }, [
                          createTextVNode(" If you have any questions, please contact us at: "),
                          createVNode("strong", null, "[your email]"),
                          createTextVNode(". ")
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Privacy-Policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Privacy-Policy-7strmp5q.mjs.map
