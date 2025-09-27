import { mergeProps, withCtx, createVNode, createTextVNode, ref, createElementVNode, normalizeStyle, normalizeClass, computed, shallowRef, watchEffect, watch, Fragment, withDirectives, vModelText, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, e as genericComponent, p as propsFactory, E as useProxiedModel, ai as filterInputAttrs, d as convertToUnit, w as clamp, aj as callEvent } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol, c as useRender, e as makeComponentProps } from './VRow-DuOE5lZP.mjs';
import { c as createForm, a as useFocus, V as VInput, m as makeFormProps, b as makeVInputProps } from './VInput-B9fom_-l.mjs';
import { f as forwardRefs } from './forwardRefs-CtBGLcOj.mjs';
import { V as VTextField, a as VField, b as VCounter, u as useAutofocus, c as makeVFieldProps } from './VTextField-Ba7jKIdM.mjs';
import { I as Intersect } from './index-DsqekkR1.mjs';
import { V as VBtn } from './VBtn-CtUSWaMx.mjs';
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
import './VIcon-xAIaYZjS.mjs';
import './color-DbIj6V-T.mjs';
import './index-BsXMJvGl.mjs';
import './router-D8sdwdYd.mjs';
import './position-kce-9oVv.mjs';
import './index-CaPUijDs.mjs';
import './animation-APx-zXWD.mjs';
import './group-CNE9VaDa.mjs';

const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          let {
            valid
          } = _ref2;
          if (valid) {
            formRef.value?.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => createElementVNode("form", {
      "ref": formRef,
      "class": normalizeClass(["v-form", props.class]),
      "style": normalizeStyle(props.style),
      "novalidate": true,
      "onReset": onReset,
      "onSubmit": onSubmit
    }, [slots.default?.(form)]));
    return forwardRefs(form, formRef);
  }
});
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true,
    "update:rows": (rows) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (textareaRef.value !== (void 0).activeElement) {
        textareaRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      model.value = el.value;
      if (props.modelModifiers?.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    watch(rows, (val) => {
      emit("update:rows", val);
    });
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer?.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid,
            hasDetails: hasDetails2
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "details": hasDetails2.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createElementVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[Intersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createElementVNode("textarea", {
                "class": normalizeClass([fieldClass, "v-textarea__sizer"]),
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => createElementVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
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
                    _push4(`<h2 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4"${_scopeId3}> Contact Us </h2><p class="text-body-1 text-medium-emphasis"${_scopeId3}> If you have any questions, suggestions, or feedback, please feel free to reach out to us. We’d love to hear from you! </p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Contact Us "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " If you have any questions, suggestions, or feedback, please feel free to reach out to us. We’d love to hear from you! ")
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
                    createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Contact Us "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " If you have any questions, suggestions, or feedback, please feel free to reach out to us. We’d love to hear from you! ")
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
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="pa-4 rounded-lg border"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VForm, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Full Name",
                            variant: "outlined",
                            density: "comfortable",
                            "prepend-inner-icon": "mdi-account",
                            required: "",
                            class: "mb-4"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Email Address",
                            type: "email",
                            variant: "outlined",
                            density: "comfortable",
                            "prepend-inner-icon": "mdi-email",
                            required: "",
                            class: "mb-4"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            label: "Your Message",
                            rows: "5",
                            variant: "outlined",
                            "prepend-inner-icon": "mdi-message-text",
                            required: ""
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            color: "primary",
                            size: "large",
                            class: "mt-6 text-white rounded-lg"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Send Message `);
                              } else {
                                return [
                                  createTextVNode(" Send Message ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Full Name",
                              variant: "outlined",
                              density: "comfortable",
                              "prepend-inner-icon": "mdi-account",
                              required: "",
                              class: "mb-4"
                            }),
                            createVNode(VTextField, {
                              label: "Email Address",
                              type: "email",
                              variant: "outlined",
                              density: "comfortable",
                              "prepend-inner-icon": "mdi-email",
                              required: "",
                              class: "mb-4"
                            }),
                            createVNode(VTextarea, {
                              label: "Your Message",
                              rows: "5",
                              variant: "outlined",
                              "prepend-inner-icon": "mdi-message-text",
                              required: ""
                            }),
                            createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              size: "large",
                              class: "mt-6 text-white rounded-lg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Send Message ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "pa-4 rounded-lg border" }, [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Full Name",
                              variant: "outlined",
                              density: "comfortable",
                              "prepend-inner-icon": "mdi-account",
                              required: "",
                              class: "mb-4"
                            }),
                            createVNode(VTextField, {
                              label: "Email Address",
                              type: "email",
                              variant: "outlined",
                              density: "comfortable",
                              "prepend-inner-icon": "mdi-email",
                              required: "",
                              class: "mb-4"
                            }),
                            createVNode(VTextarea, {
                              label: "Your Message",
                              rows: "5",
                              variant: "outlined",
                              "prepend-inner-icon": "mdi-message-text",
                              required: ""
                            }),
                            createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              size: "large",
                              class: "mt-6 text-white rounded-lg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Send Message ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pa-4 rounded-lg border" }, [
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Full Name",
                            variant: "outlined",
                            density: "comfortable",
                            "prepend-inner-icon": "mdi-account",
                            required: "",
                            class: "mb-4"
                          }),
                          createVNode(VTextField, {
                            label: "Email Address",
                            type: "email",
                            variant: "outlined",
                            density: "comfortable",
                            "prepend-inner-icon": "mdi-email",
                            required: "",
                            class: "mb-4"
                          }),
                          createVNode(VTextarea, {
                            label: "Your Message",
                            rows: "5",
                            variant: "outlined",
                            "prepend-inner-icon": "mdi-message-text",
                            required: ""
                          }),
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            size: "large",
                            class: "mt-6 text-white rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Send Message ")
                            ]),
                            _: 1
                          })
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "text-center mt-8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="text-body-2 text-medium-emphasis"${_scopeId3}> We’ll get back to you as soon as possible. </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-body-2 text-medium-emphasis" }, " We’ll get back to you as soon as possible. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  class: "text-center mt-8"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-body-2 text-medium-emphasis" }, " We’ll get back to you as soon as possible. ")
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
                  createVNode("h2", { class: "text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4" }, " Contact Us "),
                  createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " If you have any questions, suggestions, or feedback, please feel free to reach out to us. We’d love to hear from you! ")
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pa-4 rounded-lg border" }, [
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Full Name",
                          variant: "outlined",
                          density: "comfortable",
                          "prepend-inner-icon": "mdi-account",
                          required: "",
                          class: "mb-4"
                        }),
                        createVNode(VTextField, {
                          label: "Email Address",
                          type: "email",
                          variant: "outlined",
                          density: "comfortable",
                          "prepend-inner-icon": "mdi-email",
                          required: "",
                          class: "mb-4"
                        }),
                        createVNode(VTextarea, {
                          label: "Your Message",
                          rows: "5",
                          variant: "outlined",
                          "prepend-inner-icon": "mdi-message-text",
                          required: ""
                        }),
                        createVNode(VBtn, {
                          block: "",
                          color: "primary",
                          size: "large",
                          class: "mt-6 text-white rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Send Message ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                class: "text-center mt-8"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-body-2 text-medium-emphasis" }, " We’ll get back to you as soon as possible. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact-Us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ContactUs as default };
//# sourceMappingURL=Contact-Us-C2QJMikJ.mjs.map
