import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/staticData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-9nvsww.svelte-9nvsww{display:flex;align-items:center;justify-content:center;height:90vh}input.svelte-9nvsww.svelte-9nvsww{border:none;border-bottom:1px rgb(58, 58, 163) solid;font-size:20px;padding:5px;outline:none;display:block}input.svelte-9nvsww+input.svelte-9nvsww{margin-top:10px}button.svelte-9nvsww.svelte-9nvsww{background-color:rgb(58, 58, 163);border:none;border-radius:0.5em;padding:0.5em;font-size:20px;margin-top:10px;float:right}p.svelte-9nvsww.svelte-9nvsww{color:red;font-weight:700}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "", password = "";
  $$result.css.add(css);
  return `<main class="svelte-9nvsww"><section><h1>Регистрация</h1>
        <input type="text" placeholder="имя" class="svelte-9nvsww"${add_attribute("value", name, 0)}>
        <input type="password" placeholder="пароль" class="svelte-9nvsww"${add_attribute("value", password, 0)}>
        <button class="svelte-9nvsww">Зарегистрироваться</button>
        ${``}</section>
</main>`;
});
export {
  Page as default
};
