import { c as create_ssr_component } from "./index.js";
const loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-1lp0679{position:absolute;top:0;left:0;width:100%;height:90%;display:flex;justify-content:center;align-items:center}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="loading svelte-1lp0679"><img src="https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif" width="100" height="100" alt="loading">
</section>`;
});
export {
  Loading as L
};
