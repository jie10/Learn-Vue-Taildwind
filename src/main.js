import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import TailContainer from "./components/layout/TailContainer.vue";
import TailBtn from "./components/ui/TailBtn.vue";
import TailCard from "./components/ui/TailCard.vue";
import TailNav from "./components/ui/TailNav.vue";
import TailDialog from "./components/ui/TailDialog.vue";

const app = createApp(App);
app.component("tail-dialog", TailDialog);
app.component("tail-nav", TailNav);
app.component("tail-card", TailCard);
app.component("tail-btn", TailBtn);
app.component("tail-container", TailContainer);
app.mount("#app");
