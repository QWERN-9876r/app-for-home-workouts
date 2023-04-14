import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/staticData.js";
import { S as Select } from "../../../chunks/select.js";
import { t as translations } from "../../../chunks/translation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-14lptpf.svelte-14lptpf{position:relative}div.svelte-14lptpf.svelte-14lptpf{display:flex;justify-content:space-between}main.svelte-14lptpf.svelte-14lptpf{display:flex;align-items:center;justify-content:center;height:90vh}input.svelte-14lptpf.svelte-14lptpf{border:none;border-bottom:1px rgb(58, 58, 163) solid;font-size:20px;padding:5px;outline:none;display:block}input.svelte-14lptpf+input.svelte-14lptpf{margin-top:10px}button.svelte-14lptpf.svelte-14lptpf{background-color:rgb(58, 58, 163);border:none;border-radius:0.5em;padding:0.5em;font-size:20px;margin-top:10px;float:right}.error.svelte-14lptpf.svelte-14lptpf{color:red;font-weight:700}a.svelte-14lptpf.svelte-14lptpf{text-decoration:underline;color:blue;align-self:center}.select.svelte-14lptpf.svelte-14lptpf{position:absolute;top:0;right:25px}",
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
  return `<main class="svelte-14lptpf"><section class="svelte-14lptpf"><div class="select svelte-14lptpf">${validate_component(Select, "Select").$$render($$result, { options, optionNow, setOptionNow }, {}, {})}</div>
        <h1>${escape(translations.get("logIn").get(optionNow.value))}</h1>
        <input type="text"${add_attribute("placeholder", translations.get("name").get(optionNow.value), 0)} class="svelte-14lptpf"${add_attribute("value", name, 0)}>
        <input type="password"${add_attribute("placeholder", translations.get("password").get(optionNow.value), 0)} class="svelte-14lptpf"${add_attribute("value", password, 0)}>
        <div class="svelte-14lptpf"><a href="register" class="svelte-14lptpf">${escape(translations.get("noAccount").get(optionNow.value))}?</a>
            <button class="svelte-14lptpf">${escape(translations.get("logIn").get(optionNow.value))}</button></div>

        ${``}</section>

</main>`;
});
export {
  Page as default
};
