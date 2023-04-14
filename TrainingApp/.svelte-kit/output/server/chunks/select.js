import { c as create_ssr_component, d as add_attribute } from "./index.js";
const select_svelte_svelte_type_style_lang = "";
const css = {
  code: ".select.svelte-1dhop3b{cursor:pointer;border-radius:50%;width:20px;height:20px;border:1px solid grey;position:absolute;background-size:cover;background-position:center}.icon.svelte-1dhop3b{width:20px;height:20px;border-radius:50%;background-size:cover;background-position:center}.options.svelte-1dhop3b{display:flex;flex-direction:column;position:absolute;align-items:center;justify-content:space-between}button.svelte-1dhop3b{background:none;padding:0}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { optionNow } = $$props;
  let { setOptionNow } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.optionNow === void 0 && $$bindings.optionNow && optionNow !== void 0)
    $$bindings.optionNow(optionNow);
  if ($$props.setOptionNow === void 0 && $$bindings.setOptionNow && setOptionNow !== void 0)
    $$bindings.setOptionNow(setOptionNow);
  $$result.css.add(css);
  return `<button class="select svelte-1dhop3b"${add_attribute(
    "style",
    `background-image: url(${optionNow.src})`,
    0
  )}></button>
${``}`;
});
export {
  Select as S
};
