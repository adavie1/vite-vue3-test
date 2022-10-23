import { createApp } from 'vue'
import './style.css'

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table-next';

const app = createApp(App)
app.use(VueGoodTablePlugin)
app.mount('#app')
