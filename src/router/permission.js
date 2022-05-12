import router from '@/router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  next()
})

router.afterEach((to) => {
  NProgress.done()
})
