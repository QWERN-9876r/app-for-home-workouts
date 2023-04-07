import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { L as Loading } from "../../../chunks/loading.js";
import { s as serverUrl, u as user } from "../../../chunks/staticData.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { i } = $$props;
  let { quanity } = $$props;
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.quanity === void 0 && $$bindings.quanity && quanity !== void 0)
    $$bindings.quanity(quanity);
  return `${escape(i + 1)}/${escape(quanity)}`;
});
const Main_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-1s7r1wc{width:100vw;max-height:80vh}h1.svelte-1s7r1wc{display:flex;justify-content:center}h3.svelte-1s7r1wc{display:flex;justify-content:center}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exercise } = $$props;
  let { quanitityOrTime } = $$props;
  let { quantity } = $$props;
  let { further } = $$props;
  let user2 = JSON.parse(localStorage.getItem("user")) || null;
  const kol = (quantity2) => {
    if (quanitityOrTime) {
      if (user2 && user2.language === "English") {
        return quantity2 + " times";
      } else {
        return quantity2 + " раз";
      }
    } else if (user2 && user2.language === "English") {
      return quantity2 + " seconds";
    } else {
      return quantity2 + " секунд";
    }
  };
  const finallExercises = () => {
    if (!quantity) {
      further();
    }
    clearInterval(intervalId);
  };
  const intervalId = setInterval(
    () => !quanitityOrTime && quantity ? quantity-- : finallExercises(),
    1e3
  );
  if ($$props.exercise === void 0 && $$bindings.exercise && exercise !== void 0)
    $$bindings.exercise(exercise);
  if ($$props.quanitityOrTime === void 0 && $$bindings.quanitityOrTime && quanitityOrTime !== void 0)
    $$bindings.quanitityOrTime(quanitityOrTime);
  if ($$props.quantity === void 0 && $$bindings.quantity && quantity !== void 0)
    $$bindings.quantity(quantity);
  if ($$props.further === void 0 && $$bindings.further && further !== void 0)
    $$bindings.further(further);
  $$result.css.add(css$2);
  return `<img${add_attribute("src", exercise.src, 0)} alt="" class="svelte-1s7r1wc">
<h3 class="svelte-1s7r1wc">${escape(kol(quantity))}</h3>

<h1 class="svelte-1s7r1wc">${escape(exercise[user2.language || "Русский"])}</h1>`;
});
const relax_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-t94c2l{width:80vw;min-height:50vh}h3.svelte-t94c2l{display:flex;justify-content:center;font-size:20px}h1.svelte-t94c2l{font-size:25px;display:flex;justify-content:center}",
  map: null
};
const Relax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counter = 30;
  setInterval(() => counter--, 1e3);
  $$result.css.add(css$1);
  return `<img${add_attribute("src", `${serverUrl}?src=relax.png`, 0)} alt="" class="svelte-t94c2l">
<h3 class="svelte-t94c2l">${escape(counter)}</h3>
<h1 class="svelte-t94c2l">${escape(user && user.language === "Engish" ? "Relax" : "Отдых")}</h1>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-2ve36k{display:flex;flex-direction:column;align-items:center}header.svelte-2ve36k{margin-bottom:15vh}button.svelte-2ve36k{font-size:35px;padding:10px;border-radius:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plan = new Array(), exercises = new Array(), i = 0, isRelax = false;
  const further = () => {
    isRelax = true;
    setTimeout(
      () => {
        isRelax = false;
        i++;
      },
      3e4
    );
  };
  fetch(`${serverUrl}/startTraining?id=${user.programId}`).then((res) => res.json()).then((training) => {
    [plan, exercises] = training;
  });
  $$result.css.add(css);
  return `${isRelax ? `${validate_component(Relax, "Relax").$$render($$result, {}, {}, {})}` : `${exercises.length && plan.length ? `<section class="svelte-2ve36k"><header class="svelte-2ve36k">${validate_component(Header, "Header").$$render($$result, { i, quanity: plan[0].length }, {}, {})}</header>

    <main>${validate_component(Main, "Main").$$render(
    $$result,
    {
      exercise: exercises[plan[0][i].id],
      quanitityOrTime: plan[0][i].quantity,
      quantity: plan[0][i].quantity || plan[0][i].times,
      further
    },
    {},
    {}
  )}</main>

    ${plan[0].length - 1 > i ? `${plan[0][i].quantity ? `<button class="svelte-2ve36k">&gt;&gt; </button>` : ``}` : `<button class="svelte-2ve36k">Завершить</button>`}</section>` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`}`;
});
export {
  Page as default
};
