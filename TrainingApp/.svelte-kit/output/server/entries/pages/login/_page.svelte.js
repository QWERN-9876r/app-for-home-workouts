import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/staticData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-wx0ai1.svelte-wx0ai1{display:flex;justify-content:space-between}main.svelte-wx0ai1.svelte-wx0ai1{display:flex;align-items:center;justify-content:center;height:90vh}input.svelte-wx0ai1.svelte-wx0ai1{border:none;border-bottom:1px rgb(58, 58, 163) solid;font-size:20px;padding:5px;outline:none;display:block}input.svelte-wx0ai1+input.svelte-wx0ai1{margin-top:10px}button.svelte-wx0ai1.svelte-wx0ai1{background-color:rgb(58, 58, 163);border:none;border-radius:0.5em;padding:0.5em;font-size:20px;margin-top:10px;float:right}.error.svelte-wx0ai1.svelte-wx0ai1{color:red;font-weight:700}a.svelte-wx0ai1.svelte-wx0ai1{text-decoration:underline;color:blue;align-self:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "", password = "";
  $$result.css.add(css);
  return `<main class="svelte-wx0ai1"><section><h1>Войти</h1>
        <input type="text" placeholder="имя" class="svelte-wx0ai1"${add_attribute("value", name, 0)}>
        <input type="password" placeholder="пароль" class="svelte-wx0ai1"${add_attribute("value", password, 0)}>
        <div class="svelte-wx0ai1"><a href="register" class="svelte-wx0ai1">Нет аккаунта?</a>
            <button class="svelte-wx0ai1">Войти</button></div>

        ${``}</section>

</main>`;
});
export {
  Page as default
};
