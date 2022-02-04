require("./bootstrap");

// Import modules...
import { createApp, h } from "vue";
import { App as InertiaApp, plugin as InertiaPlugin } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

const el: any = document.getElementById("app");
const appName: string = window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createApp({
  render: () =>
    h(InertiaApp, {
      title: (title: string) => `${title} - ${appName}`,
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: (name) => require(`./Pages/${name}`).default,
    }),
})
  .mixin({ methods: { route } })
  .use(InertiaPlugin)
  .mount(el);

InertiaProgress.init({ color: "#4B5563" });
