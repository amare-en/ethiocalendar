import { e as makeComponentProps } from './VRow-DuOE5lZP.mjs';
import { capitalize, h, camelize } from 'vue';
import { e as genericComponent } from './server.mjs';

function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name ?? capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, slots.default?.());
      };
    }
  });
}

export { createSimpleFunctional as c };
//# sourceMappingURL=createSimpleFunctional-Cf07O5xJ.mjs.map
