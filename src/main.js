import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import App from './App.vue'
import GlobalComponents from '@/components'

import '@/styles/variables.scss'

const app = createApp(App)
app
  .use(router)
  .use(GlobalComponents)
  .mount('#app')

export default app
