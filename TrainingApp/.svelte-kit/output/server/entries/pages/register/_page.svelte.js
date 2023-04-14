import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/staticData.js";
import { S as Select } from "../../../chunks/select.js";
import { t as translations } from "../../../chunks/translation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-t28plw.svelte-t28plw{position:relative}main.svelte-t28plw.svelte-t28plw{display:flex;align-items:center;justify-content:center;height:90vh}input.svelte-t28plw.svelte-t28plw{border:none;border-bottom:1px rgb(58, 58, 163) solid;font-size:20px;padding:5px;outline:none;display:block}input.svelte-t28plw+input.svelte-t28plw{margin-top:10px}button.svelte-t28plw.svelte-t28plw{background-color:rgb(58, 58, 163);border:none;border-radius:0.5em;padding:0.5em;font-size:20px;margin-top:10px;float:right}p.svelte-t28plw.svelte-t28plw{color:red;font-weight:700}.select.svelte-t28plw.svelte-t28plw{position:absolute;top:0;right:25px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionNow;
  const options = [
    { value: "Русский", src: "Русский.png" },
    { value: "English", src: "English.png" }
  ], setOptionNow = (value) => optionNow = value;
  let name = "", password = "";
  $$result.css.add(css);
  optionNow = setOptionNow(options[0]);
  return `<main class="svelte-t28plw"><section class="svelte-t28plw"><div class="select svelte-t28plw">${validate_component(Select, "Select").$$render($$result, { options, optionNow, setOptionNow }, {}, {})}</div>
        <h1>${escape(optionNow.value === "Русский" ? "Регистрация" : translations.get("register").get(optionNow.value))}</h1>
        <input type="text"${add_attribute("placeholder", translations.get("name").get(optionNow.value), 0)} class="svelte-t28plw"${add_attribute("value", name, 0)}>
        <input type="password"${add_attribute("placeholder", translations.get("password").get(optionNow.value), 0)} class="svelte-t28plw"${add_attribute("value", password, 0)}>
        <button class="svelte-t28plw">${escape(translations.get("register").get(optionNow.value))}</button>
        ${``}</section>
</main>`;
});
export {
  Page as default
};
