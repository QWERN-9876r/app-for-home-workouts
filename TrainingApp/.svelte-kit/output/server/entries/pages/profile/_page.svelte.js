import { c as create_ssr_component, e as escape, v as validate_component, f as each, d as add_attribute } from "../../../chunks/index.js";
import { u as user } from "../../../chunks/staticData.js";
import { t as translations } from "../../../chunks/translation.js";
import { L as LoginWindow } from "../../../chunks/loginWindow.js";
const username_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "@media( min-width: 500px ){h1.svelte-styb1d{font-size:40px}}",
  map: null
};
const Username = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<h1 class="svelte-styb1d">${escape(user.name)}</h1>`;
});
const oneProgram_svelte_svelte_type_style_lang = "";
const userProgram_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".programBtn.svelte-47xacu{position:absolute;bottom:10px;right:10px}.programBlock.svelte-47xacu{position:relative;width:90vw;max-width:400px;height:200px;border-radius:10px;background-size:cover}.programName.svelte-47xacu{color:white}",
  map: null
};
const UserProgram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name, src;
  $$result.css.add(css$3);
  return `<div class="programBlock svelte-47xacu" style="${"background-image: url(" + escape(src, true) + ");"}"><h3 class="programName svelte-47xacu">${escape(name[user.language])}</h3>
    <button class="programBtn svelte-47xacu">Смотреть план</button>
</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rerender;
  const setRerender = (value) => rerender = value;
  rerender = setRerender(false);
  return `${user.programId || rerender ? `${validate_component(UserProgram, "UserProgram").$$render($$result, {}, {}, {})}` : `${`<button>${escape(translations.get("chooseProgram").get(user.language || "Русский"))}</button>`}`}`;
});
const parameters_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "input.svelte-1kbkc2s{padding:0.25em;font-size:20px;border-radius:0.5em;width:50vw;max-width:200px}.parametr.svelte-1kbkc2s{margin-bottom:5px}",
  map: null
};
const Parameters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const preKeys = [
    {
      key: "startWeight",
      text: translations.get("weight").get(user.language),
      value: ""
    },
    {
      key: "kolPush-ups",
      text: translations.get("kolPush-ups").get(user.language),
      value: ""
    }
  ], keys = [
    {
      key: "weight",
      text: translations.get("weight").get(user.language),
      value: ""
    },
    {
      key: "StartKolPush-ups",
      text: translations.get("kolPush-ups").get(user.language),
      value: ""
    }
  ];
  $$result.css.add(css$2);
  return `<h2>${escape(translations.get("itWas").get(user.language))}:</h2>
${each(preKeys, (objectKey) => {
    return `<div class="parametr svelte-1kbkc2s">${user[objectKey.key] ? `${escape(objectKey.text)}: ${escape(user[objectKey.key])}` : `${escape(objectKey.text)}
        <input type="number" min="1" max="3000" class="svelte-1kbkc2s"${add_attribute("value", objectKey.value, 0)}>
        <button>${escape(translations.get("send").get(user.language))} </button>`}
    </div>`;
  })}

<h2>${escape(translations.get("hasBecome").get(user.language))}:</h2>
${each(keys, (objectKey) => {
    return `<div class="parametr svelte-1kbkc2s">${user[objectKey.key] ? `${escape(objectKey.text)}: ${escape(user[objectKey.key])}
    <button>${escape(translations.get("change").get(user.language))} </button>` : `${escape(objectKey.text)}
    <input type="number" min="1" max="3000" class="svelte-1kbkc2s"${add_attribute("value", objectKey.value, 0)}>
    <button>${escape(translations.get("send").get(user.language))} </button>`}
</div>`;
  })}`;
});
const profile_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-167y9e9{width:50px;height:50px;position:absolute;top:10px;right:10px}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Username, "Username").$$render($$result, {}, {}, {})}
${validate_component(Card, "Card").$$render($$result, {}, {}, {})}
${validate_component(Parameters, "Parameters").$$render($$result, {}, {}, {})}
<a href="profile"><img src="exit.png" alt="" class="svelte-167y9e9"></a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile.svelte-1ku0ewz{padding-bottom:70px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${user ? `<div class="profile svelte-1ku0ewz">${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}</div>` : `${validate_component(LoginWindow, "LoginWindow").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
