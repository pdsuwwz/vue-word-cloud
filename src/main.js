import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import App from './App.vue'

import '@/styles/variables.scss'

const app = createApp(App)
app
  .use(router)
  .mount('#app')

export default app
