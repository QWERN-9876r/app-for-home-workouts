import { c as create_ssr_component } from "./index.js";
const loginWindow_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-10d2u49.svelte-10d2u49{color:rgb(239, 238, 242);text-decoration:none;background-color:rgb(27, 27, 207);border-radius:0.5em;padding:1em;cursor:pointer}a.svelte-10d2u49+a.svelte-10d2u49{margin-left:25px}main.svelte-10d2u49.svelte-10d2u49{display:flex;height:90vh;align-items:center;justify-content:center}.links.svelte-10d2u49.svelte-10d2u49{justify-self:center;display:flex;flex-wrap:wrap}h1.svelte-10d2u49.svelte-10d2u49{display:flex;flex-direction:column;align-items:center}.loginWindow.svelte-10d2u49.svelte-10d2u49{display:grid;align-items:center;width:400px;height:300px;border:5px solid grey;border-radius:1em}@media(max-width: 339px){a.svelte-10d2u49.svelte-10d2u49{margin-bottom:10px}.links.svelte-10d2u49.svelte-10d2u49{justify-content:center}}",
  map: null
};
const LoginWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-10d2u49"><div class="loginWindow svelte-10d2u49"><h1 class="svelte-10d2u49">Войдите</h1>
        <section class="links svelte-10d2u49"><a href="login" class="svelte-10d2u49">Войти</a>
            <a href="register" class="svelte-10d2u49">Зарегистрироваться</a></section></div>
</main>`;
});
export {
  LoginWindow as L
};
