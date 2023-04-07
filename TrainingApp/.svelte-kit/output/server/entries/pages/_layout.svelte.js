import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:white;transition:background-color 0.3s\r\n	}body.dark-mode{background-color:#1d3040;color:#bfc2c7}footer.svelte-r6pmlv{display:flex;z-index:2;width:100vw;justify-content:space-around;align-items:center;position:fixed;bottom:0;height:70px;left:0;background-color:rgb(81, 100, 207)}img.svelte-r6pmlv{height:60px;width:60px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.darkTheme === "true") {
      window.document.body.classList.add("dark-mode");
    }
  } catch {
  }
  $$result.css.add(css);
  return `<footer class="svelte-r6pmlv"><nav>
        <a id="img" href="settings"><img src="settings.png" alt="" class="svelte-r6pmlv"></a>
        
        <a style="margin: 0px 10vw 0px 10vw" id="img" class="home" href="/"><img src="home.png" alt="" class="svelte-r6pmlv"></a>
        
        <a id="img" href="profile"><img src="profile.png" alt="" class="svelte-r6pmlv"></a></nav></footer>



${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
