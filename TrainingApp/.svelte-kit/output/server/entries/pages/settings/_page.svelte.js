import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../../chunks/index.js";
import { u as user } from "../../../chunks/staticData.js";
import { L as LoginWindow } from "../../../chunks/loginWindow.js";
const checkbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.switch.svelte-4l8n7c.svelte-4l8n7c{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-4l8n7c input.svelte-4l8n7c{opacity:0;width:0;height:0}.slider.svelte-4l8n7c.svelte-4l8n7c{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider.svelte-4l8n7c.svelte-4l8n7c:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s}input.svelte-4l8n7c:checked+.slider.svelte-4l8n7c{background-color:#1972ba}input.svelte-4l8n7c:focus+.slider.svelte-4l8n7c{box-shadow:0 0 1px rgb(13, 96, 164)}input.svelte-4l8n7c:checked+.slider.svelte-4l8n7c:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-4l8n7c.svelte-4l8n7c{border-radius:34px}.slider.round.svelte-4l8n7c.svelte-4l8n7c:before{border-radius:50%}',
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked } = $$props;
  let { engName } = $$props;
  if (typeof checked !== "boolean")
    checked = false;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.engName === void 0 && $$bindings.engName && engName !== void 0)
    $$bindings.engName(engName);
  $$result.css.add(css$1);
  return `<label class="switch svelte-4l8n7c"><input type="checkbox" class="svelte-4l8n7c"${add_attribute("checked", checked, 1)}>
    <span class="slider round svelte-4l8n7c"></span>
</label>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-1oj7br0{font-size:20px;font-weight:600}p.svelte-1oj7br0{display:flex;align-items:center;justify-content:space-between}select.svelte-1oj7br0{width:100px;height:35px;border:2px solid blue;font-weight:600;border-radius:5px;transition:0.3s}select.svelte-1oj7br0:active{border-color:black}select.svelte-1oj7br0:hover{border-color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const CheckedSettings = [
    {
      name: translations.get(" darkTheme").get(user.language)(beta),
      engName: "darkTheme",
      checked: user && (Object.keys(user).includes("darkTheme") && user["darkTheme"] === "true") ? true : false
    }
  ], listSettings = [
    {
      name: translations.get("language").get(user.language),
      engName: "language",
      answers: ["Русский", "English"]
    }
  ];
  $$result.css.add(css);
  return `${!user ? `${validate_component(LoginWindow, "LoginWindow").$$render($$result, {}, {}, {})}` : `${each(CheckedSettings, ({ checked, name, engName }) => {
    return `<p class="svelte-1oj7br0"><span class="svelte-1oj7br0">${escape(name)}</span> ${validate_component(Checkbox, "Checkbox").$$render($$result, { checked, engName }, {}, {})}</p>`;
  })}
${each(listSettings, ({ name, engName, answers }) => {
    return `<p class="svelte-1oj7br0"><span class="svelte-1oj7br0">${escape(name)}</span>
  <select class="svelte-1oj7br0">${each(answers, (answer) => {
      return `<option${add_attribute("value", answer, 0)}>${escape(answer)}
    </option>`;
    })}</select>
</p>`;
  })}`}`;
});
export {
  Page as default
};
