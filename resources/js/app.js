import "./bootstrap";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import mitt from "mitt";

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => await import(`./Pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    const vue_app = createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route } });
    vue_app.config.globalProperties.$eventbus = mitt();
    vue_app.mount(el);
    return vue_app;
  },
});

InertiaProgress.init({ color: "#4B5563" });
