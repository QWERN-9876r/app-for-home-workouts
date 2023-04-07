import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/staticData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let news = new Array(), listUpdate;
  return `<div style="padding-bottom: 70px;">${each(news, (news2) => {
    return `<span style="display: none;">${escape(listUpdate = news2.listUpdates)}</span>

    <section><h1>${escape(news2.title)}</h1>
        <div>${escape(news2.text)}</div>
        <br>
        <ol>${each(listUpdate, (listUpdate2) => {
      return `<li>${escape(listUpdate2)}</li>`;
    })}</ol>
        <br>
        <time${add_attribute("datetime", news2.date.replaceAll(".", "_"), 0)}>${escape(news2.date)}</time>
    </section>`;
  })}
</div>`;
});
export {
  Page as default
};
