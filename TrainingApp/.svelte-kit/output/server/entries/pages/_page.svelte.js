import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index.js";
import { L as Loading } from "../../chunks/loading.js";
import { u as user } from "../../chunks/staticData.js";
import { t as translations } from "../../chunks/translation.js";
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".start.svelte-1b7b4fg{color:rgb(239, 238, 242);text-decoration:none;background-color:rgb(27, 27, 207);border-radius:0.5em;padding:1em;cursor:pointer;border:none;margin-left:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title>News and sprort</title>

${user && user.programId ? `<h2>${escape(user.language ? translations.get("startWorkout").get(user && user.language ? user.language : "Русский") : "Начать тренировку")}</h2>
<a class="start svelte-1b7b4fg" href="/workout">${escape(translations.get("start").get(user && user.language ? user.language : "Русский"))}</a>` : ``}

<h1 class="RecomendationText">${escape(translations.get("news").get(user && user.language ? user.language : "Русский"))} :</h1>
${validate_component(News, "News").$$render($$result, {}, {}, {})}
<a href="/news">${escape(translations.get("moreNews").get(user && user.language ? user.language : "Русский"))}</a>`;
});
export {
  Page as default
};
